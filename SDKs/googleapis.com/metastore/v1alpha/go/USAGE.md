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
            Parent: "voluptates",
        },
        QueryParams: operations.MetastoreProjectsLocationsFederationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quae",
            Alt: "json",
            Callback: "optio",
            FederationID: "et",
            Fields: "qui",
            Key: "voluptatem",
            OauthToken: "aliquam",
            PrettyPrint: true,
            QuotaUser: "voluptatem",
            RequestID: "quidem",
            UploadType: "enim",
            UploadProtocol: "reiciendis",
        },
        Request: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "porro": shared.BackendMetastore{
                    MetastoreType: "BIGQUERY",
                    Name: "et",
                },
                "consequatur": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "eius",
                },
            },
            Labels: map[string]string{
                "in": "pariatur",
                "ipsam": "voluptatibus",
            },
            Name: "nesciunt",
            Version: "quo",
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