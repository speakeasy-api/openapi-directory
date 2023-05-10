# accounts

### Available Operations

* [contentAccountsAuthinfo](#contentaccountsauthinfo) - Returns information about the authenticated user.
* [contentAccountsClaimwebsite](#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
* [contentAccountsCredentialsCreate](#contentaccountscredentialscreate) - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* [contentAccountsCustombatch](#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [contentAccountsDelete](#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [contentAccountsGet](#contentaccountsget) - Retrieves a Merchant Center account.
* [contentAccountsInsert](#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [contentAccountsLabelsCreate](#contentaccountslabelscreate) - Creates a new label, not assigned to any account.
* [contentAccountsLabelsDelete](#contentaccountslabelsdelete) - Deletes a label and removes it from all accounts to which it was assigned.
* [contentAccountsLabelsList](#contentaccountslabelslist) - Lists the labels assigned to an account.
* [contentAccountsLabelsPatch](#contentaccountslabelspatch) - Updates a label.
* [contentAccountsLink](#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [contentAccountsList](#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [contentAccountsListlinks](#contentaccountslistlinks) - Returns the list of accounts linked to your Merchant Center account.
* [contentAccountsRequestphoneverification](#contentaccountsrequestphoneverification) - Request verification code to start phone verification.
* [contentAccountsReturncarrierCreate](#contentaccountsreturncarriercreate) - Links return carrier to a merchant account.
* [contentAccountsReturncarrierDelete](#contentaccountsreturncarrierdelete) - Delete a return carrier in the merchant account.
* [contentAccountsReturncarrierList](#contentaccountsreturncarrierlist) - Lists available return carriers in the merchant account.
* [contentAccountsReturncarrierPatch](#contentaccountsreturncarrierpatch) - Updates a return carrier in the merchant account.
* [contentAccountsUpdate](#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* [contentAccountsUpdatelabels](#contentaccountsupdatelabels) - Updates labels that are assigned to the Merchant Center account by CSS user.
* [contentAccountsVerifyphonenumber](#contentaccountsverifyphonenumber) - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

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

Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.

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

## contentAccountsCredentialsCreate

Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsCredentialsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountCredentials;
use \OpenAPI\OpenAPI\Models\Shared\AccountCredentialsPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsCredentialsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsCredentialsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountCredentials = new AccountCredentials();
    $request->accountCredentials->accessToken = 'ipsam';
    $request->accountCredentials->expiresIn = 'repellendus';
    $request->accountCredentials->purpose = AccountCredentialsPurposeEnum::SHOPIFY_INTEGRATION;
    $request->accessToken = 'quo';
    $request->accountId = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new ContentAccountsCredentialsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsCredentialsCreate($request, $requestSecurity);

    if ($response->accountCredentials !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\AccountsCustomBatchRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountsCustomBatchRequestEntryInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountAdsLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountAutomaticImprovementsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountShippingImprovements;
use \OpenAPI\OpenAPI\Models\Shared\AccountBusinessInformation;
use \OpenAPI\OpenAPI\Models\Shared\AccountAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountCustomerService;
use \OpenAPI\OpenAPI\Models\Shared\AccountConversionSettings;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountsCustomBatchRequestInput = new AccountsCustomBatchRequestInput();
    $request->accountsCustomBatchRequestInput->entries = [
        new AccountsCustomBatchRequestEntryInput(),
        new AccountsCustomBatchRequestEntryInput(),
        new AccountsCustomBatchRequestEntryInput(),
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->accountId = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->force = false;
    $request->key = 'cum';
    $request->merchantId = 'esse';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

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
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->accountId = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->merchantId = 'hic';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';
    $request->view = ContentAccountsGetViewEnum::CSS;

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
use \OpenAPI\OpenAPI\Models\Shared\AccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountAdsLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountAutomaticImprovementsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountShippingImprovements;
use \OpenAPI\OpenAPI\Models\Shared\AccountBusinessInformation;
use \OpenAPI\OpenAPI\Models\Shared\AccountAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountCustomerService;
use \OpenAPI\OpenAPI\Models\Shared\AccountConversionSettings;
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
    $request->accountInput = new AccountInput();
    $request->accountInput->adsLinks = [
        new AccountAdsLink(),
        new AccountAdsLink(),
        new AccountAdsLink(),
        new AccountAdsLink(),
    ];
    $request->accountInput->adultContent = false;
    $request->accountInput->automaticImprovements = new AccountAutomaticImprovementsInput();
    $request->accountInput->automaticImprovements->imageImprovements = new AccountImageImprovementsInput();
    $request->accountInput->automaticImprovements->imageImprovements->accountImageImprovementsSettings = new AccountImageImprovementsSettings();
    $request->accountInput->automaticImprovements->imageImprovements->accountImageImprovementsSettings->allowAutomaticImageImprovements = false;
    $request->accountInput->automaticImprovements->itemUpdates = new AccountItemUpdatesInput();
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings = new AccountItemUpdatesSettings();
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowAvailabilityUpdates = false;
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowConditionUpdates = false;
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowPriceUpdates = false;
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowStrictAvailabilityUpdates = false;
    $request->accountInput->automaticImprovements->shippingImprovements = new AccountShippingImprovements();
    $request->accountInput->automaticImprovements->shippingImprovements->allowShippingImprovements = false;
    $request->accountInput->automaticLabelIds = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->accountInput->businessInformation = new AccountBusinessInformation();
    $request->accountInput->businessInformation->address = new AccountAddress();
    $request->accountInput->businessInformation->address->country = 'Norway';
    $request->accountInput->businessInformation->address->locality = 'mollitia';
    $request->accountInput->businessInformation->address->postalCode = '12317-3633';
    $request->accountInput->businessInformation->address->region = 'excepturi';
    $request->accountInput->businessInformation->address->streetAddress = 'accusantium';
    $request->accountInput->businessInformation->customerService = new AccountCustomerService();
    $request->accountInput->businessInformation->customerService->email = 'Lorenza.Yundt65@yahoo.com';
    $request->accountInput->businessInformation->customerService->phoneNumber = 'dolorem';
    $request->accountInput->businessInformation->customerService->url = 'culpa';
    $request->accountInput->businessInformation->koreanBusinessRegistrationNumber = 'consequuntur';
    $request->accountInput->businessInformation->phoneNumber = 'repellat';
    $request->accountInput->businessInformation->phoneVerificationStatus = 'mollitia';
    $request->accountInput->conversionSettings = new AccountConversionSettings();
    $request->accountInput->conversionSettings->freeListingsAutoTaggingEnabled = false;
    $request->accountInput->cssId = 'occaecati';
    $request->accountInput->googleMyBusinessLink = new AccountGoogleMyBusinessLink();
    $request->accountInput->googleMyBusinessLink->gmbAccountId = 'numquam';
    $request->accountInput->googleMyBusinessLink->gmbEmail = 'commodi';
    $request->accountInput->googleMyBusinessLink->status = 'quam';
    $request->accountInput->id = 'molestiae';
    $request->accountInput->kind = 'velit';
    $request->accountInput->labelIds = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->accountInput->name = 'Matt Hamill';
    $request->accountInput->sellerId = 'sequi';
    $request->accountInput->users = [
        new AccountUser(),
        new AccountUser(),
        new AccountUser(),
        new AccountUser(),
    ];
    $request->accountInput->websiteUrl = 'ipsam';
    $request->accountInput->youtubeChannelLinks = [
        new AccountYouTubeChannelLink(),
        new AccountYouTubeChannelLink(),
        new AccountYouTubeChannelLink(),
    ];
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->merchantId = 'laborum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

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

## contentAccountsLabelsCreate

Creates a new label, not assigned to any account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountLabelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsLabelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountLabelInput = new AccountLabelInput();
    $request->accountLabelInput->accountId = 'praesentium';
    $request->accountLabelInput->description = 'voluptatibus';
    $request->accountLabelInput->name = 'Geneva Klein Jr.';
    $request->accessToken = 'reprehenderit';
    $request->accountId = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ContentAccountsLabelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsLabelsCreate($request, $requestSecurity);

    if ($response->accountLabel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsLabelsDelete

Deletes a label and removes it from all accounts to which it was assigned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsLabelsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->accountId = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->labelId = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new ContentAccountsLabelsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsLabelsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsLabelsList

Lists the labels assigned to an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsLabelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->accountId = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->pageSize = 9356;
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ContentAccountsLabelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsLabelsList($request, $requestSecurity);

    if ($response->listAccountLabelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsLabelsPatch

Updates a label.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountLabelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLabelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsLabelsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountLabelInput = new AccountLabelInput();
    $request->accountLabelInput->accountId = 'quibusdam';
    $request->accountLabelInput->description = 'labore';
    $request->accountLabelInput->name = 'Tina Jacobi';
    $request->accessToken = 'perferendis';
    $request->accountId = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'alias';
    $request->key = 'fugit';
    $request->labelId = 'dolorum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new ContentAccountsLabelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsLabelsPatch($request, $requestSecurity);

    if ($response->accountLabel !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\ECommercePlatformLinkInfo;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceProviderLinkInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsLinkRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountsLinkRequest = new AccountsLinkRequest();
    $request->accountsLinkRequest->action = 'delectus';
    $request->accountsLinkRequest->eCommercePlatformLinkInfo = new ECommercePlatformLinkInfo();
    $request->accountsLinkRequest->eCommercePlatformLinkInfo->externalAccountId = 'eum';
    $request->accountsLinkRequest->linkType = 'non';
    $request->accountsLinkRequest->linkedAccountId = 'eligendi';
    $request->accountsLinkRequest->paymentServiceProviderLinkInfo = new PaymentServiceProviderLinkInfo();
    $request->accountsLinkRequest->paymentServiceProviderLinkInfo->externalAccountBusinessCountry = 'sint';
    $request->accountsLinkRequest->paymentServiceProviderLinkInfo->externalAccountId = 'aliquid';
    $request->accountsLinkRequest->services = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->accessToken = 'dolor';
    $request->accountId = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->key = 'in';
    $request->merchantId = 'illum';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'magnam';

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
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->label = 'non';
    $request->maxResults = 581273;
    $request->merchantId = 'enim';
    $request->name = 'Toby Pouros';
    $request->oauthToken = 'id';
    $request->pageToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';
    $request->view = ContentAccountsListViewEnum::CSS;

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

## contentAccountsListlinks

Returns the list of accounts linked to your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsListlinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsListlinksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsListlinksRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->accountId = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'perferendis';
    $request->key = 'nihil';
    $request->maxResults = 301575;
    $request->merchantId = 'distinctio';
    $request->oauthToken = 'id';
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new ContentAccountsListlinksSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsListlinks($request, $requestSecurity);

    if ($response->accountsListLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsRequestphoneverification

Request verification code to start phone verification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsRequestphoneverificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestPhoneVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestPhoneVerificationRequestPhoneVerificationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsRequestphoneverificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsRequestphoneverificationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestPhoneVerificationRequest = new RequestPhoneVerificationRequest();
    $request->requestPhoneVerificationRequest->languageCode = 'eum';
    $request->requestPhoneVerificationRequest->phoneNumber = 'vero';
    $request->requestPhoneVerificationRequest->phoneRegionCode = 'aspernatur';
    $request->requestPhoneVerificationRequest->phoneVerificationMethod = RequestPhoneVerificationRequestPhoneVerificationMethodEnum::PHONE_VERIFICATION_METHOD_UNSPECIFIED;
    $request->accessToken = 'magnam';
    $request->accountId = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'provident';
    $request->key = 'quos';
    $request->merchantId = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ContentAccountsRequestphoneverificationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsRequestphoneverification($request, $requestSecurity);

    if ($response->requestPhoneVerificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsReturncarrierCreate

Links return carrier to a merchant account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountReturnCarrierInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountReturnCarrierCarrierCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsReturncarrierCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountReturnCarrierInput = new AccountReturnCarrierInput();
    $request->accountReturnCarrierInput->carrierAccountName = 'eum';
    $request->accountReturnCarrierInput->carrierAccountNumber = 'dolor';
    $request->accountReturnCarrierInput->carrierCode = AccountReturnCarrierCarrierCodeEnum::UPS;
    $request->accessToken = 'odit';
    $request->accountId = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new ContentAccountsReturncarrierCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsReturncarrierCreate($request, $requestSecurity);

    if ($response->accountReturnCarrier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsReturncarrierDelete

Delete a return carrier in the merchant account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsReturncarrierDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->accountId = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->carrierAccountId = 'expedita';
    $request->fields = 'nihil';
    $request->key = 'repellat';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ContentAccountsReturncarrierDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsReturncarrierDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsReturncarrierList

Lists available return carriers in the merchant account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsReturncarrierListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->accountId = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'sunt';
    $request->key = 'quo';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new ContentAccountsReturncarrierListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsReturncarrierList($request, $requestSecurity);

    if ($response->listAccountReturnCarrierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsReturncarrierPatch

Updates a return carrier in the merchant account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountReturnCarrierInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountReturnCarrierCarrierCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsReturncarrierPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsReturncarrierPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountReturnCarrierInput = new AccountReturnCarrierInput();
    $request->accountReturnCarrierInput->carrierAccountName = 'odit';
    $request->accountReturnCarrierInput->carrierAccountNumber = 'ea';
    $request->accountReturnCarrierInput->carrierCode = AccountReturnCarrierCarrierCodeEnum::CARRIER_CODE_UNSPECIFIED;
    $request->accessToken = 'ab';
    $request->accountId = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->carrierAccountId = 'voluptate';
    $request->fields = 'autem';
    $request->key = 'nam';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ContentAccountsReturncarrierPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsReturncarrierPatch($request, $requestSecurity);

    if ($response->accountReturnCarrier !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\AccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountAdsLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountAutomaticImprovementsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountShippingImprovements;
use \OpenAPI\OpenAPI\Models\Shared\AccountBusinessInformation;
use \OpenAPI\OpenAPI\Models\Shared\AccountAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountCustomerService;
use \OpenAPI\OpenAPI\Models\Shared\AccountConversionSettings;
use \OpenAPI\OpenAPI\Models\Shared\AccountGoogleMyBusinessLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountUser;
use \OpenAPI\OpenAPI\Models\Shared\AccountYouTubeChannelLink;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountInput = new AccountInput();
    $request->accountInput->adsLinks = [
        new AccountAdsLink(),
        new AccountAdsLink(),
        new AccountAdsLink(),
        new AccountAdsLink(),
    ];
    $request->accountInput->adultContent = false;
    $request->accountInput->automaticImprovements = new AccountAutomaticImprovementsInput();
    $request->accountInput->automaticImprovements->imageImprovements = new AccountImageImprovementsInput();
    $request->accountInput->automaticImprovements->imageImprovements->accountImageImprovementsSettings = new AccountImageImprovementsSettings();
    $request->accountInput->automaticImprovements->imageImprovements->accountImageImprovementsSettings->allowAutomaticImageImprovements = false;
    $request->accountInput->automaticImprovements->itemUpdates = new AccountItemUpdatesInput();
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings = new AccountItemUpdatesSettings();
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowAvailabilityUpdates = false;
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowConditionUpdates = false;
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowPriceUpdates = false;
    $request->accountInput->automaticImprovements->itemUpdates->accountItemUpdatesSettings->allowStrictAvailabilityUpdates = false;
    $request->accountInput->automaticImprovements->shippingImprovements = new AccountShippingImprovements();
    $request->accountInput->automaticImprovements->shippingImprovements->allowShippingImprovements = false;
    $request->accountInput->automaticLabelIds = [
        'aut',
    ];
    $request->accountInput->businessInformation = new AccountBusinessInformation();
    $request->accountInput->businessInformation->address = new AccountAddress();
    $request->accountInput->businessInformation->address->country = 'Saint Pierre and Miquelon';
    $request->accountInput->businessInformation->address->locality = 'corporis';
    $request->accountInput->businessInformation->address->postalCode = '77135-4031';
    $request->accountInput->businessInformation->address->region = 'eos';
    $request->accountInput->businessInformation->address->streetAddress = 'perferendis';
    $request->accountInput->businessInformation->customerService = new AccountCustomerService();
    $request->accountInput->businessInformation->customerService->email = 'Peggie87@gmail.com';
    $request->accountInput->businessInformation->customerService->phoneNumber = 'nostrum';
    $request->accountInput->businessInformation->customerService->url = 'hic';
    $request->accountInput->businessInformation->koreanBusinessRegistrationNumber = 'recusandae';
    $request->accountInput->businessInformation->phoneNumber = 'omnis';
    $request->accountInput->businessInformation->phoneVerificationStatus = 'facilis';
    $request->accountInput->conversionSettings = new AccountConversionSettings();
    $request->accountInput->conversionSettings->freeListingsAutoTaggingEnabled = false;
    $request->accountInput->cssId = 'perspiciatis';
    $request->accountInput->googleMyBusinessLink = new AccountGoogleMyBusinessLink();
    $request->accountInput->googleMyBusinessLink->gmbAccountId = 'voluptatem';
    $request->accountInput->googleMyBusinessLink->gmbEmail = 'porro';
    $request->accountInput->googleMyBusinessLink->status = 'consequuntur';
    $request->accountInput->id = 'blanditiis';
    $request->accountInput->kind = 'error';
    $request->accountInput->labelIds = [
        'occaecati',
    ];
    $request->accountInput->name = 'Travis Zemlak';
    $request->accountInput->sellerId = 'iste';
    $request->accountInput->users = [
        new AccountUser(),
        new AccountUser(),
        new AccountUser(),
    ];
    $request->accountInput->websiteUrl = 'deleniti';
    $request->accountInput->youtubeChannelLinks = [
        new AccountYouTubeChannelLink(),
        new AccountYouTubeChannelLink(),
        new AccountYouTubeChannelLink(),
        new AccountYouTubeChannelLink(),
    ];
    $request->accessToken = 'provident';
    $request->accountId = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'quaerat';
    $request->key = 'quos';
    $request->merchantId = 'aliquid';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

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

## contentAccountsUpdatelabels

Updates labels that are assigned to the Merchant Center account by CSS user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsUpdatelabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountsUpdateLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsUpdatelabelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsUpdatelabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountsUpdateLabelsRequest = new AccountsUpdateLabelsRequest();
    $request->accountsUpdateLabelsRequest->labelIds = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->accessToken = 'reiciendis';
    $request->accountId = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->merchantId = 'ipsa';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ContentAccountsUpdatelabelsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsUpdatelabels($request, $requestSecurity);

    if ($response->accountsUpdateLabelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountsVerifyphonenumber

Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsVerifyphonenumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerifyPhoneNumberRequestPhoneVerificationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsVerifyphonenumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsVerifyphonenumberRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->verifyPhoneNumberRequest = new VerifyPhoneNumberRequest();
    $request->verifyPhoneNumberRequest->phoneVerificationMethod = VerifyPhoneNumberRequestPhoneVerificationMethodEnum::PHONE_CALL;
    $request->verifyPhoneNumberRequest->verificationCode = 'voluptas';
    $request->verifyPhoneNumberRequest->verificationId = 'natus';
    $request->accessToken = 'eos';
    $request->accountId = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->merchantId = 'dolorum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ContentAccountsVerifyphonenumberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsVerifyphonenumber($request, $requestSecurity);

    if ($response->verifyPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
