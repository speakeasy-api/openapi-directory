# accounts

### Available Operations

* [contentAccountsAuthinfo](#contentaccountsauthinfo) - Returns information about the authenticated user.
* [contentAccountsClaimwebsite](#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account.
* [contentAccountsCustombatch](#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [contentAccountsDelete](#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [contentAccountsGet](#contentaccountsget) - Retrieves a Merchant Center account.
* [contentAccountsInsert](#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [contentAccountsLink](#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [contentAccountsList](#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [contentAccountsUpdate](#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

## contentAccountsAuthinfo

Returns information about the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsAuthinfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsAuthinfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsAuthinfoRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ContentAccountsAuthinfoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsAuthinfo($request, $requestSecurity);

    if ($response->accountsAuthInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsClaimwebsite

Claims the website of a Merchant Center sub-account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsClaimwebsiteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsClaimwebsiteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsClaimwebsiteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->accountId = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->merchantId = 'temporibus';
    $request->oauthToken = 'ab';
    $request->overwrite = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ContentAccountsClaimwebsiteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsClaimwebsite($request, $requestSecurity);

    if ($response->accountsClaimWebsiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsCustombatch

Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountsCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountsCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountAdwordsLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountBusinessInformation;
use \OpenAPI\OpenAPI\Models\Shared\AccountAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountCustomerService;
use \OpenAPI\OpenAPI\Models\Shared\AccountGoogleMyBusinessLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountUser;
use \OpenAPI\OpenAPI\Models\Shared\AccountYouTubeChannelLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountsCustomBatchRequestEntryLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountsCustomBatchRequest = new AccountsCustomBatchRequest();
    $request->accountsCustomBatchRequest->entries = [
        new AccountsCustomBatchRequestEntry(),
        new AccountsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->dryRun = false;
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new ContentAccountsCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsCustombatch($request, $requestSecurity);

    if ($response->accountsCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsDelete

Deletes a Merchant Center sub-account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->accountId = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->dryRun = false;
    $request->fields = 'dicta';
    $request->force = false;
    $request->key = 'nam';
    $request->merchantId = 'officia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ContentAccountsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsGet

Retrieves a Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->accountId = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->merchantId = 'impedit';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ContentAccountsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsGet($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsInsert

Creates a Merchant Center sub-account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountAdwordsLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountBusinessInformation;
use \OpenAPI\OpenAPI\Models\Shared\AccountAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountCustomerService;
use \OpenAPI\OpenAPI\Models\Shared\AccountGoogleMyBusinessLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountUser;
use \OpenAPI\OpenAPI\Models\Shared\AccountYouTubeChannelLink;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->account = new Account();
    $request->account->adultContent = false;
    $request->account->adwordsLinks = [
        new AccountAdwordsLink(),
    ];
    $request->account->businessInformation = new AccountBusinessInformation();
    $request->account->businessInformation->address = new AccountAddress();
    $request->account->businessInformation->address->country = 'Ghana';
    $request->account->businessInformation->address->locality = 'natus';
    $request->account->businessInformation->address->postalCode = '62639';
    $request->account->businessInformation->address->region = 'saepe';
    $request->account->businessInformation->address->streetAddress = 'fuga';
    $request->account->businessInformation->customerService = new AccountCustomerService();
    $request->account->businessInformation->customerService->email = 'Floy_Moore@yahoo.com';
    $request->account->businessInformation->customerService->phoneNumber = 'quidem';
    $request->account->businessInformation->customerService->url = 'architecto';
    $request->account->businessInformation->koreanBusinessRegistrationNumber = 'ipsa';
    $request->account->businessInformation->phoneNumber = 'reiciendis';
    $request->account->googleMyBusinessLink = new AccountGoogleMyBusinessLink();
    $request->account->googleMyBusinessLink->gmbEmail = 'est';
    $request->account->googleMyBusinessLink->status = 'mollitia';
    $request->account->id = 'laborum';
    $request->account->kind = 'dolores';
    $request->account->name = 'Stacy Champlin';
    $request->account->reviewsUrl = 'omnis';
    $request->account->sellerId = 'nemo';
    $request->account->users = [
        new AccountUser(),
        new AccountUser(),
    ];
    $request->account->websiteUrl = 'excepturi';
    $request->account->youtubeChannelLinks = [
        new AccountYouTubeChannelLink(),
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->dryRun = false;
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->merchantId = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new ContentAccountsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsInsert($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsLink

Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountsLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsLinkRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountsLinkRequest = new AccountsLinkRequest();
    $request->accountsLinkRequest->action = 'occaecati';
    $request->accountsLinkRequest->linkType = 'numquam';
    $request->accountsLinkRequest->linkedAccountId = 'commodi';
    $request->accessToken = 'quam';
    $request->accountId = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->merchantId = 'vitae';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new ContentAccountsLinkSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsLink($request, $requestSecurity);

    if ($response->accountsLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsList

Lists the sub-accounts in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->maxResults = 13571;
    $request->merchantId = 'quasi';
    $request->oauthToken = 'error';
    $request->pageToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new ContentAccountsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsList($request, $requestSecurity);

    if ($response->accountsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsUpdate

Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AccountAdwordsLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountBusinessInformation;
use \OpenAPI\OpenAPI\Models\Shared\AccountAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountCustomerService;
use \OpenAPI\OpenAPI\Models\Shared\AccountGoogleMyBusinessLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountUser;
use \OpenAPI\OpenAPI\Models\Shared\AccountYouTubeChannelLink;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->account = new Account();
    $request->account->adultContent = false;
    $request->account->adwordsLinks = [
        new AccountAdwordsLink(),
        new AccountAdwordsLink(),
        new AccountAdwordsLink(),
        new AccountAdwordsLink(),
    ];
    $request->account->businessInformation = new AccountBusinessInformation();
    $request->account->businessInformation->address = new AccountAddress();
    $request->account->businessInformation->address->country = 'Republic of Korea';
    $request->account->businessInformation->address->locality = 'praesentium';
    $request->account->businessInformation->address->postalCode = '06470-0429';
    $request->account->businessInformation->address->region = 'dicta';
    $request->account->businessInformation->address->streetAddress = 'corporis';
    $request->account->businessInformation->customerService = new AccountCustomerService();
    $request->account->businessInformation->customerService->email = 'Jayden.Carter88@gmail.com';
    $request->account->businessInformation->customerService->phoneNumber = 'commodi';
    $request->account->businessInformation->customerService->url = 'repudiandae';
    $request->account->businessInformation->koreanBusinessRegistrationNumber = 'quae';
    $request->account->businessInformation->phoneNumber = 'ipsum';
    $request->account->googleMyBusinessLink = new AccountGoogleMyBusinessLink();
    $request->account->googleMyBusinessLink->gmbEmail = 'quidem';
    $request->account->googleMyBusinessLink->status = 'molestias';
    $request->account->id = 'excepturi';
    $request->account->kind = 'pariatur';
    $request->account->name = 'Irma Ledner DVM';
    $request->account->reviewsUrl = 'sint';
    $request->account->sellerId = 'veritatis';
    $request->account->users = [
        new AccountUser(),
        new AccountUser(),
        new AccountUser(),
        new AccountUser(),
    ];
    $request->account->websiteUrl = 'incidunt';
    $request->account->youtubeChannelLinks = [
        new AccountYouTubeChannelLink(),
        new AccountYouTubeChannelLink(),
    ];
    $request->accessToken = 'consequatur';
    $request->accountId = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->dryRun = false;
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->merchantId = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ContentAccountsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsUpdate($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
