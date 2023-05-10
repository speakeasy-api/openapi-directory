# projects

### Available Operations

* [appengineProjectsLocationsGet](#appengineprojectslocationsget) - Gets information about a location.
* [appengineProjectsLocationsList](#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [appengineProjectsLocationsOperationsGet](#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineProjectsLocationsOperationsList](#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## appengineProjectsLocationsGet

Gets information about a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'provident';
    $request->key = 'minima';
    $request->locationsId = 'repellendus';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->projectsId = 'similique';
    $request->quotaUser = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new AppengineProjectsLocationsGetSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsGet($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'qui';
    $request->filter = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->pageSize = 687488;
    $request->pageToken = 'iusto';
    $request->prettyPrint = false;
    $request->projectsId = 'ipsum';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new AppengineProjectsLocationsListSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'dolorem';
    $request->key = 'sapiente';
    $request->locationsId = 'totam';
    $request->oauthToken = 'nihil';
    $request->operationsId = 'sit';
    $request->prettyPrint = false;
    $request->projectsId = 'expedita';
    $request->quotaUser = 'neque';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new AppengineProjectsLocationsOperationsGetSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'ipsum';
    $request->filter = 'incidunt';
    $request->key = 'qui';
    $request->locationsId = 'cupiditate';
    $request->oauthToken = 'maxime';
    $request->pageSize = 863856;
    $request->pageToken = 'soluta';
    $request->prettyPrint = false;
    $request->projectsId = 'dicta';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new AppengineProjectsLocationsOperationsListSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
