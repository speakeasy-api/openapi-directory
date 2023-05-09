# members

### Available Operations

* [youtubeMembersList](#youtubememberslist) - Retrieves a list of members that match the request criteria for a channel.

## youtubeMembersList

Retrieves a list of members that match the request criteria for a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeMembersListModeEnum;
import org.openapis.openapi.models.operations.YoutubeMembersListRequest;
import org.openapis.openapi.models.operations.YoutubeMembersListResponse;
import org.openapis.openapi.models.operations.YoutubeMembersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeMembersListRequest req = new YoutubeMembersListRequest(                new String[]{{
                                add("autem"),
                                add("quo"),
                                add("nesciunt"),
                                add("illum"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "mollitia";
                filterByMemberChannelId = "assumenda";
                hasAccessToLevel = "recusandae";
                key = "distinctio";
                maxResults = 866861L;
                mode = YoutubeMembersListModeEnum.LIST_MEMBERS_MODE_UNKNOWN;
                oauthToken = "facere";
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "laborum";
                uploadProtocol = "incidunt";
            }};            

            YoutubeMembersListResponse res = sdk.members.youtubeMembersList(req, new YoutubeMembersListSecurity("maxime", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.memberListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
