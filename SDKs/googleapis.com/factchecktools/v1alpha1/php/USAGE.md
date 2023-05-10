<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->languageCode = 'corrupti';
    $request->maxAgeDays = 847252;
    $request->oauthToken = 'vel';
    $request->offset = 623564;
    $request->pageSize = 645894;
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->query = 'iure';
    $request->quotaUser = 'magnam';
    $request->reviewPublisherSiteFilter = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $response = $sdk->claims->factchecktoolsClaimsSearch($request);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->