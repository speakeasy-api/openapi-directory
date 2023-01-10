<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.SendMessageRequest{
        Security: operations.SendMessageSecurity{
            BearerAuth: &shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Request: "fuga",
    }
    
    res, err := s.SendMessage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendMessage202ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->