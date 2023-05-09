# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject](docs/locations/README.md#monitoringlocationsglobalmetricsscopeslistmetricsscopesbymonitoredproject) - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
* [monitoringLocationsGlobalMetricsScopesProjectsCreate](docs/locations/README.md#monitoringlocationsglobalmetricsscopesprojectscreate) - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

### [projects](docs/projects/README.md)

* [monitoringProjectsDashboardsCreate](docs/projects/README.md#monitoringprojectsdashboardscreate) - Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsDelete](docs/projects/README.md#monitoringprojectsdashboardsdelete) - Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsGet](docs/projects/README.md#monitoringprojectsdashboardsget) - Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsList](docs/projects/README.md#monitoringprojectsdashboardslist) - Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsPatch](docs/projects/README.md#monitoringprojectsdashboardspatch) - Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsLocationPrometheusApiV1LabelValues](docs/projects/README.md#monitoringprojectslocationprometheusapiv1labelvalues) - Lists possible values for a given label name.
* [monitoringProjectsLocationPrometheusApiV1Labels](docs/projects/README.md#monitoringprojectslocationprometheusapiv1labels) - Lists labels for metrics.
* [monitoringProjectsLocationPrometheusApiV1LabelsList](docs/projects/README.md#monitoringprojectslocationprometheusapiv1labelslist) - Lists labels for metrics.
* [monitoringProjectsLocationPrometheusApiV1MetadataList](docs/projects/README.md#monitoringprojectslocationprometheusapiv1metadatalist) - Lists metadata for metrics.
* [monitoringProjectsLocationPrometheusApiV1Query](docs/projects/README.md#monitoringprojectslocationprometheusapiv1query) - Evaluate a PromQL query at a single point in time.
* [monitoringProjectsLocationPrometheusApiV1QueryExemplars](docs/projects/README.md#monitoringprojectslocationprometheusapiv1queryexemplars) - Lists exemplars relevant to a given PromQL query,
* [monitoringProjectsLocationPrometheusApiV1QueryRange](docs/projects/README.md#monitoringprojectslocationprometheusapiv1queryrange) - Evaluate a PromQL query with start, end time range.
* [monitoringProjectsLocationPrometheusApiV1Series](docs/projects/README.md#monitoringprojectslocationprometheusapiv1series) - Lists metadata for metrics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
