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
            ProjectID: "eligendi",
        },
        QueryParams: operations.DatastoreProjectsExportQueryParams{
            DollarXgafv: "2",
            AccessToken: "omnis",
            Alt: "proto",
            Callback: "error",
            Fields: "minus",
            Key: "facilis",
            OauthToken: "eum",
            PrettyPrint: false,
            QuotaUser: "cumque",
            UploadType: "aut",
            UploadProtocol: "officiis",
        },
        Request: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "omnis",
                    "est",
                },
                NamespaceIds: []string{
                    "et",
                },
            },
            Labels: map[string]string{
                "rerum": "quo",
                "repellendus": "saepe",
                "omnis": "qui",
            },
            OutputURLPrefix: "eaque",
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