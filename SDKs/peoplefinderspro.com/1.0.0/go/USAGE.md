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
    
    req := operations.SearchRequest{
        Headers: operations.SearchHeaders{
            GalaxyApName: "nobis",
            GalaxyApPassword: "quibusdam",
            GalaxySearchType: "et",
        },
        Request: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: "quia",
                AddressLine2: "rem",
            },
            Age: 50.099998,
            Dob: "aut",
            Email: "illum",
            FirstName: "deleniti",
            LastName: "eius",
            MiddleName: "sed",
            PhoneNumber: "eaque",
        },
    }
    
    res, err := s.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->