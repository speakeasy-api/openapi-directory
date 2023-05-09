<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Datasets.BigqueryDatasetsDelete(ctx, operations.BigqueryDatasetsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "corrupti",
        DeleteContents: sdk.Bool(false),
        Fields: sdk.String("provident"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "unde",
        QuotaUser: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    }, operations.BigqueryDatasetsDeleteSecurity{
        Option1: &operations.BigqueryDatasetsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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