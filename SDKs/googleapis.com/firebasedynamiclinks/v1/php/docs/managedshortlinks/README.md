# managedShortLinks

### Available Operations

* [firebasedynamiclinksManagedShortLinksCreate](#firebasedynamiclinksmanagedshortlinkscreate) - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

## firebasedynamiclinksManagedShortLinksCreate

Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### Example Usage

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
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->gclid = 'dicta';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmCampaign = 'nam';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmContent = 'officia';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmMedium = 'occaecati';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmSource = 'fugit';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->googlePlayAnalytics->utmTerm = 'deleniti';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics = new ITunesConnectAnalytics();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->at = 'hic';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->ct = 'optio';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->mt = 'totam';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->analyticsInfo->itunesConnectAnalytics->pt = 'beatae';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo = new AndroidInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidFallbackLink = 'commodi';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidLink = 'molestiae';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidMinPackageVersionCode = 'modi';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->androidInfo->androidPackageName = 'qui';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->desktopInfo = new DesktopInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->desktopInfo->desktopFallbackLink = 'impedit';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->domainUriPrefix = 'cum';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->dynamicLinkDomain = 'esse';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo = new IosInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosAppStoreId = 'ipsum';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosBundleId = 'excepturi';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosCustomScheme = 'aspernatur';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosFallbackLink = 'perferendis';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosIpadBundleId = 'ad';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosIpadFallbackLink = 'natus';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->iosInfo->iosMinimumVersion = 'sed';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->link = 'iste';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->navigationInfo = new NavigationInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->navigationInfo->enableForcedRedirect = false;
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo = new SocialMetaTagInfo();
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialDescription = 'dolor';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialImageLink = 'natus';
    $request->createManagedShortLinkRequest->dynamicLinkInfo->socialMetaTagInfo->socialTitle = 'laboriosam';
    $request->createManagedShortLinkRequest->longDynamicLink = 'hic';
    $request->createManagedShortLinkRequest->name = 'Wilbur Kirlin';
    $request->createManagedShortLinkRequest->sdkVersion = 'iure';
    $request->createManagedShortLinkRequest->suffix = new Suffix();
    $request->createManagedShortLinkRequest->suffix->customSuffix = 'saepe';
    $request->createManagedShortLinkRequest->suffix->option = SuffixOptionEnum::SHORT;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

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
