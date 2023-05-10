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
use \OpenAPI\OpenAPI\Models\Operations\IdsProjectsLocationsEndpointsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointInput;
use \OpenAPI\OpenAPI\Models\Shared\EndpointSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdsProjectsLocationsEndpointsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdsProjectsLocationsEndpointsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->endpointInput = new EndpointInput();
    $request->endpointInput->description = 'provident';
    $request->endpointInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->endpointInput->network = 'error';
    $request->endpointInput->severity = EndpointSeverityEnum::MEDIUM;
    $request->endpointInput->threatExceptions = [
        'iure',
        'magnam',
    ];
    $request->endpointInput->trafficLogs = false;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->endpointId = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->parent = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->requestId = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new IdsProjectsLocationsEndpointsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->idsProjectsLocationsEndpointsCreate($request, $requestSecurity);

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

* [idsProjectsLocationsEndpointsCreate](docs/projects/README.md#idsprojectslocationsendpointscreate) - Creates a new Endpoint in a given project and location.
* [idsProjectsLocationsEndpointsGetIamPolicy](docs/projects/README.md#idsprojectslocationsendpointsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [idsProjectsLocationsEndpointsList](docs/projects/README.md#idsprojectslocationsendpointslist) - Lists Endpoints in a given project and location.
* [idsProjectsLocationsEndpointsPatch](docs/projects/README.md#idsprojectslocationsendpointspatch) - Updates the parameters of a single Endpoint.
* [idsProjectsLocationsEndpointsSetIamPolicy](docs/projects/README.md#idsprojectslocationsendpointssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [idsProjectsLocationsEndpointsTestIamPermissions](docs/projects/README.md#idsprojectslocationsendpointstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [idsProjectsLocationsList](docs/projects/README.md#idsprojectslocationslist) - Lists information about the supported locations for this service.
* [idsProjectsLocationsOperationsCancel](docs/projects/README.md#idsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [idsProjectsLocationsOperationsDelete](docs/projects/README.md#idsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [idsProjectsLocationsOperationsGet](docs/projects/README.md#idsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [idsProjectsLocationsOperationsList](docs/projects/README.md#idsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
