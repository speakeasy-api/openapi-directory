# websites

## Overview

Endpoints for managing websites.

### Available Operations

* [getTrackingSnippet](#gettrackingsnippet) - Get snippet for a website

## getTrackingSnippet

Endpoint used to get a snippet for a website.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackingSnippetRequest;
import org.openapis.openapi.models.operations.GetTrackingSnippetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackingSnippetRequest req = new GetTrackingSnippetRequest("modi");            

            GetTrackingSnippetResponse res = sdk.websites.getTrackingSnippet(req);

            if (res.getTrackingSnippet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
