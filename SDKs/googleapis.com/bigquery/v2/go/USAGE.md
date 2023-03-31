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

    req := operations.BigqueryDatasetsDeleteRequest{
        Alt: "json",
        DatasetID: "corrupti",
        DeleteContents: false,
        Fields: "provident",
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        ProjectID: "unde",
        QuotaUser: "nulla",
        UserIP: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Datasets.BigqueryDatasetsDelete(ctx, req, operations.BigqueryDatasetsDeleteSecurity{
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