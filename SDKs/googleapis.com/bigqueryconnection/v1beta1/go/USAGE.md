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

    req := operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest{
        Security: operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity{
            Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BigqueryconnectionProjectsLocationsConnectionsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ConnectionID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "iusto",
                    Username: "Eli96",
                },
                Database: "enim",
                InstanceID: "eum",
                Type: "POSTGRES",
            },
            Description: "autem",
            FriendlyName: "vel",
            Name: "non",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->