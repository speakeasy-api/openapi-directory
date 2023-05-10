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