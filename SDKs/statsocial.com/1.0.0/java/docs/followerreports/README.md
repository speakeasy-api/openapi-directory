# followerReports

### Available Operations

* [getReportsTwitterCreate](#getreportstwittercreate) - Used to create twitter follower report
* [postReportsTwitterCreate](#postreportstwittercreate) - Used to create twitter follower report

## getReportsTwitterCreate

This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsTwitterCreateRequest;
import org.openapis.openapi.models.operations.GetReportsTwitterCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportsTwitterCreateRequest req = new GetReportsTwitterCreateRequest() {{
                filter = "ab";
                twitterHandle = "quis";
                twitterId = 87129L;
            }};            

            GetReportsTwitterCreateResponse res = sdk.followerReports.getReportsTwitterCreate(req);

            if (res.createTwitter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportsTwitterCreate

This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportsTwitterCreateRequest;
import org.openapis.openapi.models.operations.PostReportsTwitterCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostReportsTwitterCreateRequest req = new PostReportsTwitterCreateRequest() {{
                filter = "perferendis";
                twitterHandle = "ipsam";
                twitterId = 832620L;
            }};            

            PostReportsTwitterCreateResponse res = sdk.followerReports.postReportsTwitterCreate(req);

            if (res.createTwitter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
