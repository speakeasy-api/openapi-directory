# requestTag

## Overview

An example tag

Here's a link
<https://example.com>
### Available Operations

* [getApod](#getapod) - Returns images

## getApod

Returns the picture of the day

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApodRequest;
import org.openapis.openapi.models.operations.GetApodResponse;
import org.openapis.openapi.models.operations.GetApodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApodRequest req = new GetApodRequest() {{
                date = "distinctio";
                hd = false;
            }};            

            GetApodResponse res = sdk.requestTag.getApod(req, new GetApodSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApod200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
