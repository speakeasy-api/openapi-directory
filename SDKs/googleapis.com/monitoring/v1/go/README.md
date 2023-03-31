# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/monitoring/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        MonitoredResourceContainer: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Locations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(ctx, req, operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity{
        Option1: &operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricsScopesByMonitoredProjectResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Locations

* `MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject` - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
* `MonitoringLocationsGlobalMetricsScopesProjectsCreate` - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

### Projects

* `MonitoringProjectsDashboardsCreate` - Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `MonitoringProjectsDashboardsDelete` - Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `MonitoringProjectsDashboardsGet` - Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `MonitoringProjectsDashboardsList` - Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `MonitoringProjectsDashboardsPatch` - Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* `MonitoringProjectsLocationPrometheusAPIV1LabelValues` - Lists possible values for a given label name.
* `MonitoringProjectsLocationPrometheusAPIV1Labels` - Lists labels for metrics.
* `MonitoringProjectsLocationPrometheusAPIV1LabelsList` - Lists labels for metrics.
* `MonitoringProjectsLocationPrometheusAPIV1MetadataList` - Lists metadata for metrics.
* `MonitoringProjectsLocationPrometheusAPIV1Query` - Evaluate a PromQL query at a single point in time.
* `MonitoringProjectsLocationPrometheusAPIV1QueryExemplars` - Lists exemplars relevant to a given PromQL query,
* `MonitoringProjectsLocationPrometheusAPIV1QueryRange` - Evaluate a PromQL query with start, end time range.
* `MonitoringProjectsLocationPrometheusAPIV1Series` - Lists metadata for metrics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
