# token

## Overview

Token operations

Token Services
<https://netlicensing.io/wiki/token-services>
### Available Operations

* [createToken](#createtoken) - Create token
* [deleteToken](#deletetoken) - Delete token
* [getToken](#gettoken) - Get token
* [listTokens](#listtokens) - List Tokens

## createToken

Create token by 'tokenType' and additional token parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBodyApiKeyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBodyTokenTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequestBody();
    $request->action = CreateTokenRequestBodyActionEnum::LICENSEE_LOGIN;
    $request->apiKeyRole = CreateTokenRequestBodyApiKeyRoleEnum::ROLE_APIKEY_ADMIN;
    $request->cancelURL = 'sint';
    $request->cancelURLTitle = 'veritatis';
    $request->licenseTemplateNumber = 'itaque';
    $request->licenseeNumber = 'incidunt';
    $request->predefinedShoppingItem = 'enim';
    $request->privateKey = 'consequatur';
    $request->productNumber = 'est';
    $request->successURL = 'quibusdam';
    $request->successURLTitle = 'explicabo';
    $request->tokenType = CreateTokenRequestBodyTokenTypeEnum::SHOP;
    $request->type = CreateTokenRequestBodyTypeEnum::ACTION;

    $requestSecurity = new CreateTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->token->createToken($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteToken

Delete a token by 'number'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTokenRequest();
    $request->tokenNumber = 'distinctio';

    $requestSecurity = new DeleteTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->token->deleteToken($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getToken

Return a token by 'tokenNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenRequest();
    $request->tokenNumber = 'quibusdam';

    $requestSecurity = new GetTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->token->getToken($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTokens

Return a list of all tokens for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTokensSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListTokensSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->token->listTokens($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
