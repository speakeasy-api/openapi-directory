<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dollarXgafv = "1";
                    accessToken = "modi";
                    alt = "media";
                    callback = "quis";
                    fields = "vitae";
                    filter = "quasi";
                    key = "dolorum";
                    languageCode = "consectetur";
                    locationId = "quas";
                    oauthToken = "magni";
                    parent = "repellat";
                    prettyPrint = true;
                    quotaUser = "atque";
                    uploadType = "laboriosam";
                    uploadProtocol = "unde";
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