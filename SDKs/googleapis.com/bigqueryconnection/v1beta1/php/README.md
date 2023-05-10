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
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlPropertiesInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlCredential;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlPropertiesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->cloudSql = new CloudSqlPropertiesInput();
    $request->connectionInput->cloudSql->credential = new CloudSqlCredential();
    $request->connectionInput->cloudSql->credential->password = 'provident';
    $request->connectionInput->cloudSql->credential->username = 'Micheal_Sporer';
    $request->connectionInput->cloudSql->database = 'corrupti';
    $request->connectionInput->cloudSql->instanceId = 'illum';
    $request->connectionInput->cloudSql->type = CloudSqlPropertiesTypeEnum::POSTGRES;
    $request->connectionInput->description = 'error';
    $request->connectionInput->friendlyName = 'deserunt';
    $request->connectionInput->name = 'Willie Gulgowski DVM';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->connectionId = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity();
    $requestSecurity->option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryconnectionProjectsLocationsConnectionsCreate($request, $requestSecurity);

    if ($response->connection !== null) {
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

* [bigqueryconnectionProjectsLocationsConnectionsCreate](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionscreate) - Creates a new connection.
* [bigqueryconnectionProjectsLocationsConnectionsDelete](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsdelete) - Deletes connection and associated credential.
* [bigqueryconnectionProjectsLocationsConnectionsGet](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsget) - Returns specified connection.
* [bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryconnectionProjectsLocationsConnectionsList](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionslist) - Returns a list of connections in the given project.
* [bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryconnectionProjectsLocationsConnectionsUpdateCredential](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsupdatecredential) - Sets the credential for the specified connection.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
