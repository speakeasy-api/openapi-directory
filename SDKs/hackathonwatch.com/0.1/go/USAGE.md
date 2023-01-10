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
    
    req := operations.GetHackathonsIDFormatRequest{
        PathParams: operations.GetHackathonsIDFormatPathParams{
            ID: 6129263824403308222,
        },
    }
    
    res, err := s.Hackathons.GetHackathonsIDFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->