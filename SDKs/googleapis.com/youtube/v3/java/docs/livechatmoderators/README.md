# liveChatModerators

### Available Operations

* [youtubeLiveChatModeratorsDelete](#youtubelivechatmoderatorsdelete) - Deletes a chat moderator.
* [youtubeLiveChatModeratorsInsert](#youtubelivechatmoderatorsinsert) - Inserts a new resource into this collection.
* [youtubeLiveChatModeratorsList](#youtubelivechatmoderatorslist) - Retrieves a list of resources, possibly filtered.

## youtubeLiveChatModeratorsDelete

Deletes a chat moderator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatModeratorsDeleteRequest req = new YoutubeLiveChatModeratorsDeleteRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dignissimos";
                key = "fugiat";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "veniam";
                uploadProtocol = "reiciendis";
            }};            

            YoutubeLiveChatModeratorsDeleteResponse res = sdk.liveChatModerators.youtubeLiveChatModeratorsDelete(req, new YoutubeLiveChatModeratorsDeleteSecurity() {{
                option1 = new YoutubeLiveChatModeratorsDeleteSecurityOption1("ab", "modi") {{
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

## youtubeLiveChatModeratorsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelProfileDetails;
import org.openapis.openapi.models.shared.LiveChatModerator;
import org.openapis.openapi.models.shared.LiveChatModeratorSnippet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatModeratorsInsertRequest req = new YoutubeLiveChatModeratorsInsertRequest(                new String[]{{
                                add("aut"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                liveChatModerator = new LiveChatModerator() {{
                    etag = "odio";
                    id = "64ad7334-ec1b-4781-b36a-08088d100efa";
                    kind = "nulla";
                    snippet = new LiveChatModeratorSnippet() {{
                        liveChatId = "officia";
                        moderatorDetails = new ChannelProfileDetails() {{
                            channelId = "sed";
                            channelUrl = "voluptatem";
                            displayName = "alias";
                            profileImageUrl = "eveniet";
                        }};;
                    }};;
                }};;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "qui";
                key = "qui";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "explicabo";
                uploadProtocol = "beatae";
            }};            

            YoutubeLiveChatModeratorsInsertResponse res = sdk.liveChatModerators.youtubeLiveChatModeratorsInsert(req, new YoutubeLiveChatModeratorsInsertSecurity() {{
                option1 = new YoutubeLiveChatModeratorsInsertSecurityOption1("aliquid", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveChatModerator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveChatModeratorsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsListRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsListResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsListSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeLiveChatModeratorsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatModeratorsListRequest req = new YoutubeLiveChatModeratorsListRequest("optio",                 new String[]{{
                                add("molestias"),
                                add("officia"),
                                add("libero"),
                                add("totam"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "ducimus";
                key = "odit";
                maxResults = 243623L;
                oauthToken = "reiciendis";
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "laborum";
                uploadProtocol = "natus";
            }};            

            YoutubeLiveChatModeratorsListResponse res = sdk.liveChatModerators.youtubeLiveChatModeratorsList(req, new YoutubeLiveChatModeratorsListSecurity() {{
                option1 = new YoutubeLiveChatModeratorsListSecurityOption1("accusamus", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveChatModeratorListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
