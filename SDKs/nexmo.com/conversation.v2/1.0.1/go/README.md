# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/conversation.v2/1.0.1/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetUsers(ctx, operations.GetUsersRequest{
        Cursor: sdk.String("corrupti"),
        Order: shared.OrderEnumDesc.ToPointer(),
        PageSize: sdk.Int64(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetUsers](docs/sdk/README.md#getusers) - List Users

### [Conversation](docs/conversation/README.md)

* [GetConversations](docs/conversation/README.md#getconversations) - List Conversations

### [Event](docs/event/README.md)

* [GetEvents](docs/event/README.md#getevents) - List Events

### [Member](docs/member/README.md)

* [GetMembers](docs/member/README.md#getmembers) - List Members
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
