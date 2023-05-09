# threatLists

### Available Operations

* [safebrowsingThreatListsList](#safebrowsingthreatlistslist) - Lists the Safe Browsing threat lists available for download.

## safebrowsingThreatListsList

Lists the Safe Browsing threat lists available for download.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SafebrowsingThreatListsListRequest;
import org.openapis.openapi.models.operations.SafebrowsingThreatListsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingThreatListsListRequest req = new SafebrowsingThreatListsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "reprehenderit";
                fields = "ut";
                key = "maiores";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "dolore";
                uploadProtocol = "iusto";
            }};            

            SafebrowsingThreatListsListResponse res = sdk.threatLists.safebrowsingThreatListsList(req);

            if (res.googleSecuritySafebrowsingV4ListThreatListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
