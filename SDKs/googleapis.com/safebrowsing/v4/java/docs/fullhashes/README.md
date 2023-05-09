# fullHashes

### Available Operations

* [safebrowsingFullHashesFind](#safebrowsingfullhashesfind) - Finds the full hashes that match the requested hash prefixes.

## safebrowsingFullHashesFind

Finds the full hashes that match the requested hash prefixes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SafebrowsingFullHashesFindRequest;
import org.openapis.openapi.models.operations.SafebrowsingFullHashesFindResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ClientInfo;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesRequest;
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

            SafebrowsingFullHashesFindRequest req = new SafebrowsingFullHashesFindRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleSecuritySafebrowsingV4FindFullHashesRequest = new GoogleSecuritySafebrowsingV4FindFullHashesRequest() {{
                    apiClient = new GoogleSecuritySafebrowsingV4ClientInfo() {{
                        clientId = "maiores";
                        clientVersion = "molestiae";
                    }};;
                    client = new GoogleSecuritySafebrowsingV4ClientInfo() {{
                        clientId = "quod";
                        clientVersion = "quod";
                    }};;
                    clientStates = new String[]{{
                        add("totam"),
                        add("porro"),
                    }};
                    threatInfo = new GoogleSecuritySafebrowsingV4ThreatInfo() {{
                        platformTypes = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum[]{{
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.WINDOWS),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.ANY_PLATFORM),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum.IOS),
                        }};
                        threatEntries = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatEntry[]{{
                            add(new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                                digest = "fugit";
                                hash = "deleniti";
                                url = "hic";
                            }}),
                            add(new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                                digest = "optio";
                                hash = "totam";
                                url = "beatae";
                            }}),
                            add(new GoogleSecuritySafebrowsingV4ThreatEntry() {{
                                digest = "commodi";
                                hash = "molestiae";
                                url = "modi";
                            }}),
                        }};
                        threatEntryTypes = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum[]{{
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum.FILENAME),
                        }};
                        threatTypes = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum[]{{
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum.CSD_WHITELIST),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum.UNWANTED_SOFTWARE),
                            add(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum.CLIENT_INCIDENT),
                        }};
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            SafebrowsingFullHashesFindResponse res = sdk.fullHashes.safebrowsingFullHashesFind(req);

            if (res.googleSecuritySafebrowsingV4FindFullHashesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
