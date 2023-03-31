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
        DollarXgafv: "2",
        GoogleDatastoreAdminV1beta1ExportEntitiesRequest: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                NamespaceIds: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
            },
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            OutputURLPrefix: "tempora",
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "minus",
        Fields: "placeat",
        Key: "voluptatum",
        OauthToken: "iusto",
        PrettyPrint: false,
        ProjectID: "excepturi",
        QuotaUser: "nisi",
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Projects.DatastoreProjectsExport(ctx, req, operations.DatastoreProjectsExportSecurity{
        Option1: &operations.DatastoreProjectsExportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->