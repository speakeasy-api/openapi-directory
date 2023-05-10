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
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregateAssetsValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationHistogram;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->aggregateAssetsValuesRequest = new AggregateAssetsValuesRequest();
    $request->aggregateAssetsValuesRequest->aggregations = [
        new Aggregation(),
        new Aggregation(),
        new Aggregation(),
    ];
    $request->aggregateAssetsValuesRequest->filter = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsAggregateValues($request, $requestSecurity);

    if ($response->aggregateAssetsValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [migrationcenterProjectsLocationsAssetsAggregateValues](docs/projects/README.md#migrationcenterprojectslocationsassetsaggregatevalues) - Aggregates the requested fields based on provided function.
* [migrationcenterProjectsLocationsAssetsBatchDelete](docs/projects/README.md#migrationcenterprojectslocationsassetsbatchdelete) - Deletes list of Assets.
* [migrationcenterProjectsLocationsAssetsBatchUpdate](docs/projects/README.md#migrationcenterprojectslocationsassetsbatchupdate) - Updates the parameters of a list of assets.
* [migrationcenterProjectsLocationsAssetsList](docs/projects/README.md#migrationcenterprojectslocationsassetslist) - Lists all the assets in a given project and location.
* [migrationcenterProjectsLocationsAssetsReportAssetFrames](docs/projects/README.md#migrationcenterprojectslocationsassetsreportassetframes) - Reports a set of frames.
* [migrationcenterProjectsLocationsGroupsAddAssets](docs/projects/README.md#migrationcenterprojectslocationsgroupsaddassets) - Adds assets to a group.
* [migrationcenterProjectsLocationsGroupsCreate](docs/projects/README.md#migrationcenterprojectslocationsgroupscreate) - Creates a new group in a given project and location.
* [migrationcenterProjectsLocationsGroupsList](docs/projects/README.md#migrationcenterprojectslocationsgroupslist) - Lists all groups in a given project and location.
* [migrationcenterProjectsLocationsGroupsRemoveAssets](docs/projects/README.md#migrationcenterprojectslocationsgroupsremoveassets) - Removes assets from a group.
* [migrationcenterProjectsLocationsImportJobsCreate](docs/projects/README.md#migrationcenterprojectslocationsimportjobscreate) - Creates an import job.
* [migrationcenterProjectsLocationsImportJobsImportDataFilesCreate](docs/projects/README.md#migrationcenterprojectslocationsimportjobsimportdatafilescreate) - Creates an import data file.
* [migrationcenterProjectsLocationsImportJobsImportDataFilesList](docs/projects/README.md#migrationcenterprojectslocationsimportjobsimportdatafileslist) - List import data files.
* [migrationcenterProjectsLocationsImportJobsList](docs/projects/README.md#migrationcenterprojectslocationsimportjobslist) - Lists all import jobs.
* [migrationcenterProjectsLocationsImportJobsRun](docs/projects/README.md#migrationcenterprojectslocationsimportjobsrun) - Runs an import job.
* [migrationcenterProjectsLocationsImportJobsValidate](docs/projects/README.md#migrationcenterprojectslocationsimportjobsvalidate) - Validates an import job.
* [migrationcenterProjectsLocationsList](docs/projects/README.md#migrationcenterprojectslocationslist) - Lists information about the supported locations for this service.
* [migrationcenterProjectsLocationsOperationsCancel](docs/projects/README.md#migrationcenterprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [migrationcenterProjectsLocationsOperationsList](docs/projects/README.md#migrationcenterprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [migrationcenterProjectsLocationsPreferenceSetsCreate](docs/projects/README.md#migrationcenterprojectslocationspreferencesetscreate) - Creates a new preference set in a given project and location.
* [migrationcenterProjectsLocationsPreferenceSetsList](docs/projects/README.md#migrationcenterprojectslocationspreferencesetslist) - Lists all the preference sets in a given project and location.
* [migrationcenterProjectsLocationsReportConfigsCreate](docs/projects/README.md#migrationcenterprojectslocationsreportconfigscreate) - Creates a report configuration.
* [migrationcenterProjectsLocationsReportConfigsList](docs/projects/README.md#migrationcenterprojectslocationsreportconfigslist) - Lists ReportConfigs in a given project and location.
* [migrationcenterProjectsLocationsReportConfigsReportsCreate](docs/projects/README.md#migrationcenterprojectslocationsreportconfigsreportscreate) - Creates a report.
* [migrationcenterProjectsLocationsReportConfigsReportsList](docs/projects/README.md#migrationcenterprojectslocationsreportconfigsreportslist) - Lists Reports in a given ReportConfig.
* [migrationcenterProjectsLocationsSourcesCreate](docs/projects/README.md#migrationcenterprojectslocationssourcescreate) - Creates a new source in a given project and location.
* [migrationcenterProjectsLocationsSourcesDelete](docs/projects/README.md#migrationcenterprojectslocationssourcesdelete) - Deletes a source.
* [migrationcenterProjectsLocationsSourcesErrorFramesGet](docs/projects/README.md#migrationcenterprojectslocationssourceserrorframesget) - Gets the details of an error frame.
* [migrationcenterProjectsLocationsSourcesErrorFramesList](docs/projects/README.md#migrationcenterprojectslocationssourceserrorframeslist) - Lists all error frames in a given source and location.
* [migrationcenterProjectsLocationsSourcesList](docs/projects/README.md#migrationcenterprojectslocationssourceslist) - Lists all the sources in a given project and location.
* [migrationcenterProjectsLocationsSourcesPatch](docs/projects/README.md#migrationcenterprojectslocationssourcespatch) - Updates the parameters of a source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
