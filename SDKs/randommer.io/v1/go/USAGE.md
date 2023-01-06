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
    
    req := operations.GetAPICardRequest{
        QueryParams: operations.GetAPICardQueryParams{
            Type: "vel",
        },
        Headers: operations.GetAPICardHeaders{
            XAPIKey: "quas",
        },
    }
    
    res, err := s.Card.GetAPICard(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->