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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Locations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(ctx, operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        MonitoredResourceContainer: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity{
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


### [Locations](docs/locations/README.md)

* [MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject](docs/locations/README.md#monitoringlocationsglobalmetricsscopeslistmetricsscopesbymonitoredproject) - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
* [MonitoringLocationsGlobalMetricsScopesProjectsCreate](docs/locations/README.md#monitoringlocationsglobalmetricsscopesprojectscreate) - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.

### [Projects](docs/projects/README.md)

* [MonitoringProjectsDashboardsCreate](docs/projects/README.md#monitoringprojectsdashboardscreate) - Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [MonitoringProjectsDashboardsDelete](docs/projects/README.md#monitoringprojectsdashboardsdelete) - Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [MonitoringProjectsDashboardsGet](docs/projects/README.md#monitoringprojectsdashboardsget) - Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [MonitoringProjectsDashboardsList](docs/projects/README.md#monitoringprojectsdashboardslist) - Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [MonitoringProjectsDashboardsPatch](docs/projects/README.md#monitoringprojectsdashboardspatch) - Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [MonitoringProjectsLocationPrometheusAPIV1LabelValues](docs/projects/README.md#monitoringprojectslocationprometheusapiv1labelvalues) - Lists possible values for a given label name.
* [MonitoringProjectsLocationPrometheusAPIV1Labels](docs/projects/README.md#monitoringprojectslocationprometheusapiv1labels) - Lists labels for metrics.
* [MonitoringProjectsLocationPrometheusAPIV1LabelsList](docs/projects/README.md#monitoringprojectslocationprometheusapiv1labelslist) - Lists labels for metrics.
* [MonitoringProjectsLocationPrometheusAPIV1MetadataList](docs/projects/README.md#monitoringprojectslocationprometheusapiv1metadatalist) - Lists metadata for metrics.
* [MonitoringProjectsLocationPrometheusAPIV1Query](docs/projects/README.md#monitoringprojectslocationprometheusapiv1query) - Evaluate a PromQL query at a single point in time.
* [MonitoringProjectsLocationPrometheusAPIV1QueryExemplars](docs/projects/README.md#monitoringprojectslocationprometheusapiv1queryexemplars) - Lists exemplars relevant to a given PromQL query,
* [MonitoringProjectsLocationPrometheusAPIV1QueryRange](docs/projects/README.md#monitoringprojectslocationprometheusapiv1queryrange) - Evaluate a PromQL query with start, end time range.
* [MonitoringProjectsLocationPrometheusAPIV1Series](docs/projects/README.md#monitoringprojectslocationprometheusapiv1series) - Lists metadata for metrics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
