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