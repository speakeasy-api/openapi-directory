# violatingSites

### Available Operations

* [adexperiencereportViolatingSitesList](#adexperiencereportviolatingsiteslist) - Lists sites that are failing in the Ad Experience Report on at least one platform.

## adexperiencereportViolatingSitesList

Lists sites that are failing in the Ad Experience Report on at least one platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexperiencereportViolatingSitesListRequest;
import org.openapis.openapi.models.operations.AdexperiencereportViolatingSitesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexperiencereportViolatingSitesListRequest req = new AdexperiencereportViolatingSitesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            AdexperiencereportViolatingSitesListResponse res = sdk.violatingSites.adexperiencereportViolatingSitesList(req);

            if (res.violatingSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
