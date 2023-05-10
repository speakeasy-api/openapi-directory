# v1p7beta1

### Available Operations

* [cloudassetExportAssets](#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

## cloudassetExportAssets

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetExportAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1ExportAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1PartitionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssetV1p7beta1GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetExportAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetExportAssetsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest = new GoogleCloudAssetV1p7beta1ExportAssetsRequest();
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->assetTypes = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->contentType = GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum::RELATIONSHIP;
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig = new GoogleCloudAssetV1p7beta1OutputConfig();
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination = new GoogleCloudAssetV1p7beta1BigQueryDestination();
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination->dataset = 'quo';
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination->force = false;
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination->partitionSpec = new GoogleCloudAssetV1p7beta1PartitionSpec();
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination->partitionSpec->partitionKey = GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum::PARTITION_KEY_UNSPECIFIED;
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination->separateTablesPerAssetType = false;
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->bigqueryDestination->table = 'at';
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->gcsDestination = new GoogleCloudAssetV1p7beta1GcsDestination();
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->gcsDestination->uri = 'https://wonderful-investor.net';
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->outputConfig->gcsDestination->uriPrefix = 'quod';
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->readTime = 'esse';
    $request->googleCloudAssetV1p7beta1ExportAssetsRequest->relationshipTypes = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->oauthToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new CloudassetExportAssetsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1p7beta1->cloudassetExportAssets($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
