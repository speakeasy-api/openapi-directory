# inboundSamlSsoProfiles

### Available Operations

* [cloudidentityInboundSamlSsoProfilesCreate](#cloudidentityinboundsamlssoprofilescreate) - Creates an InboundSamlSsoProfile for a customer.
* [cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd](#cloudidentityinboundsamlssoprofilesidpcredentialsadd) - Adds an IdpCredential. Up to 2 credentials are allowed.
* [cloudidentityInboundSamlSsoProfilesIdpCredentialsList](#cloudidentityinboundsamlssoprofilesidpcredentialslist) - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
* [cloudidentityInboundSamlSsoProfilesList](#cloudidentityinboundsamlssoprofileslist) - Lists InboundSamlSsoProfiles for a customer.

## cloudidentityInboundSamlSsoProfilesCreate

Creates an InboundSamlSsoProfile for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InboundSamlSsoProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\SamlIdpConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSamlSsoProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inboundSamlSsoProfileInput = new InboundSamlSsoProfileInput();
    $request->inboundSamlSsoProfileInput->customer = 'temporibus';
    $request->inboundSamlSsoProfileInput->displayName = 'qui';
    $request->inboundSamlSsoProfileInput->idpConfig = new SamlIdpConfig();
    $request->inboundSamlSsoProfileInput->idpConfig->changePasswordUri = 'neque';
    $request->inboundSamlSsoProfileInput->idpConfig->entityId = 'fugit';
    $request->inboundSamlSsoProfileInput->idpConfig->logoutRedirectUri = 'magni';
    $request->inboundSamlSsoProfileInput->idpConfig->singleSignOnServiceUri = 'odio';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'hic';
    $request->key = 'voluptatem';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'et';

    $requestSecurity = new CloudidentityInboundSamlSsoProfilesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSamlSsoProfiles->cloudidentityInboundSamlSsoProfilesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd

Adds an IdpCredential. Up to 2 credentials are allowed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddIdpCredentialRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addIdpCredentialRequest = new AddIdpCredentialRequest();
    $request->addIdpCredentialRequest->pemData = 'ipsum';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->fields = 'tempore';
    $request->key = 'cupiditate';
    $request->oauthToken = 'aperiam';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSamlSsoProfiles->cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSamlSsoProfilesIdpCredentialsList

Returns a list of IdpCredentials in an InboundSamlSsoProfile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->oauthToken = 'itaque';
    $request->pageSize = 9240;
    $request->pageToken = 'est';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSamlSsoProfiles->cloudidentityInboundSamlSsoProfilesIdpCredentialsList($request, $requestSecurity);

    if ($response->listIdpCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudidentityInboundSamlSsoProfilesList

Lists InboundSamlSsoProfiles for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudidentityInboundSamlSsoProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudidentityInboundSamlSsoProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'laudantium';
    $request->filter = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 787542;
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new CloudidentityInboundSamlSsoProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inboundSamlSsoProfiles->cloudidentityInboundSamlSsoProfilesList($request, $requestSecurity);

    if ($response->listInboundSamlSsoProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
