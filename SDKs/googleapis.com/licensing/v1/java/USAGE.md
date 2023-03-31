<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteSecurity;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeletePathParams;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteQueryParams;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    productId = "corrupti";
                    skuId = "provident";
                    userId = "distinctio";
                }};
                queryParams = new LicensingLicenseAssignmentsDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "unde";
                    alt = "proto";
                    callback = "corrupti";
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
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