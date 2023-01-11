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

            MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest req = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest() {{
                security = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity() {{
                    option1 = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolor";
                    alt = "json";
                    callback = "quia";
                    fields = "voluptatem";
                    key = "doloremque";
                    monitoredResourceContainer = "culpa";
                    oauthToken = "asperiores";
                    prettyPrint = true;
                    quotaUser = "magni";
                    uploadType = "sunt";
                    uploadProtocol = "dolor";
                }};
            }};

            MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse res = sdk.locations.monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req);

            if (res.listMetricsScopesByMonitoredProjectResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->