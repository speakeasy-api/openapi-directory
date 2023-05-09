# events

## Overview

Retrieving event information

### Available Operations

* [getEventsId](#geteventsid)

## getEventsId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsIdRequest;
import org.openapis.openapi.models.operations.GetEventsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "labore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetEventsIdRequest req = new GetEventsIdRequest(383462L);            

            GetEventsIdResponse res = sdk.events.getEventsId(req);

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
