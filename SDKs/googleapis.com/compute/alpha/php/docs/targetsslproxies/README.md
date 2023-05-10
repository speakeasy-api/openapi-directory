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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'occaecati';
    $request->key = 'eius';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'minus';
    $request->requestId = 'quis';
    $request->targetSslProxy = 'suscipit';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'architecto';

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
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deserunt';
    $request->fields = 'quas';
    $request->key = 'eius';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'voluptatibus';
    $request->targetSslProxy = 'eveniet';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'voluptatem';

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
    $request->targetSslProxy->certificateMap = 'facilis';
    $request->targetSslProxy->creationTimestamp = 'aliquam';
    $request->targetSslProxy->description = 'atque';
    $request->targetSslProxy->id = 'exercitationem';
    $request->targetSslProxy->kind = 'velit';
    $request->targetSslProxy->name = 'Johanna Paucek';
    $request->targetSslProxy->proxyHeader = TargetSslProxyProxyHeaderEnum::PROXY_V1;
    $request->targetSslProxy->selfLink = 'blanditiis';
    $request->targetSslProxy->service = 'adipisci';
    $request->targetSslProxy->sslCertificates = [
        'inventore',
        'hic',
        'quod',
        'voluptas',
    ];
    $request->targetSslProxy->sslPolicy = 'distinctio';
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eligendi';
    $request->fields = 'at';
    $request->key = 'tempore';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'impedit';
    $request->requestId = 'modi';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'facilis';
    $request->userIp = 'aliquam';

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
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'nulla';
    $request->filter = 'accusamus';
    $request->key = 'excepturi';
    $request->maxResults = 378727;
    $request->oauthToken = 'ipsum';
    $request->orderBy = 'tenetur';
    $request->pageToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'consectetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'cupiditate';

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
    $request->targetSslProxiesSetBackendServiceRequest->service = 'assumenda';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'doloremque';
    $request->key = 'alias';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'eveniet';
    $request->requestId = 'sit';
    $request->targetSslProxy = 'repellendus';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'possimus';

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
    $request->targetSslProxiesSetCertificateMapRequest->certificateMap = 'earum';
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'eos';
    $request->key = 'neque';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'harum';
    $request->requestId = 'amet';
    $request->targetSslProxy = 'quia';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'excepturi';

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
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'adipisci';
    $request->key = 'omnis';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'id';
    $request->requestId = 'mollitia';
    $request->targetSslProxy = 'a';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'fugiat';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetSslProxiesSetSslCertificatesRequest = new TargetSslProxiesSetSslCertificatesRequest();
    $request->targetSslProxiesSetSslCertificatesRequest->sslCertificates = [
        'odit',
    ];
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'veniam';
    $request->key = 'quisquam';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'sit';
    $request->requestId = 'omnis';
    $request->targetSslProxy = 'eos';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'consectetur';

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
    $request->sslPolicyReference->sslPolicy = 'minima';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'unde';
    $request->fields = 'soluta';
    $request->key = 'distinctio';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'perferendis';
    $request->requestId = 'maxime';
    $request->targetSslProxy = 'mollitia';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'ab';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'fuga',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'occaecati';
    $request->key = 'nemo';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'consequuntur';
    $request->resource = 'tempore';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'iusto';

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
