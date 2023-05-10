# claims

### Available Operations

* [factchecktoolsClaimsSearch](#factchecktoolsclaimssearch) - Search through fact-checked claims.

## factchecktoolsClaimsSearch

Search through fact-checked claims.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsClaimsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsClaimsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->languageCode = 'iusto';
    $request->maxAgeDays = 568045;
    $request->oauthToken = 'nisi';
    $request->offset = 925597;
    $request->pageSize = 836079;
    $request->pageToken = 'ab';
    $request->prettyPrint = false;
    $request->query = 'quis';
    $request->quotaUser = 'veritatis';
    $request->reviewPublisherSiteFilter = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $response = $sdk->claims->factchecktoolsClaimsSearch($request);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
