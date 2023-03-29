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
            ProjectID: "unde",
        },
        QueryParams: operations.DatastoreProjectsExportQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "iusto",
                    "ullam",
                },
                NamespaceIds: []string{
                    "inventore",
                    "sapiente",
                    "enim",
                    "eum",
                },
            },
            Labels: map[string]string{
                "autem": "vel",
                "non": "deleniti",
            },
            OutputURLPrefix: "similique",
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