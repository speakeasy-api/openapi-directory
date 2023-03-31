<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostSuggestRequest;
import org.openapis.openapi.models.operations.PostSuggestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSuggestRequest req = new PostSuggestRequest() {{
                request = "es";
            }};            

            PostSuggestResponse res = sdk.feedback.postSuggest(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->