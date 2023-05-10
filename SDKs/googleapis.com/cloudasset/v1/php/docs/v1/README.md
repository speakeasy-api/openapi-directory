# v1

### Available Operations

* [cloudassetAnalyzeIamPolicy](#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [cloudassetAnalyzeIamPolicyLongrunning](#cloudassetanalyzeiampolicylongrunning) - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* [cloudassetAnalyzeMove](#cloudassetanalyzemove) - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* [cloudassetAnalyzeOrgPolicies](#cloudassetanalyzeorgpolicies) - Analyzes organization policies under a scope.
* [cloudassetAnalyzeOrgPolicyGovernedAssets](#cloudassetanalyzeorgpolicygovernedassets) - Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.
* [cloudassetAnalyzeOrgPolicyGovernedContainers](#cloudassetanalyzeorgpolicygovernedcontainers) - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* [cloudassetBatchGetAssetsHistory](#cloudassetbatchgetassetshistory) - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* [cloudassetExportAssets](#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* [cloudassetQueryAssets](#cloudassetqueryassets) - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* [cloudassetSearchAllIamPolicies](#cloudassetsearchalliampolicies) - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* [cloudassetSearchAllResources](#cloudassetsearchallresources) - Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->analysisQueryAccessSelectorPermissions = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->analysisQueryAccessSelectorRoles = [
        'occaecati',
    ];
    $request->analysisQueryConditionContextAccessTime = 'enim';
    $request->analysisQueryIdentitySelectorIdentity = 'accusamus';
    $request->analysisQueryOptionsAnalyzeServiceAccountImpersonation = false;
    $request->analysisQueryOptionsExpandGroups = false;
    $request->analysisQueryOptionsExpandResources = false;
    $request->analysisQueryOptionsExpandRoles = false;
    $request->analysisQueryOptionsIncludeDenyPolicyAnalysis = false;
    $request->analysisQueryOptionsOutputGroupEdges = false;
    $request->analysisQueryOptionsOutputResourceEdges = false;
    $request->analysisQueryResourceSelectorFullResourceName = 'delectus';
    $request->callback = 'quidem';
    $request->executionTimeout = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->savedAnalysisQuery = 'sapiente';
    $request->scope = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new CloudassetAnalyzeIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetAnalyzeIamPolicy($request, $requestSecurity);

    if ($response->analyzeIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetAnalyzeIamPolicyLongrunning

Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeIamPolicyLongrunningRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeIamPolicyLongrunningRequest;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicyAnalysisQuery;
use \OpenAPI\OpenAPI\Models\Shared\AccessSelector;
use \OpenAPI\OpenAPI\Models\Shared\ConditionContext;
use \OpenAPI\OpenAPI\Models\Shared\IdentitySelector;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSelector;
use \OpenAPI\OpenAPI\Models\Shared\IamPolicyAnalysisOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeIamPolicyLongrunningSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeIamPolicyLongrunningRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->analyzeIamPolicyLongrunningRequest = new AnalyzeIamPolicyLongrunningRequest();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery = new IamPolicyAnalysisQuery();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->accessSelector = new AccessSelector();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->accessSelector->permissions = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->accessSelector->roles = [
        'magnam',
        'distinctio',
    ];
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->conditionContext = new ConditionContext();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->conditionContext->accessTime = 'id';
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->identitySelector = new IdentitySelector();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->identitySelector->identity = 'labore';
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options = new Options();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->analyzeServiceAccountImpersonation = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->expandGroups = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->expandResources = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->expandRoles = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->includeDenyPolicyAnalysis = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->outputGroupEdges = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->options->outputResourceEdges = false;
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->resourceSelector = new ResourceSelector();
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->resourceSelector->fullResourceName = 'labore';
    $request->analyzeIamPolicyLongrunningRequest->analysisQuery->scope = 'suscipit';
    $request->analyzeIamPolicyLongrunningRequest->outputConfig = new IamPolicyAnalysisOutputConfig();
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->bigqueryDestination = new GoogleCloudAssetV1BigQueryDestination();
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->bigqueryDestination->dataset = 'natus';
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->bigqueryDestination->partitionKey = GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum::REQUEST_TIME;
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->bigqueryDestination->tablePrefix = 'eum';
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->bigqueryDestination->writeDisposition = 'vero';
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->gcsDestination = new GoogleCloudAssetV1GcsDestination();
    $request->analyzeIamPolicyLongrunningRequest->outputConfig->gcsDestination->uri = 'http://buzzing-efficiency.com';
    $request->analyzeIamPolicyLongrunningRequest->savedAnalysisQuery = 'excepturi';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->key = 'accusantium';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->scope = 'mollitia';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new CloudassetAnalyzeIamPolicyLongrunningSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetAnalyzeIamPolicyLongrunning($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetAnalyzeMove

Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeMoveViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeMoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeMoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->destinationParent = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->resource = 'maxime';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'facilis';
    $request->view = CloudassetAnalyzeMoveViewEnum::FULL;

    $requestSecurity = new CloudassetAnalyzeMoveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetAnalyzeMove($request, $requestSecurity);

    if ($response->analyzeMoveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetAnalyzeOrgPolicies

Analyzes organization policies under a scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeOrgPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeOrgPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeOrgPoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->constraint = 'expedita';
    $request->fields = 'nihil';
    $request->filter = 'repellat';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sed';
    $request->pageSize = 904648;
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->scope = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new CloudassetAnalyzeOrgPoliciesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetAnalyzeOrgPolicies($request, $requestSecurity);

    if ($response->analyzeOrgPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetAnalyzeOrgPolicyGovernedAssets

Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeOrgPolicyGovernedAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeOrgPolicyGovernedAssetsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->constraint = 'pariatur';
    $request->fields = 'maxime';
    $request->filter = 'ea';
    $request->key = 'excepturi';
    $request->oauthToken = 'odit';
    $request->pageSize = 407183;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->scope = 'maiores';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetAnalyzeOrgPolicyGovernedAssets($request, $requestSecurity);

    if ($response->analyzeOrgPolicyGovernedAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetAnalyzeOrgPolicyGovernedContainers

Analyzes organization policies governed containers (projects, folders or organization) under a scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeOrgPolicyGovernedContainersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAnalyzeOrgPolicyGovernedContainersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAnalyzeOrgPolicyGovernedContainersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eaque';
    $request->constraint = 'pariatur';
    $request->fields = 'nemo';
    $request->filter = 'voluptatibus';
    $request->key = 'perferendis';
    $request->oauthToken = 'fugiat';
    $request->pageSize = 230742;
    $request->pageToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->scope = 'corporis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new CloudassetAnalyzeOrgPolicyGovernedContainersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetAnalyzeOrgPolicyGovernedContainers($request, $requestSecurity);

    if ($response->analyzeOrgPolicyGovernedContainersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetBatchGetAssetsHistory

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetBatchGetAssetsHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetBatchGetAssetsHistoryContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetBatchGetAssetsHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetBatchGetAssetsHistoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->assetNames = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->callback = 'nesciunt';
    $request->contentType = CloudassetBatchGetAssetsHistoryContentTypeEnum::RESOURCE;
    $request->fields = 'perferendis';
    $request->key = 'dolores';
    $request->oauthToken = 'minus';
    $request->parent = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->readTimeWindowEndTime = 'vero';
    $request->readTimeWindowStartTime = 'nostrum';
    $request->relationshipTypes = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new CloudassetBatchGetAssetsHistorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetBatchGetAssetsHistory($request, $requestSecurity);

    if ($response->batchGetAssetsHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetExportAssets

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetExportAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportAssetsRequestContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\PartitionSpec;
use \OpenAPI\OpenAPI\Models\Shared\PartitionSpecPartitionKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetExportAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetExportAssetsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->exportAssetsRequest = new ExportAssetsRequest();
    $request->exportAssetsRequest->assetTypes = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->exportAssetsRequest->contentType = ExportAssetsRequestContentTypeEnum::ACCESS_POLICY;
    $request->exportAssetsRequest->outputConfig = new OutputConfig();
    $request->exportAssetsRequest->outputConfig->bigqueryDestination = new BigQueryDestination();
    $request->exportAssetsRequest->outputConfig->bigqueryDestination->dataset = 'adipisci';
    $request->exportAssetsRequest->outputConfig->bigqueryDestination->force = false;
    $request->exportAssetsRequest->outputConfig->bigqueryDestination->partitionSpec = new PartitionSpec();
    $request->exportAssetsRequest->outputConfig->bigqueryDestination->partitionSpec->partitionKey = PartitionSpecPartitionKeyEnum::REQUEST_TIME;
    $request->exportAssetsRequest->outputConfig->bigqueryDestination->separateTablesPerAssetType = false;
    $request->exportAssetsRequest->outputConfig->bigqueryDestination->table = 'earum';
    $request->exportAssetsRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->exportAssetsRequest->outputConfig->gcsDestination->uri = 'http://peaceful-popularity.name';
    $request->exportAssetsRequest->outputConfig->gcsDestination->uriPrefix = 'pariatur';
    $request->exportAssetsRequest->readTime = 'provident';
    $request->exportAssetsRequest->relationshipTypes = [
        'libero',
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'dolor';
    $request->key = 'qui';
    $request->oauthToken = 'ipsum';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new CloudassetExportAssetsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetExportAssets($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetQueryAssets

Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetQueryAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryAssetsOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetQueryAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetQueryAssetsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queryAssetsRequest = new QueryAssetsRequest();
    $request->queryAssetsRequest->jobReference = 'reiciendis';
    $request->queryAssetsRequest->outputConfig = new QueryAssetsOutputConfig();
    $request->queryAssetsRequest->outputConfig->bigqueryDestination = new GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination();
    $request->queryAssetsRequest->outputConfig->bigqueryDestination->dataset = 'amet';
    $request->queryAssetsRequest->outputConfig->bigqueryDestination->table = 'dolorum';
    $request->queryAssetsRequest->outputConfig->bigqueryDestination->writeDisposition = 'numquam';
    $request->queryAssetsRequest->pageSize = 85295;
    $request->queryAssetsRequest->pageToken = 'ipsa';
    $request->queryAssetsRequest->readTime = 'ipsa';
    $request->queryAssetsRequest->readTimeWindow = new TimeWindow();
    $request->queryAssetsRequest->readTimeWindow->endTime = 'iure';
    $request->queryAssetsRequest->readTimeWindow->startTime = 'odio';
    $request->queryAssetsRequest->statement = 'quaerat';
    $request->queryAssetsRequest->timeout = 'accusamus';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new CloudassetQueryAssetsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetQueryAssets($request, $requestSecurity);

    if ($response->queryAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetSearchAllIamPolicies

Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSearchAllIamPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSearchAllIamPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSearchAllIamPoliciesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->assetTypes = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];
    $request->callback = 'distinctio';
    $request->fields = 'asperiores';
    $request->key = 'nihil';
    $request->oauthToken = 'ipsum';
    $request->orderBy = 'voluptate';
    $request->pageSize = 663078;
    $request->pageToken = 'saepe';
    $request->prettyPrint = false;
    $request->query = 'eius';
    $request->quotaUser = 'aspernatur';
    $request->scope = 'perferendis';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new CloudassetSearchAllIamPoliciesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetSearchAllIamPolicies($request, $requestSecurity);

    if ($response->searchAllIamPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudassetSearchAllResources

Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSearchAllResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetSearchAllResourcesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetSearchAllResourcesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->assetTypes = [
        'deserunt',
        'provident',
    ];
    $request->callback = 'minima';
    $request->fields = 'repellendus';
    $request->key = 'totam';
    $request->oauthToken = 'similique';
    $request->orderBy = 'alias';
    $request->pageSize = 872651;
    $request->pageToken = 'quaerat';
    $request->prettyPrint = false;
    $request->query = 'tempora';
    $request->quotaUser = 'vel';
    $request->readMask = 'quod';
    $request->scope = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new CloudassetSearchAllResourcesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudassetSearchAllResources($request, $requestSecurity);

    if ($response->searchAllResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
