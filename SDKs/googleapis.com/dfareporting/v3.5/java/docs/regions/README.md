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

            DfareportingRegionsListRequest req = new DfareportingRegionsListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                fields = "sunt";
                key = "vel";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "necessitatibus";
            }};            

            DfareportingRegionsListResponse res = sdk.regions.dfareportingRegionsList(req, new DfareportingRegionsListSecurity("harum", "amet") {{
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
