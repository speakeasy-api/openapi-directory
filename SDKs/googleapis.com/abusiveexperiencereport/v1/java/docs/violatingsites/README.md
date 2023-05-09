# violatingSites

### Available Operations

* [abusiveexperiencereportViolatingSitesList](#abusiveexperiencereportviolatingsiteslist) - Lists sites that are failing in the Abusive Experience Report.

## abusiveexperiencereportViolatingSitesList

Lists sites that are failing in the Abusive Experience Report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AbusiveexperiencereportViolatingSitesListRequest;
import org.openapis.openapi.models.operations.AbusiveexperiencereportViolatingSitesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AbusiveexperiencereportViolatingSitesListRequest req = new AbusiveexperiencereportViolatingSitesListRequest() {{
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

            AbusiveexperiencereportViolatingSitesListResponse res = sdk.violatingSites.abusiveexperiencereportViolatingSitesList(req);

            if (res.violatingSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
