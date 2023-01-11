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

            OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest req = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest() {{
                security = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams() {{
                    parent = "possimus";
                }};
                queryParams = new OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dignissimos";
                    alt = "media";
                    callback = "placeat";
                    fields = "illo";
                    filter = "recusandae";
                    key = "dolor";
                    oauthToken = "corrupti";
                    pageSize = 6565798491263222334;
                    pageToken = "asperiores";
                    prettyPrint = true;
                    quotaUser = "quam";
                    uploadType = "omnis";
                    uploadProtocol = "ipsa";
                }};
            }};

            OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse res = sdk.projects.osconfigProjectsLocationsInstanceOsPoliciesCompliancesList(req);

            if (res.listInstanceOSPoliciesCompliancesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->