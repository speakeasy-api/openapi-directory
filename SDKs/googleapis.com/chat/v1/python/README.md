# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/chat/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChatMediaDownloadRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    resource_name="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.media.chat_media_download(req, operations.ChatMediaDownloadSecurity(
    option1=operations.ChatMediaDownloadSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.media is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### media

* `chat_media_download` - Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### spaces

* `chat_spaces_list` - Lists spaces the caller is a member of. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope. Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
* `chat_spaces_members_list` - Lists memberships in a space. Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.memberships` or `chat.memberships.readonly` authorization scope.
* `chat_spaces_messages_attachments_get` - Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
* `chat_spaces_messages_create` - Creates a message. For example usage, see [Create a message](https://developers.google.com/chat/api/guides/crudl/messages#create_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.create` authorization scope. Because Chat provides authentication for [webhooks](https://developers.google.com/chat/how-tos/webhooks) as part of the URL that's generated when a webhook is registered, webhooks can create messages without a service account or user authentication.
* `chat_spaces_messages_delete` - Deletes a message. For example usage, see [Delete a message](https://developers.google.com/chat/api/guides/crudl/messages#delete_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
* `chat_spaces_messages_patch` - Updates a message. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
* `chat_spaces_messages_update` - Updates a message. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
