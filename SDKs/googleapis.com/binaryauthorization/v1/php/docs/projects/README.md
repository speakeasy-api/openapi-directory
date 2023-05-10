# projects

### Available Operations

* [binaryauthorizationProjectsAttestorsCreate](#binaryauthorizationprojectsattestorscreate) - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* [binaryauthorizationProjectsAttestorsDelete](#binaryauthorizationprojectsattestorsdelete) - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsList](#binaryauthorizationprojectsattestorslist) - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* [binaryauthorizationProjectsAttestorsUpdate](#binaryauthorizationprojectsattestorsupdate) - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsValidateAttestationOccurrence](#binaryauthorizationprojectsattestorsvalidateattestationoccurrence) - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* [binaryauthorizationProjectsPolicyGetIamPolicy](#binaryauthorizationprojectspolicygetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [binaryauthorizationProjectsPolicySetIamPolicy](#binaryauthorizationprojectspolicysetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [binaryauthorizationProjectsPolicyTestIamPermissions](#binaryauthorizationprojectspolicytestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## binaryauthorizationProjectsAttestorsCreate

Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.

### Example Usage

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
    $request->attestorInput->description = 'voluptatum';
    $request->attestorInput->etag = 'iusto';
    $request->attestorInput->name = 'Charlie Walsh II';
    $request->attestorInput->userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput();
    $request->attestorInput->userOwnedGrafeasNote->noteReference = 'veritatis';
    $request->attestorInput->userOwnedGrafeasNote->publicKeys = [
        new AttestorPublicKey(),
        new AttestorPublicKey(),
        new AttestorPublicKey(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->attestorId = 'repellendus';
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

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

## binaryauthorizationProjectsAttestorsDelete

Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsAttestorsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->name = 'Luke McCullough';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new BinaryauthorizationProjectsAttestorsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsAttestorsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binaryauthorizationProjectsAttestorsList

Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsAttestorsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->pageSize = 216550;
    $request->pageToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new BinaryauthorizationProjectsAttestorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsAttestorsList($request, $requestSecurity);

    if ($response->listAttestorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binaryauthorizationProjectsAttestorsUpdate

Updates an attestor. Returns NOT_FOUND if the attestor does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttestorInput;
use \OpenAPI\OpenAPI\Models\Shared\UserOwnedGrafeasNoteInput;
use \OpenAPI\OpenAPI\Models\Shared\AttestorPublicKey;
use \OpenAPI\OpenAPI\Models\Shared\PkixPublicKey;
use \OpenAPI\OpenAPI\Models\Shared\PkixPublicKeySignatureAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsAttestorsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->attestorInput = new AttestorInput();
    $request->attestorInput->description = 'iste';
    $request->attestorInput->etag = 'dolor';
    $request->attestorInput->name = 'Lester Welch';
    $request->attestorInput->userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput();
    $request->attestorInput->userOwnedGrafeasNote->noteReference = 'in';
    $request->attestorInput->userOwnedGrafeasNote->publicKeys = [
        new AttestorPublicKey(),
        new AttestorPublicKey(),
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->name = 'Lela Orn';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new BinaryauthorizationProjectsAttestorsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsAttestorsUpdate($request, $requestSecurity);

    if ($response->attestor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binaryauthorizationProjectsAttestorsValidateAttestationOccurrence

Returns whether the given Attestation for the given image URI was signed by the given Attestor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateAttestationOccurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttestationOccurrence;
use \OpenAPI\OpenAPI\Models\Shared\Jwt;
use \OpenAPI\OpenAPI\Models\Shared\Signature;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->validateAttestationOccurrenceRequest = new ValidateAttestationOccurrenceRequest();
    $request->validateAttestationOccurrenceRequest->attestation = new AttestationOccurrence();
    $request->validateAttestationOccurrenceRequest->attestation->jwts = [
        new Jwt(),
        new Jwt(),
    ];
    $request->validateAttestationOccurrenceRequest->attestation->serializedPayload = 'omnis';
    $request->validateAttestationOccurrenceRequest->attestation->signatures = [
        new Signature(),
        new Signature(),
    ];
    $request->validateAttestationOccurrenceRequest->occurrenceNote = 'minima';
    $request->validateAttestationOccurrenceRequest->occurrenceResourceUri = 'excepturi';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->attestor = 'culpa';
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsAttestorsValidateAttestationOccurrence($request, $requestSecurity);

    if ($response->validateAttestationOccurrenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binaryauthorizationProjectsPolicyGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsPolicyGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsPolicyGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsPolicyGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->optionsRequestedPolicyVersion = 244425;
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->resource = 'quia';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new BinaryauthorizationProjectsPolicyGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsPolicyGetIamPolicy($request, $requestSecurity);

    if ($response->iamPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binaryauthorizationProjectsPolicySetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsPolicySetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsPolicySetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsPolicySetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new IamPolicy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'enim';
    $request->setIamPolicyRequest->policy->version = 138183;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->resource = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new BinaryauthorizationProjectsPolicySetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsPolicySetIamPolicy($request, $requestSecurity);

    if ($response->iamPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binaryauthorizationProjectsPolicyTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsPolicyTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinaryauthorizationProjectsPolicyTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'reiciendis',
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->resource = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->binaryauthorizationProjectsPolicyTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
