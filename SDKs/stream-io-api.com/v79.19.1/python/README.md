# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/stream-io-api.com/v79.19.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        option1=shared.SecurityOption1(
            jwt="YOUR_API_KEY_HERE",
            api_key="YOUR_API_KEY_HERE",
            stream_auth_type="YOUR_API_KEY_HERE",
        ),
    ),
)


req = shared.GetCallTokenRequest(
    user={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    user_id="illum",
)
    
res = s.get_call_token_1(req)

if res.get_call_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_call_token_1` - Get Call Token ()

### campaigns

* `create_campaign` - Create campaign
* `create_segment` - Create segment
* `query_campaigns` - Query campaigns
* `query_recipients` - Query recipients
* `query_segments` - Query segments

### channel_types

* `create_channel_type` - Create channel type
* `list_channel_types` - List channel types

### channels

* `delete_channels` - Deletes channels asynchronously
* `export_channels` - Export channels
* `mark_channels_read` - Mark channels as read
* `mute_channel` - Mute channel
* `query_channels` - Query channels
* `query_members` - Query members
* `search` - Search messages
* `sync` - Sync
* `unmute_channel` - Unmute channel

### custom_commands

* `create_command` - Create command
* `list_commands` - List commands

### devices

* `create_device` - Create device
* `delete_device` - Delete device
* `list_devices` - List devices

### events

* `sync` - Sync

### files

* `delete_file` - Delete file
* `delete_image` - Delete image

### gdpr

* `deactivate_users` - Deactivate users
* `delete_channels` - Deletes channels asynchronously
* `delete_users` - Delete Users
* `reactivate_users` - Reactivate users

### imports

* `create_import` - Create import
* `create_import_url` - Create import URL
* `list_imports` - Get import

### messages

* `delete_file` - Delete file
* `delete_image` - Delete image
* `flag` - Flag
* `get_og` - Get OG
* `mark_channels_read` - Mark channels as read
* `query_message_flags` - Query Message Flags
* `search` - Search messages
* `translate_message` - Translate message
* `unflag` - Unflag
* `update_message` - Update message
* `update_message_partial` - Partially message update

### moderation

* `ban` - Ban user
* `create_block_list` - Create block list
* `deactivate_users` - Deactivate users
* `delete_users` - Delete Users
* `flag` - Flag
* `list_block_lists` - List block lists
* `mute_user` - Mute user
* `query_banned_users` - Query Banned Users
* `query_message_flags` - Query Message Flags
* `reactivate_users` - Reactivate users
* `unban` - Unban user
* `unflag` - Unflag
* `unmute_user` - Unmute user

### permissions_v2

* `create_role` - Create role
* `list_permissions` - List permissions
* `list_roles` - List roles

### push

* `create_device` - Create device
* `list_push_providers` - List push providers
* `upsert_push_provider` - Upsert a push provider

### settings

* `check_push` - Check push
* `check_sqs` - Check SQS
* `create_block_list` - Create block list
* `create_channel_type` - Create channel type
* `get_app` - Get App Settings
* `get_rate_limits` - Get rate limits
* `list_block_lists` - List block lists
* `list_channel_types` - List channel types
* `list_push_providers` - List push providers
* `update_app` - Update App Settings
* `upsert_push_provider` - Upsert a push provider

### testing

* `check_push` - Check push
* `check_sqs` - Check SQS

### users

* `ban` - Ban user
* `connect` - Connect (WebSocket)
* `create_guest` - Create guest
* `deactivate_users` - Deactivate users
* `delete_users` - Delete Users
* `export_user` - Export users
* `flag` - Flag
* `long_poll` - Long Poll (Transport)
* `mute_user` - Mute user
* `query_banned_users` - Query Banned Users
* `query_users` - Query users
* `reactivate_users` - Reactivate users
* `restore_users` - Restore users
* `unban` - Unban user
* `unflag` - Unflag
* `unmute_user` - Unmute user
* `update_users` - Upsert users
* `update_users_partial` - Partially update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
