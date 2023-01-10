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
    
    req := operations.MetastoreProjectsLocationsFederationsCreateRequest{
        Security: operations.MetastoreProjectsLocationsFederationsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MetastoreProjectsLocationsFederationsCreatePathParams{
            Parent: "ex",
        },
        QueryParams: operations.MetastoreProjectsLocationsFederationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "veniam",
            Alt: "media",
            Callback: "fuga",
            FederationID: "quasi",
            Fields: "doloribus",
            Key: "maxime",
            OauthToken: "quod",
            PrettyPrint: false,
            QuotaUser: "occaecati",
            RequestID: "nisi",
            UploadType: "amet",
            UploadProtocol: "iste",
        },
        Request: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "ipsam": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "voluptas",
                },
                "animi": shared.BackendMetastore{
                    MetastoreType: "METASTORE_TYPE_UNSPECIFIED",
                    Name: "optio",
                },
            },
            Labels: map[string]string{
                "labore": "voluptatem",
                "id": "labore",
            },
            Name: "eos",
            Version: "iste",
        },
    }
    
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->