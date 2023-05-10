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
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersAddPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddMatterPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermission;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersAddPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersAddPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addMatterPermissionsRequest = new AddMatterPermissionsRequest();
    $request->addMatterPermissionsRequest->ccMe = false;
    $request->addMatterPermissionsRequest->matterPermission = new MatterPermission();
    $request->addMatterPermissionsRequest->matterPermission->accountId = 'provident';
    $request->addMatterPermissionsRequest->matterPermission->role = MatterPermissionRoleEnum::OWNER;
    $request->addMatterPermissionsRequest->sendEmails = false;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->matterId = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new VaultMattersAddPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersAddPermissions($request, $requestSecurity);

    if ($response->matterPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [matters](docs/matters/README.md)

* [vaultMattersAddPermissions](docs/matters/README.md#vaultmattersaddpermissions) - Adds an account as a matter collaborator.
* [vaultMattersClose](docs/matters/README.md#vaultmattersclose) - Closes the specified matter. Returns the matter with updated state.
* [vaultMattersCount](docs/matters/README.md#vaultmatterscount) - Counts the accounts processed by the specified query.
* [vaultMattersCreate](docs/matters/README.md#vaultmatterscreate) - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* [vaultMattersDelete](docs/matters/README.md#vaultmattersdelete) - Deletes the specified matter. Returns the matter with updated state.
* [vaultMattersExportsCreate](docs/matters/README.md#vaultmattersexportscreate) - Creates an export.
* [vaultMattersExportsDelete](docs/matters/README.md#vaultmattersexportsdelete) - Deletes an export.
* [vaultMattersExportsGet](docs/matters/README.md#vaultmattersexportsget) - Gets an export.
* [vaultMattersExportsList](docs/matters/README.md#vaultmattersexportslist) - Lists details about the exports in the specified matter.
* [vaultMattersGet](docs/matters/README.md#vaultmattersget) - Gets the specified matter.
* [vaultMattersHoldsAccountsCreate](docs/matters/README.md#vaultmattersholdsaccountscreate) - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* [vaultMattersHoldsAccountsDelete](docs/matters/README.md#vaultmattersholdsaccountsdelete) - Removes an account from a hold.
* [vaultMattersHoldsAccountsList](docs/matters/README.md#vaultmattersholdsaccountslist) - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* [vaultMattersHoldsAddHeldAccounts](docs/matters/README.md#vaultmattersholdsaddheldaccounts) - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* [vaultMattersHoldsCreate](docs/matters/README.md#vaultmattersholdscreate) - Creates a hold in the specified matter.
* [vaultMattersHoldsDelete](docs/matters/README.md#vaultmattersholdsdelete) - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* [vaultMattersHoldsGet](docs/matters/README.md#vaultmattersholdsget) - Gets the specified hold.
* [vaultMattersHoldsList](docs/matters/README.md#vaultmattersholdslist) - Lists the holds in a matter.
* [vaultMattersHoldsRemoveHeldAccounts](docs/matters/README.md#vaultmattersholdsremoveheldaccounts) - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* [vaultMattersHoldsUpdate](docs/matters/README.md#vaultmattersholdsupdate) - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* [vaultMattersList](docs/matters/README.md#vaultmatterslist) - Lists matters the requestor has access to.
* [vaultMattersRemovePermissions](docs/matters/README.md#vaultmattersremovepermissions) - Removes an account as a matter collaborator.
* [vaultMattersReopen](docs/matters/README.md#vaultmattersreopen) - Reopens the specified matter. Returns the matter with updated state.
* [vaultMattersSavedQueriesCreate](docs/matters/README.md#vaultmatterssavedqueriescreate) - Creates a saved query.
* [vaultMattersSavedQueriesDelete](docs/matters/README.md#vaultmatterssavedqueriesdelete) - Deletes the specified saved query.
* [vaultMattersSavedQueriesGet](docs/matters/README.md#vaultmatterssavedqueriesget) - Retrieves the specified saved query.
* [vaultMattersSavedQueriesList](docs/matters/README.md#vaultmatterssavedquerieslist) - Lists the saved queries in a matter.
* [vaultMattersUndelete](docs/matters/README.md#vaultmattersundelete) - Undeletes the specified matter. Returns the matter with updated state.
* [vaultMattersUpdate](docs/matters/README.md#vaultmattersupdate) - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### [operations](docs/operations/README.md)

* [vaultOperationsCancel](docs/operations/README.md#vaultoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [vaultOperationsDelete](docs/operations/README.md#vaultoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [vaultOperationsList](docs/operations/README.md#vaultoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
