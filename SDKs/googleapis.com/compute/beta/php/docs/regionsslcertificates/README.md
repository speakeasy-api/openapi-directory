# regionSslCertificates

### Available Operations

* [computeRegionSslCertificatesDelete](#computeregionsslcertificatesdelete) - Deletes the specified SslCertificate resource in the region.
* [computeRegionSslCertificatesGet](#computeregionsslcertificatesget) - Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
* [computeRegionSslCertificatesInsert](#computeregionsslcertificatesinsert) - Creates a SslCertificate resource in the specified project and region using the data included in the request
* [computeRegionSslCertificatesList](#computeregionsslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project in the specified region.
* [computeRegionSslCertificatesTestIamPermissions](#computeregionsslcertificatestestiampermissions) - Returns permissions that a caller has on the specified resource and region.

## computeRegionSslCertificatesDelete

Deletes the specified SslCertificate resource in the region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslCertificatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'id';
    $request->key = 'id';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'ipsam';
    $request->region = 'at';
    $request->requestId = 'magni';
    $request->sslCertificate = 'quia';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'assumenda';

    $requestSecurity = new ComputeRegionSslCertificatesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionSslCertificatesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslCertificates->computeRegionSslCertificatesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslCertificatesGet

Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslCertificatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorem';
    $request->fields = 'pariatur';
    $request->key = 'labore';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'ducimus';
    $request->region = 'eaque';
    $request->sslCertificate = 'debitis';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'quos';

    $requestSecurity = new ComputeRegionSslCertificatesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionSslCertificatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslCertificates->computeRegionSslCertificatesGet($request, $requestSecurity);

    if ($response->sslCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslCertificatesInsert

Creates a SslCertificate resource in the specified project and region using the data included in the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificate;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateManagedSslCertificate;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateManagedSslCertificateDomainStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateManagedSslCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateSelfManagedSslCertificate;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslCertificatesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslCertificate = new SslCertificate();
    $request->sslCertificate->certificate = 'perspiciatis';
    $request->sslCertificate->creationTimestamp = 'vel';
    $request->sslCertificate->description = 'nobis';
    $request->sslCertificate->expireTime = 'facilis';
    $request->sslCertificate->id = 'sequi';
    $request->sslCertificate->kind = 'iste';
    $request->sslCertificate->managed = new SslCertificateManagedSslCertificate();
    $request->sslCertificate->managed->domainStatus = [
        'reprehenderit' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_CAA_FORBIDDEN,
        'corrupti' => SslCertificateManagedSslCertificateDomainStatusEnum::DOMAIN_STATUS_UNSPECIFIED,
        'perspiciatis' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_CAA_FORBIDDEN,
    ];
    $request->sslCertificate->managed->domains = [
        'tempore',
        'dolorum',
        'architecto',
        'expedita',
    ];
    $request->sslCertificate->managed->status = SslCertificateManagedSslCertificateStatusEnum::PROVISIONING_FAILED_PERMANENTLY;
    $request->sslCertificate->name = 'Julio Bernhard';
    $request->sslCertificate->privateKey = 'dolor';
    $request->sslCertificate->region = 'enim';
    $request->sslCertificate->selfLink = 'ex';
    $request->sslCertificate->selfManaged = new SslCertificateSelfManagedSslCertificate();
    $request->sslCertificate->selfManaged->certificate = 'tenetur';
    $request->sslCertificate->selfManaged->privateKey = 'aliquid';
    $request->sslCertificate->subjectAlternativeNames = [
        'ut',
    ];
    $request->sslCertificate->type = SslCertificateTypeEnum::SELF_MANAGED;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'tempora';
    $request->key = 'explicabo';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'facilis';
    $request->region = 'dolores';
    $request->requestId = 'beatae';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeRegionSslCertificatesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionSslCertificatesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslCertificates->computeRegionSslCertificatesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslCertificatesList

Retrieves the list of SslCertificate resources available to the specified project in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iste';
    $request->fields = 'nemo';
    $request->filter = 'veritatis';
    $request->key = 'vel';
    $request->maxResults = 318311;
    $request->oauthToken = 'sunt';
    $request->orderBy = 'facilis';
    $request->pageToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'atque';
    $request->region = 'optio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'et';

    $requestSecurity = new ComputeRegionSslCertificatesListSecurity();
    $requestSecurity->option1 = new ComputeRegionSslCertificatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslCertificates->computeRegionSslCertificatesList($request, $requestSecurity);

    if ($response->sslCertificateList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslCertificatesTestIamPermissions

Returns permissions that a caller has on the specified resource and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslCertificatesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslCertificatesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'reiciendis',
    ];
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'iure';
    $request->key = 'dolor';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'sequi';
    $request->region = 'quae';
    $request->resource = 'porro';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'at';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeRegionSslCertificatesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionSslCertificatesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslCertificates->computeRegionSslCertificatesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
