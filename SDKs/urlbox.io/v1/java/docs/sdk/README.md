# SDK

## Overview

A plugin that allows the user to capture screenshots of a web page from a URL or HTML using ChatGPT.

### Available Operations

* [renderSync](#rendersync) - Render a URL as an image or video

## renderSync

Render a URL as an image or video

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1FormatEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1WaitUntilEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2FormatEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2WaitUntilEnum;
import org.openapis.openapi.models.operations.RenderSyncResponse;
import org.openapis.openapi.models.operations.RenderSyncSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new RenderSyncRequestBody1("ab") {{
                blockAds = false;
                clickAccept = false;
                delay = "delectus";
                format = RenderSyncRequestBody1FormatEnum.PDF;
                fullPage = false;
                gpu = false;
                height = 383441L;
                hideCookieBanners = false;
                html = "molestiae";
                metadata = false;
                retina = false;
                selector = "minus";
                thumbHeight = 812169L;
                thumbWidth = 528895L;
                url = "iusto";
                waitFor = "excepturi";
                waitToLeave = "nisi";
                waitUntil = RenderSyncRequestBody1WaitUntilEnum.DOMLOADED;
                width = 836079L;
            }}            

            RenderSyncResponse res = sdk.sdk.renderSync(req, new RenderSyncSecurity("quis") {{
                secretKey = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.renderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
