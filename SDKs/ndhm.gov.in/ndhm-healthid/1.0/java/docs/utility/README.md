# utility

## Overview

Health ID Information APIs

### Available Operations

* [getDistrictsInStateUsingGET](#getdistrictsinstateusingget) - Get a list of districts in a given  State as per LGD.
* [getStatesUsingGET](#getstatesusingget) - Get a list of states as per LGD.

## getDistrictsInStateUsingGET

Get a list of districts in a given  State as per LGD.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDistrictsInStateUsingGETRequest;
import org.openapis.openapi.models.operations.GETDistrictsInStateUsingGETResponse;
import org.openapis.openapi.models.operations.GETDistrictsInStateUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETDistrictsInStateUsingGETRequest req = new GETDistrictsInStateUsingGETRequest("quo") {{
                acceptLanguage = "esse";
            }};            

            GETDistrictsInStateUsingGETResponse res = sdk.utility.getDistrictsInStateUsingGET(req, new GETDistrictsInStateUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatesUsingGET

Get a list of states as per LGD.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStatesUsingGETRequest;
import org.openapis.openapi.models.operations.GETStatesUsingGETResponse;
import org.openapis.openapi.models.operations.GETStatesUsingGETSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETStatesUsingGETRequest req = new GETStatesUsingGETRequest() {{
                acceptLanguage = "recusandae";
            }};            

            GETStatesUsingGETResponse res = sdk.utility.getStatesUsingGET(req, new GETStatesUsingGETSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
