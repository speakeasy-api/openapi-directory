<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest req = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                monitoredResourceContainer = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse res = sdk.locations.monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req, new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity() {{
                option1 = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1("suscipit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listMetricsScopesByMonitoredProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->