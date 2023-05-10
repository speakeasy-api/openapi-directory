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
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->orderBy = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new Area120tablesTablesListSecurity();
    $requestSecurity->option1 = new Area120tablesTablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesList($request, $requestSecurity);

    if ($response->listTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [tables](docs/tables/README.md)

* [area120tablesTablesList](docs/tables/README.md#area120tablestableslist) - Lists tables for the user.
* [area120tablesTablesRowsBatchCreate](docs/tables/README.md#area120tablestablesrowsbatchcreate) - Creates multiple rows.
* [area120tablesTablesRowsBatchDelete](docs/tables/README.md#area120tablestablesrowsbatchdelete) - Deletes multiple rows.
* [area120tablesTablesRowsBatchUpdate](docs/tables/README.md#area120tablestablesrowsbatchupdate) - Updates multiple rows.
* [area120tablesTablesRowsCreate](docs/tables/README.md#area120tablestablesrowscreate) - Creates a row.
* [area120tablesTablesRowsDelete](docs/tables/README.md#area120tablestablesrowsdelete) - Deletes a row.
* [area120tablesTablesRowsList](docs/tables/README.md#area120tablestablesrowslist) - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* [area120tablesTablesRowsPatch](docs/tables/README.md#area120tablestablesrowspatch) - Updates a row.

### [workspaces](docs/workspaces/README.md)

* [area120tablesWorkspacesGet](docs/workspaces/README.md#area120tablesworkspacesget) - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* [area120tablesWorkspacesList](docs/workspaces/README.md#area120tablesworkspaceslist) - Lists workspaces for the user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
