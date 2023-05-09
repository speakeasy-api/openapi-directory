# threatMatches

### Available Operations

* [safebrowsingThreatMatchesFind](#safebrowsingthreatmatchesfind) - Finds the threat entries that match the Safe Browsing lists.

## safebrowsingThreatMatchesFind

Finds the threat entries that match the Safe Browsing lists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SafebrowsingThreatMatchesFindRequest;
import org.openapis.openapi.models.operations.SafebrowsingThreatMatchesFindResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ClientInfo;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FindThreatMatchesRequest;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatEntry;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfo;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingThreatMatchesFindRequest req = new SafebrowsingThreatMatchesFindRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleSecuritySafebrowsingV4FindThreatMatchesRequest = new GoogleSecuritySafebrowsingV4FindThreatMatchesRequest() {{
                    client = new GoogleSecuritySafebrowsingV4ClientInfo() {{
                        clientId = "harum";
                        clientVersion = "enim";
                    }};;
                    threatInfo = new GoogleSecuritySafebrowsingV4ThreatInfo() {{
                        platformTypes = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum[]{{
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.ANDROID),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.CHROME),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.PLATFORM_TYPE_UNSPECIFIED),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.WINDOWS),
                        }};
                        threatEntries = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatEntry[]{{
                            add(new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                                digest = "molestias";
                                hash = "excepturi";
                                url = "pariatur";
                            }}),
                            add(new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                                digest = "modi";
                                hash = "praesentium";
                                url = "rem";
                            }}),
                            add(new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                                digest = "voluptates";
                                hash = "quasi";
                                url = "repudiandae";
                            }}),
                        }};
                        threatEntryTypes = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum[]{{
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum.THREAT_ENTRY_TYPE_UNSPECIFIED),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum.CERT),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum.URL),
                        }};
                        threatTypes = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum[]{{
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum.THREAT_TYPE_UNSPECIFIED),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum.APK_MALWARE_OFFLINE),
                        }};
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            SafebrowsingThreatMatchesFindResponse res = sdk.threatMatches.safebrowsingThreatMatchesFind(req);

            if (res.googleSecuritySafebrowsingV4FindThreatMatchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
