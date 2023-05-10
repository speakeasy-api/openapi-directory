# assetlinks

### Available Operations

* [digitalassetlinksAssetlinksBulkCheck](#digitalassetlinksassetlinksbulkcheck) - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* [digitalassetlinksAssetlinksCheck](#digitalassetlinksassetlinkscheck) - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

## digitalassetlinksAssetlinksBulkCheck

Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkCheckRequest = new BulkCheckRequest();
    $request->bulkCheckRequest->allowGoogleInternalDataSources = false;
    $request->bulkCheckRequest->defaultRelation = 'molestiae';
    $request->bulkCheckRequest->defaultSource = new Asset();
    $request->bulkCheckRequest->defaultSource->androidApp = new AndroidAppAsset();
    $request->bulkCheckRequest->defaultSource->androidApp->certificate = new CertificateInfo();
    $request->bulkCheckRequest->defaultSource->androidApp->certificate->sha256Fingerprint = 'minus';
    $request->bulkCheckRequest->defaultSource->androidApp->packageName = 'placeat';
    $request->bulkCheckRequest->defaultSource->web = new WebAsset();
    $request->bulkCheckRequest->defaultSource->web->site = 'voluptatum';
    $request->bulkCheckRequest->defaultTarget = new Asset();
    $request->bulkCheckRequest->defaultTarget->androidApp = new AndroidAppAsset();
    $request->bulkCheckRequest->defaultTarget->androidApp->certificate = new CertificateInfo();
    $request->bulkCheckRequest->defaultTarget->androidApp->certificate->sha256Fingerprint = 'iusto';
    $request->bulkCheckRequest->defaultTarget->androidApp->packageName = 'excepturi';
    $request->bulkCheckRequest->defaultTarget->web = new WebAsset();
    $request->bulkCheckRequest->defaultTarget->web->site = 'nisi';
    $request->bulkCheckRequest->skipCacheLookup = false;
    $request->bulkCheckRequest->statements = [
        new StatementTemplate(),
        new StatementTemplate(),
        new StatementTemplate(),
        new StatementTemplate(),
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $response = $sdk->assetlinks->digitalassetlinksAssetlinksBulkCheck($request);

    if ($response->bulkCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## digitalassetlinksAssetlinksCheck

Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DigitalassetlinksAssetlinksCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DigitalassetlinksAssetlinksCheckRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->relation = 'esse';
    $request->sourceAndroidAppCertificateSha256Fingerprint = 'totam';
    $request->sourceAndroidAppPackageName = 'porro';
    $request->sourceWebSite = 'dolorum';
    $request->targetAndroidAppCertificateSha256Fingerprint = 'dicta';
    $request->targetAndroidAppPackageName = 'nam';
    $request->targetWebSite = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';

    $response = $sdk->assetlinks->digitalassetlinksAssetlinksCheck($request);

    if ($response->checkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
