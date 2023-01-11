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