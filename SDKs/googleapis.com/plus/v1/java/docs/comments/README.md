# comments

### Available Operations

* [plusCommentsGet](#pluscommentsget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusCommentsList](#pluscommentslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## plusCommentsGet

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusCommentsGetRequest;
import org.openapis.openapi.models.operations.PlusCommentsGetResponse;
import org.openapis.openapi.models.operations.PlusCommentsGetSecurity;
import org.openapis.openapi.models.operations.PlusCommentsGetSecurityOption1;
import org.openapis.openapi.models.operations.PlusCommentsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusCommentsGetRequest req = new PlusCommentsGetRequest("at") {{
                alt = AltEnum.JSON;
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                userIp = "quod";
            }};            

            PlusCommentsGetResponse res = sdk.comments.plusCommentsGet(req, new PlusCommentsGetSecurity() {{
                option1 = new PlusCommentsGetSecurityOption1("esse", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## plusCommentsList

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusCommentsListRequest;
import org.openapis.openapi.models.operations.PlusCommentsListResponse;
import org.openapis.openapi.models.operations.PlusCommentsListSecurity;
import org.openapis.openapi.models.operations.PlusCommentsListSecurityOption1;
import org.openapis.openapi.models.operations.PlusCommentsListSecurityOption2;
import org.openapis.openapi.models.operations.PlusCommentsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusCommentsListRequest req = new PlusCommentsListRequest("porro") {{
                alt = AltEnum.JSON;
                fields = "dolorum";
                key = "dicta";
                maxResults = 720633L;
                oauthToken = "officia";
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                sortOrder = PlusCommentsListSortOrderEnum.DESCENDING;
                userIp = "hic";
            }};            

            PlusCommentsListResponse res = sdk.comments.plusCommentsList(req, new PlusCommentsListSecurity() {{
                option1 = new PlusCommentsListSecurityOption1("optio", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentFeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
