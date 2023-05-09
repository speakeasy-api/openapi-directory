# reviews

### Available Operations

* [androidpublisherReviewsGet](#androidpublisherreviewsget) - Returns a single review.
* [androidpublisherReviewsList](#androidpublisherreviewslist) - Returns a list of reviews. Only reviews from last week will be returned.
* [androidpublisherReviewsReply](#androidpublisherreviewsreply) - Reply to a single review, or update an existing reply.

## androidpublisherReviewsGet

Returns a single review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherReviewsGetRequest req = new AndroidpublisherReviewsGetRequest("asperiores", "facere") {{
                alt = AltEnum.JSON;
                fields = "veritatis";
                key = "consequuntur";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "similique";
                translationLanguage = "culpa";
                userIp = "aliquid";
            }};            

            AndroidpublisherReviewsGetResponse res = sdk.reviews.androidpublisherReviewsGet(req, new AndroidpublisherReviewsGetSecurity("tenetur", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherReviewsList

Returns a list of reviews. Only reviews from last week will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherReviewsListRequest req = new AndroidpublisherReviewsListRequest("earum") {{
                alt = AltEnum.JSON;
                fields = "vel";
                key = "in";
                maxResults = 258684L;
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "illum";
                startIndex = 742238L;
                token = "accusantium";
                translationLanguage = "aliquam";
                userIp = "sapiente";
            }};            

            AndroidpublisherReviewsListResponse res = sdk.reviews.androidpublisherReviewsList(req, new AndroidpublisherReviewsListSecurity("dicta", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherReviewsReply

Reply to a single review, or update an existing reply.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsReplyRequest;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsReplyResponse;
import org.openapis.openapi.models.operations.AndroidpublisherReviewsReplySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReviewsReplyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherReviewsReplyRequest req = new AndroidpublisherReviewsReplyRequest("reprehenderit", "ullam") {{
                reviewsReplyRequest = new ReviewsReplyRequest() {{
                    replyText = "nisi";
                }};;
                alt = AltEnum.JSON;
                fields = "aut";
                key = "voluptatum";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "quibusdam";
                userIp = "ex";
            }};            

            AndroidpublisherReviewsReplyResponse res = sdk.reviews.androidpublisherReviewsReply(req, new AndroidpublisherReviewsReplySecurity("deleniti", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
