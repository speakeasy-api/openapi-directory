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
        DollarXgafv: "2",
        ConnectionInput: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "provident",
                    Username: "Micheal_Sporer",
                },
                Database: "corrupti",
                InstanceID: "illum",
                Type: "POSTGRES",
            },
            Description: "error",
            FriendlyName: "deserunt",
            Name: "suscipit",
        },
        AccessToken: "iure",
        Alt: "json",
        Callback: "debitis",
        ConnectionID: "ipsa",
        Fields: "delectus",
        Key: "tempora",
        OauthToken: "suscipit",
        Parent: "molestiae",
        PrettyPrint: false,
        QuotaUser: "minus",
        UploadType: "placeat",
        UploadProtocol: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, req, operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->