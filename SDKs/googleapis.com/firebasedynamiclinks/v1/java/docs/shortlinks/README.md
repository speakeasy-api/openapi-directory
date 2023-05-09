# shortLinks

### Available Operations

* [firebasedynamiclinksShortLinksCreate](#firebasedynamiclinksshortlinkscreate) - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

## firebasedynamiclinksShortLinksCreate

Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedynamiclinksShortLinksCreateRequest;
import org.openapis.openapi.models.operations.FirebasedynamiclinksShortLinksCreateResponse;
import org.openapis.openapi.models.operations.FirebasedynamiclinksShortLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyticsInfo;
import org.openapis.openapi.models.shared.AndroidInfo;
import org.openapis.openapi.models.shared.CreateShortDynamicLinkRequest;
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

            FirebasedynamiclinksShortLinksCreateRequest req = new FirebasedynamiclinksShortLinksCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                createShortDynamicLinkRequest = new CreateShortDynamicLinkRequest() {{
                    dynamicLinkInfo = new DynamicLinkInfo() {{
                        analyticsInfo = new AnalyticsInfo() {{
                            googlePlayAnalytics = new GooglePlayAnalytics() {{
                                gclid = "minima";
                                utmCampaign = "excepturi";
                                utmContent = "accusantium";
                                utmMedium = "iure";
                                utmSource = "culpa";
                                utmTerm = "doloribus";
                            }};;
                            itunesConnectAnalytics = new ITunesConnectAnalytics() {{
                                at = "sapiente";
                                ct = "architecto";
                                mt = "mollitia";
                                pt = "dolorem";
                            }};;
                        }};;
                        androidInfo = new AndroidInfo() {{
                            androidFallbackLink = "culpa";
                            androidLink = "consequuntur";
                            androidMinPackageVersionCode = "repellat";
                            androidPackageName = "mollitia";
                        }};;
                        desktopInfo = new DesktopInfo() {{
                            desktopFallbackLink = "occaecati";
                        }};;
                        domainUriPrefix = "numquam";
                        dynamicLinkDomain = "commodi";
                        iosInfo = new IosInfo() {{
                            iosAppStoreId = "quam";
                            iosBundleId = "molestiae";
                            iosCustomScheme = "velit";
                            iosFallbackLink = "error";
                            iosIpadBundleId = "quia";
                            iosIpadFallbackLink = "quis";
                            iosMinimumVersion = "vitae";
                        }};;
                        link = "laborum";
                        navigationInfo = new NavigationInfo() {{
                            enableForcedRedirect = false;
                        }};;
                        socialMetaTagInfo = new SocialMetaTagInfo() {{
                            socialDescription = "animi";
                            socialImageLink = "enim";
                            socialTitle = "odit";
                        }};;
                    }};;
                    longDynamicLink = "quo";
                    sdkVersion = "sequi";
                    suffix = new Suffix() {{
                        customSuffix = "tenetur";
                        option = SuffixOptionEnum.UNGUESSABLE;
                    }};;
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "quasi";
                uploadProtocol = "reiciendis";
            }};            

            FirebasedynamiclinksShortLinksCreateResponse res = sdk.shortLinks.firebasedynamiclinksShortLinksCreate(req, new FirebasedynamiclinksShortLinksCreateSecurity("voluptatibus", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createShortDynamicLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
