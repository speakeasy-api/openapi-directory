# serverTypes

## Overview

Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


### Available Operations

* [getServerTypes](#getservertypes) - Get all Server Types
* [getServerTypesId](#getservertypesid) - Get a Server Type

## getServerTypes

Gets all Server type objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServerTypesRequest;
import org.openapis.openapi.models.operations.GetServerTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServerTypesRequest req = new GetServerTypesRequest() {{
                name = "Carl Turner DDS";
            }};            

            GetServerTypesResponse res = sdk.serverTypes.getServerTypes(req);

            if (res.getServerTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServerTypesId

Gets a specific Server type object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServerTypesIdRequest;
import org.openapis.openapi.models.operations.GetServerTypesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServerTypesIdRequest req = new GetServerTypesIdRequest(552193L);            

            GetServerTypesIdResponse res = sdk.serverTypes.getServerTypesId(req);

            if (res.getServerTypesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
