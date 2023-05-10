# recommendations

### Available Operations

* [contentRecommendationsGenerate](#contentrecommendationsgenerate) - Generates recommendations for a merchant.
* [contentRecommendationsReportInteraction](#contentrecommendationsreportinteraction) - Reports an interaction on a recommendation for a merchant.

## contentRecommendationsGenerate

Generates recommendations for a merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRecommendationsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRecommendationsGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRecommendationsGenerateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->allowedTag = [
        'ullam',
        'eligendi',
        'placeat',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'unde';
    $request->key = 'illo';
    $request->languageCode = 'nihil';
    $request->merchantId = 'inventore';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new ContentRecommendationsGenerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->recommendations->contentRecommendationsGenerate($request, $requestSecurity);

    if ($response->generateRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRecommendationsReportInteraction

Reports an interaction on a recommendation for a merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRecommendationsReportInteractionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportInteractionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportInteractionRequestInteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRecommendationsReportInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRecommendationsReportInteractionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportInteractionRequest = new ReportInteractionRequest();
    $request->reportInteractionRequest->interactionType = ReportInteractionRequestInteractionTypeEnum::INTERACTION_CLICK;
    $request->reportInteractionRequest->responseToken = 'facere';
    $request->reportInteractionRequest->subtype = 'facilis';
    $request->reportInteractionRequest->type = 'beatae';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'expedita';
    $request->key = 'corrupti';
    $request->merchantId = 'rem';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ContentRecommendationsReportInteractionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->recommendations->contentRecommendationsReportInteraction($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
