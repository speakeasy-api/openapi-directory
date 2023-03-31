# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/conversation/2.0.1/go
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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := operations.CreateConversationRequestBody{
        DisplayName: "Customer Chat",
        ImageURL: "https://example.com/image.png",
        Name: "customer_chat",
        Properties: &shared.ConversationProperties{
            TTL: 60,
        },
    }

    ctx := context.Background()
    res, err := s.Conversation.CreateConversation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConversation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Conversation

* `CreateConversation` - Create a conversation
* `DeleteConversation` - Delete a conversation
* `ListConversations` - List conversations
* `RecordConversation` - Record a conversation
* `ReplaceConversation` - Update a conversation
* `RetrieveConversation` - Retrieve a conversation

### Event

* `CreateEvent` - Create an event
* `DeleteEvent` - Delete an event
* `GetEvent` - Retrieve an event
* `GetEvents` - List events

### Leg

* `DeleteLeg` - Delete a leg
* `ListLegs` - List legs

### Member

* `CreateMember` - Create a member
* `DeleteMember` - Delete a member
* `GetMember` - Retrieve a member
* `GetMembers` - List members
* `UpdateMember` - Update a member

### User

* `CreateUser` - Create a user
* `DeleteUser` - Delete a user
* `GetUser` - Retrieve a user
* `GetUsers` - List users
* `GetuserConversations` - List user conversations
* `UpdateUser` - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
