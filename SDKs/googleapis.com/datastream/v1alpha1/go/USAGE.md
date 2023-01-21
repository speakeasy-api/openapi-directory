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
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "voluptatum",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "et",
                Password: "ut",
                Port: 161231572858529631,
                PrivateKey: "et",
                Username: "voluptate",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "iste",
                RootPath: "vitae",
            },
            Labels: map[string]string{
                "dolores": "illum",
                "debitis": "vel",
                "odio": "dolore",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "id",
                Password: "aspernatur",
                Port: 2914295034816259174,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "totam",
                    ClientCertificate: "commodi",
                    ClientKey: "quis",
                },
                Username: "est",
            },
            NoConnectivity: map[string]interface{}{
                "odit": "non",
                "voluptas": "omnis",
                "aut": "illo",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "officiis": "autem",
                    "consectetur": "nobis",
                    "odio": "qui",
                },
                DatabaseService: "recusandae",
                Hostname: "at",
                Password: "ipsum",
                Port: 8902041070398994519,
                Username: "modi",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "sint",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "ut": "exercitationem",
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