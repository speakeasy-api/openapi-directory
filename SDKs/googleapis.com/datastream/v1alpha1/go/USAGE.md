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
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "ullam",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "sim.com",
                Password: "sapiente",
                Port: 272656,
                PrivateKey: "eum",
                Username: "Jason_Schiller47",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "similique",
                RootPath: "reprehenderit",
            },
            Labels: map[string]string{
                "quo": "quasi",
                "laboriosam": "dicta",
                "est": "voluptatem",
                "consequatur": "fugiat",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "verner.net",
                Password: "eos",
                Port: 870013,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "accusamus",
                    ClientCertificate: "reiciendis",
                    ClientKey: "rem",
                },
                Username: "Pinkie_Schmidt",
            },
            NoConnectivity: map[string]interface{}{
                "soluta": "sed",
                "quisquam": "rerum",
                "culpa": "qui",
                "sed": "rerum",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "occaecati": "odit",
                    "esse": "rem",
                    "voluptatem": "amet",
                    "est": "id",
                },
                DatabaseService: "blanditiis",
                Hostname: "curt.name",
                Password: "dolores",
                Port: 18789,
                Username: "Enrique61",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "modi",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "iure": "earum",
                "ut": "soluta",
                "qui": "ea",
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