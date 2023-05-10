<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupItemsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->id = 'd8d69a67-4e0f-4467-8c87-96ed151a05df';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->onBehalfOfContentOwner = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new YoutubeAnalyticsGroupItemsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupItems->youtubeAnalyticsGroupItemsDelete($request, $requestSecurity);

    if ($response->emptyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->