<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostPerfectpdfApiRequest;
import org.openapis.openapi.models.operations.PostPerfectpdfApiResponse;
import org.openapis.openapi.models.shared.PerfectpdfApiBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPerfectpdfApiRequest req = new PostPerfectpdfApiRequest() {{
                request = new PerfectpdfApiBody() {{
                    apiKey = "abc123";
                    html = "<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>";
                }};
            }};            

            PostPerfectpdfApiResponse res = sdk.postPerfectpdfApi(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->