# projects

### Available Operations

* [cloudprofilerProjectsProfilesCreate](#cloudprofilerprojectsprofilescreate) - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* [cloudprofilerProjectsProfilesCreateOffline](#cloudprofilerprojectsprofilescreateoffline) - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* [cloudprofilerProjectsProfilesPatch](#cloudprofilerprojectsprofilespatch) - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

## cloudprofilerProjectsProfilesCreate

CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\CreateProfileRequestProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprofilerProjectsProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createProfileRequest = new CreateProfileRequest();
    $request->createProfileRequest->deployment = new Deployment();
    $request->createProfileRequest->deployment->labels = [
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->createProfileRequest->deployment->projectId = 'veritatis';
    $request->createProfileRequest->deployment->target = 'deserunt';
    $request->createProfileRequest->profileType = [
        CreateProfileRequestProfileTypeEnum::WALL,
    ];
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new CloudprofilerProjectsProfilesCreateSecurity();
    $requestSecurity->option1 = new CloudprofilerProjectsProfilesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudprofilerProjectsProfilesCreate($request, $requestSecurity);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprofilerProjectsProfilesCreateOffline

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateOfflineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\ProfileProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateOfflineSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateOfflineSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateOfflineSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateOfflineSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprofilerProjectsProfilesCreateOfflineRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->profileInput = new ProfileInput();
    $request->profileInput->deployment = new Deployment();
    $request->profileInput->deployment->labels = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->profileInput->deployment->projectId = 'fugit';
    $request->profileInput->deployment->target = 'deleniti';
    $request->profileInput->duration = 'hic';
    $request->profileInput->labels = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->profileInput->profileBytes = 'esse';
    $request->profileInput->profileType = ProfileProfileTypeEnum::CPU;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new CloudprofilerProjectsProfilesCreateOfflineSecurity();
    $requestSecurity->option1 = new CloudprofilerProjectsProfilesCreateOfflineSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudprofilerProjectsProfilesCreateOffline($request, $requestSecurity);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprofilerProjectsProfilesPatch

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\ProfileProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesPatchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprofilerProjectsProfilesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->profileInput = new ProfileInput();
    $request->profileInput->deployment = new Deployment();
    $request->profileInput->deployment->labels = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->profileInput->deployment->projectId = 'ipsa';
    $request->profileInput->deployment->target = 'reiciendis';
    $request->profileInput->duration = 'est';
    $request->profileInput->labels = [
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->profileInput->profileBytes = 'enim';
    $request->profileInput->profileType = ProfileProfileTypeEnum::THREADS;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->name = 'Miss Aubrey Williamson';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->updateMask = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new CloudprofilerProjectsProfilesPatchSecurity();
    $requestSecurity->option1 = new CloudprofilerProjectsProfilesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudprofilerProjectsProfilesPatch($request, $requestSecurity);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
