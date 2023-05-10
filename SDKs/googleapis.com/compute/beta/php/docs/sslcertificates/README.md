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
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'debitis';
    $request->filter = 'maxime';
    $request->includeAllScopes = false;
    $request->key = 'molestias';
    $request->maxResults = 845591;
    $request->oauthToken = 'quasi';
    $request->orderBy = 'aperiam';
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'tenetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'quisquam';

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
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'corrupti';
    $request->key = 'dolore';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'quia';
    $request->requestId = 'totam';
    $request->sslCertificate = 'repudiandae';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'commodi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'soluta';
    $request->key = 'molestiae';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'sequi';
    $request->sslCertificate = 'ut';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'labore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslCertificate = new SslCertificate();
    $request->sslCertificate->certificate = 'incidunt';
    $request->sslCertificate->creationTimestamp = 'cumque';
    $request->sslCertificate->description = 'quibusdam';
    $request->sslCertificate->expireTime = 'nam';
    $request->sslCertificate->id = 'adipisci';
    $request->sslCertificate->kind = 'dicta';
    $request->sslCertificate->managed = new SslCertificateManagedSslCertificate();
    $request->sslCertificate->managed->domainStatus = [
        'provident' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_NOT_VISIBLE,
        'et' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_CAA_FORBIDDEN,
    ];
    $request->sslCertificate->managed->domains = [
        'qui',
        'quis',
        'sed',
        'perferendis',
    ];
    $request->sslCertificate->managed->status = SslCertificateManagedSslCertificateStatusEnum::PROVISIONING;
    $request->sslCertificate->name = 'Dana Cartwright';
    $request->sslCertificate->privateKey = 'magnam';
    $request->sslCertificate->region = 'tempore';
    $request->sslCertificate->selfLink = 'consequatur';
    $request->sslCertificate->selfManaged = new SslCertificateSelfManagedSslCertificate();
    $request->sslCertificate->selfManaged->certificate = 'nulla';
    $request->sslCertificate->selfManaged->privateKey = 'fuga';
    $request->sslCertificate->subjectAlternativeNames = [
        'repellendus',
        'quaerat',
        'quidem',
        'corporis',
    ];
    $request->sslCertificate->type = SslCertificateTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'sunt';
    $request->key = 'ex';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'ratione';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'ullam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'iure';
    $request->filter = 'doloremque';
    $request->key = 'pariatur';
    $request->maxResults = 639370;
    $request->oauthToken = 'est';
    $request->orderBy = 'voluptatem';
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'eius';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quod',
        'assumenda',
        'illum',
        'ipsum',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'quidem';
    $request->key = 'reiciendis';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'amet';
    $request->resource = 'natus';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'illo';

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
