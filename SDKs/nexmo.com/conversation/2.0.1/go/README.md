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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.CreateConversation(ctx, operations.CreateConversationRequestBody{
        DisplayName: sdk.String("Customer Chat"),
        ImageURL: sdk.String("https://example.com/image.png"),
        Name: sdk.String("customer_chat"),
        Properties: &shared.ConversationProperties{
            TTL: sdk.Float64(60),
        },
    })
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


### [Conversation](docs/conversation/README.md)

* [CreateConversation](docs/conversation/README.md#createconversation) - Create a conversation
* [DeleteConversation](docs/conversation/README.md#deleteconversation) - Delete a conversation
* [~~ListConversations~~](docs/conversation/README.md#listconversations) - List conversations :warning: **Deprecated**
* [RecordConversation](docs/conversation/README.md#recordconversation) - Record a conversation
* [ReplaceConversation](docs/conversation/README.md#replaceconversation) - Update a conversation
* [RetrieveConversation](docs/conversation/README.md#retrieveconversation) - Retrieve a conversation

### [Event](docs/event/README.md)

* [CreateEvent](docs/event/README.md#createevent) - Create an event
* [DeleteEvent](docs/event/README.md#deleteevent) - Delete an event
* [GetEvent](docs/event/README.md#getevent) - Retrieve an event
* [~~GetEvents~~](docs/event/README.md#getevents) - List events :warning: **Deprecated**

### [Leg](docs/leg/README.md)

* [DeleteLeg](docs/leg/README.md#deleteleg) - Delete a leg
* [ListLegs](docs/leg/README.md#listlegs) - List legs

### [Member](docs/member/README.md)

* [CreateMember](docs/member/README.md#createmember) - Create a member
* [DeleteMember](docs/member/README.md#deletemember) - Delete a member
* [GetMember](docs/member/README.md#getmember) - Retrieve a member
* [~~GetMembers~~](docs/member/README.md#getmembers) - List members :warning: **Deprecated**
* [UpdateMember](docs/member/README.md#updatemember) - Update a member

### [User](docs/user/README.md)

* [CreateUser](docs/user/README.md#createuser) - Create a user
* [DeleteUser](docs/user/README.md#deleteuser) - Delete a user
* [GetUser](docs/user/README.md#getuser) - Retrieve a user
* [~~GetUsers~~](docs/user/README.md#getusers) - List users :warning: **Deprecated**
* [GetuserConversations](docs/user/README.md#getuserconversations) - List user conversations
* [UpdateUser](docs/user/README.md#updateuser) - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
