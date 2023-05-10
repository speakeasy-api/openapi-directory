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
use \OpenAPI\OpenAPI\Models\Operations\PolicytroubleshooterIamTroubleshootRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicytroubleshooterV1AccessTuple;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicytroubleshooterIamTroubleshootSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicytroubleshooterIamTroubleshootRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest = new GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest();
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple = new GoogleCloudPolicytroubleshooterV1AccessTuple();
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple->fullResourceName = 'provident';
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple->permission = 'distinctio';
    $request->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest->accessTuple->principal = 'quibusdam';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new PolicytroubleshooterIamTroubleshootSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->iam->policytroubleshooterIamTroubleshoot($request, $requestSecurity);

    if ($response->googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [iam](docs/iam/README.md)

* [policytroubleshooterIamTroubleshoot](docs/iam/README.md#policytroubleshooteriamtroubleshoot) - Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
