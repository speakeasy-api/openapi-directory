# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createWebChannel](#createwebchannel)

## createWebChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebChannelCreateWebChannelRequest;
import org.openapis.openapi.models.operations.CreateWebChannelResponse;
import org.openapis.openapi.models.operations.CreateWebChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebChannelCreateWebChannelRequest req = new CreateWebChannelCreateWebChannelRequest("corrupti") {{
                chatFriendlyName = "illum";
                customerFriendlyName = "vel";
                preEngagementData = "error";
            }};            

            CreateWebChannelResponse res = sdk.sdk.createWebChannel(req, new CreateWebChannelSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV2WebChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
