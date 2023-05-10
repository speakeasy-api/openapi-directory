# sslCertificates

### Available Operations

* [computeSslCertificatesAggregatedList](#computesslcertificatesaggregatedlist) - Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
* [computeSslCertificatesDelete](#computesslcertificatesdelete) - Deletes the specified SslCertificate resource.
* [computeSslCertificatesGet](#computesslcertificatesget) - Returns the specified SslCertificate resource.
* [computeSslCertificatesInsert](#computesslcertificatesinsert) - Creates a SslCertificate resource in the specified project using the data included in the request.
* [computeSslCertificatesList](#computesslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project.
* [computeSslCertificatesTestIamPermissions](#computesslcertificatestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSslCertificatesAggregatedList

Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslCertificatesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->fields = 'accusamus';
    $request->filter = 'possimus';
    $request->includeAllScopes = false;
    $request->key = 'ab';
    $request->maxResults = 76531;
    $request->oauthToken = 'inventore';
    $request->orderBy = 'sit';
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'animi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeSslCertificatesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeSslCertificatesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCertificates->computeSslCertificatesAggregatedList($request, $requestSecurity);

    if ($response->sslCertificateAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslCertificatesDelete

Deletes the specified SslCertificate resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslCertificatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'saepe';
    $request->key = 'accusamus';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'possimus';
    $request->requestId = 'atque';
    $request->sslCertificate = 'consectetur';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'explicabo';

    $requestSecurity = new ComputeSslCertificatesDeleteSecurity();
    $requestSecurity->option1 = new ComputeSslCertificatesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCertificates->computeSslCertificatesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslCertificatesGet

Returns the specified SslCertificate resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslCertificatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'corporis';
    $request->key = 'unde';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'accusamus';
    $request->sslCertificate = 'debitis';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'harum';

    $requestSecurity = new ComputeSslCertificatesGetSecurity();
    $requestSecurity->option1 = new ComputeSslCertificatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCertificates->computeSslCertificatesGet($request, $requestSecurity);

    if ($response->sslCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslCertificatesInsert

Creates a SslCertificate resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificate;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateManagedSslCertificate;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateManagedSslCertificateDomainStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateManagedSslCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateSelfManagedSslCertificate;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslCertificatesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslCertificate = new SslCertificate();
    $request->sslCertificate->certificate = 'quam';
    $request->sslCertificate->creationTimestamp = 'itaque';
    $request->sslCertificate->description = 'nisi';
    $request->sslCertificate->expireTime = 'molestias';
    $request->sslCertificate->id = 'deleniti';
    $request->sslCertificate->kind = 'unde';
    $request->sslCertificate->managed = new SslCertificateManagedSslCertificate();
    $request->sslCertificate->managed->domainStatus = [
        'delectus' => SslCertificateManagedSslCertificateDomainStatusEnum::ACTIVE,
        'ipsam' => SslCertificateManagedSslCertificateDomainStatusEnum::ACTIVE,
    ];
    $request->sslCertificate->managed->domains = [
        'fuga',
        'reprehenderit',
        'impedit',
    ];
    $request->sslCertificate->managed->status = SslCertificateManagedSslCertificateStatusEnum::PROVISIONING;
    $request->sslCertificate->name = 'Percy Kautzer';
    $request->sslCertificate->privateKey = 'quam';
    $request->sslCertificate->region = 'nobis';
    $request->sslCertificate->selfLink = 'eaque';
    $request->sslCertificate->selfLinkWithId = 'vero';
    $request->sslCertificate->selfManaged = new SslCertificateSelfManagedSslCertificate();
    $request->sslCertificate->selfManaged->certificate = 'quia';
    $request->sslCertificate->selfManaged->privateKey = 'laboriosam';
    $request->sslCertificate->subjectAlternativeNames = [
        'sequi',
        'repellat',
        'dolor',
    ];
    $request->sslCertificate->type = SslCertificateTypeEnum::SELF_MANAGED;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatum';
    $request->fields = 'fugiat';
    $request->key = 'nobis';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'nemo';
    $request->requestId = 'laboriosam';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'reiciendis';

    $requestSecurity = new ComputeSslCertificatesInsertSecurity();
    $requestSecurity->option1 = new ComputeSslCertificatesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCertificates->computeSslCertificatesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslCertificatesList

Retrieves the list of SslCertificate resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'voluptatem';
    $request->filter = 'magnam';
    $request->key = 'odit';
    $request->maxResults = 88663;
    $request->oauthToken = 'alias';
    $request->orderBy = 'vero';
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'facilis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ea';
    $request->userIp = 'doloribus';

    $requestSecurity = new ComputeSslCertificatesListSecurity();
    $requestSecurity->option1 = new ComputeSslCertificatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCertificates->computeSslCertificatesList($request, $requestSecurity);

    if ($response->sslCertificateList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslCertificatesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslCertificatesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslCertificatesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'voluptas',
        'sint',
    ];
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repudiandae';
    $request->fields = 'dolor';
    $request->key = 'blanditiis';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'cum';
    $request->resource = 'possimus';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'nesciunt';

    $requestSecurity = new ComputeSslCertificatesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeSslCertificatesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCertificates->computeSslCertificatesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
