# auth

### Available Operations

* [postAuthToken](#postauthtoken) - /auth/token

## postAuthToken

Generate Herald API access tokens. These tokens expire after 24 hours and can be used to access any auth-protected Herald API endpoint. To use these tokens in future requests, include them as a bearer token in the "Authorization" header. Below is an example flow:

First, use your API key to get an access token:
``` http
POST /auth/token

{
  "api_key": "06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM="
}
```

The response will look like this:
``` json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg",
  "expires_at": 1646680150
}
```

Then use that token in future requests, like so:
``` http
GET /producers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthTokenRequestBody();
    $request->apiKey = '06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM=';

    $response = $sdk->auth->postAuthToken($request);

    if ($response->postAuthToken200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
