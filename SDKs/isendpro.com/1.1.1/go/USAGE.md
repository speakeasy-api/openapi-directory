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
    
    req := operations.AddShortlinkRequest{
        Request: shared.ShortlinkRequest{
            Keyid: "et",
            Shortlink: "error",
        },
    }
    
    res, err := s.AddShortlink.AddShortlink(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortlinkResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->