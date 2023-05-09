# freelistingsprogram

### Available Operations

* [contentFreelistingsprogramGet](#contentfreelistingsprogramget) - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [contentFreelistingsprogramRequestreview](#contentfreelistingsprogramrequestreview) - Requests a review of free listings in a specific region. This method is only available to selected merchants.

## contentFreelistingsprogramGet

Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentFreelistingsprogramGetRequest;
import org.openapis.openapi.models.operations.ContentFreelistingsprogramGetResponse;
import org.openapis.openapi.models.operations.ContentFreelistingsprogramGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentFreelistingsprogramGetRequest req = new ContentFreelistingsprogramGetRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "eos";
                key = "quibusdam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "odit";
                uploadProtocol = "explicabo";
            }};            

            ContentFreelistingsprogramGetResponse res = sdk.freelistingsprogram.contentFreelistingsprogramGet(req, new ContentFreelistingsprogramGetSecurity("corporis", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.freeListingsProgramStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentFreelistingsprogramRequestreview

Requests a review of free listings in a specific region. This method is only available to selected merchants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentFreelistingsprogramRequestreviewRequest;
import org.openapis.openapi.models.operations.ContentFreelistingsprogramRequestreviewResponse;
import org.openapis.openapi.models.operations.ContentFreelistingsprogramRequestreviewSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RequestReviewFreeListingsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentFreelistingsprogramRequestreviewRequest req = new ContentFreelistingsprogramRequestreviewRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestReviewFreeListingsRequest = new RequestReviewFreeListingsRequest() {{
                    regionCode = "recusandae";
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "quis";
                key = "beatae";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "delectus";
                uploadProtocol = "cupiditate";
            }};            

            ContentFreelistingsprogramRequestreviewResponse res = sdk.freelistingsprogram.contentFreelistingsprogramRequestreview(req, new ContentFreelistingsprogramRequestreviewSecurity("fugit", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
