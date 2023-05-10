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
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'ex';
    $request->key = 'nisi';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'laborum';
    $request->region = 'omnis';
    $request->requestId = 'reprehenderit';
    $request->sslCertificate = 'qui';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'molestias';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eligendi';
    $request->fields = 'consequatur';
    $request->key = 'optio';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'facilis';
    $request->region = 'quisquam';
    $request->sslCertificate = 'in';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslCertificate = new SslCertificate();
    $request->sslCertificate->certificate = 'modi';
    $request->sslCertificate->creationTimestamp = 'rem';
    $request->sslCertificate->description = 'voluptates';
    $request->sslCertificate->expireTime = 'cumque';
    $request->sslCertificate->id = 'ex';
    $request->sslCertificate->kind = 'voluptates';
    $request->sslCertificate->managed = new SslCertificateManagedSslCertificate();
    $request->sslCertificate->managed->domainStatus = [
        'distinctio' => SslCertificateManagedSslCertificateDomainStatusEnum::DOMAIN_STATUS_UNSPECIFIED,
        'aliquam' => SslCertificateManagedSslCertificateDomainStatusEnum::ACTIVE,
        'distinctio' => SslCertificateManagedSslCertificateDomainStatusEnum::ACTIVE,
    ];
    $request->sslCertificate->managed->domains = [
        'alias',
        'eum',
        'impedit',
        'perspiciatis',
    ];
    $request->sslCertificate->managed->status = SslCertificateManagedSslCertificateStatusEnum::PROVISIONING_FAILED_PERMANENTLY;
    $request->sslCertificate->name = 'Tonya Gleichner';
    $request->sslCertificate->privateKey = 'sed';
    $request->sslCertificate->region = 'distinctio';
    $request->sslCertificate->selfLink = 'quibusdam';
    $request->sslCertificate->selfLinkWithId = 'fugiat';
    $request->sslCertificate->selfManaged = new SslCertificateSelfManagedSslCertificate();
    $request->sslCertificate->selfManaged->certificate = 'error';
    $request->sslCertificate->selfManaged->privateKey = 'necessitatibus';
    $request->sslCertificate->subjectAlternativeNames = [
        'deleniti',
        'fugiat',
    ];
    $request->sslCertificate->type = SslCertificateTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'voluptas';
    $request->key = 'nemo';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'illo';
    $request->region = 'dolores';
    $request->requestId = 'cumque';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'ipsam';

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
    $request->accessToken = 'quae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'iusto';
    $request->filter = 'aspernatur';
    $request->key = 'sunt';
    $request->maxResults = 802085;
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'iusto';
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'error';
    $request->region = 'consequuntur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'blanditiis',
        'necessitatibus',
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'delectus';
    $request->key = 'quos';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'numquam';
    $request->region = 'ab';
    $request->resource = 'quos';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'voluptatibus';

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
