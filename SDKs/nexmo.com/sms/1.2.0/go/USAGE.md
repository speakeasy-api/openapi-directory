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
    
    req := operations.SendAnSmsRequest{
        PathParams: operations.SendAnSmsPathParams{
            Format: "json",
        },
        Request: "voluptas",
    }
    
    res, err := s.SendAnSms(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendAnSms200ApplicationJSONOneOf != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->