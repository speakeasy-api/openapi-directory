<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsAllOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransportationIncentivesLawsAllRequest();
    $request->apiKey = 'corrupti';
    $request->expired = false;
    $request->incentiveType = 'provident';
    $request->jurisdiction = 'distinctio';
    $request->keyword = 'quibusdam';
    $request->lawType = 'unde';
    $request->limit = 857946;
    $request->local = false;
    $request->outputFormat = TransportationIncentivesLawsAllOutputFormatEnum::XML;
    $request->poc = false;
    $request->recent = false;
    $request->regulationType = 'illum';
    $request->technology = 'vel';
    $request->userType = 'error';

    $response = $sdk->transportationIncentivesLawsAll($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->