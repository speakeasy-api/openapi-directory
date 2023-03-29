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
            Parent: "unde",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ConnectionProfileID: "vero",
            Fields: "perspiciatis",
            Force: false,
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "saepe": "inventore",
                "sapiente": "enim",
            },
            DisplayName: "eum",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "jason.net",
                Password: "vel",
                Port: 528895,
                PrivateKey: "deleniti",
                Username: "Kenyon_Huel7",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "laboriosam",
                RootPath: "dicta",
            },
            Labels: map[string]string{
                "voluptatem": "consequatur",
                "fugiat": "a",
                "omnis": "eos",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "sarah.org",
                Password: "reiciendis",
                Port: 473608,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "quibusdam",
                    ClientCertificate: "et",
                    ClientKey: "praesentium",
                },
                Username: "Josue.Sauer72",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "culpa": "qui",
                    "sed": "rerum",
                    "possimus": "occaecati",
                },
                DatabaseService: "odit",
                Hostname: "harry.info",
                Password: "voluptatem",
                Port: 186332,
                Username: "Ona.Rippin",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "similique",
                Hostname: "brianne.com",
                Password: "quia",
                Port: 617636,
                Username: "Cameron61",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "iure",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "ut": "soluta",
                "qui": "ea",
                "laborum": "iusto",
                "ut": "optio",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->