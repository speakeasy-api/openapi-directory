# reportTypes

### Available Operations

* [youtubereportingReportTypesList](#youtubereportingreporttypeslist) - Lists report types.

## youtubereportingReportTypesList

Lists report types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingReportTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingReportTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingReportTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingReportTypesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingReportTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->includeSystemManaged = false;
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->onBehalfOfContentOwner = 'deserunt';
    $request->pageSize = 716327;
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new YoutubereportingReportTypesListSecurity();
    $requestSecurity->option1 = new YoutubereportingReportTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reportTypes->youtubereportingReportTypesList($request, $requestSecurity);

    if ($response->listReportTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
