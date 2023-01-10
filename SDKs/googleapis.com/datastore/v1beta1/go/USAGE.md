<!-- Start SDK Example Usage -->
```go
package main

import (
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
            ProjectID: "sint",
        },
        QueryParams: operations.DatastoreProjectsExportQueryParams{
            DollarXgafv: "2",
            AccessToken: "odio",
            Alt: "proto",
            Callback: "reiciendis",
            Fields: "velit",
            Key: "non",
            OauthToken: "in",
            PrettyPrint: false,
            QuotaUser: "omnis",
            UploadType: "enim",
            UploadProtocol: "aspernatur",
        },
        Request: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "blanditiis",
                },
                NamespaceIds: []string{
                    "voluptas",
                    "perspiciatis",
                },
            },
            Labels: map[string]string{
                "explicabo": "ut",
                "consequuntur": "tenetur",
            },
            OutputURLPrefix: "eos",
        },
    }
    
    res, err := s.Projects.DatastoreProjectsExport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->