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
            Parent: "rerum",
        },
        QueryParams: operations.MetastoreProjectsLocationsFederationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "media",
            Callback: "dolorum",
            FederationID: "velit",
            Fields: "dolor",
            Key: "molestiae",
            OauthToken: "consequatur",
            PrettyPrint: true,
            QuotaUser: "sit",
            RequestID: "nesciunt",
            UploadType: "esse",
            UploadProtocol: "iste",
        },
        Request: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "ut": shared.BackendMetastore{
                    MetastoreType: "BIGQUERY",
                    Name: "mollitia",
                },
                "hic": shared.BackendMetastore{
                    MetastoreType: "BIGQUERY",
                    Name: "sed",
                },
                "quia": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "perspiciatis",
                },
            },
            Labels: map[string]string{
                "qui": "sit",
                "quia": "est",
            },
            Name: "et",
            Version: "rerum",
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