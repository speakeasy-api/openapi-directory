<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search(ctx, operations.SearchRequest{
        RequestBody: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: sdk.String("corrupti"),
                AddressLine2: sdk.String("provident"),
            },
            Age: sdk.Float64(7151.9),
            Dob: sdk.String("quibusdam"),
            Email: sdk.String("Ryan.Little62@yahoo.com"),
            FirstName: sdk.String("Luna"),
            LastName: sdk.String("Hoppe"),
            MiddleName: sdk.String("iure"),
            PhoneNumber: sdk.String("magnam"),
        },
        GalaxyApName: sdk.String("debitis"),
        GalaxyApPassword: sdk.String("ipsa"),
        GalaxySearchType: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->