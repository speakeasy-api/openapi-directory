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
    
    req := operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest{
        Security: operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatastreamProjectsLocationsConnectionProfilesCreatePathParams{
            Parent: "recusandae",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "json",
            Callback: "perspiciatis",
            ConnectionProfileID: "cupiditate",
            Fields: "aut",
            Force: true,
            Key: "autem",
            OauthToken: "id",
            PrettyPrint: true,
            QuotaUser: "voluptate",
            RequestID: "provident",
            UploadType: "iure",
            UploadProtocol: "quasi",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "et": "laudantium",
                "optio": "eos",
            },
            DisplayName: "et",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "vitae",
                Password: "debitis",
                Port: 2282774803602718950,
                PrivateKey: "dicta",
                Username: "esse",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "saepe",
                RootPath: "deserunt",
            },
            Labels: map[string]string{
                "nulla": "iure",
                "perferendis": "quaerat",
                "quos": "atque",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "repudiandae",
                Password: "id",
                Port: 2162174907708384814,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "molestiae",
                    ClientCertificate: "et",
                    ClientKey: "ab",
                },
                Username: "enim",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "et": "eveniet",
                },
                DatabaseService: "dolore",
                Hostname: "voluptates",
                Password: "ea",
                Port: 1317065775129238088,
                Username: "rerum",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "consequatur",
                Hostname: "dolores",
                Password: "neque",
                Port: 4594302796622927742,
                Username: "placeat",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "quo",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "et": "ducimus",
                "et": "occaecati",
                "ratione": "in",
            },
        },
    }
    
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->