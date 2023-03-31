<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DlpInfoTypesListSecurity;
import org.openapis.openapi.models.operations.DlpInfoTypesListQueryParams;
import org.openapis.openapi.models.operations.DlpInfoTypesListRequest;
import org.openapis.openapi.models.operations.DlpInfoTypesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DlpInfoTypesListRequest req = new DlpInfoTypesListRequest() {{
                security = new DlpInfoTypesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DlpInfoTypesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
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
            }};            

            DlpInfoTypesListResponse res = sdk.infoTypes.dlpInfoTypesList(req);

            if (res.googlePrivacyDlpV2ListInfoTypesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->