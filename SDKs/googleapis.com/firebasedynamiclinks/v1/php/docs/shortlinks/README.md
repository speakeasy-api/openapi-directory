# shortLinks

### Available Operations

* [firebasedynamiclinksShortLinksCreate](#firebasedynamiclinksshortlinkscreate) - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

## firebasedynamiclinksShortLinksCreate

Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksShortLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateShortDynamicLinkRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\FirebasedynamiclinksShortLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedynamiclinksShortLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createShortDynamicLinkRequest = new CreateShortDynamicLinkRequest();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo = new DynamicLinkInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo = new AnalyticsInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics = new GooglePlayAnalytics();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->gclid = 'nobis';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmCampaign = 'enim';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmContent = 'omnis';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmMedium = 'nemo';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmSource = 'minima';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmTerm = 'excepturi';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics = new ITunesConnectAnalytics();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->at = 'accusantium';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->ct = 'iure';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->mt = 'culpa';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->pt = 'doloribus';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->androidInfo = new AndroidInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->androidInfo->androidFallbackLink = 'sapiente';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->androidInfo->androidLink = 'architecto';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->androidInfo->androidMinPackageVersionCode = 'mollitia';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->androidInfo->androidPackageName = 'dolorem';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->desktopInfo = new DesktopInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->desktopInfo->desktopFallbackLink = 'culpa';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->domainUriPrefix = 'consequuntur';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->dynamicLinkDomain = 'repellat';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo = new IosInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosAppStoreId = 'mollitia';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosBundleId = 'occaecati';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosCustomScheme = 'numquam';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosFallbackLink = 'commodi';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosIpadBundleId = 'quam';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosIpadFallbackLink = 'molestiae';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->iosInfo->iosMinimumVersion = 'velit';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->link = 'error';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->navigationInfo = new NavigationInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->navigationInfo->enableForcedRedirect = false;
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->socialMetaTagInfo = new SocialMetaTagInfo();
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialDescription = 'quia';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialImageLink = 'quis';
    $request->createShortDynamicLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialTitle = 'vitae';
    $request->createShortDynamicLinkRequest->longDynamicLink = 'laborum';
    $request->createShortDynamicLinkRequest->sdkVersion = 'animi';
    $request->createShortDynamicLinkRequest->suffix = new Suffix();
    $request->createShortDynamicLinkRequest->suffix->customSuffix = 'enim';
    $request->createShortDynamicLinkRequest->suffix->option = SuffixOptionEnum::OPTION_UNSPECIFIED;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'error';

    $requestSecurity = new FirebasedynamiclinksShortLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shortLinks->firebasedynamiclinksShortLinksCreate($request, $requestSecurity);

    if ($response->createShortDynamicLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
