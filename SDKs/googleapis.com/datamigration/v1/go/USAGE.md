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
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: "voluptatum",
                Settings: &shared.AlloyDbSettingsInput{
                    InitialUser: &shared.UserPasswordInput{
                        Password: "et",
                        User: "ut",
                    },
                    Labels: map[string]string{
                        "et": "voluptate",
                        "iste": "vitae",
                        "totam": "dolores",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "debitis": "vel",
                            "odio": "dolore",
                            "id": "aspernatur",
                        },
                        ID: "accusantium",
                        Labels: map[string]string{
                            "commodi": "quis",
                            "est": "aut",
                            "odit": "non",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: 167566062957544642,
                        },
                    },
                    VpcNetwork: "omnis",
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
                    AutoStorageIncrease: true,
                    AvailabilityType: "REGIONAL",
                    CmekKeyName: "officiis",
                    Collation: "autem",
                    DataDiskSizeGb: "consectetur",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "qui": "recusandae",
                    },
                    DatabaseVersion: "POSTGRES_13",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "eveniet",
                                Label: "modi",
                                TTL: "sint",
                                Value: "inventore",
                            },
                        },
                        EnableIpv4: true,
                        PrivateNetwork: "exercitationem",
                        RequireSsl: true,
                    },
                    RootPassword: "reprehenderit",
                    SecondaryZone: "tempore",
                    SourceID: "maiores",
                    StorageAutoResizeLimit: "incidunt",
                    Tier: "dolor",
                    UserLabels: map[string]string{
                        "veritatis": "in",
                        "et": "omnis",
                        "ipsum": "ex",
                    },
                    Zone: "dolores",
                },
            },
            DisplayName: "placeat",
            Error: &shared.Status{
                Code: 2118716725206170867,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "voluptas": "quam",
                        "reprehenderit": "qui",
                    },
                    map[string]interface{}{
                        "unde": "in",
                    },
                    map[string]interface{}{
                        "qui": "ut",
                        "itaque": "ab",
                    },
                },
                Message: "neque",
            },
            Labels: map[string]string{
                "et": "accusantium",
                "esse": "architecto",
                "quam": "velit",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "cumque",
                Host: "soluta",
                Password: "sunt",
                Port: 2408550365227740434,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "magni",
                    ClientCertificate: "et",
                    ClientKey: "optio",
                },
                Username: "qui",
            },
            Name: "earum",
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: "illo",
                Host: "omnis",
                Password: "ut",
                Port: 7442289190031176026,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "dolor",
                    ClientCertificate: "commodi",
                    ClientKey: "error",
                },
                Username: "reprehenderit",
            },
            Provider: "AURORA",
            State: "READY",
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