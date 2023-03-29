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
            Parent: "unde",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
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
            SkipValidation: false,
            UploadType: "eum",
            UploadProtocol: "iusto",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "ullam",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "saepe",
                        User: "inventore",
                    },
                    Labels: map[string]string{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "molestiae": "quo",
                            "quasi": "laboriosam",
                        },
                        ID: "dicta",
                        Labels: map[string]string{
                            "voluptatem": "consequatur",
                            "fugiat": "a",
                            "omnis": "eos",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 870013,
                        },
                    },
                    VpcNetwork: "accusamus",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "NEVER",
                    AutoStorageIncrease: false,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "quibusdam",
                    Collation: "et",
                    DataDiskSizeGb: "praesentium",
                    DataDiskType: "PD_SSD",
                    DatabaseFlags: map[string]string{
                        "soluta": "sed",
                        "quisquam": "rerum",
                        "culpa": "qui",
                        "sed": "rerum",
                    },
                    DatabaseVersion: "POSTGRES_12",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "odit",
                                Label: "esse",
                                TTL: "rem",
                                Value: "voluptatem",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "amet",
                                Label: "est",
                                TTL: "id",
                                Value: "blanditiis",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "numquam",
                                Label: "similique",
                                TTL: "dolores",
                                Value: "sit",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "quia",
                        RequireSsl: false,
                    },
                    RootPassword: "et",
                    SecondaryZone: "voluptatem",
                    SourceID: "laborum",
                    StorageAutoResizeLimit: "modi",
                    Tier: "et",
                    UserLabels: map[string]string{
                        "earum": "ut",
                        "soluta": "qui",
                    },
                    Zone: "ea",
                },
            },
            DisplayName: "laborum",
            Error: &shared.Status{
                Code: 437032,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "aspernatur": "inventore",
                        "ut": "libero",
                        "et": "libero",
                    },
                    map[string]interface{}{
                        "non": "ea",
                    },
                    map[string]interface{}{
                        "placeat": "ipsam",
                    },
                    map[string]interface{}{
                        "commodi": "quia",
                        "similique": "eaque",
                        "odio": "harum",
                    },
                },
                Message: "doloribus",
            },
            Labels: map[string]string{
                "aut": "et",
                "non": "quidem",
                "neque": "asperiores",
                "et": "culpa",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "aliquam",
                Host: "esse",
                Password: "totam",
                Port: 474697,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "et",
                    ClientCertificate: "fuga",
                    ClientKey: "nesciunt",
                },
                Username: "Eugenia_Brown31",
            },
            Name: "eos",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "omnis",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "clifford.org",
                    Password: "consequatur",
                    Port: 662527,
                    PrivateKey: "qui",
                    Username: "Adrain_Boyer",
                },
                Host: "tempore",
                Password: "explicabo",
                Port: 971945,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "reiciendis",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "totam": "molestias",
                    "reiciendis": "illo",
                    "id": "qui",
                    "quod": "sit",
                },
                Username: "Alison97",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "sed",
                Host: "ea",
                Password: "exercitationem",
                Port: 480894,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "sed",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "est",
                    ClientCertificate: "voluptatem",
                    ClientKey: "aut",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "sint": "veritatis",
                    "numquam": "eligendi",
                },
                Username: "Kenna.Mante50",
            },
            Provider: "RDS",
            State: "FAILED",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->