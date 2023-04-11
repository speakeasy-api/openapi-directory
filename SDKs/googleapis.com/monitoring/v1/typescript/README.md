# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/monitoring/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/monitoring/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest,
  MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  monitoredResourceContainer: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.locations.monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req).then((res: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
* `monitoringProjectsLocationPrometheusApiV1QueryExemplars` - Lists exemplars relevant to a given PromQL query,
* `monitoringProjectsLocationPrometheusApiV1QueryRange` - Evaluate a PromQL query with start, end time range.
* `monitoringProjectsLocationPrometheusApiV1Series` - Lists metadata for metrics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

