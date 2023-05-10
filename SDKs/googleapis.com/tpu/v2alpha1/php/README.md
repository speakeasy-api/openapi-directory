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
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsAcceleratorTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsAcceleratorTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsAcceleratorTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->orderBy = 'vel';
    $request->pageSize = 623564;
    $request->pageToken = 'deserunt';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new TpuProjectsLocationsAcceleratorTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsAcceleratorTypesList($request, $requestSecurity);

    if ($response->listAcceleratorTypesResponse !== null) {
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

* [tpuProjectsLocationsAcceleratorTypesList](docs/projects/README.md#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsGenerateServiceIdentity](docs/projects/README.md#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [tpuProjectsLocationsList](docs/projects/README.md#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](docs/projects/README.md#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesGetGuestAttributes](docs/projects/README.md#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [tpuProjectsLocationsNodesList](docs/projects/README.md#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesPatch](docs/projects/README.md#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [tpuProjectsLocationsNodesSimulateMaintenanceEvent](docs/projects/README.md#tpuprojectslocationsnodessimulatemaintenanceevent) - Simulates a maintenance event.
* [tpuProjectsLocationsNodesStart](docs/projects/README.md#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](docs/projects/README.md#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](docs/projects/README.md#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsList](docs/projects/README.md#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsQueuedResourcesCreate](docs/projects/README.md#tpuprojectslocationsqueuedresourcescreate) - Creates a QueuedResource TPU instance.
* [tpuProjectsLocationsQueuedResourcesDelete](docs/projects/README.md#tpuprojectslocationsqueuedresourcesdelete) - Deletes a QueuedResource TPU instance.
* [tpuProjectsLocationsQueuedResourcesList](docs/projects/README.md#tpuprojectslocationsqueuedresourceslist) - Lists queued resources.
* [tpuProjectsLocationsRuntimeVersionsGet](docs/projects/README.md#tpuprojectslocationsruntimeversionsget) - Gets a runtime version.
* [tpuProjectsLocationsRuntimeVersionsList](docs/projects/README.md#tpuprojectslocationsruntimeversionslist) - Lists runtime versions supported by this API.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
