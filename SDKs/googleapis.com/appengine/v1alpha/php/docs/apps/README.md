# apps

### Available Operations

* [appengineAppsAuthorizedCertificatesCreate](#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesDelete](#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesGet](#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesList](#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [appengineAppsAuthorizedCertificatesPatch](#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [appengineAppsAuthorizedDomainsList](#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [appengineAppsDomainMappingsCreate](#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [appengineAppsDomainMappingsDelete](#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [appengineAppsDomainMappingsGet](#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [appengineAppsDomainMappingsList](#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [appengineAppsDomainMappingsPatch](#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [appengineAppsLocationsGet](#appengineappslocationsget) - Gets information about a location.
* [appengineAppsLocationsList](#appengineappslocationslist) - Lists information about the supported locations for this service.
* [appengineAppsOperationsGet](#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineAppsOperationsList](#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## appengineAppsAuthorizedCertificatesCreate

Uploads the specified SSL certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRawData;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'ipsum';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'excepturi';
    $request->authorizedCertificate->displayName = 'aspernatur';
    $request->authorizedCertificate->domainMappingsCount = 18789;
    $request->authorizedCertificate->domainNames = [
        'natus',
        'sed',
    ];
    $request->authorizedCertificate->expireTime = 'iste';
    $request->authorizedCertificate->id = '396fea75-96eb-410f-aaa2-352c5955907a';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'doloribus';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_CHECKING;
    $request->authorizedCertificate->name = 'Angie Durgan';
    $request->authorizedCertificate->visibleDomainMappings = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'velit';
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesCreate($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesDelete

Deletes the specified SSL certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'tenetur';
    $request->authorizedCertificatesId = 'ipsam';
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesGet

Gets the specified SSL certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'vero';
    $request->authorizedCertificatesId = 'nihil';
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';
    $request->view = AppengineAppsAuthorizedCertificatesGetViewEnum::BASIC_CERTIFICATE;

    $requestSecurity = new AppengineAppsAuthorizedCertificatesGetSecurity();
    $requestSecurity->option1 = new AppengineAppsAuthorizedCertificatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesGet($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesList

Lists all SSL certificates the user is authorized to administer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'dicta';
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->pageSize = 688661;
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';
    $request->view = AppengineAppsAuthorizedCertificatesListViewEnum::BASIC_CERTIFICATE;

    $requestSecurity = new AppengineAppsAuthorizedCertificatesListSecurity();
    $requestSecurity->option1 = new AppengineAppsAuthorizedCertificatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesList($request, $requestSecurity);

    if ($response->listAuthorizedCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesPatch

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRawData;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'quidem';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'molestias';
    $request->authorizedCertificate->displayName = 'excepturi';
    $request->authorizedCertificate->domainMappingsCount = 865103;
    $request->authorizedCertificate->domainNames = [
        'praesentium',
        'rem',
    ];
    $request->authorizedCertificate->expireTime = 'voluptates';
    $request->authorizedCertificate->id = '1e91e450-ad2a-4bd4-8269-802d502a94bb';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'labore';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_CHECKING;
    $request->authorizedCertificate->name = 'Ethel Roob';
    $request->authorizedCertificate->visibleDomainMappings = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'a';
    $request->authorizedCertificatesId = 'dolorum';
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->updateMask = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesPatch($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedDomainsList

Lists all domains the user is authorized to administer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'laborum';
    $request->callback = 'accusamus';
    $request->fields = 'non';
    $request->key = 'occaecati';
    $request->oauthToken = 'enim';
    $request->pageSize = 881736;
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new AppengineAppsAuthorizedDomainsListSecurity();
    $requestSecurity->option1 = new AppengineAppsAuthorizedDomainsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedDomainsList($request, $requestSecurity);

    if ($response->listAuthorizedDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsCreate

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainMapping;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecord;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsCreateOverrideStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domainMapping = new DomainMapping();
    $request->domainMapping->id = '88f3a669-9707-44ba-8469-b6e214195989';
    $request->domainMapping->name = 'Angie Wisozk';
    $request->domainMapping->resourceRecords = [
        new ResourceRecord(),
        new ResourceRecord(),
    ];
    $request->domainMapping->sslSettings = new SslSettings();
    $request->domainMapping->sslSettings->certificateId = 'dolor';
    $request->domainMapping->sslSettings->isManagedCertificate = false;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'nemo';
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->noManagedCertificate = false;
    $request->oauthToken = 'debitis';
    $request->overrideStrategy = AppengineAppsDomainMappingsCreateOverrideStrategyEnum::UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY;
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new AppengineAppsDomainMappingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsDelete

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'repudiandae';
    $request->callback = 'ullam';
    $request->domainMappingsId = 'expedita';
    $request->fields = 'nihil';
    $request->key = 'repellat';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new AppengineAppsDomainMappingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsGet

Gets the specified domain mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'natus';
    $request->callback = 'magni';
    $request->domainMappingsId = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AppengineAppsDomainMappingsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsDomainMappingsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsGet($request, $requestSecurity);

    if ($response->domainMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsList

Lists the domain mappings on an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'ab';
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->pageSize = 420075;
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new AppengineAppsDomainMappingsListSecurity();
    $requestSecurity->option1 = new AppengineAppsDomainMappingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsList($request, $requestSecurity);

    if ($response->listDomainMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsPatch

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainMapping;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecord;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domainMapping = new DomainMapping();
    $request->domainMapping->id = '0d30c5fb-b258-4705-b202-c73d5fe9b90c';
    $request->domainMapping->name = 'Ms. Vickie Mraz';
    $request->domainMapping->resourceRecords = [
        new ResourceRecord(),
    ];
    $request->domainMapping->sslSettings = new SslSettings();
    $request->domainMapping->sslSettings->certificateId = 'asperiores';
    $request->domainMapping->sslSettings->isManagedCertificate = false;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'iste';
    $request->callback = 'dolorum';
    $request->domainMappingsId = 'deleniti';
    $request->fields = 'pariatur';
    $request->key = 'provident';
    $request->noManagedCertificate = false;
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->updateMask = 'delectus';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new AppengineAppsDomainMappingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsLocationsGet

Gets information about a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'dolor';
    $request->callback = 'qui';
    $request->fields = 'ipsum';
    $request->key = 'hic';
    $request->locationsId = 'excepturi';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new AppengineAppsLocationsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsLocationsGet($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'veritatis';
    $request->callback = 'ipsa';
    $request->fields = 'ipsa';
    $request->filter = 'iure';
    $request->key = 'odio';
    $request->oauthToken = 'quaerat';
    $request->pageSize = 881005;
    $request->pageToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new AppengineAppsLocationsListSecurity();
    $requestSecurity->option1 = new AppengineAppsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'fugiat';
    $request->callback = 'ab';
    $request->fields = 'soluta';
    $request->key = 'dolorum';
    $request->oauthToken = 'iusto';
    $request->operationsId = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new AppengineAppsOperationsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'nihil';
    $request->callback = 'ipsum';
    $request->fields = 'voluptate';
    $request->filter = 'id';
    $request->key = 'saepe';
    $request->oauthToken = 'eius';
    $request->pageSize = 137220;
    $request->pageToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new AppengineAppsOperationsListSecurity();
    $requestSecurity->option1 = new AppengineAppsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
