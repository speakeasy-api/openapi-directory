<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPostReviewRatingEnum;
import org.openapis.openapi.models.operations.PostPostReviewRequest;
import org.openapis.openapi.models.operations.PostPostReviewRequestBody;
import org.openapis.openapi.models.operations.PostPostReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPostReviewRequest req = new PostPostReviewRequest(                new PostPostReviewRequestBody(5L, "johnsmith@usercompanyxyz.com") {{
                                userName = "John";
                            }};, PostPostReviewRatingEnum.FOUR, "quibusdam") {{
                userName = "Leda_Stiedemann";
            }};            

            PostPostReviewResponse res = sdk.postPostReview(req);

            if (res.postPostReview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->