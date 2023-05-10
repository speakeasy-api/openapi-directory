# operations

### Available Operations

* [sqlOperationsGet](#sqloperationsget) - Retrieves an instance operation that has been performed on an instance.
* [sqlOperationsList](#sqloperationslist) - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

## sqlOperationsGet

Retrieves an instance operation that has been performed on an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'est';
    $request->key = 'quidem';
    $request->oauthToken = 'reprehenderit';
    $request->operation = 'facere';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new SqlOperationsGetSecurity();
    $requestSecurity->option1 = new SqlOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->sqlOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlOperationsList

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'atque';
    $request->instance = 'reprehenderit';
    $request->key = 'asperiores';
    $request->maxResults = 519952;
    $request->oauthToken = 'suscipit';
    $request->pageToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'et';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new SqlOperationsListSecurity();
    $requestSecurity->option1 = new SqlOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->sqlOperationsList($request, $requestSecurity);

    if ($response->operationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
