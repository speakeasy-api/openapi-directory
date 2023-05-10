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
use \OpenAPI\OpenAPI\Models\Operations\CloudassetIamPoliciesSearchAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetIamPoliciesSearchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetIamPoliciesSearchAllRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->query = 'error';
    $request->quotaUser = 'deserunt';
    $request->scope = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new CloudassetIamPoliciesSearchAllSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->iamPolicies->cloudassetIamPoliciesSearchAll($request, $requestSecurity);

    if ($response->searchAllIamPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [iamPolicies](docs/iampolicies/README.md)

* [cloudassetIamPoliciesSearchAll](docs/iampolicies/README.md#cloudassetiampoliciessearchall) - Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.

### [resources](docs/resources/README.md)

* [cloudassetResourcesSearchAll](docs/resources/README.md#cloudassetresourcessearchall) - Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
