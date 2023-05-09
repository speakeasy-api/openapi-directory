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
    res, err := s.Projects.DatastoreProjectsExport(ctx, operations.DatastoreProjectsExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
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
            OutputURLPrefix: sdk.String("tempora"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "excepturi",
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DatastoreProjectsExportSecurity{
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