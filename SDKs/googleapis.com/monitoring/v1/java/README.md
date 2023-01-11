# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    monitoredResourceContainer = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### locations

* `monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject` - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
* `monitoringLocationsGlobalMetricsScopesProjectsCreate` - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

### projects

* `monitoringProjectsDashboardsCreate` - Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `monitoringProjectsDashboardsDelete` - Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `monitoringProjectsDashboardsGet` - Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `monitoringProjectsDashboardsList` - Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `monitoringProjectsDashboardsPatch` - Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `monitoringProjectsLocationPrometheusApiV1LabelValues` - Lists possible values for a given label name.
* `monitoringProjectsLocationPrometheusApiV1Labels` - Lists labels for metrics.
* `monitoringProjectsLocationPrometheusApiV1LabelsList` - Lists labels for metrics.
* `monitoringProjectsLocationPrometheusApiV1MetadataList` - Lists metadata for metrics.
* `monitoringProjectsLocationPrometheusApiV1Query` - Evaluate a PromQL query at a single point in time.
* `monitoringProjectsLocationPrometheusApiV1QueryRange` - Evaluate a PromQL query with start, end time range.
* `monitoringProjectsLocationPrometheusApiV1Series` - Lists metadata for metrics.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
