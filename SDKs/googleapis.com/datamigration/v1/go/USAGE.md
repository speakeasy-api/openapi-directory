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
            SkipValidation: false,
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "ut",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "dolorem",
                        User: "et",
                    },
                    Labels: map[string]string{
                        "iste": "vitae",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "dolores": "illum",
                            "debitis": "vel",
                            "odio": "dolore",
                        },
                        ID: "id",
                        Labels: map[string]string{
                            "accusantium": "totam",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 6745438398739480977,
                        },
                    },
                    VpcNetwork: "quis",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: true,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "non",
                    Collation: "voluptas",
                    DataDiskSizeGb: "omnis",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "sed": "officiis",
                    },
                    DatabaseVersion: "POSTGRES_12",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "nobis",
                                Label: "odio",
                                TTL: "qui",
                                Value: "recusandae",
                            },
                        },
                        EnableIpv4: true,
                        PrivateNetwork: "ipsum",
                        RequireSsl: true,
                    },
                    RootPassword: "modi",
                    SecondaryZone: "sint",
                    SourceID: "inventore",
                    StorageAutoResizeLimit: "ut",
                    Tier: "exercitationem",
                    UserLabels: map[string]string{
                        "reprehenderit": "tempore",
                        "maiores": "incidunt",
                        "dolor": "beatae",
                    },
                    Zone: "veritatis",
                },
            },
            DisplayName: "in",
            Error: &shared.Status{
                Code: 3508963237347473586,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ex": "dolores",
                    },
                    map[string]interface{}{
                        "vel": "rerum",
                    },
                },
                Message: "mollitia",
            },
            Labels: map[string]string{
                "quam": "reprehenderit",
                "qui": "qui",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "unde",
                Host: "in",
                Password: "autem",
                Port: 8086159467323165929,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "ut",
                    ClientCertificate: "itaque",
                    ClientKey: "ab",
                },
                Username: "neque",
            },
            Name: "ullam",
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: "et",
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: "accusantium",
                    Password: "esse",
                    Port: 5902760509050140210,
                    PrivateKey: "quam",
                    Username: "velit",
                },
                Host: "cumque",
                Password: "soluta",
                Port: 759605945513541974,
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: "voluptates",
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "et": "optio",
                    "qui": "earum",
                    "illo": "omnis",
                },
                Username: "ut",
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "consequatur",
                Host: "dolor",
                Password: "commodi",
                Port: 1925401661646756611,
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: "reprehenderit",
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "consectetur",
                    ClientCertificate: "nostrum",
                    ClientKey: "ut",
                },
                StaticIPConnectivity: map[string]interface{}{
                    "sed": "a",
                    "soluta": "aut",
                    "quas": "consequuntur",
                },
                Username: "laudantium",
            },
            Provider: "AURORA",
            State: "FAILED",
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