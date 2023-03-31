# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/stream-io-api.com/v79.19.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                Jwt: "YOUR_API_KEY_HERE",
                APIKey: "YOUR_API_KEY_HERE",
                StreamAuthType: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := shared.GetCallTokenRequest{
        User: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        UserID: "illum",
    }

    ctx := context.Background()
    res, err := s.GetCallToken1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetCallToken1` - Get Call Token ()

### Campaigns

* `CreateCampaign` - Create campaign
* `CreateSegment` - Create segment
* `QueryCampaigns` - Query campaigns
* `QueryRecipients` - Query recipients
* `QuerySegments` - Query segments

### ChannelTypes

* `CreateChannelType` - Create channel type
* `ListChannelTypes` - List channel types

### Channels

* `DeleteChannels` - Deletes channels asynchronously
* `ExportChannels` - Export channels
* `MarkChannelsRead` - Mark channels as read
* `MuteChannel` - Mute channel
* `QueryChannels` - Query channels
* `QueryMembers` - Query members
* `Search` - Search messages
* `Sync` - Sync
* `UnmuteChannel` - Unmute channel

### CustomCommands

* `CreateCommand` - Create command
* `ListCommands` - List commands

### Devices

* `CreateDevice` - Create device
* `DeleteDevice` - Delete device
* `ListDevices` - List devices

### Events

* `Sync` - Sync

### Files

* `DeleteFile` - Delete file
* `DeleteImage` - Delete image

### Gdpr

* `DeactivateUsers` - Deactivate users
* `DeleteChannels` - Deletes channels asynchronously
* `DeleteUsers` - Delete Users
* `ReactivateUsers` - Reactivate users

### Imports

* `CreateImport` - Create import
* `CreateImportURL` - Create import URL
* `ListImports` - Get import

### Messages

* `DeleteFile` - Delete file
* `DeleteImage` - Delete image
* `Flag` - Flag
* `GetOG` - Get OG
* `MarkChannelsRead` - Mark channels as read
* `QueryMessageFlags` - Query Message Flags
* `Search` - Search messages
* `TranslateMessage` - Translate message
* `Unflag` - Unflag
* `UpdateMessage` - Update message
* `UpdateMessagePartial` - Partially message update

### Moderation

* `Ban` - Ban user
* `CreateBlockList` - Create block list
* `DeactivateUsers` - Deactivate users
* `DeleteUsers` - Delete Users
* `Flag` - Flag
* `ListBlockLists` - List block lists
* `MuteUser` - Mute user
* `QueryBannedUsers` - Query Banned Users
* `QueryMessageFlags` - Query Message Flags
* `ReactivateUsers` - Reactivate users
* `Unban` - Unban user
* `Unflag` - Unflag
* `UnmuteUser` - Unmute user

### PermissionsV2

* `CreateRole` - Create role
* `ListPermissions` - List permissions
* `ListRoles` - List roles

### Push

* `CreateDevice` - Create device
* `ListPushProviders` - List push providers
* `UpsertPushProvider` - Upsert a push provider

### Settings

* `CheckPush` - Check push
* `CheckSQS` - Check SQS
* `CreateBlockList` - Create block list
* `CreateChannelType` - Create channel type
* `GetApp` - Get App Settings
* `GetRateLimits` - Get rate limits
* `ListBlockLists` - List block lists
* `ListChannelTypes` - List channel types
* `ListPushProviders` - List push providers
* `UpdateApp` - Update App Settings
* `UpsertPushProvider` - Upsert a push provider

### Testing

* `CheckPush` - Check push
* `CheckSQS` - Check SQS

### Users

* `Ban` - Ban user
* `Connect` - Connect (WebSocket)
* `CreateGuest` - Create guest
* `DeactivateUsers` - Deactivate users
* `DeleteUsers` - Delete Users
* `ExportUser` - Export users
* `Flag` - Flag
* `LongPoll` - Long Poll (Transport)
* `MuteUser` - Mute user
* `QueryBannedUsers` - Query Banned Users
* `QueryUsers` - Query users
* `ReactivateUsers` - Reactivate users
* `RestoreUsers` - Restore users
* `Unban` - Unban user
* `Unflag` - Unflag
* `UnmuteUser` - Unmute user
* `UpdateUsers` - Upsert users
* `UpdateUsersPartial` - Partially update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
