<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsAnnotationSpecSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalabelingProjectsAnnotationSpecSetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalabelingProjectsAnnotationSpecSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest();
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet();
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->annotationSpecs = [
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
        new GoogleCloudDatalabelingV1beta1AnnotationSpec(),
    ];
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->blockingResources = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->description = 'corrupti';
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->displayName = 'illum';
    $request->googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest->annotationSpecSet->name = 'Sabrina Oberbrunner';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DatalabelingProjectsAnnotationSpecSetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalabelingProjectsAnnotationSpecSetsCreate($request, $requestSecurity);

    if ($response->googleCloudDatalabelingV1beta1AnnotationSpecSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->