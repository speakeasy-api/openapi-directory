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
* [computeTargetSslProxiesTestIamPermissions](#computetargetsslproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'aperiam';
    $request->key = 'ipsum';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'in';
    $request->requestId = 'mollitia';
    $request->targetSslProxy = 'corrupti';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'recusandae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'dolorum';
    $request->key = 'ut';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'non';
    $request->targetSslProxy = 'sapiente';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'molestias';

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
    $request->targetSslProxy->certificateMap = 'tempora';
    $request->targetSslProxy->creationTimestamp = 'excepturi';
    $request->targetSslProxy->description = 'molestiae';
    $request->targetSslProxy->id = 'rerum';
    $request->targetSslProxy->kind = 'architecto';
    $request->targetSslProxy->name = 'Mrs. Jennifer Larson';
    $request->targetSslProxy->proxyHeader = TargetSslProxyProxyHeaderEnum::NONE;
    $request->targetSslProxy->selfLink = 'fuga';
    $request->targetSslProxy->service = 'dicta';
    $request->targetSslProxy->sslCertificates = [
        'ex',
        'voluptatem',
    ];
    $request->targetSslProxy->sslPolicy = 'alias';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'eaque';
    $request->key = 'soluta';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'officiis';
    $request->requestId = 'nihil';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'consequatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'ab';
    $request->filter = 'ab';
    $request->key = 'perferendis';
    $request->maxResults = 103756;
    $request->oauthToken = 'porro';
    $request->orderBy = 'ab';
    $request->pageToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'tempore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'magni';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetSslProxiesSetBackendServiceRequest = new TargetSslProxiesSetBackendServiceRequest();
    $request->targetSslProxiesSetBackendServiceRequest->service = 'fugit';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minima';
    $request->fields = 'sit';
    $request->key = 'doloribus';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'illo';
    $request->requestId = 'distinctio';
    $request->targetSslProxy = 'fugit';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'animi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetSslProxiesSetCertificateMapRequest = new TargetSslProxiesSetCertificateMapRequest();
    $request->targetSslProxiesSetCertificateMapRequest->certificateMap = 'consectetur';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'eligendi';
    $request->key = 'porro';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'possimus';
    $request->requestId = 'voluptatibus';
    $request->targetSslProxy = 'quos';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'in';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetSslProxiesSetProxyHeaderRequest = new TargetSslProxiesSetProxyHeaderRequest();
    $request->targetSslProxiesSetProxyHeaderRequest->proxyHeader = TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum::PROXY_V1;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'adipisci';
    $request->key = 'excepturi';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'sed';
    $request->quotaUser = 'incidunt';
    $request->requestId = 'soluta';
    $request->targetSslProxy = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'assumenda';

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
        'quisquam',
        'commodi',
        'aut',
        'quibusdam',
    ];
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'hic';
    $request->key = 'eveniet';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'eaque';
    $request->requestId = 'officiis';
    $request->targetSslProxy = 'tempora';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'qui';

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
    $request->sslPolicyReference->sslPolicy = 'exercitationem';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'repellendus';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'non';
    $request->requestId = 'excepturi';
    $request->targetSslProxy = 'possimus';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'esse';
    $request->userIp = 'omnis';

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

## computeTargetSslProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetSslProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetSslProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'sed',
        'voluptates',
        'autem',
        'eaque',
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'consectetur';
    $request->key = 'sequi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'iusto';
    $request->resource = 'consequatur';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'libero';

    $requestSecurity = new ComputeTargetSslProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetSslProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetSslProxies->computeTargetSslProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
