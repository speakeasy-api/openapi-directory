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
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint->host = 'provident';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint->port = 715190;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->connectors = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->displayName = 'vel';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway->appGateway = 'error';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway->type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum::GCP_REGIONAL_MIG;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->labels = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->name = 'Ricky Hoppe';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum::TCP_PROXY;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->appConnectionId = 'excepturi';
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->requestId = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectionsCreate($request, $requestSecurity);

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

* [beyondcorpProjectsLocationsAppConnectionsCreate](docs/projects/README.md#beyondcorpprojectslocationsappconnectionscreate) - Creates a new AppConnection in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsList](docs/projects/README.md#beyondcorpprojectslocationsappconnectionslist) - Lists AppConnections in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsResolve](docs/projects/README.md#beyondcorpprojectslocationsappconnectionsresolve) - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* [beyondcorpProjectsLocationsAppConnectorsCreate](docs/projects/README.md#beyondcorpprojectslocationsappconnectorscreate) - Creates a new AppConnector in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsList](docs/projects/README.md#beyondcorpprojectslocationsappconnectorslist) - Lists AppConnectors in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsPatch](docs/projects/README.md#beyondcorpprojectslocationsappconnectorspatch) - Updates the parameters of a single AppConnector.
* [beyondcorpProjectsLocationsAppConnectorsReportStatus](docs/projects/README.md#beyondcorpprojectslocationsappconnectorsreportstatus) - Report status for a given connector.
* [beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig](docs/projects/README.md#beyondcorpprojectslocationsappconnectorsresolveinstanceconfig) - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* [beyondcorpProjectsLocationsAppGatewaysCreate](docs/projects/README.md#beyondcorpprojectslocationsappgatewayscreate) - Creates a new AppGateway in a given project and location.
* [beyondcorpProjectsLocationsAppGatewaysList](docs/projects/README.md#beyondcorpprojectslocationsappgatewayslist) - Lists AppGateways in a given project and location.
* [beyondcorpProjectsLocationsClientGatewaysGetIamPolicy](docs/projects/README.md#beyondcorpprojectslocationsclientgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [beyondcorpProjectsLocationsClientGatewaysSetIamPolicy](docs/projects/README.md#beyondcorpprojectslocationsclientgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [beyondcorpProjectsLocationsClientGatewaysTestIamPermissions](docs/projects/README.md#beyondcorpprojectslocationsclientgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [beyondcorpProjectsLocationsList](docs/projects/README.md#beyondcorpprojectslocationslist) - Lists information about the supported locations for this service.
* [beyondcorpProjectsLocationsOperationsCancel](docs/projects/README.md#beyondcorpprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [beyondcorpProjectsLocationsOperationsDelete](docs/projects/README.md#beyondcorpprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [beyondcorpProjectsLocationsOperationsGet](docs/projects/README.md#beyondcorpprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [beyondcorpProjectsLocationsOperationsList](docs/projects/README.md#beyondcorpprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
