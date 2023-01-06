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
            ID: 3858245044161450291,
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