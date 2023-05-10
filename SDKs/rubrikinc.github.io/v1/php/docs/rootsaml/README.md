# rootSaml

## Overview

SAML SSO Authentication.

### Available Operations

* [configRubrikSamlMetadata](#configrubriksamlmetadata) - Configure and generate Rubrik SAML metadata
* [getSamlSsoStatus](#getsamlssostatus) - Check SAML SSO Status
* [makeSamlAuthnRequest](#makesamlauthnrequest) - Make SAML authentication request

## configRubrikSamlMetadata

Configure and generate the SAML metadata for this Rubrik cluster. The call returns the download URL for the metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RubrikSamlMetadataInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RubrikSamlMetadataInfo();
    $request->hostAddress = 'ipsam';

    $response = $sdk->rootSaml->configRubrikSamlMetadata($request);

    if ($response->rubrikSamlMetadataSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSamlSsoStatus

An object that contains two values. A Boolean value that determines whether or not SSO is enabled and an optional String value that indicates the name of the default IdP authentication domain for SSO login. When the boolean value is 'true,' SAML SSO is enabled. When the Boolean value is 'false,' SAML SSO is disabled.

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
    $response = $sdk->rootSaml->getSamlSsoStatus();

    if ($response->samlSsoStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## makeSamlAuthnRequest

Make a SAML authentication request for a specified IdP Authentication Domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\MakeSamlAuthnRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\SamlSsoAuthnRequestInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MakeSamlAuthnRequestRequest();
    $request->samlSsoAuthnRequestInfo = new SamlSsoAuthnRequestInfo();
    $request->samlSsoAuthnRequestInfo->isForIdpTest = false;
    $request->samlSsoAuthnRequestInfo->redirectPath = 'quisquam';
    $request->idpName = 'delectus';

    $response = $sdk->rootSaml->makeSamlAuthnRequest($request);

    if ($response->samlSsoAuthnRequestDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
