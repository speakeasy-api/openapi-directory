# oauth

### Available Operations

* [authorize](#authorize) - Authorize applications
* [createAccessTokenForm](#createaccesstokenform) - Get access tokens
* [createAccessTokenJson](#createaccesstokenjson) - Get access tokens

## authorize

This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeRealmEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeResponseTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizeRequest();
    $request->clientId = 'illum';
    $request->realm = AuthorizeRealmEnum::CONTRIBUTOR;
    $request->redirectUri = 'impedit';
    $request->responseType = AuthorizeResponseTypeEnum::CODE;
    $request->scope = 'quibusdam';
    $request->state = 'nam';

    $response = $sdk->oauth->authorize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccessTokenForm

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationXWwwFormUrlencoded;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessTokenApplicationXWwwFormUrlencoded();
    $request->clientId = 'ipsam';
    $request->clientSecret = 'culpa';
    $request->code = 'dolor';
    $request->expires = CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum::TRUE;
    $request->grantType = CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum::AUTHORIZATION_CODE;
    $request->realm = CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum::CONTRIBUTOR;
    $request->refreshToken = 'veritatis';

    $response = $sdk->oauth->createAccessTokenForm($request);

    if ($response->oauthAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccessTokenJson

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationJSON;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationJSONGrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenApplicationJSONRealmEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessTokenApplicationJSON();
    $request->clientId = 'tempora';
    $request->clientSecret = 'dolor';
    $request->code = 'consequatur';
    $request->expires = false;
    $request->grantType = CreateAccessTokenApplicationJSONGrantTypeEnum::AUTHORIZATION_CODE;
    $request->realm = CreateAccessTokenApplicationJSONRealmEnum::CUSTOMER;
    $request->refreshToken = 'modi';

    $response = $sdk->oauth->createAccessTokenJson($request);

    if ($response->oauthAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
