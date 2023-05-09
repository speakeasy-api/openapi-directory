# isOs

## Overview

ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.

On request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.

To attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.


### Available Operations

* [getIsos](#getisos) - Get all ISOs
* [getIsosId](#getisosid) - Get an ISO

## getIsos

Returns all available ISO objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIsosRequest;
import org.openapis.openapi.models.operations.GetIsosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIsosRequest req = new GetIsosRequest() {{
                architecture = "magnam";
                includeArchitectureWildcard = false;
                name = "Irving Jenkins";
            }};            

            GetIsosResponse res = sdk.isOs.getIsos(req);

            if (res.getIsos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIsosId

Returns a specific ISO object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIsosIdRequest;
import org.openapis.openapi.models.operations.GetIsosIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIsosIdRequest req = new GetIsosIdRequest(881104L);            

            GetIsosIdResponse res = sdk.isOs.getIsosId(req);

            if (res.getIsosId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
