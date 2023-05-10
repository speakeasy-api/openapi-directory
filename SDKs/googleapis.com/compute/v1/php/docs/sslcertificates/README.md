# sslCertificates

### Available Operations

* [computeSslCertificatesAggregatedList](#computesslcertificatesaggregatedlist) - Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
* [computeSslCertificatesDelete](#computesslcertificatesdelete) - Deletes the specified SslCertificate resource.
* [computeSslCertificatesGet](#computesslcertificatesget) - Returns the specified SslCertificate resource.
* [computeSslCertificatesInsert](#computesslcertificatesinsert) - Creates a SslCertificate resource in the specified project using the data included in the request.
* [computeSslCertificatesList](#computesslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project.

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
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'id';
    $request->filter = 'laboriosam';
    $request->includeAllScopes = false;
    $request->key = 'nostrum';
    $request->maxResults = 712756;
    $request->oauthToken = 'tempora';
    $request->orderBy = 'fugiat';
    $request->pageToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'ea';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'cupiditate';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'recusandae';
    $request->key = 'eos';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'delectus';
    $request->requestId = 'quod';
    $request->sslCertificate = 'tenetur';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'esse';

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
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'harum';
    $request->key = 'corrupti';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'quisquam';
    $request->sslCertificate = 'sequi';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'perspiciatis';

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
    $request->sslCertificate->certificate = 'fugit';
    $request->sslCertificate->creationTimestamp = 'deleniti';
    $request->sslCertificate->description = 'dolores';
    $request->sslCertificate->expireTime = 'est';
    $request->sslCertificate->id = 'enim';
    $request->sslCertificate->kind = 'quasi';
    $request->sslCertificate->managed = new SslCertificateManagedSslCertificate();
    $request->sslCertificate->managed->domainStatus = [
        'magnam' => SslCertificateManagedSslCertificateDomainStatusEnum::ACTIVE,
        'optio' => SslCertificateManagedSslCertificateDomainStatusEnum::PROVISIONING,
        'iure' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_CAA_FORBIDDEN,
        'iste' => SslCertificateManagedSslCertificateDomainStatusEnum::FAILED_CAA_FORBIDDEN,
    ];
    $request->sslCertificate->managed->domains = [
        'illum',
        'dolor',
        'repellendus',
        'nihil',
    ];
    $request->sslCertificate->managed->status = SslCertificateManagedSslCertificateStatusEnum::ACTIVE;
    $request->sslCertificate->name = 'Rachael Bernier';
    $request->sslCertificate->privateKey = 'ad';
    $request->sslCertificate->region = 'rem';
    $request->sslCertificate->selfLink = 'beatae';
    $request->sslCertificate->selfManaged = new SslCertificateSelfManagedSslCertificate();
    $request->sslCertificate->selfManaged->certificate = 'necessitatibus';
    $request->sslCertificate->selfManaged->privateKey = 'provident';
    $request->sslCertificate->subjectAlternativeNames = [
        'porro',
        'minus',
        'officiis',
    ];
    $request->sslCertificate->type = SslCertificateTypeEnum::MANAGED;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'autem';
    $request->key = 'aliquid';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'possimus';
    $request->requestId = 'culpa';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'dolor';

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
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'optio';
    $request->filter = 'ex';
    $request->key = 'repellat';
    $request->maxResults = 934620;
    $request->oauthToken = 'alias';
    $request->orderBy = 'sint';
    $request->pageToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'minima';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'ad';

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
