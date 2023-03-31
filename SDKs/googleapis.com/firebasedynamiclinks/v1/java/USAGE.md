<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateSecurity;
import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateQueryParams;
import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateRequest;
import org.openapis.openapi.models.operations.FirebasedynamiclinksManagedShortLinksCreateResponse;
import org.openapis.openapi.models.shared.CreateManagedShortLinkRequest;
import org.openapis.openapi.models.shared.SuffixOptionEnum;
import org.openapis.openapi.models.shared.Suffix;
import org.openapis.openapi.models.shared.DynamicLinkInfo;
import org.openapis.openapi.models.shared.SocialMetaTagInfo;
import org.openapis.openapi.models.shared.NavigationInfo;
import org.openapis.openapi.models.shared.IosInfo;
import org.openapis.openapi.models.shared.DesktopInfo;
import org.openapis.openapi.models.shared.AndroidInfo;
import org.openapis.openapi.models.shared.AnalyticsInfo;
import org.openapis.openapi.models.shared.ITunesConnectAnalytics;
import org.openapis.openapi.models.shared.GooglePlayAnalytics;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new CreateManagedShortLinkRequest() {{
                    dynamicLinkInfo = new DynamicLinkInfo() {{
                        analyticsInfo = new AnalyticsInfo() {{
                            googlePlayAnalytics = new GooglePlayAnalytics() {{
                                gclid = "deserunt";
                                utmCampaign = "suscipit";
                                utmContent = "iure";
                                utmMedium = "magnam";
                                utmSource = "debitis";
                                utmTerm = "ipsa";
                            }};
                            itunesConnectAnalytics = new ITunesConnectAnalytics() {{
                                at = "delectus";
                                ct = "tempora";
                                mt = "suscipit";
                                pt = "molestiae";
                            }};
                        }};
                        androidInfo = new AndroidInfo() {{
                            androidFallbackLink = "minus";
                            androidLink = "placeat";
                            androidMinPackageVersionCode = "voluptatum";
                            androidPackageName = "iusto";
                        }};
                        desktopInfo = new DesktopInfo() {{
                            desktopFallbackLink = "excepturi";
                        }};
                        domainUriPrefix = "nisi";
                        dynamicLinkDomain = "recusandae";
                        iosInfo = new IosInfo() {{
                            iosAppStoreId = "temporibus";
                            iosBundleId = "ab";
                            iosCustomScheme = "quis";
                            iosFallbackLink = "veritatis";
                            iosIpadBundleId = "deserunt";
                            iosIpadFallbackLink = "perferendis";
                            iosMinimumVersion = "ipsam";
                        }};
                        link = "repellendus";
                        navigationInfo = new NavigationInfo() {{
                            enableForcedRedirect = false;
                        }};
                        socialMetaTagInfo = new SocialMetaTagInfo() {{
                            socialDescription = "sapiente";
                            socialImageLink = "quo";
                            socialTitle = "odit";
                        }};
                    }};
                    longDynamicLink = "at";
                    name = "at";
                    sdkVersion = "maiores";
                    suffix = new Suffix() {{
                        customSuffix = "molestiae";
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