# login

### Available Operations

* [logout](#logout) - Logout
* [resetPassword](#resetpassword) - Reset password
* [validateAccessToken](#validateaccesstoken) - validate
* [veloAuth](#veloauth) - Authentication endpoint

## logout

<p>Given a valid access token in the header then log out the authenticated user or client </p>
<p>Will revoke the token</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->login->logout();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetPassword

<p>Reset password </p>
<p>An email with an embedded link will be sent to the receipient of the email address </p>
<p>The link will contain a token to be used for resetting the password </p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ResetPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetPasswordRequest();
    $request->email = 'foo@example.com';

    $response = $sdk->login->resetPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateAccessToken

<p>The second part of login involves validating using an MFA device</p>
<p>An access token with PRE_AUTH authorities is required</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenValidationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateAccessTokenRequest();
    $request->accessTokenValidationRequest = new AccessTokenValidationRequest();
    $request->accessTokenValidationRequest->otp = '123456';
    $request->authorization = 'pariatur';

    $response = $sdk->login->validateAccessToken($request);

    if ($response->accessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## veloAuth

<p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>
<p>You need your API key and API secret issued by Velo</p>
<p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>
<p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>
<p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>
<p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VeloAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\VeloAuthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VeloAuthRequest();
    $request->grantType = 'accusantium';

    $requestSecurity = new VeloAuthSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->login->veloAuth($request, $requestSecurity);

    if ($response->authResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
