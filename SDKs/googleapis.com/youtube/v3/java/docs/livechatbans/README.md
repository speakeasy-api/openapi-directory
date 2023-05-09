# liveChatBans

### Available Operations

* [youtubeLiveChatBansDelete](#youtubelivechatbansdelete) - Deletes a chat ban.
* [youtubeLiveChatBansInsert](#youtubelivechatbansinsert) - Inserts a new resource into this collection.

## youtubeLiveChatBansDelete

Deletes a chat ban.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatBansDeleteRequest req = new YoutubeLiveChatBansDeleteRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "facilis";
                key = "ipsum";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "voluptatibus";
                uploadProtocol = "consequuntur";
            }};            

            YoutubeLiveChatBansDeleteResponse res = sdk.liveChatBans.youtubeLiveChatBansDelete(req, new YoutubeLiveChatBansDeleteSecurity() {{
                option1 = new YoutubeLiveChatBansDeleteSecurityOption1("debitis", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveChatBansInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansInsertRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansInsertResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatBansInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelProfileDetails;
import org.openapis.openapi.models.shared.LiveChatBan;
import org.openapis.openapi.models.shared.LiveChatBanSnippet;
import org.openapis.openapi.models.shared.LiveChatBanSnippetTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatBansInsertRequest req = new YoutubeLiveChatBansInsertRequest(                new String[]{{
                                add("eos"),
                                add("reprehenderit"),
                                add("nostrum"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                liveChatBan = new LiveChatBan() {{
                    etag = "iusto";
                    id = "a8cd9e73-19c1-477d-925f-77b114eeb52f";
                    kind = "earum";
                    snippet = new LiveChatBanSnippet() {{
                        banDurationSeconds = "reprehenderit";
                        bannedUserDetails = new ChannelProfileDetails() {{
                            channelId = "praesentium";
                            channelUrl = "nemo";
                            displayName = "repellat";
                            profileImageUrl = "quisquam";
                        }};;
                        liveChatId = "sequi";
                        type = LiveChatBanSnippetTypeEnum.PERMANENT;
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "assumenda";
                key = "aliquam";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "laudantium";
                uploadProtocol = "repudiandae";
            }};            

            YoutubeLiveChatBansInsertResponse res = sdk.liveChatBans.youtubeLiveChatBansInsert(req, new YoutubeLiveChatBansInsertSecurity() {{
                option1 = new YoutubeLiveChatBansInsertSecurityOption1("consequatur", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveChatBan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
