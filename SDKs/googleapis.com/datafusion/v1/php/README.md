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
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\EventPublishConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->cryptoKeyConfig = new CryptoKeyConfig();
    $request->instanceInput->cryptoKeyConfig->keyReference = 'provident';
    $request->instanceInput->dataprocServiceAccount = 'distinctio';
    $request->instanceInput->description = 'quibusdam';
    $request->instanceInput->displayName = 'unde';
    $request->instanceInput->enableRbac = false;
    $request->instanceInput->enableStackdriverLogging = false;
    $request->instanceInput->enableStackdriverMonitoring = false;
    $request->instanceInput->enableZoneSeparation = false;
    $request->instanceInput->eventPublishConfig = new EventPublishConfig();
    $request->instanceInput->eventPublishConfig->enabled = false;
    $request->instanceInput->eventPublishConfig->topic = 'nulla';
    $request->instanceInput->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->instanceInput->networkConfig = new NetworkConfig();
    $request->instanceInput->networkConfig->ipAllocation = 'magnam';
    $request->instanceInput->networkConfig->network = 'debitis';
    $request->instanceInput->options = [
        'delectus' => 'tempora',
    ];
    $request->instanceInput->privateInstance = false;
    $request->instanceInput->type = InstanceTypeEnum::BASIC;
    $request->instanceInput->version = 'molestiae';
    $request->instanceInput->zone = 'minus';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'excepturi';
    $request->instanceId = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->parent = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DatafusionProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
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

* [datafusionProjectsLocationsInstancesCreate](docs/projects/README.md#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [datafusionProjectsLocationsInstancesDnsPeeringsCreate](docs/projects/README.md#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [datafusionProjectsLocationsInstancesDnsPeeringsList](docs/projects/README.md#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [datafusionProjectsLocationsInstancesGetIamPolicy](docs/projects/README.md#datafusionprojectslocationsinstancesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datafusionProjectsLocationsInstancesList](docs/projects/README.md#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [datafusionProjectsLocationsInstancesPatch](docs/projects/README.md#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [datafusionProjectsLocationsInstancesRestart](docs/projects/README.md#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [datafusionProjectsLocationsInstancesSetIamPolicy](docs/projects/README.md#datafusionprojectslocationsinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datafusionProjectsLocationsInstancesTestIamPermissions](docs/projects/README.md#datafusionprojectslocationsinstancestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datafusionProjectsLocationsList](docs/projects/README.md#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [datafusionProjectsLocationsOperationsCancel](docs/projects/README.md#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datafusionProjectsLocationsOperationsDelete](docs/projects/README.md#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datafusionProjectsLocationsOperationsGet](docs/projects/README.md#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datafusionProjectsLocationsOperationsList](docs/projects/README.md#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datafusionProjectsLocationsVersionsList](docs/projects/README.md#datafusionprojectslocationsversionslist) - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
