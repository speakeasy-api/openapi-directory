# urlInspection

### Available Operations

* [searchconsoleUrlInspectionIndexInspect](#searchconsoleurlinspectionindexinspect) - Index inspection.

## searchconsoleUrlInspectionIndexInspect

Index inspection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchconsoleUrlInspectionIndexInspectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InspectUrlIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchconsoleUrlInspectionIndexInspectSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SearchconsoleUrlInspectionIndexInspectSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SearchconsoleUrlInspectionIndexInspectSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchconsoleUrlInspectionIndexInspectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inspectUrlIndexRequest = new InspectUrlIndexRequest();
    $request->inspectUrlIndexRequest->inspectionUrl = 'quasi';
    $request->inspectUrlIndexRequest->languageCode = 'reiciendis';
    $request->inspectUrlIndexRequest->siteUrl = 'voluptatibus';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new SearchconsoleUrlInspectionIndexInspectSecurity();
    $requestSecurity->option1 = new SearchconsoleUrlInspectionIndexInspectSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlInspection->searchconsoleUrlInspectionIndexInspect($request, $requestSecurity);

    if ($response->inspectUrlIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
