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
            Parent: "sit",
        },
        QueryParams: operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ConnectionID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "debitis",
                    Username: "voluptatum",
                },
                Database: "et",
                InstanceID: "ut",
                Type: "MYSQL",
            },
            Description: "et",
            FriendlyName: "voluptate",
            Name: "iste",
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