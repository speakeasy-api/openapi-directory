# notification

### Available Operations

* [booksNotificationGet](#booksnotificationget) - Returns notification details for a given notification id.

## booksNotificationGet

Returns notification details for a given notification id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksNotificationGetRequest;
import org.openapis.openapi.models.operations.BooksNotificationGetResponse;
import org.openapis.openapi.models.operations.BooksNotificationGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksNotificationGetRequest req = new BooksNotificationGetRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "culpa";
                key = "aliquid";
                locale = "tenetur";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "earum";
                source = "vel";
                uploadType = "in";
                uploadProtocol = "eius";
            }};            

            BooksNotificationGetResponse res = sdk.notification.booksNotificationGet(req, new BooksNotificationGetSecurity("libero", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
