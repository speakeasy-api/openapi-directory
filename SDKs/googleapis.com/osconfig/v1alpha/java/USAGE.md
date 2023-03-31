<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListPathParams;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListQueryParams;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest req = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest() {{
                security = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse res = sdk.projects.osconfigProjectsLocationsInstanceOSPoliciesCompliancesList(req);

            if (res.listInstanceOSPoliciesCompliancesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->