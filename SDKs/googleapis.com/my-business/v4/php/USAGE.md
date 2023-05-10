<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInfo;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountPermissionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountState;
use \OpenAPI\OpenAPI\Models\Shared\AccountStateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->account = new Account();
    $request->account->accountName = 'provident';
    $request->account->accountNumber = 'distinctio';
    $request->account->name = 'Stuart Stiedemann';
    $request->account->organizationInfo = new OrganizationInfo();
    $request->account->organizationInfo->phoneNumber = 'vel';
    $request->account->organizationInfo->postalAddress = new PostalAddress();
    $request->account->organizationInfo->postalAddress->addressLines = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->account->organizationInfo->postalAddress->administrativeArea = 'magnam';
    $request->account->organizationInfo->postalAddress->languageCode = 'debitis';
    $request->account->organizationInfo->postalAddress->locality = 'ipsa';
    $request->account->organizationInfo->postalAddress->organization = 'delectus';
    $request->account->organizationInfo->postalAddress->postalCode = '34785';
    $request->account->organizationInfo->postalAddress->recipients = [
        'excepturi',
        'nisi',
    ];
    $request->account->organizationInfo->postalAddress->regionCode = 'recusandae';
    $request->account->organizationInfo->postalAddress->revision = 836079;
    $request->account->organizationInfo->postalAddress->sortingCode = 'ab';
    $request->account->organizationInfo->postalAddress->sublocality = 'quis';
    $request->account->organizationInfo->registeredDomain = 'veritatis';
    $request->account->permissionLevel = AccountPermissionLevelEnum::OWNER_LEVEL;
    $request->account->role = AccountRoleEnum::ACCOUNT_ROLE_UNSPECIFIED;
    $request->account->state = new AccountState();
    $request->account->state->status = AccountStateStatusEnum::VERIFIED;
    $request->account->type = AccountTypeEnum::ORGANIZATION;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->primaryOwner = 'molestiae';
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $response = $sdk->accounts->mybusinessAccountsCreate($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->