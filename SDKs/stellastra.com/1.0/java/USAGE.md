<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostPostReviewRequestBody;
import org.openapis.openapi.models.operations.PostPostReviewRatingEnum;
import org.openapis.openapi.models.operations.PostPostReviewRequest;
import org.openapis.openapi.models.operations.PostPostReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPostReviewRequest req = new PostPostReviewRequest() {{
                requestBody = new PostPostReviewRequestBody() {{
                    rating = 5;
                    userEmail = "johnsmith@usercompanyxyz.com";
                    userName = "John";
                }};
                rating = "3";
                userEmail = "provident";
                userName = "Micheal_Sporer";
            }}            

            PostPostReviewResponse res = sdk.postPostReview(req);

            if (res.postPostReview200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->