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
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->createProfileRequest->deployment->projectId = 'vel';
    $request->createProfileRequest->deployment->target = 'error';
    $request->createProfileRequest->profileType = [
        CreateProfileRequestProfileTypeEnum::HEAP,
        CreateProfileRequestProfileTypeEnum::HEAP,
        CreateProfileRequestProfileTypeEnum::WALL,
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudprofilerProjectsProfilesCreate](docs/projects/README.md#cloudprofilerprojectsprofilescreate) - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* [cloudprofilerProjectsProfilesCreateOffline](docs/projects/README.md#cloudprofilerprojectsprofilescreateoffline) - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* [cloudprofilerProjectsProfilesPatch](docs/projects/README.md#cloudprofilerprojectsprofilespatch) - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
