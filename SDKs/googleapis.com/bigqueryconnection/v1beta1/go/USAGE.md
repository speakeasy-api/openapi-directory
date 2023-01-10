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
            Parent: "ipsa",
        },
        QueryParams: operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "rerum",
            Alt: "json",
            Callback: "fuga",
            ConnectionID: "ad",
            Fields: "rem",
            Key: "neque",
            OauthToken: "voluptas",
            PrettyPrint: false,
            QuotaUser: "distinctio",
            UploadType: "culpa",
            UploadProtocol: "sunt",
        },
        Request: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "incidunt",
                    Username: "quo",
                },
                Database: "sed",
                InstanceID: "est",
                Type: "MYSQL",
            },
            Description: "et",
            FriendlyName: "eveniet",
            Name: "et",
        },
    }
    
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->