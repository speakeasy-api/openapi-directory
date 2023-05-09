# SDK

## Overview

Stellastra makes it easy to get reviews for your cybersecurity solution in real-time with its platform-agnostic REST API.

Stellastra is a simple API which allows you to easily generate star ratings and reviews for your cybersecurity solution.
<https://stellastra.com/docs/api>
### Available Operations

* [postPostReview](#postpostreview) - Posts the user's review to Stellastra

## postPostReview

Posts the user's review to Stellastra

<https://stellastra.com/docs/api>

### Example Usage

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
                .setSecurity(new Security("vel", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPostReviewRequest req = new PostPostReviewRequest(                new PostPostReviewRequestBody(5L, "johnsmith@usercompanyxyz.com") {{
                                userName = "John";
                            }};, PostPostReviewRatingEnum.FOUR, "suscipit") {{
                userName = "Hunter.Gulgowski96";
            }};            

            PostPostReviewResponse res = sdk.sdk.postPostReview(req);

            if (res.postPostReview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
