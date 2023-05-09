<!-- Start SDK Example Usage -->
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
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                key = "corrupti";
                languageCode = "illum";
                locationId = "vel";
                oauthToken = "error";
                parent = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            DlpInfoTypesListResponse res = sdk.infoTypes.dlpInfoTypesList(req, new DlpInfoTypesListSecurity("debitis", "ipsa") {{
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
<!-- End SDK Example Usage -->