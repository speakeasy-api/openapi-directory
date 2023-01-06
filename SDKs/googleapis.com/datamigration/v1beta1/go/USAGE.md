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
    
    req := operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest{
        Security: operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreatePathParams{
            Parent: "cupiditate",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quo",
            Alt: "proto",
            Callback: "doloremque",
            ConnectionProfileID: "magnam",
            Fields: "suscipit",
            Key: "earum",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "occaecati",
            RequestID: "consequatur",
            UploadType: "fugit",
            UploadProtocol: "qui",
        },
        Request: &shared.ConnectionProfileInput{
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "NEVER",
                    AutoStorageIncrease: true,
                    DataDiskSizeGb: "reprehenderit",
                    DataDiskType: "PD_HDD",
                    DatabaseFlags: map[string]string{
                        "quod": "perspiciatis",
                        "accusantium": "impedit",
                    },
                    DatabaseVersion: "MYSQL_5_7",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "voluptatum",
                                Label: "sapiente",
                                TTL: "autem",
                                Value: "omnis",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "placeat",
                                Label: "expedita",
                                TTL: "quis",
                                Value: "fugit",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "rem",
                                Label: "enim",
                                TTL: "tempora",
                                Value: "praesentium",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "alias",
                        RequireSsl: false,
                    },
                    RootPassword: "voluptatum",
                    SourceID: "mollitia",
                    StorageAutoResizeLimit: "fugit",
                    Tier: "aspernatur",
                    UserLabels: map[string]string{
                        "nostrum": "perferendis",
                        "animi": "unde",
                        "expedita": "recusandae",
                    },
                    Zone: "consectetur",
                },
            },
            DisplayName: "possimus",
            Error: &shared.Status{
                Code: 108300845224474151,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "magnam": "ea",
                        "nostrum": "incidunt",
                        "quo": "unde",
                    },
                    map[string]interface{}{
                        "qui": "dolorem",
                        "similique": "est",
                        "impedit": "harum",
                    },
                },
                Message: "distinctio",
            },
            Labels: map[string]string{
                "ad": "qui",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "dolor",
                Host: "consequatur",
                Password: "earum",
                Port: 5276743471450151556,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "et",
                    ClientCertificate: "et",
                    ClientKey: "molestiae",
                },
                Username: "id",
            },
            Name: "perferendis",
            Provider: "CLOUDSQL",
            State: "UPDATING",
        },
    }
    
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->