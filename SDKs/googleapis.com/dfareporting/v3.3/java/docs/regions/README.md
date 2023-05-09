# regions

### Available Operations

* [dfareportingRegionsList](#dfareportingregionslist) - Retrieves a list of regions.

## dfareportingRegionsList

Retrieves a list of regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRegionsListRequest;
import org.openapis.openapi.models.operations.DfareportingRegionsListResponse;
import org.openapis.openapi.models.operations.DfareportingRegionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRegionsListRequest req = new DfareportingRegionsListRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "vitae";
                key = "tempora";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "consequuntur";
                uploadProtocol = "doloremque";
            }};            

            DfareportingRegionsListResponse res = sdk.regions.dfareportingRegionsList(req, new DfareportingRegionsListSecurity("magni", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.regionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
