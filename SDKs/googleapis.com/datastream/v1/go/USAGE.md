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
            Parent: "similique",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "cumque",
            Alt: "json",
            Callback: "omnis",
            ConnectionProfileID: "ut",
            Fields: "dicta",
            Force: false,
            Key: "possimus",
            OauthToken: "eos",
            PrettyPrint: false,
            QuotaUser: "natus",
            RequestID: "consequatur",
            UploadType: "aspernatur",
            UploadProtocol: "dolores",
            ValidateOnly: true,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "omnis": "et",
                "est": "necessitatibus",
            },
            DisplayName: "velit",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "repudiandae",
                Password: "delectus",
                Port: 5778884639584587050,
                PrivateKey: "et",
                Username: "tenetur",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "labore",
                RootPath: "est",
            },
            Labels: map[string]string{
                "provident": "perspiciatis",
                "mollitia": "vitae",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "ad",
                Password: "magni",
                Port: 3484971647339665490,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "autem",
                    ClientCertificate: "et",
                    ClientKey: "aut",
                },
                Username: "explicabo",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "quia": "veniam",
                },
                DatabaseService: "repellendus",
                Hostname: "ducimus",
                Password: "soluta",
                Port: 1616641109373168718,
                Username: "cumque",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "aut",
                Hostname: "explicabo",
                Password: "maxime",
                Port: 4805550021675459519,
                Username: "ut",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "voluptas",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "modi": "et",
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