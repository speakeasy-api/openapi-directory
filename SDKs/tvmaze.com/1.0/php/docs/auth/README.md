# auth

### Available Operations

* [getAuthValidate](#getauthvalidate) - Validate your authentication credentials
* [postAuthPoll](#postauthpoll) - Poll whether an authentication request was confirmed
* [postAuthStart](#postauthstart) - Start an authentication request

## getAuthValidate

If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.

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
    $response = $sdk->auth->getAuthValidate();

    if ($response->getAuthValidate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthPoll

Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.

When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.

For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthPollRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthPollRequestBody();
    $request->token = 'corrupti';

    $response = $sdk->auth->postAuthPoll($request);

    if ($response->postAuthPoll200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthStart

If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.

To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.

Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthStartRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthStartRequestBody();
    $request->email = 'Micheal_Sporer@yahoo.com';
    $request->emailConfirmation = false;

    $response = $sdk->auth->postAuthStart($request);

    if ($response->postAuthStart200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
