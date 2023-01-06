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
            Parent: "dolores",
        },
        QueryParams: operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "incidunt",
            Alt: "media",
            Callback: "veniam",
            ConnectionID: "et",
            Fields: "enim",
            Key: "sapiente",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "omnis",
            UploadType: "maiores",
            UploadProtocol: "et",
        },
        Request: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "aut",
                    Username: "dolorem",
                },
                Database: "nisi",
                InstanceID: "quod",
                Type: "DATABASE_TYPE_UNSPECIFIED",
            },
            Description: "quod",
            FriendlyName: "blanditiis",
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