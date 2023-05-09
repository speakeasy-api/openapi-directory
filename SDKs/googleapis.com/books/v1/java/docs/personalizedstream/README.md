# personalizedstream

### Available Operations

* [booksPersonalizedstreamGet](#bookspersonalizedstreamget) - Returns a stream of personalized book clusters

## booksPersonalizedstreamGet

Returns a stream of personalized book clusters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum;
import org.openapis.openapi.models.operations.BooksPersonalizedstreamGetRequest;
import org.openapis.openapi.models.operations.BooksPersonalizedstreamGetResponse;
import org.openapis.openapi.models.operations.BooksPersonalizedstreamGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksPersonalizedstreamGetRequest req = new BooksPersonalizedstreamGetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "eum";
                key = "mollitia";
                locale = "ab";
                maxAllowedMaturityRating = BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum.MATURE;
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "voluptatem";
                source = "dolor";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            BooksPersonalizedstreamGetResponse res = sdk.personalizedstream.booksPersonalizedstreamGet(req, new BooksPersonalizedstreamGetSecurity("impedit", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.discoveryclusters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
