# advertiserInvoices

### Available Operations

* [dfareportingAdvertiserInvoicesList](#dfareportingadvertiserinvoiceslist) - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

## dfareportingAdvertiserInvoicesList

Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserInvoicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertiserInvoicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertiserInvoicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->advertiserId = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'veniam';
    $request->issueMonth = 'nesciunt';
    $request->key = 'expedita';
    $request->maxResults = 432984;
    $request->oauthToken = 'vel';
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->profileId = 'magnam';
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DfareportingAdvertiserInvoicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertiserInvoices->dfareportingAdvertiserInvoicesList($request, $requestSecurity);

    if ($response->advertiserInvoicesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
