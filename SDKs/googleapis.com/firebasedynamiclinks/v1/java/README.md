# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateRequest;
import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateResponse;
import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyticsInfo;
import org.openapis.openapi.models.shared.AndroidInfo;
import org.openapis.openapi.models.shared.CreateManagedShortLinkRequest;
import org.openapis.openapi.models.shared.DesktopInfo;
import org.openapis.openapi.models.shared.DynamicLinkInfo;
import org.openapis.openapi.models.shared.GooglePlayAnalytics;
import org.openapis.openapi.models.shared.ITunesConnectAnalytics;
import org.openapis.openapi.models.shared.IosInfo;
import org.openapis.openapi.models.shared.NavigationInfo;
import org.openapis.openapi.models.shared.SocialMetaTagInfo;
import org.openapis.openapi.models.shared.Suffix;
import org.openapis.openapi.models.shared.SuffixOptionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedynamiclinksManagedShortLinksCreateRequest req = new FirebasedynamiclinksManagedShortLinksCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                createManagedShortLinkRequest = new CreateManagedShortLinkRequest() {{
                    dynamicLinkInfo = new DynamicLinkInfo() {{
                        analyticsInfo = new AnalyticsInfo() {{
                            googlePlayAnalytics = new GooglePlayAnalytics() {{
                                gclid = "provident";
                                utmCampaign = "distinctio";
                                utmContent = "quibusdam";
                                utmMedium = "unde";
                                utmSource = "nulla";
                                utmTerm = "corrupti";
                            }};;
                            itunesConnectAnalytics = new ITunesConnectAnalytics() {{
                                at = "illum";
                                ct = "vel";
                                mt = "error";
                                pt = "deserunt";
                            }};;
                        }};;
                        androidInfo = new AndroidInfo() {{
                            androidFallbackLink = "suscipit";
                            androidLink = "iure";
                            androidMinPackageVersionCode = "magnam";
                            androidPackageName = "debitis";
                        }};;
                        desktopInfo = new DesktopInfo() {{
                            desktopFallbackLink = "ipsa";
                        }};;
                        domainUriPrefix = "delectus";
                        dynamicLinkDomain = "tempora";
                        iosInfo = new IosInfo() {{
                            iosAppStoreId = "suscipit";
                            iosBundleId = "molestiae";
                            iosCustomScheme = "minus";
                            iosFallbackLink = "placeat";
                            iosIpadBundleId = "voluptatum";
                            iosIpadFallbackLink = "iusto";
                            iosMinimumVersion = "excepturi";
                        }};;
                        link = "nisi";
                        navigationInfo = new NavigationInfo() {{
                            enableForcedRedirect = false;
                        }};;
                        socialMetaTagInfo = new SocialMetaTagInfo() {{
                            socialDescription = "recusandae";
                            socialImageLink = "temporibus";
                            socialTitle = "ab";
                        }};;
                    }};;
                    longDynamicLink = "quis";
                    name = "Iris Aufderhar";
                    sdkVersion = "sapiente";
                    suffix = new Suffix() {{
                        customSuffix = "quo";
                        option = SuffixOptionEnum.OPTION_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }};            

            FirebasedynamiclinksManagedShortLinksCreateResponse res = sdk.managedShortLinks.firebasedynamiclinksManagedShortLinksCreate(req, new FirebasedynamiclinksManagedShortLinksCreateSecurity("dolorum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createManagedShortLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
