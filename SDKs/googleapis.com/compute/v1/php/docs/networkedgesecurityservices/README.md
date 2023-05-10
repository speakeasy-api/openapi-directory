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
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'odit';
    $request->filter = 'maxime';
    $request->includeAllScopes = false;
    $request->key = 'aspernatur';
    $request->maxResults = 168913;
    $request->oauthToken = 'minus';
    $request->orderBy = 'minima';
    $request->pageToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'quaerat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'cupiditate';

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
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'quidem';
    $request->key = 'harum';
    $request->networkEdgeSecurityService = 'adipisci';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'reprehenderit';
    $request->region = 'quo';
    $request->requestId = 'vitae';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'iste';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'atque';
    $request->fields = 'dolorum';
    $request->key = 'similique';
    $request->networkEdgeSecurityService = 'qui';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'assumenda';
    $request->region = 'temporibus';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'sint';

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
    $request->networkEdgeSecurityService->creationTimestamp = 'fugit';
    $request->networkEdgeSecurityService->description = 'earum';
    $request->networkEdgeSecurityService->fingerprint = 'quidem';
    $request->networkEdgeSecurityService->id = 'at';
    $request->networkEdgeSecurityService->kind = 'debitis';
    $request->networkEdgeSecurityService->name = 'Ellen Reilly';
    $request->networkEdgeSecurityService->region = 'impedit';
    $request->networkEdgeSecurityService->securityPolicy = 'veniam';
    $request->networkEdgeSecurityService->selfLink = 'magnam';
    $request->networkEdgeSecurityService->selfLinkWithId = 'iure';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'aut';
    $request->key = 'architecto';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'reiciendis';
    $request->region = 'est';
    $request->requestId = 'esse';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'odit';
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
    $request->networkEdgeSecurityService1->creationTimestamp = 'voluptas';
    $request->networkEdgeSecurityService1->description = 'libero';
    $request->networkEdgeSecurityService1->fingerprint = 'vero';
    $request->networkEdgeSecurityService1->id = 'hic';
    $request->networkEdgeSecurityService1->kind = 'consequuntur';
    $request->networkEdgeSecurityService1->name = 'Jason O'Kon';
    $request->networkEdgeSecurityService1->region = 'non';
    $request->networkEdgeSecurityService1->securityPolicy = 'quia';
    $request->networkEdgeSecurityService1->selfLink = 'porro';
    $request->networkEdgeSecurityService1->selfLinkWithId = 'architecto';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'illo';
    $request->key = 'perferendis';
    $request->networkEdgeSecurityServicePathParameter = 'eveniet';
    $request->oauthToken = 'excepturi';
    $request->paths = [
        'culpa',
        'quo',
        'sunt',
    ];
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'iste';
    $request->region = 'veritatis';
    $request->requestId = 'adipisci';
    $request->updateMask = 'quis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'ea';

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
