# threatListUpdates

### Available Operations

* [safebrowsingThreatListUpdatesFetch](#safebrowsingthreatlistupdatesfetch) - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

## safebrowsingThreatListUpdatesFetch

Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SafebrowsingThreatListUpdatesFetchRequest;
import org.openapis.openapi.models.operations.SafebrowsingThreatListUpdatesFetchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4ClientInfo;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum;
import org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingThreatListUpdatesFetchRequest req = new SafebrowsingThreatListUpdatesFetchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleSecuritySafebrowsingV4FetchThreatListUpdatesRequest = new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest() {{
                    client = new GoogleSecuritySafebrowsingV4ClientInfo() {{
                        clientId = "occaecati";
                        clientVersion = "numquam";
                    }};;
                    listUpdateRequests = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest[]{{
                        add(new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest() {{
                            constraints = new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints() {{
                                deviceLocation = "quam";
                                language = "molestiae";
                                maxDatabaseEntries = 244425;
                                maxUpdateEntries = 623510;
                                region = "quia";
                                supportedCompressions = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[]{{
                                    add(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum.COMPRESSION_TYPE_UNSPECIFIED),
                                    add(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum.RICE),
                                }};
                            }};
                            platformType = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum.IOS;
                            state = "enim";
                            threatEntryType = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum.THREAT_ENTRY_TYPE_UNSPECIFIED;
                            threatType = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum.SUSPICIOUS;
                        }}),
                        add(new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest() {{
                            constraints = new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints() {{
                                deviceLocation = "sequi";
                                language = "tenetur";
                                maxDatabaseEntries = 368725;
                                maxUpdateEntries = 662527;
                                region = "possimus";
                                supportedCompressions = new org.openapis.openapi.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[]{{
                                    add(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum.COMPRESSION_TYPE_UNSPECIFIED),
                                }};
                            }};
                            platformType = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum.IOS;
                            state = "temporibus";
                            threatEntryType = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum.CHROME_EXTENSION;
                            threatType = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum.MALWARE;
                        }}),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            SafebrowsingThreatListUpdatesFetchResponse res = sdk.threatListUpdates.safebrowsingThreatListUpdatesFetch(req);

            if (res.googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
