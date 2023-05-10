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
use \OpenAPI\OpenAPI\Models\Operations\VpcaccessProjectsLocationsConnectorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorInput;
use \OpenAPI\OpenAPI\Models\Shared\Subnet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VpcaccessProjectsLocationsConnectorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VpcaccessProjectsLocationsConnectorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectorInput = new ConnectorInput();
    $request->connectorInput->ipCidrRange = 'provident';
    $request->connectorInput->machineType = 'distinctio';
    $request->connectorInput->maxInstances = 844266;
    $request->connectorInput->maxThroughput = 602763;
    $request->connectorInput->minInstances = 857946;
    $request->connectorInput->minThroughput = 544883;
    $request->connectorInput->name = 'Ben Mueller';
    $request->connectorInput->network = 'iure';
    $request->connectorInput->subnet = new Subnet();
    $request->connectorInput->subnet->name = 'Raquel Bednar';
    $request->connectorInput->subnet->projectId = 'suscipit';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->connectorId = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new VpcaccessProjectsLocationsConnectorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vpcaccessProjectsLocationsConnectorsCreate($request, $requestSecurity);

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

* [vpcaccessProjectsLocationsConnectorsCreate](docs/projects/README.md#vpcaccessprojectslocationsconnectorscreate) - Creates a Serverless VPC Access connector, returns an operation.
* [vpcaccessProjectsLocationsConnectorsDelete](docs/projects/README.md#vpcaccessprojectslocationsconnectorsdelete) - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* [vpcaccessProjectsLocationsConnectorsList](docs/projects/README.md#vpcaccessprojectslocationsconnectorslist) - Lists Serverless VPC Access connectors.
* [vpcaccessProjectsLocationsConnectorsPatch](docs/projects/README.md#vpcaccessprojectslocationsconnectorspatch) - Updates a Serverless VPC Access connector, returns an operation.
* [vpcaccessProjectsLocationsList](docs/projects/README.md#vpcaccessprojectslocationslist) - Lists information about the supported locations for this service.
* [vpcaccessProjectsLocationsOperationsGet](docs/projects/README.md#vpcaccessprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [vpcaccessProjectsLocationsOperationsList](docs/projects/README.md#vpcaccessprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
