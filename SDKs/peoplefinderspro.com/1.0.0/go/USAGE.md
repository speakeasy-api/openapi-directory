<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SearchRequest{
        Headers: operations.SearchHeaders{
            GalaxyApName: "unde",
            GalaxyApPassword: "deserunt",
            GalaxySearchType: "porro",
        },
        Request: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: "nulla",
                AddressLine2: "id",
            },
            Age: 8579.46,
            Dob: "perspiciatis",
            Email: "Henri.Mueller@hotmail.com",
            FirstName: "Humberto",
            LastName: "Gulgowski",
            MiddleName: "saepe",
            PhoneNumber: "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->