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
        DollarXgafv: "2",
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            DisplayName: "vel",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "physical-pegboard.info",
                Password: "iure",
                Port: 297534,
                PrivateKey: "debitis",
                Username: "Anahi38",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "molestiae",
                RootPath: "minus",
            },
            Labels: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "bountiful-pension.com",
                Password: "ipsam",
                Port: 832620,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "sapiente",
                    ClientCertificate: "quo",
                    ClientKey: "odit",
                },
                Username: "Sarah.Strosin79",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "esse": "totam",
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                DatabaseService: "fugit",
                Hostname: "miserly-usage.net",
                Password: "totam",
                Port: 105907,
                Username: "Haskell18",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "impedit",
                Hostname: "several-increase.biz",
                Password: "excepturi",
                Port: 135218,
                Username: "Aiden.Hane",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "iste",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "natus": "laboriosam",
            },
        },
        AccessToken: "hic",
        Alt: "proto",
        Callback: "fuga",
        ConnectionProfileID: "in",
        Fields: "corporis",
        Force: false,
        Key: "iste",
        OauthToken: "iure",
        Parent: "saepe",
        PrettyPrint: false,
        QuotaUser: "quidem",
        RequestID: "architecto",
        UploadType: "ipsa",
        UploadProtocol: "reiciendis",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->