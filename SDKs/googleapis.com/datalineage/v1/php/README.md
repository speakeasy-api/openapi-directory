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
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest();
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->links = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->pageSize = 857946;
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->pageToken = 'corrupti';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsBatchSearchLinkProcesses($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse !== null) {
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

* [datalineageProjectsLocationsBatchSearchLinkProcesses](docs/projects/README.md#datalineageprojectslocationsbatchsearchlinkprocesses) - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* [datalineageProjectsLocationsOperationsCancel](docs/projects/README.md#datalineageprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalineageProjectsLocationsOperationsList](docs/projects/README.md#datalineageprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datalineageProjectsLocationsProcessesCreate](docs/projects/README.md#datalineageprojectslocationsprocessescreate) - Creates a new process.
* [datalineageProjectsLocationsProcessesList](docs/projects/README.md#datalineageprojectslocationsprocesseslist) - List processes in the given project and location. List order is descending by insertion time.
* [datalineageProjectsLocationsProcessesRunsCreate](docs/projects/README.md#datalineageprojectslocationsprocessesrunscreate) - Creates a new run.
* [datalineageProjectsLocationsProcessesRunsLineageEventsCreate](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventscreate) - Creates a new lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsDelete](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventsdelete) - Deletes the lineage event with the specified name.
* [datalineageProjectsLocationsProcessesRunsLineageEventsGet](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventsget) - Gets details of a specified lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsList](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventslist) - Lists lineage events in the given project and location. The list order is not defined.
* [datalineageProjectsLocationsProcessesRunsList](docs/projects/README.md#datalineageprojectslocationsprocessesrunslist) - Lists runs in the given project and location. List order is descending by `start_time`.
* [datalineageProjectsLocationsProcessesRunsPatch](docs/projects/README.md#datalineageprojectslocationsprocessesrunspatch) - Updates a run.
* [datalineageProjectsLocationsSearchLinks](docs/projects/README.md#datalineageprojectslocationssearchlinks) - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
