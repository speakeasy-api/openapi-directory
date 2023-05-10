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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'necessitatibus';
    $request->filter = 'aspernatur';
    $request->includeAllScopes = false;
    $request->key = 'dolores';
    $request->maxResults = 671568;
    $request->oauthToken = 'vero';
    $request->orderBy = 'eos';
    $request->pageToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'id';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'a';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quia';
    $request->fields = 'iusto';
    $request->key = 'ab';
    $request->oauthToken = 'deserunt';
    $request->operation = 'sed';
    $request->prettyPrint = false;
    $request->project = 'blanditiis';
    $request->quotaUser = 'sint';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'molestiae';

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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'recusandae';
    $request->key = 'omnis';
    $request->oauthToken = 'ipsa';
    $request->operation = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'consequuntur';

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
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'vel';
    $request->filter = 'cupiditate';
    $request->key = 'modi';
    $request->maxResults = 392311;
    $request->oauthToken = 'explicabo';
    $request->orderBy = 'modi';
    $request->pageToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'sit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'delectus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->fields = 'molestiae';
    $request->key = 'optio';
    $request->oauthToken = 'saepe';
    $request->operation = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'sed';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'quis';

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
