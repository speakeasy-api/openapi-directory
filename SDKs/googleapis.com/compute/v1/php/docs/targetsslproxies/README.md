# targetSslProxies

### Available Operations

* [computeTargetSslProxiesDelete](#computetargetsslproxiesdelete) - Deletes the specified TargetSslProxy resource.
* [computeTargetSslProxiesGet](#computetargetsslproxiesget) - Returns the specified TargetSslProxy resource.
* [computeTargetSslProxiesInsert](#computetargetsslproxiesinsert) - Creates a TargetSslProxy resource in the specified project using the data included in the request.
* [computeTargetSslProxiesList](#computetargetsslproxieslist) - Retrieves the list of TargetSslProxy resources available to the specified project.
* [computeTargetSslProxiesSetBackendService](#computetargetsslproxiessetbackendservice) - Changes the BackendService for TargetSslProxy.
* [computeTargetSslProxiesSetCertificateMap](#computetargetsslproxiessetcertificatemap) - Changes the Certificate Map for TargetSslProxy.
* [computeTargetSslProxiesSetProxyHeader](#computetargetsslproxiessetproxyheader) - Changes the ProxyHeaderType for TargetSslProxy.
* [computeTargetSslProxiesSetSslCertificates](#computetargetsslproxiessetsslcertificates) - Changes SslCertificates for TargetSslProxy.
* [computeTargetSslProxiesSetSslPolicy](#computetargetsslproxiessetsslpolicy) - Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.

## computeTargetSslProxiesDelete

Deletes the specified TargetSslProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'voluptas';
    $request->key = 'aspernatur';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'cum';
    $request->requestId = 'minus';
    $request->targetSslProxy = 'cupiditate';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'dignissimos';

    $requestSecurity = new ComputeTargetSslProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesGet

Returns the specified TargetSslProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'eius';
    $request->key = 'dignissimos';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'facilis';
    $request->targetSslProxy = 'cupiditate';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'officia';

    $requestSecurity = new ComputeTargetSslProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesGet($request, $requestSecurity);

    if ($response->targetSslProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesInsert

Creates a TargetSslProxy resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxyProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetSslProxy = new TargetSslProxy();
    $request->targetSslProxy->certificateMap = 'beatae';
    $request->targetSslProxy->creationTimestamp = 'sequi';
    $request->targetSslProxy->description = 'vero';
    $request->targetSslProxy->id = 'laboriosam';
    $request->targetSslProxy->kind = 'dolorum';
    $request->targetSslProxy->name = 'Mrs. Edmund Mertz';
    $request->targetSslProxy->proxyHeader = TargetSslProxyProxyHeaderEnum::NONE;
    $request->targetSslProxy->selfLink = 'quidem';
    $request->targetSslProxy->service = 'at';
    $request->targetSslProxy->sslCertificates = [
        'iure',
        'architecto',
        'illum',
    ];
    $request->targetSslProxy->sslPolicy = 'quae';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestias';
    $request->fields = 'quod';
    $request->key = 'quo';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'excepturi';
    $request->requestId = 'illum';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeTargetSslProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesList

Retrieves the list of TargetSslProxy resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'commodi';
    $request->fields = 'vero';
    $request->filter = 'temporibus';
    $request->key = 'voluptate';
    $request->maxResults = 390200;
    $request->oauthToken = 'minus';
    $request->orderBy = 'eaque';
    $request->pageToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'tenetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'est';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'harum';

    $requestSecurity = new ComputeTargetSslProxiesListSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesList($request, $requestSecurity);

    if ($response->targetSslProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesSetBackendService

Changes the BackendService for TargetSslProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetBackendServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxiesSetBackendServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetBackendServiceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetBackendServiceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetBackendServiceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesSetBackendServiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetSslProxiesSetBackendServiceRequest = new TargetSslProxiesSetBackendServiceRequest();
    $request->targetSslProxiesSetBackendServiceRequest->service = 'nesciunt';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'ut';
    $request->key = 'placeat';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'quaerat';
    $request->requestId = 'sequi';
    $request->targetSslProxy = 'quidem';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'suscipit';

    $requestSecurity = new ComputeTargetSslProxiesSetBackendServiceSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesSetBackendServiceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesSetBackendService($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesSetCertificateMap

Changes the Certificate Map for TargetSslProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetCertificateMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxiesSetCertificateMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetCertificateMapSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetCertificateMapSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetCertificateMapSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesSetCertificateMapRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetSslProxiesSetCertificateMapRequest = new TargetSslProxiesSetCertificateMapRequest();
    $request->targetSslProxiesSetCertificateMapRequest->certificateMap = 'ullam';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'ab';
    $request->key = 'recusandae';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'ex';
    $request->requestId = 'quos';
    $request->targetSslProxy = 'ducimus';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'quidem';

    $requestSecurity = new ComputeTargetSslProxiesSetCertificateMapSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesSetCertificateMapSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesSetCertificateMap($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesSetProxyHeader

Changes the ProxyHeaderType for TargetSslProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetProxyHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxiesSetProxyHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetProxyHeaderSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetProxyHeaderSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetProxyHeaderSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesSetProxyHeaderRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetSslProxiesSetProxyHeaderRequest = new TargetSslProxiesSetProxyHeaderRequest();
    $request->targetSslProxiesSetProxyHeaderRequest->proxyHeader = TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum::NONE;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sit';
    $request->fields = 'recusandae';
    $request->key = 'corrupti';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'quod';
    $request->requestId = 'dolore';
    $request->targetSslProxy = 'atque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'quo';

    $requestSecurity = new ComputeTargetSslProxiesSetProxyHeaderSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesSetProxyHeaderSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesSetProxyHeader($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesSetSslCertificates

Changes SslCertificates for TargetSslProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetSslProxiesSetSslCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslCertificatesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslCertificatesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslCertificatesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesSetSslCertificatesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetSslProxiesSetSslCertificatesRequest = new TargetSslProxiesSetSslCertificatesRequest();
    $request->targetSslProxiesSetSslCertificatesRequest->sslCertificates = [
        'voluptas',
        'excepturi',
        'rerum',
        'ipsam',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->fields = 'sit';
    $request->key = 'nemo';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'aperiam';
    $request->requestId = 'dicta';
    $request->targetSslProxy = 'ut';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'est';

    $requestSecurity = new ComputeTargetSslProxiesSetSslCertificatesSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesSetSslCertificatesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesSetSslCertificates($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetSslProxiesSetSslPolicy

Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesSetSslPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesSetSslPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslPolicyReference = new SslPolicyReference();
    $request->sslPolicyReference->sslPolicy = 'sit';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->fields = 'sed';
    $request->key = 'quaerat';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'impedit';
    $request->requestId = 'consectetur';
    $request->targetSslProxy = 'commodi';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeTargetSslProxiesSetSslPolicySecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesSetSslPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesSetSslPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
