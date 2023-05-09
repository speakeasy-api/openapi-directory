# threatHits

### Available Operations

* [safebrowsingThreatHitsCreate](#safebrowsingthreathitscreate) - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

## safebrowsingThreatHitsCreate

Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SafebrowsingThreatHitsCreateRequest;
import org.openapis.openapi.models.operations.SafebrowsingThreatHitsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ClientInfo;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatEntry;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHit;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHitUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingThreatHitsCreateRequest req = new SafebrowsingThreatHitsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleSecuritySafebrowsingV4ThreatHit = new GoogleSecuritySafebrowsingV4ThreatHit() {{
                    clientInfo = new GoogleSecuritySafebrowsingV4ClientInfo() {{
                        clientId = "saepe";
                        clientVersion = "fuga";
                    }};;
                    entry = new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                        digest = "in";
                        hash = "corporis";
                        url = "iste";
                    }};;
                    platformType = GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum.ANDROID;
                    resources = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource[]{{
                        add(new GoogleSecuritySafebrowsingV4ThreatHitThreatSource() {{
                            referrer = "quidem";
                            remoteIp = "architecto";
                            type = GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum.THREAT_SOURCE_TYPE_UNSPECIFIED;
                            url = "reiciendis";
                        }}),
                        add(new GoogleSecuritySafebrowsingV4ThreatHitThreatSource() {{
                            referrer = "est";
                            remoteIp = "mollitia";
                            type = GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum.TAB_REDIRECT;
                            url = "dolores";
                        }}),
                        add(new GoogleSecuritySafebrowsingV4ThreatHitThreatSource() {{
                            referrer = "dolorem";
                            remoteIp = "corporis";
                            type = GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum.THREAT_SOURCE_TYPE_UNSPECIFIED;
                            url = "nobis";
                        }}),
                        add(new GoogleSecuritySafebrowsingV4ThreatHitThreatSource() {{
                            referrer = "enim";
                            remoteIp = "omnis";
                            type = GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum.MATCHING_URL;
                            url = "minima";
                        }}),
                    }};
                    threatType = GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum.CLIENT_INCIDENT;
                    userInfo = new GoogleSecuritySafebrowsingV4ThreatHitUserInfo() {{
                        regionCode = "accusantium";
                        userId = "iure";
                    }};;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            SafebrowsingThreatHitsCreateResponse res = sdk.threatHits.safebrowsingThreatHitsCreate(req);

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
