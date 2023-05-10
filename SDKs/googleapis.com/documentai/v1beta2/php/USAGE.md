<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsBatchProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2AutoMlParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2EntityExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2FormExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2KeyValuePairHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OcrParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableBoundHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2Vertex;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsBatchProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest();
    $request->googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest->requests = [
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsDocumentsBatchProcess($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->