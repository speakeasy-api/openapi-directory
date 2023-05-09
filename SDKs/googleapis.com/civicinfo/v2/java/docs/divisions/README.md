# divisions

### Available Operations

* [civicinfoDivisionsSearch](#civicinfodivisionssearch) - Searches for political divisions by their natural name or OCD ID.

## civicinfoDivisionsSearch

Searches for political divisions by their natural name or OCD ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CivicinfoDivisionsSearchRequest;
import org.openapis.openapi.models.operations.CivicinfoDivisionsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CivicinfoDivisionsSearchRequest req = new CivicinfoDivisionsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                query = "suscipit";
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            CivicinfoDivisionsSearchResponse res = sdk.divisions.civicinfoDivisionsSearch(req);

            if (res.divisionSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
