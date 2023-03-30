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
            Parent: "corrupti",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ConnectionProfileID: "nulla",
            Fields: "corrupti",
            Force: false,
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            DisplayName: "suscipit",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "lasting-sex.net",
                Password: "voluptatum",
                Port: 479977,
                PrivateKey: "excepturi",
                Username: "Glen.Walsh33",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "veritatis",
                RootPath: "deserunt",
            },
            Labels: map[string]string{
                "ipsam": "repellendus",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "well-informed-screamer.com",
                Password: "at",
                Port: 870088,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "maiores",
                    ClientCertificate: "molestiae",
                    ClientKey: "quod",
                },
                Username: "Presley_Koepp",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "dicta": "nam",
                    "officia": "occaecati",
                    "fugit": "deleniti",
                },
                DatabaseService: "hic",
                Hostname: "sizzling-locust.com",
                Password: "commodi",
                Port: 473600,
                Username: "Diego_Dibbert45",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "ipsum",
                Hostname: "nifty-case.com",
                Password: "ad",
                Port: 617636,
                Username: "Camden61",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "laboriosam",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "saepe": "fuga",
                "in": "corporis",
                "iste": "iure",
                "saepe": "quidem",
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