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
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysKeysLookupKeyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->keyString = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ApikeysKeysLookupKeySecurity();
    $requestSecurity->option1 = new ApikeysKeysLookupKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->keys->apikeysKeysLookupKey($request, $requestSecurity);

    if ($response->v2LookupKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [keys](docs/keys/README.md)

* [apikeysKeysLookupKey](docs/keys/README.md#apikeyskeyslookupkey) - Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

### [projects](docs/projects/README.md)

* [apikeysProjectsLocationsKeysCreate](docs/projects/README.md#apikeysprojectslocationskeyscreate) - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysDelete](docs/projects/README.md#apikeysprojectslocationskeysdelete) - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGet](docs/projects/README.md#apikeysprojectslocationskeysget) - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGetKeyString](docs/projects/README.md#apikeysprojectslocationskeysgetkeystring) - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysList](docs/projects/README.md#apikeysprojectslocationskeyslist) - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysPatch](docs/projects/README.md#apikeysprojectslocationskeyspatch) - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysUndelete](docs/projects/README.md#apikeysprojectslocationskeysundelete) - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
