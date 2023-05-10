# globalOperations

### Available Operations

* [computeGlobalOperationsAggregatedList](#computeglobaloperationsaggregatedlist) - Retrieves an aggregated list of all operations.
* [computeGlobalOperationsDelete](#computeglobaloperationsdelete) - Deletes the specified Operations resource.
* [computeGlobalOperationsGet](#computeglobaloperationsget) - Retrieves the specified Operations resource.
* [computeGlobalOperationsList](#computeglobaloperationslist) - Retrieves a list of Operation resources contained within the specified project.
* [computeGlobalOperationsWait](#computeglobaloperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

## computeGlobalOperationsAggregatedList

Retrieves an aggregated list of all operations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOperationsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'tempora';
    $request->filter = 'debitis';
    $request->includeAllScopes = false;
    $request->key = 'cumque';
    $request->maxResults = 806124;
    $request->oauthToken = 'et';
    $request->orderBy = 'beatae';
    $request->pageToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'quos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'tempora';

    $requestSecurity = new ComputeGlobalOperationsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeGlobalOperationsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOperations->computeGlobalOperationsAggregatedList($request, $requestSecurity);

    if ($response->operationAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalOperationsDelete

Deletes the specified Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'laudantium';
    $request->key = 'facilis';
    $request->oauthToken = 'laudantium';
    $request->operation = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'quia';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'corporis';

    $requestSecurity = new ComputeGlobalOperationsDeleteSecurity();
    $requestSecurity->option1 = new ComputeGlobalOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOperations->computeGlobalOperationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalOperationsGet

Retrieves the specified Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'neque';
    $request->key = 'quidem';
    $request->oauthToken = 'quisquam';
    $request->operation = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'magni';

    $requestSecurity = new ComputeGlobalOperationsGetSecurity();
    $requestSecurity->option1 = new ComputeGlobalOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOperations->computeGlobalOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalOperationsList

Retrieves a list of Operation resources contained within the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'error';
    $request->filter = 'voluptatibus';
    $request->key = 'numquam';
    $request->maxResults = 700634;
    $request->oauthToken = 'dolorum';
    $request->orderBy = 'quibusdam';
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'numquam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'error';

    $requestSecurity = new ComputeGlobalOperationsListSecurity();
    $requestSecurity->option1 = new ComputeGlobalOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOperations->computeGlobalOperationsList($request, $requestSecurity);

    if ($response->operationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalOperationsWait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsWaitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsWaitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsWaitSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOperationsWaitSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'facilis';
    $request->key = 'optio';
    $request->oauthToken = 'incidunt';
    $request->operation = 'eos';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'dolores';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'vel';

    $requestSecurity = new ComputeGlobalOperationsWaitSecurity();
    $requestSecurity->option1 = new ComputeGlobalOperationsWaitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOperations->computeGlobalOperationsWait($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
