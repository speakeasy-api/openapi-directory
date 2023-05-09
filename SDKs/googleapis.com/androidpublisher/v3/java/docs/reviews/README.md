# reviews

### Available Operations

* [androidpublisherReviewsGet](#androidpublisherreviewsget) - Gets a single review.
* [androidpublisherReviewsList](#androidpublisherreviewslist) - Lists all reviews.
* [androidpublisherReviewsReply](#androidpublisherreviewsreply) - Replies to a single review, or updates an existing reply.

## androidpublisherReviewsGet

Gets a single review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherReviewsGetRequest req = new AndroidpublisherReviewsGetRequest("dicta", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "delectus";
                key = "labore";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "corrupti";
                translationLanguage = "rem";
                uploadType = "atque";
                uploadProtocol = "officiis";
            }};            

            AndroidpublisherReviewsGetResponse res = sdk.reviews.androidpublisherReviewsGet(req, new AndroidpublisherReviewsGetSecurity("cum", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.review != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherReviewsList

Lists all reviews.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherReviewsListRequest req = new AndroidpublisherReviewsListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "porro";
                key = "id";
                maxResults = 569706L;
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "libero";
                startIndex = 774880L;
                token = "esse";
                translationLanguage = "hic";
                uploadType = "maxime";
                uploadProtocol = "accusantium";
            }};            

            AndroidpublisherReviewsListResponse res = sdk.reviews.androidpublisherReviewsList(req, new AndroidpublisherReviewsListSecurity("soluta", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reviewsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherReviewsReply

Replies to a single review, or updates an existing reply.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsReplyRequest;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsReplyResponse;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsReplySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReviewsReplyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherReviewsReplyRequest req = new AndroidpublisherReviewsReplyRequest("pariatur", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                reviewsReplyRequest = new ReviewsReplyRequest() {{
                    replyText = "veritatis";
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                fields = "dolor";
                key = "voluptates";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "rerum";
                uploadProtocol = "doloremque";
            }};            

            AndroidpublisherReviewsReplyResponse res = sdk.reviews.androidpublisherReviewsReply(req, new AndroidpublisherReviewsReplySecurity("voluptatem", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reviewsReplyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
