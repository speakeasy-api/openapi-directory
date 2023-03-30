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
            Parent: "corrupti",
        },
        QueryParams: operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ConnectionID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "iure",
                    Username: "Eli96",
                },
                Database: "tempora",
                InstanceID: "suscipit",
                Type: "POSTGRES",
            },
            Description: "minus",
            FriendlyName: "placeat",
            Name: "voluptatum",
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