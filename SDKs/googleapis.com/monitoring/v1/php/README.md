# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->monitoredResourceContainer = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity();
    $requestSecurity->option1 = new MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject($request, $requestSecurity);

    if ($response->listMetricsScopesByMonitoredProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
