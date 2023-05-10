# accountActiveAdSummaries

### Available Operations

* [dfareportingAccountActiveAdSummariesGet](#dfareportingaccountactiveadsummariesget) - Gets the account's active ad summary by account ID.

## dfareportingAccountActiveAdSummariesGet

Gets the account's active ad summary by account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountActiveAdSummariesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountActiveAdSummariesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountActiveAdSummariesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'minus';
    $request->summaryAccountId = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DfareportingAccountActiveAdSummariesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountActiveAdSummaries->dfareportingAccountActiveAdSummariesGet($request, $requestSecurity);

    if ($response->accountActiveAdSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
