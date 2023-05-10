# oAuth

### Available Operations

* [obtainToken](#obtaintoken) - ObtainToken
* [renewToken](#renewtoken) - RenewToken
* [revokeToken](#revoketoken) - RevokeToken

## obtainToken

Returns an OAuth access token.

The endpoint supports distinct methods of obtaining OAuth access tokens.
Applications specify a method by adding the `grant_type` parameter
in the request and also provide relevant information.

__Note:__ Regardless of the method application specified,
the endpoint always returns two items; an OAuth access token and
a refresh token in the response.

__OAuth tokens should only live on secure servers. Application clients
should never interact directly with OAuth tokens__.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ObtainTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ObtainTokenRequest();
    $request->clientId = 'incidunt';
    $request->clientSecret = 'adipisci';
    $request->code = 'praesentium';
    $request->grantType = 'dolor';
    $request->migrationToken = 'exercitationem';
    $request->redirectUri = 'expedita';
    $request->refreshToken = 'facilis';
    $request->scopes = [
        'sit',
        'nemo',
        'culpa',
        'consequuntur',
    ];
    $request->shortLived = false;

    $response = $sdk->oAuth->obtainToken($request);

    if ($response->obtainTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewToken

`RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
[Migrate from Renew to Refresh OAuth Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).


Renews an OAuth access token before it expires.

OAuth access tokens besides your application's personal access token expire after __30 days__.
You can also renew expired tokens within __15 days__ of their expiration.
You cannot renew an access token that has been expired for more than 15 days.
Instead, the associated user must re-complete the OAuth flow from the beginning.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the Credentials
page in the [developer dashboard](https://developer.squareup.com/apps).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenewTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenewTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenewTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewTokenRequest();
    $request->renewTokenRequest = new RenewTokenRequest();
    $request->renewTokenRequest->accessToken = 'amet';
    $request->clientId = 'deserunt';

    $requestSecurity = new RenewTokenSecurity();
    $requestSecurity->oauth2ClientSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->oAuth->renewToken($request, $requestSecurity);

    if ($response->renewTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeToken

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify. When an
OAuth access token is revoked, all of the active subscriptions associated
with that OAuth token are canceled immediately.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the OAuth
page in the [developer dashboard](https://developer.squareup.com/apps).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RevokeTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\RevokeTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeTokenRequest();
    $request->accessToken = 'modi';
    $request->clientId = 'veniam';
    $request->merchantId = 'quod';
    $request->revokeOnlyAccessToken = false;

    $requestSecurity = new RevokeTokenSecurity();
    $requestSecurity->oauth2ClientSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->oAuth->revokeToken($request, $requestSecurity);

    if ($response->revokeTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
