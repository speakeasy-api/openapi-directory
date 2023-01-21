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
            Parent: "sit",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
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
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
                    AutoStorageIncrease: false,
                    DataDiskSizeGb: "ut",
                    DataDiskType: "PD_HDD",
                    DatabaseFlags: map[string]string{
                        "voluptate": "iste",
                        "vitae": "totam",
                    },
                    DatabaseVersion: "SQL_DATABASE_VERSION_UNSPECIFIED",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "debitis",
                                Label: "vel",
                                TTL: "odio",
                                Value: "dolore",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "id",
                                Label: "aspernatur",
                                TTL: "accusantium",
                                Value: "totam",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "commodi",
                                Label: "quis",
                                TTL: "est",
                                Value: "aut",
                            },
                        },
                        EnableIpv4: true,
                        PrivateNetwork: "non",
                        RequireSsl: false,
                    },
                    RootPassword: "omnis",
                    SourceID: "aut",
                    StorageAutoResizeLimit: "illo",
                    Tier: "sed",
                    UserLabels: map[string]string{
                        "autem": "consectetur",
                        "nobis": "odio",
                    },
                    Zone: "qui",
                },
            },
            DisplayName: "recusandae",
            Error: &shared.Status{
                Code: 7561811714888168464,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "modi": "sint",
                        "inventore": "ut",
                    },
                },
                Message: "exercitationem",
            },
            Labels: map[string]string{
                "reprehenderit": "tempore",
                "maiores": "incidunt",
                "dolor": "beatae",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "veritatis",
                Host: "in",
                Password: "et",
                Port: 8565714761387219319,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "ipsum",
                    ClientCertificate: "ex",
                    ClientKey: "dolores",
                },
                Username: "placeat",
            },
            Name: "vel",
            Provider: "RDS",
            State: "DRAFT",
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