# infoTypes

### Available Operations

* [dlpInfoTypesList](#dlpinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

## dlpInfoTypesList

Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DlpInfoTypesListRequest;
import org.openapis.openapi.models.operations.DlpInfoTypesListResponse;
import org.openapis.openapi.models.operations.DlpInfoTypesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DlpInfoTypesListRequest req = new DlpInfoTypesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                filter = "placeat";
                key = "voluptatum";
                languageCode = "iusto";
                locationId = "excepturi";
                oauthToken = "nisi";
                parent = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            DlpInfoTypesListResponse res = sdk.infoTypes.dlpInfoTypesList(req, new DlpInfoTypesListSecurity("veritatis", "deserunt") {{
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
