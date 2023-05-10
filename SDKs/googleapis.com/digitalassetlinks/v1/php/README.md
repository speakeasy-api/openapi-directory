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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [assetlinks](docs/assetlinks/README.md)

* [digitalassetlinksAssetlinksBulkCheck](docs/assetlinks/README.md#digitalassetlinksassetlinksbulkcheck) - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* [digitalassetlinksAssetlinksCheck](docs/assetlinks/README.md#digitalassetlinksassetlinkscheck) - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### [statements](docs/statements/README.md)

* [digitalassetlinksStatementsList](docs/statements/README.md#digitalassetlinksstatementslist) - Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
