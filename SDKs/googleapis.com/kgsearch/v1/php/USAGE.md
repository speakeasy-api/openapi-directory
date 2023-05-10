<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KgsearchEntitiesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KgsearchEntitiesSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->ids = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->indent = false;
    $request->key = 'deserunt';
    $request->languages = [
        'iure',
        'magnam',
    ];
    $request->limit = 891773;
    $request->oauthToken = 'ipsa';
    $request->prefix = false;
    $request->prettyPrint = false;
    $request->query = 'delectus';
    $request->quotaUser = 'tempora';
    $request->types = [
        'molestiae',
        'minus',
    ];
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $response = $sdk->entities->kgsearchEntitiesSearch($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->