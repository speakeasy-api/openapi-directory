# v1

### Available Operations

* [stsIntrospect](#stsintrospect) - Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
* [stsOauthtoken](#stsoauthtoken) - Exchanges a credential that represents the resource owner's authorization for a Google-generated [OAuth 2.0 access token] (https://www.rfc-editor.org/rfc/rfc6749#section-5) or [refreshes an accesstoken] (https://www.rfc-editor.org/rfc/rfc6749#section-6) following [the OAuth 2.0 authorization framework] (https://tools.ietf.org/html/rfc8693) The credential can be one of the following: - An authorization code issued by the workforce identity federation authorization endpoint - A [refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-10.4) issued by this endpoint This endpoint is only meant to be called by the Google Cloud CLI. Also note that this API only accepts the authorization code issued for workforce pools.
* [stsToken](#ststoken) - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

## stsIntrospect

Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StsIntrospectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIdentityStsV1IntrospectTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StsIntrospectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIdentityStsV1IntrospectTokenRequest = new GoogleIdentityStsV1IntrospectTokenRequest();
    $request->googleIdentityStsV1IntrospectTokenRequest->token = 'magnam';
    $request->googleIdentityStsV1IntrospectTokenRequest->tokenTypeHint = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $response = $sdk->v1->stsIntrospect($request);

    if ($response->googleIdentityStsV1IntrospectTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stsOauthtoken

Exchanges a credential that represents the resource owner's authorization for a Google-generated [OAuth 2.0 access token] (https://www.rfc-editor.org/rfc/rfc6749#section-5) or [refreshes an accesstoken] (https://www.rfc-editor.org/rfc/rfc6749#section-6) following [the OAuth 2.0 authorization framework] (https://tools.ietf.org/html/rfc8693) The credential can be one of the following: - An authorization code issued by the workforce identity federation authorization endpoint - A [refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-10.4) issued by this endpoint This endpoint is only meant to be called by the Google Cloud CLI. Also note that this API only accepts the authorization code issued for workforce pools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StsOauthtokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIdentityStsV1ExchangeOauthTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StsOauthtokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIdentityStsV1ExchangeOauthTokenRequest = new GoogleIdentityStsV1ExchangeOauthTokenRequest();
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->clientId = 'nisi';
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->code = 'recusandae';
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->codeVerifier = 'temporibus';
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->grantType = 'ab';
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->redirectUri = 'quis';
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->refreshToken = 'veritatis';
    $request->googleIdentityStsV1ExchangeOauthTokenRequest->scope = 'deserunt';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $response = $sdk->v1->stsOauthtoken($request);

    if ($response->googleIdentityStsV1ExchangeOauthTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stsToken

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StsTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIdentityStsV1ExchangeTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StsTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIdentityStsV1ExchangeTokenRequest = new GoogleIdentityStsV1ExchangeTokenRequest();
    $request->googleIdentityStsV1ExchangeTokenRequest->audience = 'quod';
    $request->googleIdentityStsV1ExchangeTokenRequest->grantType = 'quod';
    $request->googleIdentityStsV1ExchangeTokenRequest->options = 'esse';
    $request->googleIdentityStsV1ExchangeTokenRequest->requestedTokenType = 'totam';
    $request->googleIdentityStsV1ExchangeTokenRequest->scope = 'porro';
    $request->googleIdentityStsV1ExchangeTokenRequest->subjectToken = 'dolorum';
    $request->googleIdentityStsV1ExchangeTokenRequest->subjectTokenType = 'dicta';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $response = $sdk->v1->stsToken($request);

    if ($response->googleIdentityStsV1ExchangeTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
