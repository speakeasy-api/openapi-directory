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
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->analysisQueryAccessSelectorPermissions = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->analysisQueryAccessSelectorRoles = [
        'error',
        'deserunt',
    ];
    $request->analysisQueryIdentitySelectorIdentity = 'suscipit';
    $request->analysisQueryResourceSelectorFullResourceName = 'iure';
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->optionsAnalyzeServiceAccountImpersonation = false;
    $request->optionsExecutionTimeout = 'tempora';
    $request->optionsExpandGroups = false;
    $request->optionsExpandResources = false;
    $request->optionsExpandRoles = false;
    $request->optionsOutputGroupEdges = false;
    $request->optionsOutputResourceEdges = false;
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new CloudassetAnalyzeIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1p4beta1->cloudassetAnalyzeIamPolicy($request, $requestSecurity);

    if ($response->analyzeIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v1p4beta1](docs/v1p4beta1/README.md)

* [cloudassetAnalyzeIamPolicy](docs/v1p4beta1/README.md#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [cloudassetExportIamPolicyAnalysis](docs/v1p4beta1/README.md#cloudassetexportiampolicyanalysis) - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
