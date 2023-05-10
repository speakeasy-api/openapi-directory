<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromeuxreportRecordsQueryHistoryRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryHistoryRequestFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeuxreportRecordsQueryHistoryRecordRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryHistoryRequest = new QueryHistoryRequest();
    $request->queryHistoryRequest->formFactor = QueryHistoryRequestFormFactorEnum::DESKTOP;
    $request->queryHistoryRequest->metrics = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->queryHistoryRequest->origin = 'corrupti';
    $request->queryHistoryRequest->url = 'illum';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $response = $sdk->records->chromeuxreportRecordsQueryHistoryRecord($request);

    if ($response->queryHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->