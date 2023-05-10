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
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksManagedShortLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateManagedShortLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\DynamicLinkInfo;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsInfo;
use \OpenAPI\OpenAPI\Models\Shared\GooglePlayAnalytics;
use \OpenAPI\OpenAPI\Models\Shared\ITunesConnectAnalytics;
use \OpenAPI\OpenAPI\Models\Shared\AndroidInfo;
use \OpenAPI\OpenAPI\Models\Shared\DesktopInfo;
use \OpenAPI\OpenAPI\Models\Shared\IosInfo;
use \OpenAPI\OpenAPI\Models\Shared\NavigationInfo;
use \OpenAPI\OpenAPI\Models\Shared\SocialMetaTagInfo;
use \OpenAPI\OpenAPI\Models\Shared\Suffix;
use \OpenAPI\OpenAPI\Models\Shared\SuffixOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksManagedShortLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedynamiclinksManagedShortLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createManagedShortLinkRequest = new CreateManagedShortLinkRequest();
    $request->createManagedShortLinkRequest->dynamicLinkInfo = new DynamicLinkInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo = new AnalyticsInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics = new GooglePlayAnalytics();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->gclid = 'provident';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmCampaign = 'distinctio';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmContent = 'quibusdam';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmMedium = 'unde';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmSource = 'nulla';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmTerm = 'corrupti';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics = new ITunesConnectAnalytics();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->at = 'illum';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->ct = 'vel';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->mt = 'error';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->pt = 'deserunt';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo = new AndroidInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidFallbackLink = 'suscipit';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidLink = 'iure';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidMinPackageVersionCode = 'magnam';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidPackageName = 'debitis';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->desktopInfo = new DesktopInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->desktopInfo->desktopFallbackLink = 'ipsa';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->domainUriPrefix = 'delectus';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->dynamicLinkDomain = 'tempora';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo = new IosInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosAppStoreId = 'suscipit';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosBundleId = 'molestiae';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosCustomScheme = 'minus';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosFallbackLink = 'placeat';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosIpadBundleId = 'voluptatum';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosIpadFallbackLink = 'iusto';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosMinimumVersion = 'excepturi';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->link = 'nisi';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->navigationInfo = new NavigationInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->navigationInfo->enableForcedRedirect = false;
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo = new SocialMetaTagInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialDescription = 'recusandae';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialImageLink = 'temporibus';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialTitle = 'ab';
    $request->createManagedShortLinkRequest->longDynamicLink = 'quis';
    $request->createManagedShortLinkRequest->name = 'Iris Aufderhar';
    $request->createManagedShortLinkRequest->sdkVersion = 'sapiente';
    $request->createManagedShortLinkRequest->suffix = new Suffix();
    $request->createManagedShortLinkRequest->suffix->customSuffix = 'quo';
    $request->createManagedShortLinkRequest->suffix->option = SuffixOptionEnum::OPTION_UNSPECIFIED;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new FirebasedynamiclinksManagedShortLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedShortLinks->firebasedynamiclinksManagedShortLinksCreate($request, $requestSecurity);

    if ($response->createManagedShortLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [managedShortLinks](docs/managedshortlinks/README.md)

* [firebasedynamiclinksManagedShortLinksCreate](docs/managedshortlinks/README.md#firebasedynamiclinksmanagedshortlinkscreate) - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### [shortLinks](docs/shortlinks/README.md)

* [firebasedynamiclinksShortLinksCreate](docs/shortlinks/README.md#firebasedynamiclinksshortlinkscreate) - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### [v1](docs/v1/README.md)

* [firebasedynamiclinksGetLinkStats](docs/v1/README.md#firebasedynamiclinksgetlinkstats) - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* [firebasedynamiclinksInstallAttribution](docs/v1/README.md#firebasedynamiclinksinstallattribution) - Get iOS strong/weak-match info for post-install attribution.
* [firebasedynamiclinksReopenAttribution](docs/v1/README.md#firebasedynamiclinksreopenattribution) - Get iOS reopen attribution for app universal link open deeplinking.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
