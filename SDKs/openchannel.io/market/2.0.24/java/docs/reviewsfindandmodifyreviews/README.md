# reviewsFindAndModifyReviews

### Available Operations

* [deleteReviewsReviewId](#deletereviewsreviewid) - Remove a review
* [getReviews](#getreviews) - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* [getReviewsReviewId](#getreviewsreviewid) - Find a Review within a particular App and marketplace
* [patchReviewsReviewId](#patchreviewsreviewid) - Update a review fields
* [postReviews](#postreviews) - Post a review from a User and returns the new post
* [postReviewsReviewId](#postreviewsreviewid) - Update a review from a User and returns the new post

## deleteReviewsReviewId

- Only the review author is able to remove their review


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReviewsReviewIdRequest;
import org.openapis.openapi.models.operations.DeleteReviewsReviewIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteReviewsReviewIdRequest req = new DeleteReviewsReviewIdRequest("sed", "saepe") {{
                userAccountId = "pariatur";
            }};            

            DeleteReviewsReviewIdResponse res = sdk.reviewsFindAndModifyReviews.deleteReviewsReviewId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReviews

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReviewsRequest;
import org.openapis.openapi.models.operations.GetReviewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "consequuntur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReviewsRequest req = new GetReviewsRequest() {{
                limit = 508315L;
                pageNumber = 615560L;
                query = "magni";
                sort = "sunt";
            }};            

            GetReviewsResponse res = sdk.reviewsFindAndModifyReviews.getReviews(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReviewsReviewId

Find a Review within a particular App and marketplace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReviewsReviewIdRequest;
import org.openapis.openapi.models.operations.GetReviewsReviewIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReviewsReviewIdRequest req = new GetReviewsReviewIdRequest("pariatur");            

            GetReviewsReviewIdResponse res = sdk.reviewsFindAndModifyReviews.getReviewsReviewId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchReviewsReviewId

- Only the review author is able to update their review
- Returns the newly updated review


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchReviewsReviewIdRequest;
import org.openapis.openapi.models.operations.PatchReviewsReviewIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "ea") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchReviewsReviewIdRequest req = new PatchReviewsReviewIdRequest("excepturi", "odit") {{
                customData = "ea";
                description = "accusantium";
                headline = "ab";
                rating = 982575L;
                userAccountId = "quidem";
            }};            

            PatchReviewsReviewIdResponse res = sdk.reviewsFindAndModifyReviews.patchReviewsReviewId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReviews

- Only authenticated users are able to post reviews
- Returns the newly created review


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReviewsRequest;
import org.openapis.openapi.models.operations.PostReviewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "voluptate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostReviewsRequest req = new PostReviewsRequest("autem", "nam", "eaque", 866383L, "nemo") {{
                autoApprove = false;
                customData = "voluptatibus";
                mustOwnApp = false;
                type = "perferendis";
                userAccountId = "fugiat";
            }};            

            PostReviewsResponse res = sdk.reviewsFindAndModifyReviews.postReviews(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReviewsReviewId

- Only the review author is able to update their review
- Returns the newly updated review


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReviewsReviewIdRequest;
import org.openapis.openapi.models.operations.PostReviewsReviewIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostReviewsReviewIdRequest req = new PostReviewsReviewIdRequest("cumque", "corporis", 944124L, "libero", "nobis", "dolores") {{
                customData = "quis";
            }};            

            PostReviewsReviewIdResponse res = sdk.reviewsFindAndModifyReviews.postReviewsReviewId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
