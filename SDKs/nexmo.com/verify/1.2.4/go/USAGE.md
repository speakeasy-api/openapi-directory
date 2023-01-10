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
            Format: "xml",
        },
        Request: shared.CheckRequest{
            APIKey: "cum",
            APISecret: "sed",
            Code: "quibusdam",
            IPAddress: "consequatur",
            RequestID: "ab",
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