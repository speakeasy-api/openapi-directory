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
            Parent: "corrupti",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ConnectionProfileID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            SkipValidation: false,
            UploadType: "suscipit",
            UploadProtocol: "iure",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "magnam",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "debitis",
                        User: "ipsa",
                    },
                    Labels: map[string]string{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        ID: "veritatis",
                        Labels: map[string]string{
                            "perferendis": "ipsam",
                            "repellendus": "sapiente",
                            "quo": "odit",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 870013,
                        },
                    },
                    VpcNetwork: "at",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "NEVER",
                    AutoStorageIncrease: false,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "quod",
                    Collation: "quod",
                    DataDiskSizeGb: "esse",
                    DataDiskType: "PD_SSD",
                    DatabaseFlags: map[string]string{
                        "dolorum": "dicta",
                        "nam": "officia",
                        "occaecati": "fugit",
                        "deleniti": "hic",
                    },
                    DatabaseVersion: "POSTGRES_12",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "beatae",
                                Label: "commodi",
                                TTL: "molestiae",
                                Value: "modi",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "qui",
                                Label: "impedit",
                                TTL: "cum",
                                Value: "esse",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "ipsum",
                                Label: "excepturi",
                                TTL: "aspernatur",
                                Value: "perferendis",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "ad",
                        RequireSsl: false,
                    },
                    RootPassword: "natus",
                    SecondaryZone: "sed",
                    SourceID: "iste",
                    StorageAutoResizeLimit: "dolor",
                    Tier: "natus",
                    UserLabels: map[string]string{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                    Zone: "corporis",
                },
            },
            DisplayName: "iste",
            Error: &shared.Status{
                Code: 437032,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "architecto": "ipsa",
                        "reiciendis": "est",
                        "mollitia": "laborum",
                    },
                    map[string]interface{}{
                        "dolorem": "corporis",
                    },
                    map[string]interface{}{
                        "nobis": "enim",
                    },
                    map[string]interface{}{
                        "nemo": "minima",
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                },
                Message: "doloribus",
            },
            Labels: map[string]string{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "numquam",
                Host: "commodi",
                Password: "quam",
                Port: 474697,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "velit",
                    ClientCertificate: "error",
                    ClientKey: "quia",
                },
                Username: "Eugene_Brown31",
            },
            Name: "odit",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "quo",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "dimwitted-vaulting.info",
                    Password: "id",
                    Port: 820994,
                    PrivateKey: "aut",
                    Username: "Avery_Mueller9",
                },
                Host: "reiciendis",
                Password: "voluptatibus",
                Port: 878194,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "nihil",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "voluptatibus": "ipsa",
                    "omnis": "voluptate",
                    "cum": "perferendis",
                },
                Username: "Alison97",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "dicta",
                Host: "corporis",
                Password: "dolore",
                Port: 480894,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "dicta",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "harum",
                    ClientCertificate: "enim",
                    ClientKey: "accusamus",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "repudiandae": "quae",
                    "ipsum": "quidem",
                },
                Username: "Kennedi.Mante50",
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