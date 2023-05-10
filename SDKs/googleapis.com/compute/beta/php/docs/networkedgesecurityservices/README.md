# networkEdgeSecurityServices

### Available Operations

* [computeNetworkEdgeSecurityServicesAggregatedList](#computenetworkedgesecurityservicesaggregatedlist) - Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
* [computeNetworkEdgeSecurityServicesDelete](#computenetworkedgesecurityservicesdelete) - Deletes the specified service.
* [computeNetworkEdgeSecurityServicesGet](#computenetworkedgesecurityservicesget) - Gets a specified NetworkEdgeSecurityService.
* [computeNetworkEdgeSecurityServicesInsert](#computenetworkedgesecurityservicesinsert) - Creates a new service in the specified project using the data included in the request.
* [computeNetworkEdgeSecurityServicesPatch](#computenetworkedgesecurityservicespatch) - Patches the specified policy with the data included in the request.

## computeNetworkEdgeSecurityServicesAggregatedList

Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEdgeSecurityServicesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'consequuntur';
    $request->filter = 'rerum';
    $request->includeAllScopes = false;
    $request->key = 'nulla';
    $request->maxResults = 499270;
    $request->oauthToken = 'eveniet';
    $request->orderBy = 'repellendus';
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'veniam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'vel';

    $requestSecurity = new ComputeNetworkEdgeSecurityServicesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEdgeSecurityServices->computeNetworkEdgeSecurityServicesAggregatedList($request, $requestSecurity);

    if ($response->networkEdgeSecurityServiceAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEdgeSecurityServicesDelete

Deletes the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEdgeSecurityServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'deleniti';
    $request->key = 'doloribus';
    $request->networkEdgeSecurityService = 'magnam';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'adipisci';
    $request->region = 'provident';
    $request->requestId = 'voluptas';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'modi';

    $requestSecurity = new ComputeNetworkEdgeSecurityServicesDeleteSecurity();
    $requestSecurity->option1 = new ComputeNetworkEdgeSecurityServicesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEdgeSecurityServices->computeNetworkEdgeSecurityServicesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEdgeSecurityServicesGet

Gets a specified NetworkEdgeSecurityService.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEdgeSecurityServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->networkEdgeSecurityService = 'dicta';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'omnis';
    $request->region = 'commodi';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'aspernatur';

    $requestSecurity = new ComputeNetworkEdgeSecurityServicesGetSecurity();
    $requestSecurity->option1 = new ComputeNetworkEdgeSecurityServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEdgeSecurityServices->computeNetworkEdgeSecurityServicesGet($request, $requestSecurity);

    if ($response->networkEdgeSecurityService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEdgeSecurityServicesInsert

Creates a new service in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEdgeSecurityService;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEdgeSecurityServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEdgeSecurityService = new NetworkEdgeSecurityService();
    $request->networkEdgeSecurityService->creationTimestamp = 'deserunt';
    $request->networkEdgeSecurityService->description = 'dignissimos';
    $request->networkEdgeSecurityService->fingerprint = 'nulla';
    $request->networkEdgeSecurityService->id = 'facilis';
    $request->networkEdgeSecurityService->kind = 'libero';
    $request->networkEdgeSecurityService->name = 'Santos Halvorson';
    $request->networkEdgeSecurityService->region = 'assumenda';
    $request->networkEdgeSecurityService->securityPolicy = 'atque';
    $request->networkEdgeSecurityService->selfLink = 'perspiciatis';
    $request->networkEdgeSecurityService->selfLinkWithId = 'odit';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'atque';
    $request->key = 'sunt';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'nam';
    $request->region = 'exercitationem';
    $request->requestId = 'architecto';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'deleniti';
    $request->validateOnly = false;

    $requestSecurity = new ComputeNetworkEdgeSecurityServicesInsertSecurity();
    $requestSecurity->option1 = new ComputeNetworkEdgeSecurityServicesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEdgeSecurityServices->computeNetworkEdgeSecurityServicesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEdgeSecurityServicesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEdgeSecurityService;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEdgeSecurityServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEdgeSecurityServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEdgeSecurityService1 = new NetworkEdgeSecurityService();
    $request->networkEdgeSecurityService1->creationTimestamp = 'voluptatum';
    $request->networkEdgeSecurityService1->description = 'aspernatur';
    $request->networkEdgeSecurityService1->fingerprint = 'eius';
    $request->networkEdgeSecurityService1->id = 'accusantium';
    $request->networkEdgeSecurityService1->kind = 'nobis';
    $request->networkEdgeSecurityService1->name = 'Lewis Goodwin';
    $request->networkEdgeSecurityService1->region = 'corrupti';
    $request->networkEdgeSecurityService1->securityPolicy = 'blanditiis';
    $request->networkEdgeSecurityService1->selfLink = 'hic';
    $request->networkEdgeSecurityService1->selfLinkWithId = 'blanditiis';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'a';
    $request->key = 'alias';
    $request->networkEdgeSecurityServicePathParameter = 'tempore';
    $request->oauthToken = 'quod';
    $request->paths = [
        'officiis',
        'dicta',
        'maiores',
    ];
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'perferendis';
    $request->region = 'eum';
    $request->requestId = 'nulla';
    $request->updateMask = 'corporis';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'sequi';

    $requestSecurity = new ComputeNetworkEdgeSecurityServicesPatchSecurity();
    $requestSecurity->option1 = new ComputeNetworkEdgeSecurityServicesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEdgeSecurityServices->computeNetworkEdgeSecurityServicesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
