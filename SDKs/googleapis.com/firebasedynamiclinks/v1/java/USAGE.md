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