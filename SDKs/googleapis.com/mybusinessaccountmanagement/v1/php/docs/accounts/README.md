# accounts

### Available Operations

* [mybusinessaccountmanagementAccountsCreate](#mybusinessaccountmanagementaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* [mybusinessaccountmanagementAccountsGet](#mybusinessaccountmanagementaccountsget) - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* [mybusinessaccountmanagementAccountsInvitationsAccept](#mybusinessaccountmanagementaccountsinvitationsaccept) - Accepts the specified invitation.
* [mybusinessaccountmanagementAccountsInvitationsDecline](#mybusinessaccountmanagementaccountsinvitationsdecline) - Declines the specified invitation.
* [mybusinessaccountmanagementAccountsInvitationsList](#mybusinessaccountmanagementaccountsinvitationslist) - Lists pending invitations for the specified account.
* [mybusinessaccountmanagementAccountsList](#mybusinessaccountmanagementaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

## mybusinessaccountmanagementAccountsCreate

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.

### Example Usage

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
    $request->accountInput->accountName = 'dolorum';
    $request->accountInput->name = 'Antoinette Nikolaus';
    $request->accountInput->organizationInfo = new OrganizationInfoInput();
    $request->accountInput->organizationInfo->address = new PostalAddress();
    $request->accountInput->organizationInfo->address->addressLines = [
        'hic',
        'optio',
        'totam',
    ];
    $request->accountInput->organizationInfo->address->administrativeArea = 'beatae';
    $request->accountInput->organizationInfo->address->languageCode = 'commodi';
    $request->accountInput->organizationInfo->address->locality = 'molestiae';
    $request->accountInput->organizationInfo->address->organization = 'modi';
    $request->accountInput->organizationInfo->address->postalCode = '77425';
    $request->accountInput->organizationInfo->address->recipients = [
        'perferendis',
    ];
    $request->accountInput->organizationInfo->address->regionCode = 'ad';
    $request->accountInput->organizationInfo->address->revision = 617636;
    $request->accountInput->organizationInfo->address->sortingCode = 'sed';
    $request->accountInput->organizationInfo->address->sublocality = 'iste';
    $request->accountInput->primaryOwner = 'dolor';
    $request->accountInput->type = AccountTypeEnum::USER_GROUP;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsCreate($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementAccountsGet

Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->name = 'Ernest Ebert';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsGet($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementAccountsInvitationsAccept

Accepts the specified invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsInvitationsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsInvitationsAcceptRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->name = 'Tracy Fritsch';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsInvitationsAccept($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementAccountsInvitationsDecline

Declines the specified invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsInvitationsDeclineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsInvitationsDeclineRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'laborum' => 'animi',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'sequi';
    $request->key = 'tenetur';
    $request->name = 'Mr. Alberta Schuster';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsInvitationsDecline($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementAccountsInvitationsList

Lists pending invitations for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsInvitationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsInvitationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->filter = 'ipsa';
    $request->key = 'omnis';
    $request->oauthToken = 'voluptate';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsInvitationsList($request);

    if ($response->listInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessaccountmanagementAccountsList

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->filter = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->pageSize = 317983;
    $request->pageToken = 'accusamus';
    $request->parentAccount = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsList($request);

    if ($response->listAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
