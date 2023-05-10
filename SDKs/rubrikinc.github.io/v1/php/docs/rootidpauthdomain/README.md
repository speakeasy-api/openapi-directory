# rootIdpAuthDomain

## Overview

IdP authentication domains.

### Available Operations

* [createIdProviderAuthDomain](#createidproviderauthdomain) - Add a new IdP authentication domain
* [deleteIdProviderAuthDomain](#deleteidproviderauthdomain) - Delete an IdP authentication domain for the given ID
* [getIdProviderAuthDomain](#getidproviderauthdomain) - Get an IdP authentication domain for the given id
* [queryIdProviderAuthDomain](#queryidproviderauthdomain) - Get a list of IdP authentication domains
* [updateIdProviderAuthDomain](#updateidproviderauthdomain) - Update an existing IdP authentication domain

## createIdProviderAuthDomain

Add a new IdP authentication domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\IdProviderAuthDomainInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdProviderAuthDomainInfo();
    $request->metadataXmlBase64 = 'voluptates';
    $request->name = 'Thomas Hahn';
    $request->skewnessInSec = 294650;

    $response = $sdk->rootIdpAuthDomain->createIdProviderAuthDomain($request);

    if ($response->idProviderAuthDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIdProviderAuthDomain

Delete an IdP authentication domain for the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdProviderAuthDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIdProviderAuthDomainRequest();
    $request->id = '0d6a1831-c87a-4df5-96fd-f1ad837ae80c';

    $response = $sdk->rootIdpAuthDomain->deleteIdProviderAuthDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIdProviderAuthDomain

Get an IdP authentication domain for the given id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetIdProviderAuthDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdProviderAuthDomainRequest();
    $request->id = '1c19c95b-a998-4678-ba3f-696991af388c';

    $response = $sdk->rootIdpAuthDomain->getIdProviderAuthDomain($request);

    if ($response->idProviderAuthDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryIdProviderAuthDomain

Get a list of IdP authentication domains.

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
    $response = $sdk->rootIdpAuthDomain->queryIdProviderAuthDomain();

    if ($response->idProviderAuthDomainSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIdProviderAuthDomain

Update an existing IdP authentication domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdProviderAuthDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdProviderAuthDomainInfoUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIdProviderAuthDomainRequest();
    $request->idProviderAuthDomainInfoUpdate = new IdProviderAuthDomainInfoUpdate();
    $request->idProviderAuthDomainInfoUpdate->metadataXmlBase64 = 'repudiandae';
    $request->idProviderAuthDomainInfoUpdate->name = 'Mrs. Kim Jones';
    $request->idProviderAuthDomainInfoUpdate->skewnessInSec = 266976;
    $request->id = '8c7977a0-ef2f-4536-828e-feef934152ed';

    $response = $sdk->rootIdpAuthDomain->updateIdProviderAuthDomain($request);

    if ($response->idProviderAuthDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
