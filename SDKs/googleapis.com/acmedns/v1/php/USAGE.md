<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AcmednsAcmeChallengeSetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcmednsAcmeChallengeSetsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->rootDomain = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $response = $sdk->acmeChallengeSets->acmednsAcmeChallengeSetsGet($request);

    if ($response->acmeChallengeSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->