<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConversationRequest{
        Request: &operations.CreateConversationRequestBody{
            DisplayName: "molestias",
            ImageURL: "libero",
            Name: "modi",
            Properties: &shared.ConversationProperties{
                TTL: 37.200001,
            },
        },
    }
    
    res, err := s.Conversation.CreateConversation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConversation200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->