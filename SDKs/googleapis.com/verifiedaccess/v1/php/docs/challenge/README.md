# challenge

### Available Operations

* [verifiedaccessChallengeCreate](#verifiedaccesschallengecreate) - CreateChallenge API
* [verifiedaccessChallengeVerify](#verifiedaccesschallengeverify) - VerifyChallengeResponse API

## verifiedaccessChallengeCreate

CreateChallenge API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifiedaccessChallengeCreateRequest();
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

    $requestSecurity = new VerifiedaccessChallengeCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->challenge->verifiedaccessChallengeCreate($request, $requestSecurity);

    if ($response->challenge !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifiedaccessChallengeVerify

VerifyChallengeResponse API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyChallengeResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignedData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VerifiedaccessChallengeVerifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifiedaccessChallengeVerifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->verifyChallengeResponseRequest = new VerifyChallengeResponseRequest();
    $request->verifyChallengeResponseRequest->challengeResponse = new SignedData();
    $request->verifyChallengeResponseRequest->challengeResponse->data = 'ipsam';
    $request->verifyChallengeResponseRequest->challengeResponse->signature = 'repellendus';
    $request->verifyChallengeResponseRequest->expectedIdentity = 'sapiente';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

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
