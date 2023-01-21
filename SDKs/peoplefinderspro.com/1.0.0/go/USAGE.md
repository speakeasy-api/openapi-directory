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
            GalaxyApName: "sit",
            GalaxyApPassword: "voluptas",
            GalaxySearchType: "culpa",
        },
        Request: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: "expedita",
                AddressLine2: "consequuntur",
            },
            Age: 96.199997,
            Dob: "voluptas",
            Email: "fugit",
            FirstName: "et",
            LastName: "nihil",
            MiddleName: "rerum",
            PhoneNumber: "dicta",
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