# SDK

## Overview

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

### Available Operations

* [getUsers](#getusers) - List Users

## getUsers

List Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.OrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                cursor = "quibusdam";
                order = OrderEnum.DESC;
                pageSize = 857946L;
            }};            

            GetUsersResponse res = sdk.sdk.getUsers(req);

            if (res.getUsers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
