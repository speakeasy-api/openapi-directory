# SDK

## Overview

The perfectpdf api does one thing, perfectly: it converts html to pdf. The perfectpdf api uses headless Google Chrome to provide a low cost, high quality, simple to use service.

<https://services.scideas.net/perfectpdf>
### Available Operations

* [postPerfectpdfApi](#postperfectpdfapi) - Returns PDF document.

## postPerfectpdfApi

Returns PDF document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPerfectpdfApiResponse;
import org.openapis.openapi.models.shared.PerfectpdfApiBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PerfectpdfApiBody req = new PerfectpdfApiBody("abc123", "<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>");            

            PostPerfectpdfApiResponse res = sdk.sdk.postPerfectpdfApi(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
