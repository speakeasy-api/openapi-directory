# v1p4beta1

### Available Operations

* [cloudassetAnalyzeIamPolicy](#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [cloudassetExportIamPolicyAnalysis](#cloudassetexportiampolicyanalysis) - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.

## cloudassetAnalyzeIamPolicy

Analyzes IAM policies to answer which identities have what accesses on which resources.

### Example Usage

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
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->analysisQueryAccessSelectorPermissions = [
        'recusandae',
        'temporibus',
    ];
    $request->analysisQueryAccessSelectorRoles = [
        'quis',
    ];
    $request->analysisQueryIdentitySelectorIdentity = 'veritatis';
    $request->analysisQueryResourceSelectorFullResourceName = 'deserunt';
    $request->callback = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->optionsAnalyzeServiceAccountImpersonation = false;
    $request->optionsExecutionTimeout = 'quo';
    $request->optionsExpandGroups = false;
    $request->optionsExpandResources = false;
    $request->optionsExpandRoles = false;
    $request->optionsOutputGroupEdges = false;
    $request->optionsOutputResourceEdges = false;
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

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

## cloudassetExportIamPolicyAnalysis

Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetExportIamPolicyAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportIamPolicyAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicyAnalysisQuery;
use \OpenAPI\OpenAPI\Models\Shared\AccessSelector;
use \OpenAPI\OpenAPI\Models\Shared\IdentitySelector;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSelector;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicyAnalysisOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetExportIamPolicyAnalysisSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetExportIamPolicyAnalysisRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->exportIamPolicyAnalysisRequest = new ExportIamPolicyAnalysisRequest();
    $request->exportIamPolicyAnalysisRequest->analysisQuery = new IamPolicyAnalysisQuery();
    $request->exportIamPolicyAnalysisRequest->analysisQuery->accessSelector = new AccessSelector();
    $request->exportIamPolicyAnalysisRequest->analysisQuery->accessSelector->permissions = [
        'quod',
        'esse',
        'totam',
        'porro',
    ];
    $request->exportIamPolicyAnalysisRequest->analysisQuery->accessSelector->roles = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->exportIamPolicyAnalysisRequest->analysisQuery->identitySelector = new IdentitySelector();
    $request->exportIamPolicyAnalysisRequest->analysisQuery->identitySelector->identity = 'occaecati';
    $request->exportIamPolicyAnalysisRequest->analysisQuery->parent = 'fugit';
    $request->exportIamPolicyAnalysisRequest->analysisQuery->resourceSelector = new ResourceSelector();
    $request->exportIamPolicyAnalysisRequest->analysisQuery->resourceSelector->fullResourceName = 'deleniti';
    $request->exportIamPolicyAnalysisRequest->options = new Options();
    $request->exportIamPolicyAnalysisRequest->options->analyzeServiceAccountImpersonation = false;
    $request->exportIamPolicyAnalysisRequest->options->expandGroups = false;
    $request->exportIamPolicyAnalysisRequest->options->expandResources = false;
    $request->exportIamPolicyAnalysisRequest->options->expandRoles = false;
    $request->exportIamPolicyAnalysisRequest->options->outputGroupEdges = false;
    $request->exportIamPolicyAnalysisRequest->options->outputResourceEdges = false;
    $request->exportIamPolicyAnalysisRequest->outputConfig = new IamPolicyAnalysisOutputConfig();
    $request->exportIamPolicyAnalysisRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->exportIamPolicyAnalysisRequest->outputConfig->gcsDestination->uri = 'https://sizzling-locust.com';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new CloudassetExportIamPolicyAnalysisSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1p4beta1->cloudassetExportIamPolicyAnalysis($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
