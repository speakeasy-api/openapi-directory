# verificationTokens

### Available Operations

* [mybusinessverificationsVerificationTokensGenerate](#mybusinessverificationsverificationtokensgenerate) - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

## mybusinessverificationsVerificationTokensGenerate

Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsVerificationTokensGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateVerificationTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsVerificationTokensGenerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->generateVerificationTokenRequest = new GenerateVerificationTokenRequest();
    $request->generateVerificationTokenRequest->location = new Location();
    $request->generateVerificationTokenRequest->location->address = new PostalAddress();
    $request->generateVerificationTokenRequest->location->address->addressLines = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->generateVerificationTokenRequest->location->address->administrativeArea = 'modi';
    $request->generateVerificationTokenRequest->location->address->languageCode = 'praesentium';
    $request->generateVerificationTokenRequest->location->address->locality = 'rem';
    $request->generateVerificationTokenRequest->location->address->organization = 'voluptates';
    $request->generateVerificationTokenRequest->location->address->postalCode = '95092';
    $request->generateVerificationTokenRequest->location->address->recipients = [
        'consequatur',
        'est',
    ];
    $request->generateVerificationTokenRequest->location->address->regionCode = 'quibusdam';
    $request->generateVerificationTokenRequest->location->address->revision = 131797;
    $request->generateVerificationTokenRequest->location->address->sortingCode = 'deserunt';
    $request->generateVerificationTokenRequest->location->address->sublocality = 'distinctio';
    $request->generateVerificationTokenRequest->location->name = 'Francisco Gleason';
    $request->generateVerificationTokenRequest->location->primaryCategoryId = 'cupiditate';
    $request->generateVerificationTokenRequest->location->primaryPhone = 'quos';
    $request->generateVerificationTokenRequest->location->websiteUri = 'perferendis';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'alias';
    $request->key = 'fugit';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $response = $sdk->verificationTokens->mybusinessverificationsVerificationTokensGenerate($request);

    if ($response->generateVerificationTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
