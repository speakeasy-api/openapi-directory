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

            LicensingLicenseAssignmentsDeleteRequest req = new LicensingLicenseAssignmentsDeleteRequest() {{
                security = new LicensingLicenseAssignmentsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new LicensingLicenseAssignmentsDeletePathParams() {{
                    productId = "sit";
                    skuId = "voluptas";
                    userId = "culpa";
                }};
                queryParams = new LicensingLicenseAssignmentsDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "consequuntur";
                    alt = "media";
                    callback = "expedita";
                    fields = "voluptas";
                    key = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
            }};

            LicensingLicenseAssignmentsDeleteResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsDelete(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->