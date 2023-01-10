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
            Parent: "quia",
        },
        QueryParams: operations.MetastoreProjectsLocationsFederationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "perspiciatis",
            Alt: "media",
            Callback: "laudantium",
            FederationID: "eum",
            Fields: "esse",
            Key: "ex",
            OauthToken: "magnam",
            PrettyPrint: false,
            QuotaUser: "fugiat",
            RequestID: "vitae",
            UploadType: "suscipit",
            UploadProtocol: "in",
        },
        Request: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "praesentium": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "doloremque",
                },
                "accusamus": shared.BackendMetastore{
                    MetastoreType: "METASTORE_TYPE_UNSPECIFIED",
                    Name: "veritatis",
                },
            },
            Labels: map[string]string{
                "rerum": "harum",
                "dolor": "sit",
            },
            Name: "veniam",
            Version: "vel",
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