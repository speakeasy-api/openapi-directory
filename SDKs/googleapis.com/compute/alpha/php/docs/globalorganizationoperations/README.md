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
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'quidem';
    $request->key = 'exercitationem';
    $request->oauthToken = 'veniam';
    $request->operation = 'modi';
    $request->parentId = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'quo';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'doloribus';
    $request->key = 'provident';
    $request->oauthToken = 'alias';
    $request->operation = 'deserunt';
    $request->parentId = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'maxime';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'quasi';
    $request->filter = 'maiores';
    $request->key = 'voluptatem';
    $request->maxResults = 396184;
    $request->oauthToken = 'laudantium';
    $request->orderBy = 'unde';
    $request->pageToken = 'corrupti';
    $request->parentId = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'nam';

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
