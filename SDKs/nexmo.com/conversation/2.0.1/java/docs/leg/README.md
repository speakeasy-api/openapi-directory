# leg

## Overview

A leg can be a video call, IP call, or PSTN call that users participate in using multiple platforms. With this endpoint you can retrieve the details about all of the legs that took place in your application.

### Available Operations

* [deleteLeg](#deleteleg) - Delete a leg
* [listLegs](#listlegs) - List legs

## deleteLeg

Delete a leg

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLegRequest;
import org.openapis.openapi.models.operations.DeleteLegResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteLegRequest req = new DeleteLegRequest("ipsam");            

            DeleteLegResponse res = sdk.leg.deleteLeg(req);

            if (res.deleteLeg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLegs

List legs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLegsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ListLegsResponse res = sdk.leg.listLegs();

            if (res.listLegs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
