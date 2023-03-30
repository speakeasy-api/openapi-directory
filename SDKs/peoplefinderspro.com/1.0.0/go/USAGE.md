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
            GalaxyApName: "corrupti",
            GalaxyApPassword: "provident",
            GalaxySearchType: "distinctio",
        },
        Request: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: "quibusdam",
                AddressLine2: "unde",
            },
            Age: 8579.46,
            Dob: "corrupti",
            Email: "Henry.Mueller@hotmail.com",
            FirstName: "Hunter",
            LastName: "Gulgowski",
            MiddleName: "debitis",
            PhoneNumber: "ipsa",
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