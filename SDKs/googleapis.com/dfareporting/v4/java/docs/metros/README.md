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

            DfareportingMetrosListRequest req = new DfareportingMetrosListRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "unde";
                key = "odio";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "architecto";
                uploadProtocol = "iure";
            }};            

            DfareportingMetrosListResponse res = sdk.metros.dfareportingMetrosList(req, new DfareportingMetrosListSecurity("odit", "voluptatem") {{
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
