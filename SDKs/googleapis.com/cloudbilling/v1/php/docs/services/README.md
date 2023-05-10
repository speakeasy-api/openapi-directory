# services

### Available Operations

* [cloudbillingServicesList](#cloudbillingserviceslist) - Lists all public cloud services.
* [cloudbillingServicesSkusList](#cloudbillingservicesskuslist) - Lists all publicly available SKUs for a given cloud service.

## cloudbillingServicesList

Lists all public cloud services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->pageSize = 921158;
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new CloudbillingServicesListSecurity();
    $requestSecurity->option1 = new CloudbillingServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->cloudbillingServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingServicesSkusList

Lists all publicly available SKUs for a given cloud service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesSkusListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesSkusListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesSkusListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesSkusListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingServicesSkusListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingServicesSkusListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->currencyCode = 'explicabo';
    $request->endTime = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->pageSize = 264730;
    $request->pageToken = 'qui';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->startTime = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new CloudbillingServicesSkusListSecurity();
    $requestSecurity->option1 = new CloudbillingServicesSkusListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->cloudbillingServicesSkusList($request, $requestSecurity);

    if ($response->listSkusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
