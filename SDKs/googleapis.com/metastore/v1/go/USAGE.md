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

    req := operations.MetastoreProjectsLocationsFederationsCreateRequest{
        DollarXgafv: "2",
        FederationInput: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "distinctio": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "unde",
                },
                "nulla": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "illum",
                },
                "vel": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "deserunt",
                },
            },
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            Version: "tempora",
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "minus",
        FederationID: "placeat",
        Fields: "voluptatum",
        Key: "iusto",
        OauthToken: "excepturi",
        Parent: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        RequestID: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, req, operations.MetastoreProjectsLocationsFederationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->