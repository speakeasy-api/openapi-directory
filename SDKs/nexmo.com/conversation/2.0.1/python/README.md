# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/conversation/2.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.CreateConversationRequestBody(
    display_name="Customer Chat",
    image_url="https://example.com/image.png",
    name="customer_chat",
    properties=shared.ConversationProperties(
        ttl=60,
    ),
)
    
res = s.conversation.create_conversation(req)

if res.create_conversation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### conversation

* `create_conversation` - Create a conversation
* `delete_conversation` - Delete a conversation
* `list_conversations` - List conversations
* `record_conversation` - Record a conversation
* `replace_conversation` - Update a conversation
* `retrieve_conversation` - Retrieve a conversation

### event

* `create_event` - Create an event
* `delete_event` - Delete an event
* `get_event` - Retrieve an event
* `get_events` - List events

### leg

* `delete_leg` - Delete a leg
* `list_legs` - List legs

### member

* `create_member` - Create a member
* `delete_member` - Delete a member
* `get_member` - Retrieve a member
* `get_members` - List members
* `update_member` - Update a member

### user

* `create_user` - Create a user
* `delete_user` - Delete a user
* `get_user` - Retrieve a user
* `get_users` - List users
* `getuser_conversations` - List user conversations
* `update_user` - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
