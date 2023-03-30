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

    req := operations.GetBusinessUnitsV3BusinessUnitsUserUserIDRequest{
        Security: operations.GetBusinessUnitsV3BusinessUnitsUserUserIDSecurity{
            Oauth2Legacy: &shared.SchemeOauth2Legacy{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetBusinessUnitsV3BusinessUnitsUserUserIDPathParams{
            UserID: "unde",
        },
        QueryParams: operations.GetBusinessUnitsV3BusinessUnitsUserUserIDQueryParams{
            Name: []string{
                "porro",
                "nulla",
                "id",
            },
            Properties: []string{
                "perspiciatis",
                "nulla",
                "nihil",
                "fuga",
            },
        },
    }

    ctx := context.Background()
    res, err := s.BusinessUnit.GetBusinessUnitsV3BusinessUnitsUserUserID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponsePublicBusinessUnitNoPaging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->