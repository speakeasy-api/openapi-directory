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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accounttaxCustomBatchRequest = new AccounttaxCustomBatchRequest();
    $request->accounttaxCustomBatchRequest->entries = [
        new AccounttaxCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

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
    $request->accessToken = 'maxime';
    $request->accountId = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'laborum';
    $request->key = 'totam';
    $request->merchantId = 'incidunt';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'facilis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'qui';
    $request->key = 'neque';
    $request->maxResults = 144847;
    $request->merchantId = 'magni';
    $request->oauthToken = 'odio';
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'hic';

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
    $request->accountTax->accountId = 'cumque';
    $request->accountTax->kind = 'soluta';
    $request->accountTax->rules = [
        new AccountTaxTaxRule(),
        new AccountTaxTaxRule(),
        new AccountTaxTaxRule(),
    ];
    $request->accessToken = 'et';
    $request->accountId = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'nobis';
    $request->key = 'quos';
    $request->merchantId = 'tempore';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'dolorem';

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
