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
                    parent = "exercitationem";
                }};
                queryParams = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "neque";
                    alt = "json";
                    callback = "vel";
                    fields = "commodi";
                    filter = "ut";
                    key = "esse";
                    oauthToken = "nam";
                    pageSize = 5059922393598089960;
                    pageToken = "et";
                    prettyPrint = false;
                    quotaUser = "velit";
                    uploadType = "quas";
                    uploadProtocol = "nostrum";
                }};
            }};

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse res = sdk.projects.policyanalyzerProjectsLocationsActivityTypesActivitiesQuery(req);

            if (res.googleCloudPolicyanalyzerV1QueryActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->