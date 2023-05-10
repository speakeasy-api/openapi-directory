# tests

### Available Operations

* [youtubeTestsInsert](#youtubetestsinsert) - POST method.

## youtubeTestsInsert

POST method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeTestsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeTestsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeTestsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testItem = new TestItem();
    $request->testItem->featuredPart = false;
    $request->testItem->gaia = 'maxime';
    $request->testItem->id = '495cc699-171b-451c-9bdb-1cf4b888ebdf';
    $request->testItem->snippet = [
        'incidunt' => 'quod',
        'minus' => 'porro',
        'id' => 'excepturi',
        'occaecati' => 'libero',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->externalChannelId = 'maxime';
    $request->fields = 'accusantium';
    $request->key = 'soluta';
    $request->oauthToken = 'fugit';
    $request->part = [
        'eligendi',
        'recusandae',
        'veritatis',
        'aut',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new YoutubeTestsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tests->youtubeTestsInsert($request, $requestSecurity);

    if ($response->testItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
