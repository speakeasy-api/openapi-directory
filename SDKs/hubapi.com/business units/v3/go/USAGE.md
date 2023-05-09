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
    res, err := s.BusinessUnit.GetBusinessUnitsV3BusinessUnitsUserUserID(ctx, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDRequest{
        Name: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        Properties: []string{
            "nulla",
            "corrupti",
            "illum",
        },
        UserID: "vel",
    }, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponsePublicBusinessUnitNoPaging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->