# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `postPostReview` - Posts the user's review to Stellastra
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
