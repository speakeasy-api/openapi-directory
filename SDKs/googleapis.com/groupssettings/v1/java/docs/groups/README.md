# groups

### Available Operations

* [groupsSettingsGroupsGet](#groupssettingsgroupsget) - Gets one resource by id.
* [groupsSettingsGroupsPatch](#groupssettingsgroupspatch) - Updates an existing resource. This method supports patch semantics.
* [groupsSettingsGroupsUpdate](#groupssettingsgroupsupdate) - Updates an existing resource.

## groupsSettingsGroupsGet

Gets one resource by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetRequest;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetResponse;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsSettingsGroupsGetRequest req = new GroupsSettingsGroupsGetRequest("error") {{
                alt = AltEnum.JSON;
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                userIp = "ipsa";
            }};            

            GroupsSettingsGroupsGetResponse res = sdk.groups.groupsSettingsGroupsGet(req, new GroupsSettingsGroupsGetSecurity("delectus", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsSettingsGroupsPatch

Updates an existing resource. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsPatchRequest;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsPatchResponse;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Groups;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsSettingsGroupsPatchRequest req = new GroupsSettingsGroupsPatchRequest("suscipit") {{
                groups = new Groups() {{
                    allowExternalMembers = "molestiae";
                    allowGoogleCommunication = "minus";
                    allowWebPosting = "placeat";
                    archiveOnly = "voluptatum";
                    customFooterText = "iusto";
                    customReplyTo = "excepturi";
                    customRolesEnabledForSettingsToBeMerged = "nisi";
                    defaultMessageDenyNotificationText = "recusandae";
                    defaultSender = "temporibus";
                    description = "ab";
                    email = "Ashlee36@yahoo.com";
                    enableCollaborativeInbox = "repellendus";
                    favoriteRepliesOnTop = "sapiente";
                    includeCustomFooter = "quo";
                    includeInGlobalAddressList = "odit";
                    isArchived = "at";
                    kind = "at";
                    maxMessageBytes = 978619;
                    membersCanPostAsTheGroup = "molestiae";
                    messageDisplayFont = "quod";
                    messageModerationLevel = "quod";
                    name = "Deanna Sauer MD";
                    primaryLanguage = "officia";
                    replyTo = "occaecati";
                    sendMessageDenyNotification = "fugit";
                    showInGroupDirectory = "deleniti";
                    spamModerationLevel = "hic";
                    whoCanAdd = "optio";
                    whoCanAddReferences = "totam";
                    whoCanApproveMembers = "beatae";
                    whoCanApproveMessages = "commodi";
                    whoCanAssignTopics = "molestiae";
                    whoCanAssistContent = "modi";
                    whoCanBanUsers = "qui";
                    whoCanContactOwner = "impedit";
                    whoCanDeleteAnyPost = "cum";
                    whoCanDeleteTopics = "esse";
                    whoCanDiscoverGroup = "ipsum";
                    whoCanEnterFreeFormTags = "excepturi";
                    whoCanHideAbuse = "aspernatur";
                    whoCanInvite = "perferendis";
                    whoCanJoin = "ad";
                    whoCanLeaveGroup = "natus";
                    whoCanLockTopics = "sed";
                    whoCanMakeTopicsSticky = "iste";
                    whoCanMarkDuplicate = "dolor";
                    whoCanMarkFavoriteReplyOnAnyTopic = "natus";
                    whoCanMarkFavoriteReplyOnOwnTopic = "laboriosam";
                    whoCanMarkNoResponseNeeded = "hic";
                    whoCanModerateContent = "saepe";
                    whoCanModerateMembers = "fuga";
                    whoCanModifyMembers = "in";
                    whoCanModifyTagsAndCategories = "corporis";
                    whoCanMoveTopicsIn = "iste";
                    whoCanMoveTopicsOut = "iure";
                    whoCanPostAnnouncements = "saepe";
                    whoCanPostMessage = "quidem";
                    whoCanTakeTopics = "architecto";
                    whoCanUnassignTopic = "ipsa";
                    whoCanUnmarkFavoriteReplyOnAnyTopic = "reiciendis";
                    whoCanViewGroup = "est";
                    whoCanViewMembership = "mollitia";
                }};;
                alt = AltEnum.JSON;
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                userIp = "nobis";
            }};            

            GroupsSettingsGroupsPatchResponse res = sdk.groups.groupsSettingsGroupsPatch(req, new GroupsSettingsGroupsPatchSecurity("enim", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsSettingsGroupsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsUpdateRequest;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsUpdateResponse;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Groups;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsSettingsGroupsUpdateRequest req = new GroupsSettingsGroupsUpdateRequest("nemo") {{
                groups = new Groups() {{
                    allowExternalMembers = "minima";
                    allowGoogleCommunication = "excepturi";
                    allowWebPosting = "accusantium";
                    archiveOnly = "iure";
                    customFooterText = "culpa";
                    customReplyTo = "doloribus";
                    customRolesEnabledForSettingsToBeMerged = "sapiente";
                    defaultMessageDenyNotificationText = "architecto";
                    defaultSender = "mollitia";
                    description = "dolorem";
                    email = "Caroline_Ziemann@yahoo.com";
                    enableCollaborativeInbox = "numquam";
                    favoriteRepliesOnTop = "commodi";
                    includeCustomFooter = "quam";
                    includeInGlobalAddressList = "molestiae";
                    isArchived = "velit";
                    kind = "error";
                    maxMessageBytes = 158969;
                    membersCanPostAsTheGroup = "quis";
                    messageDisplayFont = "vitae";
                    messageModerationLevel = "laborum";
                    name = "Bill Conn";
                    primaryLanguage = "tenetur";
                    replyTo = "ipsam";
                    sendMessageDenyNotification = "id";
                    showInGroupDirectory = "possimus";
                    spamModerationLevel = "aut";
                    whoCanAdd = "quasi";
                    whoCanAddReferences = "error";
                    whoCanApproveMembers = "temporibus";
                    whoCanApproveMessages = "laborum";
                    whoCanAssignTopics = "quasi";
                    whoCanAssistContent = "reiciendis";
                    whoCanBanUsers = "voluptatibus";
                    whoCanContactOwner = "vero";
                    whoCanDeleteAnyPost = "nihil";
                    whoCanDeleteTopics = "praesentium";
                    whoCanDiscoverGroup = "voluptatibus";
                    whoCanEnterFreeFormTags = "ipsa";
                    whoCanHideAbuse = "omnis";
                    whoCanInvite = "voluptate";
                    whoCanJoin = "cum";
                    whoCanLeaveGroup = "perferendis";
                    whoCanLockTopics = "doloremque";
                    whoCanMakeTopicsSticky = "reprehenderit";
                    whoCanMarkDuplicate = "ut";
                    whoCanMarkFavoriteReplyOnAnyTopic = "maiores";
                    whoCanMarkFavoriteReplyOnOwnTopic = "dicta";
                    whoCanMarkNoResponseNeeded = "corporis";
                    whoCanModerateContent = "dolore";
                    whoCanModerateMembers = "iusto";
                    whoCanModifyMembers = "dicta";
                    whoCanModifyTagsAndCategories = "harum";
                    whoCanMoveTopicsIn = "enim";
                    whoCanMoveTopicsOut = "accusamus";
                    whoCanPostAnnouncements = "commodi";
                    whoCanPostMessage = "repudiandae";
                    whoCanTakeTopics = "quae";
                    whoCanUnassignTopic = "ipsum";
                    whoCanUnmarkFavoriteReplyOnAnyTopic = "quidem";
                    whoCanViewGroup = "molestias";
                    whoCanViewMembership = "excepturi";
                }};;
                alt = AltEnum.JSON;
                fields = "modi";
                key = "praesentium";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                userIp = "quasi";
            }};            

            GroupsSettingsGroupsUpdateResponse res = sdk.groups.groupsSettingsGroupsUpdate(req, new GroupsSettingsGroupsUpdateSecurity("repudiandae", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
