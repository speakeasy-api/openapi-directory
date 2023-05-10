<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest();
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->links = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->pageSize = 857946;
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->pageToken = 'corrupti';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsBatchSearchLinkProcesses($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->