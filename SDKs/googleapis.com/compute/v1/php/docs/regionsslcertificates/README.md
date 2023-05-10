# regionSslCertificates

### Available Operations

* [computeRegionSslCertificatesDelete](#computeregionsslcertificatesdelete) - Deletes the specified SslCertificate resource in the region.
* [computeRegionSslCertificatesGet](#computeregionsslcertificatesget) - Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
* [computeRegionSslCertificatesInsert](#computeregionsslcertificatesinsert) - Creates a SslCertificate resource in the specified project and region using the data included in the request
* [computeRegionSslCertificatesList](#computeregionsslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project in the specified region.

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
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugit';
    $request->fields = 'nostrum';
    $request->key = 'ipsam';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'cumque';
    $request->region = 'aliquam';
    $request->requestId = 'corrupti';
    $request->sslCertificate = 'ipsa';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'necessitatibus';

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
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'totam';
    $request->fields = 'aliquid';
    $request->key = 'dignissimos';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'tempore';
    $request->region = 'sapiente';
    $request->sslCertificate = 'quae';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'molestias';

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
    $request->sslCertificate->certificate = 'vel';
    $request->sslCertificate->creationTimestamp = 'deserunt';
    $request->sslCertificate->description = 'ducimus';
    $request->sslCertificate->expireTime = 'officiis';
    $request->sslCertificate->id = 'deleniti';
    $request->sslCertificate->kind = 'fugit';
    $request->sslCertificate->managed = new SslCertificateManagedSslCertificate();
    $request->sslCertificate->managed->domainStatus = [
        'facere' => SslCertificateManagedSslCertificateDomainStatusEnum::PROVISIONING,
        'omnis' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_RATE_LIMITED,
        'voluptatem' => SslCertificateManagedSslCertificateDomainStatusEnum::PROVISIONING,
        'cumque' => SslCertificateManagedSslCertificateDomainStatusEnum::DOMAIN_STATUS_UNSPECIFIED,
    ];
    $request->sslCertificate->managed->domains = [
        'magni',
        'quod',
        'aliquid',
    ];
    $request->sslCertificate->managed->status = SslCertificateManagedSslCertificateStatusEnum::PROVISIONING;
    $request->sslCertificate->name = 'Genevieve Willms';
    $request->sslCertificate->privateKey = 'ratione';
    $request->sslCertificate->region = 'a';
    $request->sslCertificate->selfLink = 'quis';
    $request->sslCertificate->selfManaged = new SslCertificateSelfManagedSslCertificate();
    $request->sslCertificate->selfManaged->certificate = 'nostrum';
    $request->sslCertificate->selfManaged->privateKey = 'totam';
    $request->sslCertificate->subjectAlternativeNames = [
        'distinctio',
        'accusamus',
        'est',
    ];
    $request->sslCertificate->type = SslCertificateTypeEnum::MANAGED;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'eius';
    $request->key = 'voluptates';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'necessitatibus';
    $request->region = 'ratione';
    $request->requestId = 'porro';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'numquam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'veniam';
    $request->filter = 'ab';
    $request->key = 'neque';
    $request->maxResults = 991472;
    $request->oauthToken = 'autem';
    $request->orderBy = 'nulla';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'magni';
    $request->region = 'similique';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'molestiae';

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
