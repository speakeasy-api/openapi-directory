# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            FirebasedynamiclinksManagedShortLinksCreateRequest req = new FirebasedynamiclinksManagedShortLinksCreateRequest() {{
                security = new FirebasedynamiclinksManagedShortLinksCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new FirebasedynamiclinksManagedShortLinksCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "json";
                    callback = "quidem";
                    fields = "eum";
                    key = "natus";
                    oauthToken = "ipsa";
                    prettyPrint = false;
                    quotaUser = "vero";
                    uploadType = "voluptatibus";
                    uploadProtocol = "sapiente";
                }};
                request = new CreateManagedShortLinkRequest() {{
                    dynamicLinkInfo = new DynamicLinkInfo() {{
                        analyticsInfo = new AnalyticsInfo() {{
                            googlePlayAnalytics = new GooglePlayAnalytics() {{
                                gclid = "iure";
                                utmCampaign = "qui";
                                utmContent = "omnis";
                                utmMedium = "atque";
                                utmSource = "fugit";
                                utmTerm = "soluta";
                            }};
                            itunesConnectAnalytics = new ITunesConnectAnalytics() {{
                                at = "inventore";
                                ct = "a";
                                mt = "laboriosam";
                                pt = "quasi";
                            }};
                        }};
                        androidInfo = new AndroidInfo() {{
                            androidFallbackLink = "voluptates";
                            androidLink = "laborum";
                            androidMinPackageVersionCode = "eligendi";
                            androidPackageName = "est";
                        }};
                        desktopInfo = new DesktopInfo() {{
                            desktopFallbackLink = "inventore";
                        }};
                        domainUriPrefix = "consequatur";
                        dynamicLinkDomain = "voluptate";
                        iosInfo = new IosInfo() {{
                            iosAppStoreId = "sapiente";
                            iosBundleId = "ut";
                            iosCustomScheme = "aliquam";
                            iosFallbackLink = "ad";
                            iosIpadBundleId = "dolores";
                            iosIpadFallbackLink = "vel";
                            iosMinimumVersion = "cumque";
                        }};
                        link = "eos";
                        navigationInfo = new NavigationInfo() {{
                            enableForcedRedirect = false;
                        }};
                        socialMetaTagInfo = new SocialMetaTagInfo() {{
                            socialDescription = "corrupti";
                            socialImageLink = "iure";
                            socialTitle = "nisi";
                        }};
                    }};
                    longDynamicLink = "facilis";
                    name = "perferendis";
                    sdkVersion = "perferendis";
                    suffix = new Suffix() {{
                        customSuffix = "et";
                        option = "OPTION_UNSPECIFIED";
                    }};
                }};
            }};

            FirebasedynamiclinksManagedShortLinksCreateResponse res = sdk.managedShortLinks.firebasedynamiclinksManagedShortLinksCreate(req);

            if (res.createManagedShortLinkResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### managedShortLinks

* `firebasedynamiclinksManagedShortLinksCreate` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### shortLinks

* `firebasedynamiclinksShortLinksCreate` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### v1

* `firebasedynamiclinksGetLinkStats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `firebasedynamiclinksInstallAttribution` - Get iOS strong/weak-match info for post-install attribution.
* `firebasedynamiclinksReopenAttribution` - Get iOS reopen attribution for app universal link open deeplinking.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
