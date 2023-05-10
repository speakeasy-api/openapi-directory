# rootLdapService

## Overview

LDAP services.

### Available Operations

* [createLdapService](#createldapservice) - Add a new authentication domain
* [deleteLdapService](#deleteldapservice) - Delete an authentication domain for the given ID
* [getLdapService](#getldapservice) - Get a LDAP service for the given ID
* [patchLdapService](#patchldapservice) - Update an existing authentication domain
* [putLdapService](#putldapservice) - Replace the values of an authentication domain
* [queryLdapService](#queryldapservice) - Get a list of LDAP services

## createLdapService

Add a new authentication domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\LdapServiceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedLdapConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LdapServiceInfo();
    $request->advancedOptions = new AdvancedLdapConfiguration();
    $request->advancedOptions->groupMaxLevel = 950337;
    $request->advancedOptions->groupMemberAttribute = 'recusandae';
    $request->advancedOptions->groupMembershipAttribute = 'expedita';
    $request->advancedOptions->groupSearchFilter = 'iusto';
    $request->advancedOptions->userNameSearchAttribute = 'esse';
    $request->advancedOptions->userSearchFilter = 'harum';
    $request->authServers = [
        'quod',
        'ratione',
    ];
    $request->baseDn = 'totam';
    $request->bindUserName = 'vero';
    $request->bindUserPassword = 'dolore';
    $request->certificateId = 'nam';
    $request->dynamicDnsName = 'officia';
    $request->isTotpEnforced = false;
    $request->mfaServerId = 'maiores';
    $request->name = 'Joshua Turcotte III';

    $response = $sdk->rootLdapService->createLdapService($request);

    if ($response->ldapServiceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLdapService

Delete an authentication domain for the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLdapServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLdapServiceRequest();
    $request->id = 'ef890a54-b475-4f16-b56d-385a3c4ac631';

    $response = $sdk->rootLdapService->deleteLdapService($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLdapService

Get a LDAP service for the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetLdapServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLdapServiceRequest();
    $request->id = 'b99e26ce-d8f9-4fdb-9410-f63bbf817837';

    $response = $sdk->rootLdapService->getLdapService($request);

    if ($response->ldapServiceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchLdapService

Modify the values of a specified authentication domain object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchLdapServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\LdapServiceInfoUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedLdapConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchLdapServiceRequest();
    $request->ldapServiceInfoUpdate = new LdapServiceInfoUpdate();
    $request->ldapServiceInfoUpdate->advancedOptions = new AdvancedLdapConfiguration();
    $request->ldapServiceInfoUpdate->advancedOptions->groupMaxLevel = 722151;
    $request->ldapServiceInfoUpdate->advancedOptions->groupMemberAttribute = 'aperiam';
    $request->ldapServiceInfoUpdate->advancedOptions->groupMembershipAttribute = 'vitae';
    $request->ldapServiceInfoUpdate->advancedOptions->groupSearchFilter = 'mollitia';
    $request->ldapServiceInfoUpdate->advancedOptions->userNameSearchAttribute = 'asperiores';
    $request->ldapServiceInfoUpdate->advancedOptions->userSearchFilter = 'at';
    $request->ldapServiceInfoUpdate->authServers = [
        'quam',
        'deleniti',
        'rem',
        'vel',
    ];
    $request->ldapServiceInfoUpdate->baseDn = 'eos';
    $request->ldapServiceInfoUpdate->bindUserName = 'labore';
    $request->ldapServiceInfoUpdate->bindUserPassword = 'sunt';
    $request->ldapServiceInfoUpdate->certificateId = 'blanditiis';
    $request->ldapServiceInfoUpdate->dynamicDnsName = 'iste';
    $request->ldapServiceInfoUpdate->isTotpEnforced = false;
    $request->ldapServiceInfoUpdate->mfaServerId = 'accusamus';
    $request->ldapServiceInfoUpdate->name = 'Troy Grant';
    $request->id = '3f5033f1-9dbf-4125-8e41-52eab9cd7e52';

    $response = $sdk->rootLdapService->patchLdapService($request);

    if ($response->ldapServiceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLdapService

Replace the values of a specified authentication domain object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PutLdapServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\LdapServiceInfoUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedLdapConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLdapServiceRequest();
    $request->ldapServiceInfoUpdate = new LdapServiceInfoUpdate();
    $request->ldapServiceInfoUpdate->advancedOptions = new AdvancedLdapConfiguration();
    $request->ldapServiceInfoUpdate->advancedOptions->groupMaxLevel = 138306;
    $request->ldapServiceInfoUpdate->advancedOptions->groupMemberAttribute = 'eius';
    $request->ldapServiceInfoUpdate->advancedOptions->groupMembershipAttribute = 'error';
    $request->ldapServiceInfoUpdate->advancedOptions->groupSearchFilter = 'vel';
    $request->ldapServiceInfoUpdate->advancedOptions->userNameSearchAttribute = 'dolorum';
    $request->ldapServiceInfoUpdate->advancedOptions->userSearchFilter = 'alias';
    $request->ldapServiceInfoUpdate->authServers = [
        'ab',
        'sunt',
        'amet',
        'cum',
    ];
    $request->ldapServiceInfoUpdate->baseDn = 'iusto';
    $request->ldapServiceInfoUpdate->bindUserName = 'corrupti';
    $request->ldapServiceInfoUpdate->bindUserPassword = 'non';
    $request->ldapServiceInfoUpdate->certificateId = 'esse';
    $request->ldapServiceInfoUpdate->dynamicDnsName = 'vero';
    $request->ldapServiceInfoUpdate->isTotpEnforced = false;
    $request->ldapServiceInfoUpdate->mfaServerId = 'eligendi';
    $request->ldapServiceInfoUpdate->name = 'Dr. Guadalupe Walsh';
    $request->id = '7f3c4cce-4b6d-4769-aff3-c5747501357e';

    $response = $sdk->rootLdapService->putLdapService($request);

    if ($response->ldapServiceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryLdapService

Get a list of LDAP services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootLdapService->queryLdapService();

    if ($response->ldapServiceSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
