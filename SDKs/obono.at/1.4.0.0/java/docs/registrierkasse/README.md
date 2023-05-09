# registrierkasse

## Overview

resources concerning a "Registrierkasse"

### Available Operations

* [getDEP](#getdep) - Generates a DEP file.
* [getRegistrierkasse](#getregistrierkasse) - Returns information about a particular `Registrierkasse`.

## getDEP

Generates a DEP file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDEPRequest;
import org.openapis.openapi.models.operations.GetDEPResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDEPRequest req = new GetDEPRequest("voluptates");            

            GetDEPResponse res = sdk.registrierkasse.getDEP(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegistrierkasse

Returns information about a particular `Registrierkasse`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegistrierkasseRequest;
import org.openapis.openapi.models.operations.GetRegistrierkasseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegistrierkasseRequest req = new GetRegistrierkasseRequest("repudiandae");            

            GetRegistrierkasseResponse res = sdk.registrierkasse.getRegistrierkasse(req);

            if (res.registrierkasse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
