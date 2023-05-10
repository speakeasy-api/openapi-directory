# globalOrganizationOperations

### Available Operations

* [computeGlobalOrganizationOperationsDelete](#computeglobalorganizationoperationsdelete) - Deletes the specified Operations resource.
* [computeGlobalOrganizationOperationsGet](#computeglobalorganizationoperationsget) - Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
* [computeGlobalOrganizationOperationsList](#computeglobalorganizationoperationslist) - Retrieves a list of Operation resources contained within the specified organization.

## computeGlobalOrganizationOperationsDelete

Deletes the specified Operations resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOrganizationOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'vitae';
    $request->key = 'quidem';
    $request->oauthToken = 'sequi';
    $request->operation = 'amet';
    $request->parentId = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'similique';

    $requestSecurity = new ComputeGlobalOrganizationOperationsDeleteSecurity();
    $requestSecurity->option1 = new ComputeGlobalOrganizationOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOrganizationOperations->computeGlobalOrganizationOperationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalOrganizationOperationsGet

Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOrganizationOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'nobis';
    $request->key = 'asperiores';
    $request->oauthToken = 'temporibus';
    $request->operation = 'id';
    $request->parentId = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'veniam';

    $requestSecurity = new ComputeGlobalOrganizationOperationsGetSecurity();
    $requestSecurity->option1 = new ComputeGlobalOrganizationOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOrganizationOperations->computeGlobalOrganizationOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalOrganizationOperationsList

Retrieves a list of Operation resources contained within the specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalOrganizationOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalOrganizationOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'doloremque';
    $request->filter = 'ipsum';
    $request->key = 'alias';
    $request->maxResults = 43715;
    $request->oauthToken = 'tempora';
    $request->orderBy = 'perspiciatis';
    $request->pageToken = 'quam';
    $request->parentId = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'a';

    $requestSecurity = new ComputeGlobalOrganizationOperationsListSecurity();
    $requestSecurity->option1 = new ComputeGlobalOrganizationOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalOrganizationOperations->computeGlobalOrganizationOperationsList($request, $requestSecurity);

    if ($response->operationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
