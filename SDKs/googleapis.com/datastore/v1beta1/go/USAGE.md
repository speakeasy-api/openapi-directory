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

    req := operations.DatastoreProjectsExportRequest{
        Security: operations.DatastoreProjectsExportSecurity{
            Option1: &operations.DatastoreProjectsExportSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DatastoreProjectsExportPathParams{
            ProjectID: "corrupti",
        },
        QueryParams: operations.DatastoreProjectsExportQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "iure",
                    "magnam",
                },
                NamespaceIds: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
            },
            Labels: map[string]string{
                "minus": "placeat",
                "voluptatum": "iusto",
            },
            OutputURLPrefix: "excepturi",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatastoreProjectsExport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->