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
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeBindingPath;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput();
    $request->googleCloudDataplexV1DataAttributeBindingInput->attributes = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->description = 'nulla';
    $request->googleCloudDataplexV1DataAttributeBindingInput->displayName = 'corrupti';
    $request->googleCloudDataplexV1DataAttributeBindingInput->etag = 'illum';
    $request->googleCloudDataplexV1DataAttributeBindingInput->labels = [
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->paths = [
        new GoogleCloudDataplexV1DataAttributeBindingPath(),
        new GoogleCloudDataplexV1DataAttributeBindingPath(),
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->resource = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->dataAttributeBindingId = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataAttributeBindingsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
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

* [dataplexProjectsLocationsDataAttributeBindingsCreate](docs/projects/README.md#dataplexprojectslocationsdataattributebindingscreate) - Create a DataAttributeBinding resource.
* [dataplexProjectsLocationsDataAttributeBindingsList](docs/projects/README.md#dataplexprojectslocationsdataattributebindingslist) - Lists DataAttributeBinding resources in a project and location.
* [dataplexProjectsLocationsDataScansCreate](docs/projects/README.md#dataplexprojectslocationsdatascanscreate) - Creates a DataScan resource.
* [dataplexProjectsLocationsDataScansList](docs/projects/README.md#dataplexprojectslocationsdatascanslist) - Lists DataScans.
* [dataplexProjectsLocationsDataTaxonomiesAttributesCreate](docs/projects/README.md#dataplexprojectslocationsdatataxonomiesattributescreate) - Create a DataAttribute resource.
* [dataplexProjectsLocationsDataTaxonomiesAttributesList](docs/projects/README.md#dataplexprojectslocationsdatataxonomiesattributeslist) - Lists Data Attribute resources in a DataTaxonomy.
* [dataplexProjectsLocationsDataTaxonomiesCreate](docs/projects/README.md#dataplexprojectslocationsdatataxonomiescreate) - Create a DataTaxonomy resource.
* [dataplexProjectsLocationsDataTaxonomiesList](docs/projects/README.md#dataplexprojectslocationsdatataxonomieslist) - Lists DataTaxonomy resources in a project and location.
* [dataplexProjectsLocationsLakesContentCreate](docs/projects/README.md#dataplexprojectslocationslakescontentcreate) - Create a content.
* [dataplexProjectsLocationsLakesContentList](docs/projects/README.md#dataplexprojectslocationslakescontentlist) - List content.
* [dataplexProjectsLocationsLakesContentitemsCreate](docs/projects/README.md#dataplexprojectslocationslakescontentitemscreate) - Create a content.
* [dataplexProjectsLocationsLakesContentitemsList](docs/projects/README.md#dataplexprojectslocationslakescontentitemslist) - List content.
* [dataplexProjectsLocationsLakesCreate](docs/projects/README.md#dataplexprojectslocationslakescreate) - Creates a lake resource.
* [dataplexProjectsLocationsLakesEnvironmentsCreate](docs/projects/README.md#dataplexprojectslocationslakesenvironmentscreate) - Create an environment resource.
* [dataplexProjectsLocationsLakesEnvironmentsList](docs/projects/README.md#dataplexprojectslocationslakesenvironmentslist) - Lists environments under the given lake.
* [dataplexProjectsLocationsLakesEnvironmentsSessionsList](docs/projects/README.md#dataplexprojectslocationslakesenvironmentssessionslist) - Lists session resources in an environment.
* [dataplexProjectsLocationsLakesList](docs/projects/README.md#dataplexprojectslocationslakeslist) - Lists lake resources in a project and location.
* [dataplexProjectsLocationsLakesTasksCreate](docs/projects/README.md#dataplexprojectslocationslakestaskscreate) - Creates a task resource within a lake.
* [dataplexProjectsLocationsLakesTasksJobsList](docs/projects/README.md#dataplexprojectslocationslakestasksjobslist) - Lists Jobs under the given task.
* [dataplexProjectsLocationsLakesTasksList](docs/projects/README.md#dataplexprojectslocationslakestaskslist) - Lists tasks under the given lake.
* [dataplexProjectsLocationsLakesTasksRun](docs/projects/README.md#dataplexprojectslocationslakestasksrun) - Run an on demand execution of a Task.
* [dataplexProjectsLocationsLakesZonesAssetsActionsList](docs/projects/README.md#dataplexprojectslocationslakeszonesassetsactionslist) - Lists action resources in an asset.
* [dataplexProjectsLocationsLakesZonesAssetsCreate](docs/projects/README.md#dataplexprojectslocationslakeszonesassetscreate) - Creates an asset resource.
* [dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy](docs/projects/README.md#dataplexprojectslocationslakeszonesassetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataplexProjectsLocationsLakesZonesAssetsList](docs/projects/README.md#dataplexprojectslocationslakeszonesassetslist) - Lists asset resources in a zone.
* [dataplexProjectsLocationsLakesZonesAssetsPatch](docs/projects/README.md#dataplexprojectslocationslakeszonesassetspatch) - Updates an asset resource.
* [dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy](docs/projects/README.md#dataplexprojectslocationslakeszonesassetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions](docs/projects/README.md#dataplexprojectslocationslakeszonesassetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataplexProjectsLocationsLakesZonesCreate](docs/projects/README.md#dataplexprojectslocationslakeszonescreate) - Creates a zone resource within a lake.
* [dataplexProjectsLocationsLakesZonesEntitiesCreate](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiescreate) - Create a metadata entity.
* [dataplexProjectsLocationsLakesZonesEntitiesList](docs/projects/README.md#dataplexprojectslocationslakeszonesentitieslist) - List metadata entities in a zone.
* [dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiespartitionscreate) - Create a metadata partition.
* [dataplexProjectsLocationsLakesZonesEntitiesPartitionsList](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiespartitionslist) - List metadata partitions of an entity.
* [dataplexProjectsLocationsLakesZonesEntitiesUpdate](docs/projects/README.md#dataplexprojectslocationslakeszonesentitiesupdate) - Update a metadata entity. Only supports full resource update.
* [dataplexProjectsLocationsLakesZonesList](docs/projects/README.md#dataplexprojectslocationslakeszoneslist) - Lists zone resources in a lake.
* [dataplexProjectsLocationsList](docs/projects/README.md#dataplexprojectslocationslist) - Lists information about the supported locations for this service.
* [dataplexProjectsLocationsOperationsCancel](docs/projects/README.md#dataplexprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [dataplexProjectsLocationsOperationsDelete](docs/projects/README.md#dataplexprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* [dataplexProjectsLocationsOperationsGet](docs/projects/README.md#dataplexprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [dataplexProjectsLocationsOperationsList](docs/projects/README.md#dataplexprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
