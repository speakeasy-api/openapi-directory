# sites

### Available Operations

* [adexperiencereportSitesGet](#adexperiencereportsitesget) - Gets a site's Ad Experience Report summary.

## adexperiencereportSitesGet

Gets a site's Ad Experience Report summary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexperiencereportSitesGetRequest;
import org.openapis.openapi.models.operations.AdexperiencereportSitesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexperiencereportSitesGetRequest req = new AdexperiencereportSitesGetRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            AdexperiencereportSitesGetResponse res = sdk.sites.adexperiencereportSitesGet(req);

            if (res.siteSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
