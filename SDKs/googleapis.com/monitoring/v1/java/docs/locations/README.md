# locations

### Available Operations

* [monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject](#monitoringlocationsglobalmetricsscopeslistmetricsscopesbymonitoredproject) - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
* [monitoringLocationsGlobalMetricsScopesProjectsCreate](#monitoringlocationsglobalmetricsscopesprojectscreate) - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

## monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject

Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                monitoredResourceContainer = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse res = sdk.locations.monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req, new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity() {{
                option1 = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1("excepturi", "nisi") {{
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

## monitoringLocationsGlobalMetricsScopesProjectsCreate

Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MonitoredProjectInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest req = new MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                monitoredProjectInput = new MonitoredProjectInput() {{
                    name = "Erica Bogisich III";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse res = sdk.locations.monitoringLocationsGlobalMetricsScopesProjectsCreate(req, new MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity() {{
                option1 = new MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1("quod", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
