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
            Parent: "soluta",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "iusto",
            Alt: "media",
            Callback: "eum",
            ConnectionProfileID: "molestias",
            Fields: "nihil",
            Key: "ut",
            OauthToken: "qui",
            PrettyPrint: false,
            QuotaUser: "id",
            RequestID: "odit",
            UploadType: "maiores",
            UploadProtocol: "vel",
        },
        Request: &shared.ConnectionProfileInput{
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "molestias",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "aspernatur",
                        User: "et",
                    },
                    Labels: map[string]string{
                        "rerum": "cupiditate",
                        "magnam": "cupiditate",
                        "reiciendis": "ut",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "repellat": "quibusdam",
                            "et": "cum",
                        },
                        ID: "aut",
                        Labels: map[string]string{
                            "voluptatem": "incidunt",
                            "delectus": "aut",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 1865472394289304243,
                        },
                    },
                    VpcNetwork: "unde",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
                    AutoStorageIncrease: false,
                    AvailabilityType: "ZONAL",
                    CmekKeyName: "ipsam",
                    Collation: "tenetur",
                    DataDiskSizeGb: "sit",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "sapiente": "aut",
                        "perspiciatis": "qui",
                        "inventore": "incidunt",
                    },
                    DatabaseVersion: "MYSQL_5_7",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "ut",
                                Label: "blanditiis",
                                TTL: "saepe",
                                Value: "nesciunt",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "optio",
                                Label: "labore",
                                TTL: "illum",
                                Value: "omnis",
                            },
                        },
                        EnableIpv4: true,
                        PrivateNetwork: "sit",
                        RequireSsl: true,
                    },
                    RootPassword: "vel",
                    SecondaryZone: "consequatur",
                    SourceID: "eius",
                    StorageAutoResizeLimit: "eaque",
                    Tier: "quisquam",
                    UserLabels: map[string]string{
                        "sed": "labore",
                        "nemo": "magnam",
                        "quam": "libero",
                    },
                    Zone: "voluptate",
                },
            },
            DisplayName: "sint",
            Error: &shared.Status{
                Code: 8998435203028350084,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "numquam": "a",
                        "cumque": "et",
                    },
                    map[string]interface{}{
                        "adipisci": "non",
                    },
                    map[string]interface{}{
                        "est": "praesentium",
                        "magnam": "unde",
                        "nisi": "odio",
                    },
                },
                Message: "accusantium",
            },
            Labels: map[string]string{
                "voluptas": "voluptatem",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "maxime",
                Host: "maiores",
                Password: "eum",
                Port: 8700369731861466797,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "quis",
                    ClientCertificate: "expedita",
                    ClientKey: "laborum",
                },
                Username: "ipsam",
            },
            Name: "voluptate",
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "neque",
                Host: "placeat",
                Password: "et",
                Port: 4811490384291894312,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "qui",
                    ClientCertificate: "nihil",
                    ClientKey: "accusamus",
                },
                Username: "necessitatibus",
            },
            Provider: "RDS",
            State: "STATE_UNSPECIFIED",
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