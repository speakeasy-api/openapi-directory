<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest req = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest() {{
                security = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams() {{
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

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse res = sdk.projects.policyanalyzerProjectsLocationsActivityTypesActivitiesQuery(req);

            if (res.googleCloudPolicyanalyzerV1beta1QueryActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->