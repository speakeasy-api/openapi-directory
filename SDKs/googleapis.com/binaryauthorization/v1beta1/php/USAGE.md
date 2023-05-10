<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttestorInput;
use \OpenAPI\OpenAPI\Models\Shared\UserOwnedDrydockNoteInput;
use \OpenAPI\OpenAPI\Models\Shared\AttestorPublicKey;
use \OpenAPI\OpenAPI\Models\Shared\PkixPublicKey;
use \OpenAPI\OpenAPI\Models\Shared\PkixPublicKeySignatureAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsAttestorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->attestorInput = new AttestorInput();
    $request->attestorInput->description = 'provident';
    $request->attestorInput->etag = 'distinctio';
    $request->attestorInput->name = 'Stuart Stiedemann';
    $request->attestorInput->userOwnedDrydockNote = new UserOwnedDrydockNoteInput();
    $request->attestorInput->userOwnedDrydockNote->noteReference = 'vel';
    $request->attestorInput->userOwnedDrydockNote->publicKeys = [
        new AttestorPublicKey(),
        new AttestorPublicKey(),
        new AttestorPublicKey(),
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->attestorId = 'iure';
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new BinaryauthorizationProjectsAttestorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsAttestorsCreate($request, $requestSecurity);

    if ($response->attestor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->