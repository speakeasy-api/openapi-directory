# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetCallToken1Request;
import org.openapis.openapi.models.operations.GetCallToken1Response;
import org.openapis.openapi.models.shared.GetCallTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1() {{
                        jwt = new SchemeJwt() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                        apiKey = new SchemeAPIKey() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                        streamAuthType = new SchemeStreamAuthType() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                    }};
                }})
                .build();

            GetCallToken1Request req = new GetCallToken1Request() {{
                request = new GetCallTokenRequest() {{
                    user = new java.util.HashMap<String, Object>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    userId = "illum";
                }};
            }};            

            GetCallToken1Response res = sdk.getCallToken1(req);

            if (res.getCallTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getCallToken1` - Get Call Token ()

### campaigns

* `createCampaign` - Create campaign
* `createSegment` - Create segment
* `queryCampaigns` - Query campaigns
* `queryRecipients` - Query recipients
* `querySegments` - Query segments

### channelTypes

* `createChannelType` - Create channel type
* `listChannelTypes` - List channel types

### channels

* `deleteChannels` - Deletes channels asynchronously
* `exportChannels` - Export channels
* `markChannelsRead` - Mark channels as read
* `muteChannel` - Mute channel
* `queryChannels` - Query channels
* `queryMembers` - Query members
* `search` - Search messages
* `sync` - Sync
* `unmuteChannel` - Unmute channel

### customCommands

* `createCommand` - Create command
* `listCommands` - List commands

### devices

* `createDevice` - Create device
* `deleteDevice` - Delete device
* `listDevices` - List devices

### events

* `sync` - Sync

### files

* `deleteFile` - Delete file
* `deleteImage` - Delete image

### gdpr

* `deactivateUsers` - Deactivate users
* `deleteChannels` - Deletes channels asynchronously
* `deleteUsers` - Delete Users
* `reactivateUsers` - Reactivate users

### imports

* `createImport` - Create import
* `createImportURL` - Create import URL
* `listImports` - Get import

### messages

* `deleteFile` - Delete file
* `deleteImage` - Delete image
* `flag` - Flag
* `getOG` - Get OG
* `markChannelsRead` - Mark channels as read
* `queryMessageFlags` - Query Message Flags
* `search` - Search messages
* `translateMessage` - Translate message
* `unflag` - Unflag
* `updateMessage` - Update message
* `updateMessagePartial` - Partially message update

### moderation

* `ban` - Ban user
* `createBlockList` - Create block list
* `deactivateUsers` - Deactivate users
* `deleteUsers` - Delete Users
* `flag` - Flag
* `listBlockLists` - List block lists
* `muteUser` - Mute user
* `queryBannedUsers` - Query Banned Users
* `queryMessageFlags` - Query Message Flags
* `reactivateUsers` - Reactivate users
* `unban` - Unban user
* `unflag` - Unflag
* `unmuteUser` - Unmute user

### permissionsV2

* `createRole` - Create role
* `listPermissions` - List permissions
* `listRoles` - List roles

### push

* `createDevice` - Create device
* `listPushProviders` - List push providers
* `upsertPushProvider` - Upsert a push provider

### settings

* `checkPush` - Check push
* `checkSQS` - Check SQS
* `createBlockList` - Create block list
* `createChannelType` - Create channel type
* `getApp` - Get App Settings
* `getRateLimits` - Get rate limits
* `listBlockLists` - List block lists
* `listChannelTypes` - List channel types
* `listPushProviders` - List push providers
* `updateApp` - Update App Settings
* `upsertPushProvider` - Upsert a push provider

### testing

* `checkPush` - Check push
* `checkSQS` - Check SQS

### users

* `ban` - Ban user
* `connect` - Connect (WebSocket)
* `createGuest` - Create guest
* `deactivateUsers` - Deactivate users
* `deleteUsers` - Delete Users
* `exportUser` - Export users
* `flag` - Flag
* `longPoll` - Long Poll (Transport)
* `muteUser` - Mute user
* `queryBannedUsers` - Query Banned Users
* `queryUsers` - Query users
* `reactivateUsers` - Reactivate users
* `restoreUsers` - Restore users
* `unban` - Unban user
* `unflag` - Unflag
* `unmuteUser` - Unmute user
* `updateUsers` - Upsert users
* `updateUsersPartial` - Partially update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
