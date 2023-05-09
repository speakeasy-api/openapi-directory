# managedShortLinks

### Available Operations

* [firebasedynamiclinksManagedShortLinksCreate](#firebasedynamiclinksmanagedshortlinkscreate) - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

## firebasedynamiclinksManagedShortLinksCreate

Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### Example Usage

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
                                gclid = "officia";
                                utmCampaign = "occaecati";
                                utmContent = "fugit";
                                utmMedium = "deleniti";
                                utmSource = "hic";
                                utmTerm = "optio";
                            }};;
                            itunesConnectAnalytics = new ITunesConnectAnalytics() {{
                                at = "totam";
                                ct = "beatae";
                                mt = "commodi";
                                pt = "molestiae";
                            }};;
                        }};;
                        androidInfo = new AndroidInfo() {{
                            androidFallbackLink = "modi";
                            androidLink = "qui";
                            androidMinPackageVersionCode = "impedit";
                            androidPackageName = "cum";
                        }};;
                        desktopInfo = new DesktopInfo() {{
                            desktopFallbackLink = "esse";
                        }};;
                        domainUriPrefix = "ipsum";
                        dynamicLinkDomain = "excepturi";
                        iosInfo = new IosInfo() {{
                            iosAppStoreId = "aspernatur";
                            iosBundleId = "perferendis";
                            iosCustomScheme = "ad";
                            iosFallbackLink = "natus";
                            iosIpadBundleId = "sed";
                            iosIpadFallbackLink = "iste";
                            iosMinimumVersion = "dolor";
                        }};;
                        link = "natus";
                        navigationInfo = new NavigationInfo() {{
                            enableForcedRedirect = false;
                        }};;
                        socialMetaTagInfo = new SocialMetaTagInfo() {{
                            socialDescription = "laboriosam";
                            socialImageLink = "hic";
                            socialTitle = "saepe";
                        }};;
                    }};;
                    longDynamicLink = "fuga";
                    name = "Stacy Moore";
                    sdkVersion = "quidem";
                    suffix = new Suffix() {{
                        customSuffix = "architecto";
                        option = SuffixOptionEnum.OPTION_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            FirebasedynamiclinksManagedShortLinksCreateResponse res = sdk.managedShortLinks.firebasedynamiclinksManagedShortLinksCreate(req, new FirebasedynamiclinksManagedShortLinksCreateSecurity("enim", "omnis") {{
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
