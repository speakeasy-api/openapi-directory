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
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountInput = new AccountInput();
    $request->accountInput->accountName = 'provident';
    $request->accountInput->name = 'Ellis Mitchell';
    $request->accountInput->organizationInfo = new OrganizationInfoInput();
    $request->accountInput->organizationInfo->address = new PostalAddress();
    $request->accountInput->organizationInfo->address->addressLines = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->accountInput->organizationInfo->address->administrativeArea = 'iure';
    $request->accountInput->organizationInfo->address->languageCode = 'magnam';
    $request->accountInput->organizationInfo->address->locality = 'debitis';
    $request->accountInput->organizationInfo->address->organization = 'ipsa';
    $request->accountInput->organizationInfo->address->postalCode = '23478-5453';
    $request->accountInput->organizationInfo->address->recipients = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->accountInput->organizationInfo->address->regionCode = 'deserunt';
    $request->accountInput->organizationInfo->address->revision = 20218;
    $request->accountInput->organizationInfo->address->sortingCode = 'ipsam';
    $request->accountInput->organizationInfo->address->sublocality = 'repellendus';
    $request->accountInput->primaryOwner = 'sapiente';
    $request->accountInput->type = AccountTypeEnum::USER_GROUP;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsCreate($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [mybusinessaccountmanagementAccountsCreate](docs/accounts/README.md#mybusinessaccountmanagementaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* [mybusinessaccountmanagementAccountsGet](docs/accounts/README.md#mybusinessaccountmanagementaccountsget) - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* [mybusinessaccountmanagementAccountsInvitationsAccept](docs/accounts/README.md#mybusinessaccountmanagementaccountsinvitationsaccept) - Accepts the specified invitation.
* [mybusinessaccountmanagementAccountsInvitationsDecline](docs/accounts/README.md#mybusinessaccountmanagementaccountsinvitationsdecline) - Declines the specified invitation.
* [mybusinessaccountmanagementAccountsInvitationsList](docs/accounts/README.md#mybusinessaccountmanagementaccountsinvitationslist) - Lists pending invitations for the specified account.
* [mybusinessaccountmanagementAccountsList](docs/accounts/README.md#mybusinessaccountmanagementaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### [locations](docs/locations/README.md)

* [mybusinessaccountmanagementLocationsAdminsCreate](docs/locations/README.md#mybusinessaccountmanagementlocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [mybusinessaccountmanagementLocationsAdminsDelete](docs/locations/README.md#mybusinessaccountmanagementlocationsadminsdelete) - Removes the specified admin as a manager of the specified location.
* [mybusinessaccountmanagementLocationsAdminsList](docs/locations/README.md#mybusinessaccountmanagementlocationsadminslist) - Lists all of the admins for the specified location.
* [mybusinessaccountmanagementLocationsAdminsPatch](docs/locations/README.md#mybusinessaccountmanagementlocationsadminspatch) - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* [mybusinessaccountmanagementLocationsTransfer](docs/locations/README.md#mybusinessaccountmanagementlocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
