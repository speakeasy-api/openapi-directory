# regionOperations

### Available Operations

* [computeRegionOperationsDelete](#computeregionoperationsdelete) - Deletes the specified region-specific Operations resource.
* [computeRegionOperationsGet](#computeregionoperationsget) - Retrieves the specified region-specific Operations resource.
* [computeRegionOperationsList](#computeregionoperationslist) - Retrieves a list of Operation resources contained within the specified region.
* [computeRegionOperationsWait](#computeregionoperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

## computeRegionOperationsDelete

Deletes the specified region-specific Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->fields = 'saepe';
    $request->key = 'aut';
    $request->oauthToken = 'ipsum';
    $request->operation = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'facere';
    $request->region = 'esse';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'cum';

    $requestSecurity = new ComputeRegionOperationsDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionOperations->computeRegionOperationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionOperationsGet

Retrieves the specified region-specific Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'nam';
    $request->key = 'dolorum';
    $request->oauthToken = 'repellat';
    $request->operation = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'optio';
    $request->region = 'eos';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'facilis';

    $requestSecurity = new ComputeRegionOperationsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionOperations->computeRegionOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionOperationsList

Retrieves a list of Operation resources contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'asperiores';
    $request->filter = 'aperiam';
    $request->key = 'temporibus';
    $request->maxResults = 971036;
    $request->oauthToken = 'nisi';
    $request->orderBy = 'voluptatum';
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'vero';
    $request->region = 'repellendus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'earum';

    $requestSecurity = new ComputeRegionOperationsListSecurity();
    $requestSecurity->option1 = new ComputeRegionOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionOperations->computeRegionOperationsList($request, $requestSecurity);

    if ($response->operationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionOperationsWait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsWaitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsWaitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsWaitSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionOperationsWaitSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'itaque';
    $request->key = 'alias';
    $request->oauthToken = 'ea';
    $request->operation = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'nam';
    $request->region = 'consectetur';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'est';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeRegionOperationsWaitSecurity();
    $requestSecurity->option1 = new ComputeRegionOperationsWaitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionOperations->computeRegionOperationsWait($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
