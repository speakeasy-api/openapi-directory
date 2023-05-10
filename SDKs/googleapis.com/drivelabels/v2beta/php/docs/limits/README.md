# limits

### Available Operations

* [drivelabelsLimitsGetLabel](#drivelabelslimitsgetlabel) - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

## drivelabelsLimitsGetLabel

Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsLimitsGetLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsLimitsGetLabelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->name = 'Angie Wisozk';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $response = $sdk->limits->drivelabelsLimitsGetLabel($request);

    if ($response->googleAppsDriveLabelsV2betaLabelLimits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
