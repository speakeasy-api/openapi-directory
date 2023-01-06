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
            Parent: "sint",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "soluta",
            Alt: "json",
            Callback: "sed",
            ConnectionProfileID: "et",
            Fields: "consequatur",
            Key: "similique",
            OauthToken: "eos",
            PrettyPrint: true,
            QuotaUser: "eos",
            RequestID: "hic",
            UploadType: "est",
            UploadProtocol: "voluptas",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "repellendus",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "non",
                Password: "nemo",
                Port: 1540774977486074912,
                PrivateKey: "sit",
                Username: "sint",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "nemo",
                RootPath: "necessitatibus",
            },
            Labels: map[string]string{
                "voluptas": "tempore",
                "ab": "et",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "et",
                Password: "sed",
                Port: 1110722433774136700,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "illum",
                    ClientCertificate: "aperiam",
                    ClientKey: "at",
                },
                Username: "quaerat",
            },
            NoConnectivity: map[string]interface{}{
                "tempore": "et",
                "ullam": "suscipit",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "sed": "voluptates",
                    "et": "fugiat",
                    "at": "qui",
                },
                DatabaseService: "quia",
                Hostname: "officia",
                Password: "ut",
                Port: 6022569335984936873,
                Username: "labore",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "cupiditate",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "enim": "excepturi",
                "quisquam": "sit",
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