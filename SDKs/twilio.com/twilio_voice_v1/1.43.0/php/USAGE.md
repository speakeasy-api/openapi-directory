<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateByocTrunkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateByocTrunkCreateByocTrunkRequest();
    $request->cnamLookupEnabled = false;
    $request->connectionPolicySid = 'corrupti';
    $request->friendlyName = 'provident';
    $request->fromDomainSid = 'distinctio';
    $request->statusCallbackMethod = CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum::DELETE;
    $request->statusCallbackUrl = 'https://tidy-mascara.org';
    $request->voiceFallbackMethod = CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum::POST;
    $request->voiceFallbackUrl = 'https://present-giggle.info';
    $request->voiceMethod = CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum::GET;
    $request->voiceUrl = 'https://awesome-voter.biz';

    $requestSecurity = new CreateByocTrunkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createByocTrunk($request, $requestSecurity);

    if ($response->voiceV1ByocTrunk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->