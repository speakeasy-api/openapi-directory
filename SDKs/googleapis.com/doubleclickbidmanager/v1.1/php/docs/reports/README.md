# reports

### Available Operations

* [doubleclickbidmanagerReportsListreports](#doubleclickbidmanagerreportslistreports) - Retrieves stored reports.

## doubleclickbidmanagerReportsListreports

Retrieves stored reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerReportsListreportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerReportsListreportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerReportsListreportsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->pageSize = 282807;
    $request->pageToken = 'maiores';
    $request->prettyPrint = false;
    $request->queryId = 'dicta';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DoubleclickbidmanagerReportsListreportsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->doubleclickbidmanagerReportsListreports($request, $requestSecurity);

    if ($response->listReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
