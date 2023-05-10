<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaIdeaActivity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleSearchIdeahubV1betaIdeaActivity = new GoogleSearchIdeahubV1betaIdeaActivity();
    $request->googleSearchIdeahubV1betaIdeaActivity->ideas = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleSearchIdeahubV1betaIdeaActivity->name = 'Johnnie Stamm';
    $request->googleSearchIdeahubV1betaIdeaActivity->topics = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->googleSearchIdeahubV1betaIdeaActivity->type = GoogleSearchIdeahubV1betaIdeaActivityTypeEnum::POST_UNPUBLISHED;
    $request->googleSearchIdeahubV1betaIdeaActivity->uri = 'http://whirlwind-diver.info';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

    $response = $sdk->platforms->ideahubPlatformsPropertiesIdeaActivitiesCreate($request);

    if ($response->googleSearchIdeahubV1betaIdeaActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->