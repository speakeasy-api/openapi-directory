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
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.ConnectionProfileInput{
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
                    AutoStorageIncrease: false,
                    DataDiskSizeGb: "debitis",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    DatabaseVersion: "MYSQL_5_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "temporibus",
                                Label: "ab",
                                TTL: "quis",
                                Value: "veritatis",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "deserunt",
                                Label: "perferendis",
                                TTL: "ipsam",
                                Value: "repellendus",
                            },
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
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "quod",
                        RequireSsl: false,
                    },
                    RootPassword: "esse",
                    SourceID: "totam",
                    StorageAutoResizeLimit: "porro",
                    Tier: "dolorum",
                    UserLabels: map[string]string{
                        "nam": "officia",
                    },
                    Zone: "occaecati",
                },
            },
            DisplayName: "fugit",
            Error: &shared.Status{
                Code: 537373,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
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
            Provider: "DATABASE_PROVIDER_UNSPECIFIED",
            State: "UPDATING",
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