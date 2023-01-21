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
            Parent: "sit",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ConnectionProfileID: "dolor",
            Fields: "expedita",
            Force: true,
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            RequestID: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "dolorem": "et",
                "voluptate": "iste",
                "vitae": "totam",
            },
            DisplayName: "dolores",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "illum",
                Password: "debitis",
                Port: 3706853784096366226,
                PrivateKey: "odio",
                Username: "dolore",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "id",
                RootPath: "aspernatur",
            },
            Labels: map[string]string{
                "totam": "commodi",
                "quis": "est",
                "aut": "odit",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "non",
                Password: "voluptas",
                Port: 4778690082005258714,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "aut",
                    ClientCertificate: "illo",
                    ClientKey: "sed",
                },
                Username: "officiis",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "consectetur": "nobis",
                    "odio": "qui",
                },
                DatabaseService: "recusandae",
                Hostname: "at",
                Password: "ipsum",
                Port: 8902041070398994519,
                Username: "modi",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "sint",
                Hostname: "inventore",
                Password: "ut",
                Port: 406703151708498928,
                Username: "aut",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "reprehenderit",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "maiores": "incidunt",
                "dolor": "beatae",
                "veritatis": "in",
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