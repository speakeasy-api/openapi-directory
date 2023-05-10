<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DigitalassetlinksAssetlinksBulkCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\Asset;
use \OpenAPI\OpenAPI\Models\Shared\AndroidAppAsset;
use \OpenAPI\OpenAPI\Models\Shared\CertificateInfo;
use \OpenAPI\OpenAPI\Models\Shared\WebAsset;
use \OpenAPI\OpenAPI\Models\Shared\StatementTemplate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DigitalassetlinksAssetlinksBulkCheckRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkCheckRequest = new BulkCheckRequest();
    $request->bulkCheckRequest->allowGoogleInternalDataSources = false;
    $request->bulkCheckRequest->defaultRelation = 'provident';
    $request->bulkCheckRequest->defaultSource = new Asset();
    $request->bulkCheckRequest->defaultSource->androidApp = new AndroidAppAsset();
    $request->bulkCheckRequest->defaultSource->androidApp->certificate = new CertificateInfo();
    $request->bulkCheckRequest->defaultSource->androidApp->certificate->sha256Fingerprint = 'distinctio';
    $request->bulkCheckRequest->defaultSource->androidApp->packageName = 'quibusdam';
    $request->bulkCheckRequest->defaultSource->web = new WebAsset();
    $request->bulkCheckRequest->defaultSource->web->site = 'unde';
    $request->bulkCheckRequest->defaultTarget = new Asset();
    $request->bulkCheckRequest->defaultTarget->androidApp = new AndroidAppAsset();
    $request->bulkCheckRequest->defaultTarget->androidApp->certificate = new CertificateInfo();
    $request->bulkCheckRequest->defaultTarget->androidApp->certificate->sha256Fingerprint = 'nulla';
    $request->bulkCheckRequest->defaultTarget->androidApp->packageName = 'corrupti';
    $request->bulkCheckRequest->defaultTarget->web = new WebAsset();
    $request->bulkCheckRequest->defaultTarget->web->site = 'illum';
    $request->bulkCheckRequest->skipCacheLookup = false;
    $request->bulkCheckRequest->statements = [
        new StatementTemplate(),
        new StatementTemplate(),
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $response = $sdk->assetlinks->digitalassetlinksAssetlinksBulkCheck($request);

    if ($response->bulkCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->