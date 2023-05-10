# idps

### Available Operations

* [createOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [deleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [getOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [updateOrganizationSamlIdp](#updateorganizationsamlidp) - Update a SAML IdP in your organization

## createOrganizationSamlIdp

Create a SAML IdP for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlIdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlIdpRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationSamlIdpRequest();
    $request->requestBody = new CreateOrganizationSamlIdpRequestBody();
    $request->requestBody->sloLogoutUrl = 'ipsum';
    $request->requestBody->x509certSha1Fingerprint = 'recusandae';
    $request->organizationId = 'inventore';

    $response = $sdk->idps->createOrganizationSamlIdp($request);

    if ($response->createOrganizationSamlIdp201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationSamlIdp

Remove a SAML IdP in your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationSamlIdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationSamlIdpRequest();
    $request->idpId = 'ipsum';
    $request->organizationId = 'error';

    $response = $sdk->idps->deleteOrganizationSamlIdp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlIdp

Get a SAML IdP from your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlIdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlIdpRequest();
    $request->idpId = 'numquam';
    $request->organizationId = 'praesentium';

    $response = $sdk->idps->getOrganizationSamlIdp($request);

    if ($response->getOrganizationSamlIdp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlIdps

List the SAML IdPs in your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlIdpsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlIdpsRequest();
    $request->organizationId = 'dolores';

    $response = $sdk->idps->getOrganizationSamlIdps($request);

    if ($response->getOrganizationSamlIdps200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSamlIdp

Update a SAML IdP in your organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlIdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlIdpRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSamlIdpRequest();
    $request->requestBody = new UpdateOrganizationSamlIdpRequestBody();
    $request->requestBody->sloLogoutUrl = 'consectetur';
    $request->requestBody->x509certSha1Fingerprint = 'dicta';
    $request->idpId = 'ipsa';
    $request->organizationId = 'occaecati';

    $response = $sdk->idps->updateOrganizationSamlIdp($request);

    if ($response->updateOrganizationSamlIdp200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
