# tweetReports

### Available Operations

* [getReportsTweetCreate](#getreportstweetcreate) - Used to create tweet reports
* [postReportsTweetCreate](#postreportstweetcreate) - Used to create tweet reports

## getReportsTweetCreate

This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsTweetCreateRequest;
import org.openapis.openapi.models.operations.GetReportsTweetCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportsTweetCreateRequest req = new GetReportsTweetCreateRequest(944669L, "optio", 521848L, "beatae") {{
                filter = "commodi";
            }};            

            GetReportsTweetCreateResponse res = sdk.tweetReports.getReportsTweetCreate(req);

            if (res.createTweet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportsTweetCreate

This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportsTweetCreateRequest;
import org.openapis.openapi.models.operations.PostReportsTweetCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostReportsTweetCreateRequest req = new PostReportsTweetCreateRequest(264555L, "qui", 774234L, "cum") {{
                filter = "esse";
            }};            

            PostReportsTweetCreateResponse res = sdk.tweetReports.postReportsTweetCreate(req);

            if (res.createTweet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
