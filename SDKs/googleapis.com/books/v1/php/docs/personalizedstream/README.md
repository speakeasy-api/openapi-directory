# personalizedstream

### Available Operations

* [booksPersonalizedstreamGet](#bookspersonalizedstreamget) - Returns a stream of personalized book clusters

## booksPersonalizedstreamGet

Returns a stream of personalized book clusters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksPersonalizedstreamGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksPersonalizedstreamGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksPersonalizedstreamGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'vel';
    $request->key = 'harum';
    $request->locale = 'molestiae';
    $request->maxAllowedMaturityRating = BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum::NOT_MATURE;
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->source = 'distinctio';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new BooksPersonalizedstreamGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->personalizedstream->booksPersonalizedstreamGet($request, $requestSecurity);

    if ($response->discoveryclusters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
