<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsExplainRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1ExplainRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleApiHttpBody;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MlProjectsExplainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MlProjectsExplainRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudMlV1ExplainRequest = new GoogleCloudMlV1ExplainRequest();
    $request->googleCloudMlV1ExplainRequest->httpBody = new GoogleApiHttpBody();
    $request->googleCloudMlV1ExplainRequest->httpBody->contentType = 'provident';
    $request->googleCloudMlV1ExplainRequest->httpBody->data = 'distinctio';
    $request->googleCloudMlV1ExplainRequest->httpBody->extensions = [
        [
            'nulla' => 'corrupti',
            'illum' => 'vel',
            'error' => 'deserunt',
        ],
        [
            'iure' => 'magnam',
            'debitis' => 'ipsa',
        ],
        [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
        [
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->name = 'Cedric Connelly';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new MlProjectsExplainSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->mlProjectsExplain($request, $requestSecurity);

    if ($response->googleApiHttpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->