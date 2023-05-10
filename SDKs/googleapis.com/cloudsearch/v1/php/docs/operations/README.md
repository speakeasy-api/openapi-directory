# operations

### Available Operations

* [cloudsearchOperationsGet](#cloudsearchoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [cloudsearchOperationsLroList](#cloudsearchoperationslrolist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## cloudsearchOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsGetSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'blanditiis';
    $request->key = 'error';
    $request->name = 'Violet Price';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new CloudsearchOperationsGetSecurity();
    $requestSecurity->option1 = new CloudsearchOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->cloudsearchOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchOperationsLroList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchOperationsLroListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchOperationsLroListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'libero';
    $request->filter = 'delectus';
    $request->key = 'quaerat';
    $request->name = 'Gene Effertz';
    $request->oauthToken = 'qui';
    $request->pageSize = 218749;
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new CloudsearchOperationsLroListSecurity();
    $requestSecurity->option1 = new CloudsearchOperationsLroListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->cloudsearchOperationsLroList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
