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
    
    req := operations.VerifyCheckRequest{
        PathParams: operations.VerifyCheckPathParams{
            Format: "json",
        },
        Request: shared.CheckRequest{
            APIKey: "voluptas",
            APISecret: "culpa",
            Code: "expedita",
            IPAddress: "consequuntur",
            RequestID: "dolor",
        },
    }
    
    res, err := s.VerifyCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyCheck200ApplicationJSONOneOf != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->