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
            GalaxyApName: "maxime",
            GalaxyApPassword: "quo",
            GalaxySearchType: "cum",
        },
        Request: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: "ducimus",
                AddressLine2: "eos",
            },
            Age: 32.200001,
            Dob: "odio",
            Email: "dolor",
            FirstName: "labore",
            LastName: "repellat",
            MiddleName: "et",
            PhoneNumber: "molestias",
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