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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'voluptates';
    $request->filter = 'aliquam';
    $request->includeAllScopes = false;
    $request->key = 'voluptates';
    $request->maxResults = 3091;
    $request->oauthToken = 'voluptatum';
    $request->orderBy = 'aut';
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'vitae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'architecto';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'odio';
    $request->key = 'ullam';
    $request->networkEdgeSecurityService = 'provident';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'eos';
    $request->region = 'delectus';
    $request->requestId = 'dolor';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'consequuntur';

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
    $request->accessToken = 'quis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'recusandae';
    $request->key = 'odit';
    $request->networkEdgeSecurityService = 'fugiat';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'voluptates';
    $request->region = 'culpa';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'sunt';

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
    $request->networkEdgeSecurityService->creationTimestamp = 'incidunt';
    $request->networkEdgeSecurityService->description = 'maiores';
    $request->networkEdgeSecurityService->fingerprint = 'culpa';
    $request->networkEdgeSecurityService->id = 'dolore';
    $request->networkEdgeSecurityService->kind = 'eius';
    $request->networkEdgeSecurityService->name = 'Patricia Kozey';
    $request->networkEdgeSecurityService->region = 'sequi';
    $request->networkEdgeSecurityService->securityPolicy = 'ducimus';
    $request->networkEdgeSecurityService->selfLink = 'minima';
    $request->networkEdgeSecurityService->selfLinkWithId = 'libero';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->fields = 'quas';
    $request->key = 'aspernatur';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'et';
    $request->region = 'reiciendis';
    $request->requestId = 'nulla';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'hic';
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
    $request->networkEdgeSecurityService1->creationTimestamp = 'sint';
    $request->networkEdgeSecurityService1->description = 'eveniet';
    $request->networkEdgeSecurityService1->fingerprint = 'veniam';
    $request->networkEdgeSecurityService1->id = 'unde';
    $request->networkEdgeSecurityService1->kind = 'consequuntur';
    $request->networkEdgeSecurityService1->name = 'Glenda Schiller DDS';
    $request->networkEdgeSecurityService1->region = 'optio';
    $request->networkEdgeSecurityService1->securityPolicy = 'voluptatum';
    $request->networkEdgeSecurityService1->selfLink = 'pariatur';
    $request->networkEdgeSecurityService1->selfLinkWithId = 'sequi';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'fugit';
    $request->key = 'quis';
    $request->networkEdgeSecurityServicePathParameter = 'voluptatum';
    $request->oauthToken = 'temporibus';
    $request->paths = [
        'amet',
    ];
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'deleniti';
    $request->region = 'laborum';
    $request->requestId = 'quas';
    $request->updateMask = 'odit';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'aut';

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
