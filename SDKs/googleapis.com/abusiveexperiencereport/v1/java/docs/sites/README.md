# sites

### Available Operations

* [abusiveexperiencereportSitesGet](#abusiveexperiencereportsitesget) - Gets a site's Abusive Experience Report summary.

## abusiveexperiencereportSitesGet

Gets a site's Abusive Experience Report summary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AbusiveexperiencereportSitesGetRequest;
import org.openapis.openapi.models.operations.AbusiveexperiencereportSitesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AbusiveexperiencereportSitesGetRequest req = new AbusiveexperiencereportSitesGetRequest("suscipit") {{
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

            AbusiveexperiencereportSitesGetResponse res = sdk.sites.abusiveexperiencereportSitesGet(req);

            if (res.siteSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
