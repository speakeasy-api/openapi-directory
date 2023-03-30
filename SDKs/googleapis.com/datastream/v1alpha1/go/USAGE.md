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
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "magnam",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "unique-baboon.org",
                Password: "tempora",
                Port: 383441,
                PrivateKey: "molestiae",
                Username: "Paxton.Schulist",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "excepturi",
                RootPath: "nisi",
            },
            Labels: map[string]string{
                "temporibus": "ab",
                "quis": "veritatis",
                "deserunt": "perferendis",
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
            NoConnectivity: map[string]interface{}{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "optio": "totam",
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                DatabaseService: "cum",
                Hostname: "jolly-cowboy.name",
                Password: "aspernatur",
                Port: 18789,
                Username: "Enrique61",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "dolor",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "laboriosam": "hic",
                "saepe": "fuga",
                "in": "corporis",
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