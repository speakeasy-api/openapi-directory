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
        RequestBody: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: "corrupti",
                AddressLine2: "provident",
            },
            Age: 7151.9,
            Dob: "quibusdam",
            Email: "Ryan.Little62@yahoo.com",
            FirstName: "Luna",
            LastName: "Hoppe",
            MiddleName: "iure",
            PhoneNumber: "magnam",
        },
        GalaxyApName: "debitis",
        GalaxyApPassword: "ipsa",
        GalaxySearchType: "delectus",
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