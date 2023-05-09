# locations

### Available Operations

* [dlpLocationsInfoTypesList](#dlplocationsinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

## dlpLocationsInfoTypesList

Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DlpLocationsInfoTypesListRequest;
import org.openapis.openapi.models.operations.DlpLocationsInfoTypesListResponse;
import org.openapis.openapi.models.operations.DlpLocationsInfoTypesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DlpLocationsInfoTypesListRequest req = new DlpLocationsInfoTypesListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                filter = "at";
                key = "at";
                languageCode = "maiores";
                locationId = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            DlpLocationsInfoTypesListResponse res = sdk.locations.dlpLocationsInfoTypesList(req, new DlpLocationsInfoTypesListSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googlePrivacyDlpV2ListInfoTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
