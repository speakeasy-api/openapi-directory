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
            DisplayName: "provident",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "salty-stag.name",
                Password: "nulla",
                Port: 544883,
                PrivateKey: "illum",
                Username: "Henry.Mueller",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "iure",
                RootPath: "magnam",
            },
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "lawful-missionary.info",
                Password: "recusandae",
                Port: 836079,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "ab",
                    ClientCertificate: "quis",
                    ClientKey: "veritatis",
                },
                Username: "Lydia_Aufderhar",
            },
            NoConnectivity: map[string]interface{}{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                DatabaseService: "nam",
                Hostname: "posh-muffin.com",
                Password: "deleniti",
                Port: 944669,
                Username: "Nina41",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "molestiae",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        AccessToken: "ipsum",
        Alt: "media",
        Callback: "aspernatur",
        ConnectionProfileID: "perferendis",
        Fields: "ad",
        Key: "natus",
        OauthToken: "sed",
        Parent: "iste",
        PrettyPrint: false,
        QuotaUser: "dolor",
        RequestID: "natus",
        UploadType: "laboriosam",
        UploadProtocol: "hic",
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