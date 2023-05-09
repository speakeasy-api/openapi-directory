# SDK

## Overview

A plugin that allows users to interact with Slack using ChatGPT

### Available Operations

* [aiAlphaSearchMessages](#aialphasearchmessages) - Search for messages matching a query

## aiAlphaSearchMessages

Search for messages matching a query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AiAlphaSearchMessagesResponse;
import org.openapis.openapi.models.shared.SearchRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchRequest req = new SearchRequest("provident");            

            AiAlphaSearchMessagesResponse res = sdk.sdk.aiAlphaSearchMessages(req);

            if (res.aiAlphaSearchMessages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
