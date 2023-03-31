<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AnimateImageQueryParams;
import org.openapis.openapi.models.operations.AnimateImageRequest;
import org.openapis.openapi.models.operations.AnimateImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnimateImageRequest req = new AnimateImageRequest() {{
                queryParams = new AnimateImageQueryParams() {{
                    type = "corrupti";
                    url = "provident";
                }};
            }};            

            AnimateImageResponse res = sdk.animateImage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->