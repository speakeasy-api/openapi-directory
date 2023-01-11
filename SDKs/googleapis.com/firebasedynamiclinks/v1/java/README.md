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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new CreateManagedShortLinkRequest() {{
                    dynamicLinkInfo = new DynamicLinkInfo() {{
                        analyticsInfo = new AnalyticsInfo() {{
                            googlePlayAnalytics = new GooglePlayAnalytics() {{
                                gclid = "rerum";
                                utmCampaign = "dicta";
                                utmContent = "debitis";
                                utmMedium = "voluptatum";
                                utmSource = "et";
                                utmTerm = "ut";
                            }};
                            itunesConnectAnalytics = new ITunesConnectAnalytics() {{
                                at = "dolorem";
                                ct = "et";
                                mt = "voluptate";
                                pt = "iste";
                            }};
                        }};
                        androidInfo = new AndroidInfo() {{
                            androidFallbackLink = "vitae";
                            androidLink = "totam";
                            androidMinPackageVersionCode = "dolores";
                            androidPackageName = "illum";
                        }};
                        desktopInfo = new DesktopInfo() {{
                            desktopFallbackLink = "debitis";
                        }};
                        domainUriPrefix = "vel";
                        dynamicLinkDomain = "odio";
                        iosInfo = new IosInfo() {{
                            iosAppStoreId = "dolore";
                            iosBundleId = "id";
                            iosCustomScheme = "aspernatur";
                            iosFallbackLink = "accusantium";
                            iosIpadBundleId = "totam";
                            iosIpadFallbackLink = "commodi";
                            iosMinimumVersion = "quis";
                        }};
                        link = "est";
                        navigationInfo = new NavigationInfo() {{
                            enableForcedRedirect = true;
                        }};
                        socialMetaTagInfo = new SocialMetaTagInfo() {{
                            socialDescription = "odit";
                            socialImageLink = "non";
                            socialTitle = "voluptas";
                        }};
                    }};
                    longDynamicLink = "omnis";
                    name = "aut";
                    sdkVersion = "illo";
                    suffix = new Suffix() {{
                        customSuffix = "sed";
                        option = "CUSTOM";
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
