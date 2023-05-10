# zoneOperations

### Available Operations

* [computeZoneOperationsDelete](#computezoneoperationsdelete) - Deletes the specified zone-specific Operations resource.
* [computeZoneOperationsGet](#computezoneoperationsget) - Retrieves the specified zone-specific Operations resource.
* [computeZoneOperationsList](#computezoneoperationslist) - Retrieves a list of Operation resources contained within the specified zone.
* [computeZoneOperationsWait](#computezoneoperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

## computeZoneOperationsDelete

Deletes the specified zone-specific Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maxime';
    $request->fields = 'praesentium';
    $request->key = 'id';
    $request->oauthToken = 'ratione';
    $request->operation = 'magni';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'laborum';
    $request->zone = 'quo';

    $requestSecurity = new ComputeZoneOperationsDeleteSecurity();
    $requestSecurity->option1 = new ComputeZoneOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneOperations->computeZoneOperationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneOperationsGet

Retrieves the specified zone-specific Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'culpa';
    $request->fields = 'nisi';
    $request->key = 'nisi';
    $request->oauthToken = 'ratione';
    $request->operation = 'facere';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'officia';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'iste';
    $request->zone = 'corporis';

    $requestSecurity = new ComputeZoneOperationsGetSecurity();
    $requestSecurity->option1 = new ComputeZoneOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneOperations->computeZoneOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneOperationsList

Retrieves a list of Operation resources contained within the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'dolores';
    $request->filter = 'quidem';
    $request->key = 'soluta';
    $request->maxResults = 165566;
    $request->oauthToken = 'vitae';
    $request->orderBy = 'consectetur';
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'harum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'porro';
    $request->zone = 'temporibus';

    $requestSecurity = new ComputeZoneOperationsListSecurity();
    $requestSecurity->option1 = new ComputeZoneOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneOperations->computeZoneOperationsList($request, $requestSecurity);

    if ($response->operationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneOperationsWait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsWaitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsWaitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsWaitSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneOperationsWaitSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'repudiandae';
    $request->key = 'odio';
    $request->oauthToken = 'incidunt';
    $request->operation = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'vel';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'vel';
    $request->zone = 'quisquam';

    $requestSecurity = new ComputeZoneOperationsWaitSecurity();
    $requestSecurity->option1 = new ComputeZoneOperationsWaitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneOperations->computeZoneOperationsWait($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
