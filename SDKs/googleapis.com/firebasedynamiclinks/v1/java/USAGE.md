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