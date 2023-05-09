# metros

### Available Operations

* [dfareportingMetrosList](#dfareportingmetroslist) - Retrieves a list of metros.

## dfareportingMetrosList

Retrieves a list of metros.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingMetrosListRequest;
import org.openapis.openapi.models.operations.DfareportingMetrosListResponse;
import org.openapis.openapi.models.operations.DfareportingMetrosListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingMetrosListRequest req = new DfareportingMetrosListRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "quo";
                key = "non";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "quis";
                uploadProtocol = "commodi";
            }};            

            DfareportingMetrosListResponse res = sdk.metros.dfareportingMetrosList(req, new DfareportingMetrosListSecurity("itaque", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.metrosListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
