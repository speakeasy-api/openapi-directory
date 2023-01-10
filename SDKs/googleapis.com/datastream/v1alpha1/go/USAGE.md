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
            Parent: "qui",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "media",
            Callback: "dolor",
            ConnectionProfileID: "exercitationem",
            Fields: "inventore",
            Key: "voluptate",
            OauthToken: "excepturi",
            PrettyPrint: true,
            QuotaUser: "aut",
            RequestID: "et",
            UploadType: "ipsam",
            UploadProtocol: "odit",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "repudiandae",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "repellat",
                Password: "voluptatum",
                Port: 3174294702629569041,
                PrivateKey: "provident",
                Username: "laboriosam",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "placeat",
                RootPath: "dignissimos",
            },
            Labels: map[string]string{
                "reiciendis": "omnis",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "quis",
                Password: "quis",
                Port: 2818121241612799699,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "in",
                    ClientCertificate: "at",
                    ClientKey: "at",
                },
                Username: "molestiae",
            },
            NoConnectivity: map[string]interface{}{
                "ipsam": "eos",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "quia": "et",
                    "maxime": "similique",
                    "esse": "quo",
                },
                DatabaseService: "et",
                Hostname: "a",
                Password: "commodi",
                Port: 6029522833312950284,
                Username: "qui",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "et",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "beatae": "doloremque",
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