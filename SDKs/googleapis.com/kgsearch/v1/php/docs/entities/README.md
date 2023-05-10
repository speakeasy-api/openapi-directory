# entities

### Available Operations

* [kgsearchEntitiesSearch](#kgsearchentitiessearch) - Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

## kgsearchEntitiesSearch

Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->ids = [
        'quis',
    ];
    $request->indent = false;
    $request->key = 'veritatis';
    $request->languages = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->limit = 957156;
    $request->oauthToken = 'quo';
    $request->prefix = false;
    $request->prettyPrint = false;
    $request->query = 'odit';
    $request->quotaUser = 'at';
    $request->types = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $response = $sdk->entities->kgsearchEntitiesSearch($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
