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
        DollarXgafv: "2",
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "provident",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "distinctio",
                        User: "quibusdam",
                    },
                    Labels: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        ID: "delectus",
                        Labels: map[string]string{
                            "suscipit": "molestiae",
                            "minus": "placeat",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 528895,
                        },
                    },
                    VpcNetwork: "iusto",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: false,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "recusandae",
                    Collation: "temporibus",
                    DataDiskSizeGb: "ab",
                    DataDiskType: "PD_SSD",
                    DatabaseFlags: map[string]string{
                        "deserunt": "perferendis",
                    },
                    DatabaseVersion: "POSTGRES_9_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "sapiente",
                                Label: "quo",
                                TTL: "odit",
                                Value: "at",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "at",
                                Label: "maiores",
                                TTL: "molestiae",
                                Value: "quod",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "quod",
                                Label: "esse",
                                TTL: "totam",
                                Value: "porro",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "dolorum",
                                Label: "dicta",
                                TTL: "nam",
                                Value: "officia",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "occaecati",
                        RequireSsl: false,
                    },
                    RootPassword: "fugit",
                    SecondaryZone: "deleniti",
                    SourceID: "hic",
                    StorageAutoResizeLimit: "optio",
                    Tier: "totam",
                    UserLabels: map[string]string{
                        "commodi": "molestiae",
                    },
                    Zone: "modi",
                },
            },
            DisplayName: "qui",
            Error: &shared.Status{
                Code: 774234,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                    map[string]interface{}{
                        "natus": "sed",
                        "iste": "dolor",
                    },
                    map[string]interface{}{
                        "laboriosam": "hic",
                        "saepe": "fuga",
                        "in": "corporis",
                    },
                },
                Message: "iste",
            },
            Labels: map[string]string{
                "saepe": "quidem",
                "architecto": "ipsa",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "reiciendis",
                Host: "est",
                Password: "mollitia",
                Port: 670638,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "dolores",
                    ClientCertificate: "dolorem",
                    ClientKey: "corporis",
                },
                Username: "Braulio60",
            },
            Name: "nemo",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "minima",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "nippy-apse.info",
                    Password: "culpa",
                    Port: 988374,
                    PrivateKey: "sapiente",
                    Username: "Bart63",
                },
                Host: "consequuntur",
                Password: "repellat",
                Port: 653108,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "occaecati",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "commodi": "quam",
                    "molestiae": "velit",
                },
                Username: "Linda.Cronin",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "laborum",
                Host: "animi",
                Password: "enim",
                Port: 138183,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "quo",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "sequi",
                    ClientCertificate: "tenetur",
                    ClientKey: "ipsam",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "possimus": "aut",
                    "quasi": "error",
                    "temporibus": "laborum",
                },
                Username: "Austyn_Witting46",
            },
            Provider: "RDS",
            State: "FAILED",
        },
        AccessToken: "ipsa",
        Alt: "media",
        Callback: "voluptate",
        ConnectionProfileID: "cum",
        Fields: "perferendis",
        Key: "doloremque",
        OauthToken: "reprehenderit",
        Parent: "ut",
        PrettyPrint: false,
        QuotaUser: "maiores",
        RequestID: "dicta",
        SkipValidation: false,
        UploadType: "corporis",
        UploadProtocol: "dolore",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, req, operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->