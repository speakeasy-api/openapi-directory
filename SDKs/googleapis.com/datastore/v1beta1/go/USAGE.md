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
            ProjectID: "sit",
        },
        QueryParams: operations.DatastoreProjectsExportQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "debitis",
                    "voluptatum",
                    "et",
                },
                NamespaceIds: []string{
                    "dolorem",
                    "et",
                    "voluptate",
                },
            },
            Labels: map[string]string{
                "vitae": "totam",
                "dolores": "illum",
                "debitis": "vel",
            },
            OutputURLPrefix: "odio",
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