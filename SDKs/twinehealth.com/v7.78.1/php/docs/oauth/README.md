# oauth

## Overview

Authentication operations

### Available Operations

* [createToken](#createtoken) - Create an oauth token
* [fetchTokenGroups](#fetchtokengroups) - Get the groups for a token
* [fetchTokenOrganization](#fetchtokenorganization) - Get the organization for a token

## createToken

Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.

Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error
403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when
using `application/json` the body should have a body in the following format instead of nesting under
`data.attributes`:
```
{
  "grant_type": "client_credentials",
  "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",
  "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"
}
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTokenRequestData;
use \OpenAPI\OpenAPI\Models\Shared\CreateTokenRequestDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\CreateTokenRequestDataAttributesGrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTokenRequestDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenIncludeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->createTokenRequest = new CreateTokenRequest();
    $request->createTokenRequest->data = new CreateTokenRequestData();
    $request->createTokenRequest->data->attributes = new CreateTokenRequestDataAttributes();
    $request->createTokenRequest->data->attributes->clientId = '19391dc5-8af8-4152-93e8-74ff9361607e';
    $request->createTokenRequest->data->attributes->clientSecret = '63eca384-7a65-42e2-872b-afd3e8659d0a';
    $request->createTokenRequest->data->attributes->grantType = CreateTokenRequestDataAttributesGrantTypeEnum::CLIENT_CREDENTIALS;
    $request->createTokenRequest->data->attributes->refreshToken = 'b7dcc4a4-593b-4410-a0c5-97ae48939396';
    $request->createTokenRequest->data->type = CreateTokenRequestDataTypeEnum::TOKEN;
    $request->include = CreateTokenIncludeEnum::GROUPS;

    $requestSecurity = new CreateTokenSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->oauth->createToken($request, $requestSecurity);

    if ($response->createTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTokenGroups

Get the list of groups a token can be used to access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTokenGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTokenGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTokenGroupsRequest();
    $request->id = '15199ebf-d0e9-4fe6-8632-ca3aed011799';

    $requestSecurity = new FetchTokenGroupsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->oauth->fetchTokenGroups($request, $requestSecurity);

    if ($response->fetchGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTokenOrganization

Get the organization a token can be used to access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTokenOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTokenOrganizationRequest();
    $request->id = '6312fde0-4771-4778-bf61-d017476360a1';

    $response = $sdk->oauth->fetchTokenOrganization($request);

    if ($response->fetchOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
