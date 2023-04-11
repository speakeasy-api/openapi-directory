# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/stream-io-api.com/v79.19.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/stream-io-api.com/v79.19.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.GetCallTokenRequest,
  GetCallToken1Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    option1: {
      jwt: "YOUR_API_KEY_HERE",
      apiKey: "YOUR_API_KEY_HERE",
      streamAuthType: "YOUR_API_KEY_HERE",
    },
  },
});

const req: shared.GetCallTokenRequest = {
  user: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  userId: "illum",
};

sdk.getCallToken1(req).then((res: GetCallToken1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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

