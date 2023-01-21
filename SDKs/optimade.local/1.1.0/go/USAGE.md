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
    
    req := operations.GetEntryInfoInfoEntryGetRequest{
        PathParams: operations.GetEntryInfoInfoEntryGetPathParams{
            Entry: "sit",
        },
    }
    
    res, err := s.Info.GetEntryInfoInfoEntryGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EntryInfoResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->