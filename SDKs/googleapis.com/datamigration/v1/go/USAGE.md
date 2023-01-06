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
            Parent: "quisquam",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "pariatur",
            ConnectionProfileID: "magnam",
            Fields: "at",
            Key: "quia",
            OauthToken: "cupiditate",
            PrettyPrint: true,
            QuotaUser: "sint",
            RequestID: "minus",
            UploadType: "fugiat",
            UploadProtocol: "quae",
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "rerum",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "voluptatem",
                        User: "quo",
                    },
                    Labels: map[string]string{
                        "voluptatibus": "atque",
                        "impedit": "quo",
                        "totam": "beatae",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "nihil": "earum",
                            "in": "molestias",
                            "delectus": "qui",
                        },
                        ID: "omnis",
                        Labels: map[string]string{
                            "ut": "maxime",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 7798248647133471774,
                        },
                    },
                    VpcNetwork: "ut",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: true,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "sint",
                    Collation: "assumenda",
                    DataDiskSizeGb: "facere",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "quo": "eum",
                        "et": "natus",
                        "aspernatur": "dolor",
                    },
                    DatabaseVersion: "MYSQL_8_0",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "quo",
                                Label: "ipsum",
                                TTL: "suscipit",
                                Value: "cumque",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "nisi",
                                Label: "aspernatur",
                                TTL: "animi",
                                Value: "dolorum",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "voluptas",
                        RequireSsl: false,
                    },
                    RootPassword: "ad",
                    SecondaryZone: "ut",
                    SourceID: "ut",
                    StorageAutoResizeLimit: "nobis",
                    Tier: "ut",
                    UserLabels: map[string]string{
                        "praesentium": "amet",
                        "est": "et",
                    },
                    Zone: "et",
                },
            },
            DisplayName: "quasi",
            Error: &shared.Status{
                Code: 8148871817430478862,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "vel": "sed",
                        "qui": "et",
                    },
                    map[string]interface{}{
                        "quasi": "pariatur",
                        "eius": "soluta",
                        "rerum": "ex",
                    },
                    map[string]interface{}{
                        "ratione": "amet",
                        "ipsam": "autem",
                        "est": "aut",
                    },
                },
                Message: "ipsam",
            },
            Labels: map[string]string{
                "temporibus": "eum",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "qui",
                Host: "quidem",
                Password: "eos",
                Port: 1905824125619466350,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "aliquam",
                    ClientCertificate: "fugit",
                    ClientKey: "consequatur",
                },
                Username: "excepturi",
            },
            Name: "est",
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "dolores",
                Host: "eum",
                Password: "sit",
                Port: 6636801957865916271,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "ea",
                    ClientCertificate: "fugit",
                    ClientKey: "ad",
                },
                Username: "sapiente",
            },
            Provider: "RDS",
            State: "CREATING",
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