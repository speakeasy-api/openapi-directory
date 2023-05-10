# accounttax

### Available Operations

* [contentAccounttaxCustombatch](#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [contentAccounttaxGet](#contentaccounttaxget) - Retrieves the tax settings of the account.
* [contentAccounttaxList](#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [contentAccounttaxUpdate](#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

## contentAccounttaxCustombatch

Retrieves and updates tax settings of multiple accounts in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccounttaxCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccounttaxCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\AccountTax;
use \OpenAPI\OpenAPI\Models\Shared\AccountTaxTaxRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccounttaxCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accounttaxCustomBatchRequest = new AccounttaxCustomBatchRequest();
    $request->accounttaxCustomBatchRequest->entries = [
        new AccounttaxCustomBatchRequestEntry(),
        new AccounttaxCustomBatchRequestEntry(),
        new AccounttaxCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->dryRun = false;
    $request->fields = 'quidem';
    $request->key = 'provident';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ContentAccounttaxCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounttax->contentAccounttaxCustombatch($request, $requestSecurity);

    if ($response->accounttaxCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccounttaxGet

Retrieves the tax settings of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccounttaxGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->accountId = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->merchantId = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new ContentAccounttaxGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounttax->contentAccounttaxGet($request, $requestSecurity);

    if ($response->accountTax !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccounttaxList

Lists the tax settings of the sub-accounts in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccounttaxListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'natus';
    $request->key = 'nobis';
    $request->maxResults = 428769;
    $request->merchantId = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ContentAccounttaxListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounttax->contentAccounttaxList($request, $requestSecurity);

    if ($response->accounttaxListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccounttaxUpdate

Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountTax;
use \OpenAPI\OpenAPI\Models\Shared\AccountTaxTaxRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccounttaxUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccounttaxUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accountTax = new AccountTax();
    $request->accountTax->accountId = 'provident';
    $request->accountTax->kind = 'quos';
    $request->accountTax->rules = [
        new AccountTaxTaxRule(),
        new AccountTaxTaxRule(),
        new AccountTaxTaxRule(),
    ];
    $request->accessToken = 'accusantium';
    $request->accountId = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->dryRun = false;
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->merchantId = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ContentAccounttaxUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounttax->contentAccounttaxUpdate($request, $requestSecurity);

    if ($response->accountTax !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
