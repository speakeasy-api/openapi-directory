# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttestorInput;
use \OpenAPI\OpenAPI\Models\Shared\UserOwnedGrafeasNoteInput;
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
    $request->attestorInput->userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput();
    $request->attestorInput->userOwnedGrafeasNote->noteReference = 'vel';
    $request->attestorInput->userOwnedGrafeasNote->publicKeys = [
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [binaryauthorizationProjectsAttestorsCreate](docs/projects/README.md#binaryauthorizationprojectsattestorscreate) - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* [binaryauthorizationProjectsAttestorsDelete](docs/projects/README.md#binaryauthorizationprojectsattestorsdelete) - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsList](docs/projects/README.md#binaryauthorizationprojectsattestorslist) - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* [binaryauthorizationProjectsAttestorsUpdate](docs/projects/README.md#binaryauthorizationprojectsattestorsupdate) - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsValidateAttestationOccurrence](docs/projects/README.md#binaryauthorizationprojectsattestorsvalidateattestationoccurrence) - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* [binaryauthorizationProjectsPolicyGetIamPolicy](docs/projects/README.md#binaryauthorizationprojectspolicygetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [binaryauthorizationProjectsPolicySetIamPolicy](docs/projects/README.md#binaryauthorizationprojectspolicysetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [binaryauthorizationProjectsPolicyTestIamPermissions](docs/projects/README.md#binaryauthorizationprojectspolicytestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### [systempolicy](docs/systempolicy/README.md)

* [binaryauthorizationSystempolicyGetPolicy](docs/systempolicy/README.md#binaryauthorizationsystempolicygetpolicy) - Gets the current system policy in the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
