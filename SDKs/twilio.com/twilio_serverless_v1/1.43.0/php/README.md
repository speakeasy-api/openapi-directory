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
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetCreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetRequest();
    $request->requestBody = new CreateAssetCreateAssetRequest();
    $request->requestBody->friendlyName = 'corrupti';
    $request->serviceSid = 'provident';

    $requestSecurity = new CreateAssetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAsset($request, $requestSecurity);

    if ($response->serverlessV1ServiceAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAsset](docs/sdk/README.md#createasset) - Create a new Asset resource.
* [createBuild](docs/sdk/README.md#createbuild) - Create a new Build resource. At least one function version or asset version is required.
* [createDeployment](docs/sdk/README.md#createdeployment) - Create a new Deployment.
* [createEnvironment](docs/sdk/README.md#createenvironment) - Create a new environment.
* [createFunction](docs/sdk/README.md#createfunction) - Create a new Function resource.
* [createService](docs/sdk/README.md#createservice) - Create a new Service resource.
* [createVariable](docs/sdk/README.md#createvariable) - Create a new Variable.
* [deleteAsset](docs/sdk/README.md#deleteasset) - Delete an Asset resource.
* [deleteBuild](docs/sdk/README.md#deletebuild) - Delete a Build resource.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Delete a specific environment.
* [deleteFunction](docs/sdk/README.md#deletefunction) - Delete a Function resource.
* [deleteService](docs/sdk/README.md#deleteservice) - Delete a Service resource.
* [deleteVariable](docs/sdk/README.md#deletevariable) - Delete a specific Variable.
* [fetchAsset](docs/sdk/README.md#fetchasset) - Retrieve a specific Asset resource.
* [fetchAssetVersion](docs/sdk/README.md#fetchassetversion) - Retrieve a specific Asset Version.
* [fetchBuild](docs/sdk/README.md#fetchbuild) - Retrieve a specific Build resource.
* [fetchBuildStatus](docs/sdk/README.md#fetchbuildstatus) - Retrieve a specific Build resource.
* [fetchDeployment](docs/sdk/README.md#fetchdeployment) - Retrieve a specific Deployment.
* [fetchEnvironment](docs/sdk/README.md#fetchenvironment) - Retrieve a specific environment.
* [fetchFunction](docs/sdk/README.md#fetchfunction) - Retrieve a specific Function resource.
* [fetchFunctionVersion](docs/sdk/README.md#fetchfunctionversion) - Retrieve a specific Function Version resource.
* [fetchFunctionVersionContent](docs/sdk/README.md#fetchfunctionversioncontent) - Retrieve a the content of a specific Function Version resource.
* [fetchLog](docs/sdk/README.md#fetchlog) - Retrieve a specific log.
* [fetchService](docs/sdk/README.md#fetchservice) - Retrieve a specific Service resource.
* [fetchVariable](docs/sdk/README.md#fetchvariable) - Retrieve a specific Variable.
* [listAsset](docs/sdk/README.md#listasset) - Retrieve a list of all Assets.
* [listAssetVersion](docs/sdk/README.md#listassetversion) - Retrieve a list of all Asset Versions.
* [listBuild](docs/sdk/README.md#listbuild) - Retrieve a list of all Builds.
* [listDeployment](docs/sdk/README.md#listdeployment) - Retrieve a list of all Deployments.
* [listEnvironment](docs/sdk/README.md#listenvironment) - Retrieve a list of all environments.
* [listFunction](docs/sdk/README.md#listfunction) - Retrieve a list of all Functions.
* [listFunctionVersion](docs/sdk/README.md#listfunctionversion) - Retrieve a list of all Function Version resources.
* [listLog](docs/sdk/README.md#listlog) - Retrieve a list of all logs.
* [listService](docs/sdk/README.md#listservice) - Retrieve a list of all Services.
* [listVariable](docs/sdk/README.md#listvariable) - Retrieve a list of all Variables.
* [updateAsset](docs/sdk/README.md#updateasset) - Update a specific Asset resource.
* [updateFunction](docs/sdk/README.md#updatefunction) - Update a specific Function resource.
* [updateService](docs/sdk/README.md#updateservice) - Update a specific Service resource.
* [updateVariable](docs/sdk/README.md#updatevariable) - Update a specific Variable.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
