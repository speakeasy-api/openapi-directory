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
        Security: operations.BigqueryDatasetsDeleteSecurity{
            Option1: &operations.BigqueryDatasetsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BigqueryDatasetsDeletePathParams{
            DatasetID: "unde",
            ProjectID: "deserunt",
        },
        QueryParams: operations.BigqueryDatasetsDeleteQueryParams{
            Alt: "json",
            DeleteContents: false,
            Fields: "nulla",
            Key: "id",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            UserIP: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.Datasets.BigqueryDatasetsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->