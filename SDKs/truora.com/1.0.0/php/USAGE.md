<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInputCountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInputDocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInputReasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportBehaviorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBehaviorInput();
    $request->birthDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-25T05:21:43.948Z');
    $request->country = CreateBehaviorInputCountryEnum::CR;
    $request->documentId = 'quibusdam';
    $request->documentType = CreateBehaviorInputDocumentTypeEnum::NAME;
    $request->email = 'Karley_Stamm@hotmail.com';
    $request->feedbackDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-26T09:37:56.283Z');
    $request->firstName = 'Hunter';
    $request->lastName = 'Gulgowski';
    $request->phoneNumber = 'debitis';
    $request->reason = CreateBehaviorInputReasonEnum::RAPE;

    $requestSecurity = new ReportBehaviorSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->behavior->reportBehavior($request, $requestSecurity);

    if ($response->behaviourOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->