# challenge

### Available Operations

* [verifiedaccessChallengeGenerate](#verifiedaccesschallengegenerate) - Generates a new challenge.
* [verifiedaccessChallengeVerify](#verifiedaccesschallengeverify) - Verifies the challenge response.

## verifiedaccessChallengeGenerate

Generates a new challenge.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifiedaccessChallengeGenerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new VerifiedaccessChallengeGenerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->challenge->verifiedaccessChallengeGenerate($request, $requestSecurity);

    if ($response->challenge !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifiedaccessChallengeVerify

Verifies the challenge response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyChallengeResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeVerifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifiedaccessChallengeVerifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->verifyChallengeResponseRequest = new VerifyChallengeResponseRequest();
    $request->verifyChallengeResponseRequest->challengeResponse = 'ipsam';
    $request->verifyChallengeResponseRequest->expectedIdentity = 'repellendus';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new VerifiedaccessChallengeVerifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->challenge->verifiedaccessChallengeVerify($request, $requestSecurity);

    if ($response->verifyChallengeResponseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
