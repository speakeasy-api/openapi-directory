# saml

### Available Operations

* [createOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [deleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [getOrganizationSaml](#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [getOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [updateOrganizationSaml](#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
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
    $request->requestBody->sloLogoutUrl = 'eum';
    $request->requestBody->x509certSha1Fingerprint = 'eum';
    $request->organizationId = 'dolorem';

    $response = $sdk->saml->createOrganizationSamlIdp($request);

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
    $request->idpId = 'placeat';
    $request->organizationId = 'vel';

    $response = $sdk->saml->deleteOrganizationSamlIdp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSaml

Returns the SAML SSO enabled settings for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlRequest();
    $request->organizationId = 'commodi';

    $response = $sdk->saml->getOrganizationSaml($request);

    if ($response->getOrganizationSaml200ApplicationJSONObject !== null) {
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
    $request->idpId = 'quibusdam';
    $request->organizationId = 'cumque';

    $response = $sdk->saml->getOrganizationSamlIdp($request);

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
    $request->organizationId = 'libero';

    $response = $sdk->saml->getOrganizationSamlIdps($request);

    if ($response->getOrganizationSamlIdps200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSaml

Updates the SAML SSO enabled settings for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSamlRequest();
    $request->requestBody = new UpdateOrganizationSamlRequestBody();
    $request->requestBody->enabled = false;
    $request->organizationId = 'expedita';

    $response = $sdk->saml->updateOrganizationSaml($request);

    if ($response->updateOrganizationSaml200ApplicationJSONObject !== null) {
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
    $request->requestBody->sloLogoutUrl = 'reprehenderit';
    $request->requestBody->x509certSha1Fingerprint = 'nulla';
    $request->idpId = 'reiciendis';
    $request->organizationId = 'aliquid';

    $response = $sdk->saml->updateOrganizationSamlIdp($request);

    if ($response->updateOrganizationSamlIdp200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
