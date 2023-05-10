# projects

### Available Operations

* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate](#certificatemanagerprojectslocationscertificateissuanceconfigscreate) - Creates a new CertificateIssuanceConfig in a given project and location.
* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsList](#certificatemanagerprojectslocationscertificateissuanceconfigslist) - Lists CertificateIssuanceConfigs in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate](#certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate) - Creates a new CertificateMapEntry in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList](#certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist) - Lists CertificateMapEntries in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCreate](#certificatemanagerprojectslocationscertificatemapscreate) - Creates a new CertificateMap in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsList](#certificatemanagerprojectslocationscertificatemapslist) - Lists CertificateMaps in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesCreate](#certificatemanagerprojectslocationscertificatescreate) - Creates a new Certificate in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesList](#certificatemanagerprojectslocationscertificateslist) - Lists Certificates in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsCreate](#certificatemanagerprojectslocationsdnsauthorizationscreate) - Creates a new DnsAuthorization in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsList](#certificatemanagerprojectslocationsdnsauthorizationslist) - Lists DnsAuthorizations in a given project and location.
* [certificatemanagerProjectsLocationsList](#certificatemanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [certificatemanagerProjectsLocationsOperationsCancel](#certificatemanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [certificatemanagerProjectsLocationsOperationsList](#certificatemanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [certificatemanagerProjectsLocationsTrustConfigsCreate](#certificatemanagerprojectslocationstrustconfigscreate) - Creates a new TrustConfig in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsDelete](#certificatemanagerprojectslocationstrustconfigsdelete) - Deletes a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsGet](#certificatemanagerprojectslocationstrustconfigsget) - Gets details of a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsList](#certificatemanagerprojectslocationstrustconfigslist) - Lists TrustConfigs in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsPatch](#certificatemanagerprojectslocationstrustconfigspatch) - Updates a TrustConfig.

## certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate

Creates a new CertificateIssuanceConfig in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIssuanceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityConfig;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIssuanceConfigKeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->certificateIssuanceConfigInput = new CertificateIssuanceConfigInput();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig = new CertificateAuthorityConfig();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig->certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig->certificateAuthorityServiceConfig->caPool = 'deserunt';
    $request->certificateIssuanceConfigInput->description = 'perferendis';
    $request->certificateIssuanceConfigInput->keyAlgorithm = CertificateIssuanceConfigKeyAlgorithmEnum::RSA2048;
    $request->certificateIssuanceConfigInput->labels = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->certificateIssuanceConfigInput->lifetime = 'quod';
    $request->certificateIssuanceConfigInput->name = 'Deanna Sauer MD';
    $request->certificateIssuanceConfigInput->rotationWindowPercentage = 639921;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->certificateIssuanceConfigId = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificateIssuanceConfigsList

Lists CertificateIssuanceConfigs in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->filter = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->orderBy = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateIssuanceConfigsList($request, $requestSecurity);

    if ($response->listCertificateIssuanceConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate

Creates a new CertificateMapEntry in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateMapEntryInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateMapEntryMatcherEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->certificateMapEntryInput = new CertificateMapEntryInput();
    $request->certificateMapEntryInput->certificates = [
        'in',
        'corporis',
        'iste',
    ];
    $request->certificateMapEntryInput->description = 'iure';
    $request->certificateMapEntryInput->hostname = 'unsteady-progress.com';
    $request->certificateMapEntryInput->labels = [
        'reiciendis' => 'est',
    ];
    $request->certificateMapEntryInput->matcher = CertificateMapEntryMatcherEnum::PRIMARY;
    $request->certificateMapEntryInput->name = 'Ernest Ebert';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->certificateMapEntryId = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList

Lists CertificateMapEntries in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->filter = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'numquam';
    $request->pageSize = 414369;
    $request->pageToken = 'quam';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList($request, $requestSecurity);

    if ($response->listCertificateMapEntriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificateMapsCreate

Creates a new CertificateMap in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateMapInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateMapsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->certificateMapInput = new CertificateMapInput();
    $request->certificateMapInput->description = 'vitae';
    $request->certificateMapInput->labels = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->certificateMapInput->name = 'Mr. Alberta Schuster';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->certificateMapId = 'reiciendis';
    $request->fields = 'voluptatibus';
    $request->key = 'vero';
    $request->oauthToken = 'nihil';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateMapsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificateMapsList

Lists CertificateMaps in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateMapsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateMapsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->filter = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->orderBy = 'corporis';
    $request->pageSize = 296140;
    $request->pageToken = 'iusto';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateMapsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateMapsList($request, $requestSecurity);

    if ($response->listCertificateMapsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificatesCreate

Creates a new Certificate in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->certificateInput = new CertificateInput();
    $request->certificateInput->description = 'repudiandae';
    $request->certificateInput->labels = [
        'ipsum' => 'quidem',
    ];
    $request->certificateInput->managed = new ManagedCertificateInput();
    $request->certificateInput->managed->dnsAuthorizations = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->certificateInput->managed->domains = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->certificateInput->managed->issuanceConfig = 'repudiandae';
    $request->certificateInput->name = 'Patrick Ward';
    $request->certificateInput->scope = CertificateScopeEnum::DEFAULT;
    $request->certificateInput->selfManaged = new SelfManagedCertificate();
    $request->certificateInput->selfManaged->pemCertificate = 'est';
    $request->certificateInput->selfManaged->pemPrivateKey = 'quibusdam';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->certificateId = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificatesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsCertificatesList

Lists Certificates in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->filter = 'dolorum';
    $request->key = 'excepturi';
    $request->oauthToken = 'tempora';
    $request->orderBy = 'facilis';
    $request->pageSize = 735194;
    $request->pageToken = 'labore';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificatesList($request, $requestSecurity);

    if ($response->listCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsDnsAuthorizationsCreate

Creates a new DnsAuthorization in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsAuthorizationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dnsAuthorizationInput = new DnsAuthorizationInput();
    $request->dnsAuthorizationInput->description = 'aliquid';
    $request->dnsAuthorizationInput->domain = 'provident';
    $request->dnsAuthorizationInput->labels = [
        'sint' => 'officia',
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->dnsAuthorizationInput->name = 'Mrs. Emilio Price';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->dnsAuthorizationId = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsDnsAuthorizationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsDnsAuthorizationsList

Lists DnsAuthorizations in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->filter = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->orderBy = 'nisi';
    $request->pageSize = 423855;
    $request->pageToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsDnsAuthorizationsList($request, $requestSecurity);

    if ($response->listDnsAuthorizationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->filter = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->pageSize = 569965;
    $request->pageToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new CertificatemanagerProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->name = 'Frederick Schoen';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new CertificatemanagerProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->filter = 'sed';
    $request->key = 'saepe';
    $request->name = 'Edward Crooks';
    $request->oauthToken = 'magni';
    $request->pageSize = 123820;
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new CertificatemanagerProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsTrustConfigsCreate

Creates a new TrustConfig in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustStore;
use \OpenAPI\OpenAPI\Models\Shared\IntermediateCA;
use \OpenAPI\OpenAPI\Models\Shared\TrustAnchor;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsTrustConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->trustConfigInput = new TrustConfigInput();
    $request->trustConfigInput->description = 'excepturi';
    $request->trustConfigInput->etag = 'odit';
    $request->trustConfigInput->labels = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->trustConfigInput->name = 'Colleen Johnston PhD';
    $request->trustConfigInput->trustStores = [
        new TrustStore(),
        new TrustStore(),
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->oauthToken = 'cumque';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->trustConfigId = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new CertificatemanagerProjectsLocationsTrustConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsTrustConfigsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsTrustConfigsDelete

Deletes a single TrustConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsTrustConfigsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->etag = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->name = 'Jacqueline Schimmel';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new CertificatemanagerProjectsLocationsTrustConfigsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsTrustConfigsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsTrustConfigsGet

Gets details of a single TrustConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsTrustConfigsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->name = 'Jeremiah Beatty';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new CertificatemanagerProjectsLocationsTrustConfigsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsTrustConfigsGet($request, $requestSecurity);

    if ($response->trustConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsTrustConfigsList

Lists TrustConfigs in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsTrustConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'provident';
    $request->filter = 'nobis';
    $request->key = 'libero';
    $request->oauthToken = 'delectus';
    $request->orderBy = 'quaerat';
    $request->pageSize = 554242;
    $request->pageToken = 'aliquid';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new CertificatemanagerProjectsLocationsTrustConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsTrustConfigsList($request, $requestSecurity);

    if ($response->listTrustConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificatemanagerProjectsLocationsTrustConfigsPatch

Updates a TrustConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustStore;
use \OpenAPI\OpenAPI\Models\Shared\IntermediateCA;
use \OpenAPI\OpenAPI\Models\Shared\TrustAnchor;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsTrustConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsTrustConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->trustConfigInput = new TrustConfigInput();
    $request->trustConfigInput->description = 'hic';
    $request->trustConfigInput->etag = 'excepturi';
    $request->trustConfigInput->labels = [
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->trustConfigInput->name = 'Melissa Bednar';
    $request->trustConfigInput->trustStores = [
        new TrustStore(),
        new TrustStore(),
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->key = 'natus';
    $request->name = 'Kay Bailey DDS';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->updateMask = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new CertificatemanagerProjectsLocationsTrustConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsTrustConfigsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
