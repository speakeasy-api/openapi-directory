# revisions

### Available Operations

* [gamesRevisionsCheck](#gamesrevisionscheck) - Checks whether the games client is out of date.

## gamesRevisionsCheck

Checks whether the games client is out of date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesRevisionsCheckRequest;
import org.openapis.openapi.models.operations.GamesRevisionsCheckResponse;
import org.openapis.openapi.models.operations.GamesRevisionsCheckSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesRevisionsCheckRequest req = new GamesRevisionsCheckRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "saepe";
                key = "eius";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "amet";
                uploadProtocol = "optio";
            }};            

            GamesRevisionsCheckResponse res = sdk.revisions.gamesRevisionsCheck(req, new GamesRevisionsCheckSecurity("accusamus", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.revisionCheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
