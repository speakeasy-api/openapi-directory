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
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.CreateConversationRequest{
        Request: &operations.CreateConversationRequestBody{
            DisplayName: "Customer Chat",
            ImageURL: "https://example.com/image.png",
            Name: "customer_chat",
            Properties: &shared.ConversationProperties{
                TTL: 60,
            },
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