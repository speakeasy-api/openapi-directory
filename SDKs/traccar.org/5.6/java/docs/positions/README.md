# positions

## Overview

Retrieving raw location information

### Available Operations

* [getPositions](#getpositions) - Fetches a list of Positions

## getPositions

We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPositionsRequest;
import org.openapis.openapi.models.operations.GetPositionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "a") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPositionsRequest req = new GetPositionsRequest() {{
                deviceId = 456130L;
                from = OffsetDateTime.parse("2022-01-13T02:40:51.157Z");
                id = 215507L;
                to = OffsetDateTime.parse("2020-02-28T15:06:02.733Z");
            }};            

            GetPositionsResponse res = sdk.positions.getPositions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
