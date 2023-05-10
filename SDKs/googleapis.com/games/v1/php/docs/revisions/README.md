# revisions

### Available Operations

* [gamesRevisionsCheck](#gamesrevisionscheck) - Checks whether the games client is out of date.

## gamesRevisionsCheck

Checks whether the games client is out of date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesRevisionsCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesRevisionsCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesRevisionsCheckRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->clientRevision = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new GamesRevisionsCheckSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->revisions->gamesRevisionsCheck($request, $requestSecurity);

    if ($response->revisionCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
