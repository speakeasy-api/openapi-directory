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
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "ALWAYS",
                    AutoStorageIncrease: false,
                    DataDiskSizeGb: "distinctio",
                    DataDiskType: "PD_HDD",
                    DatabaseFlags: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    DatabaseVersion: "MYSQL_5_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "magnam",
                                Label: "debitis",
                                TTL: "ipsa",
                                Value: "delectus",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "tempora",
                                Label: "suscipit",
                                TTL: "molestiae",
                                Value: "minus",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "placeat",
                        RequireSsl: false,
                    },
                    RootPassword: "voluptatum",
                    SourceID: "iusto",
                    StorageAutoResizeLimit: "excepturi",
                    Tier: "nisi",
                    UserLabels: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    Zone: "sapiente",
                },
            },
            DisplayName: "quo",
            Error: &shared.Status{
                Code: 140350,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "maiores": "molestiae",
                        "quod": "quod",
                        "esse": "totam",
                        "porro": "dolorum",
                    },
                    map[string]interface{}{
                        "nam": "officia",
                    },
                    map[string]interface{}{
                        "fugit": "deleniti",
                        "hic": "optio",
                        "totam": "beatae",
                    },
                    map[string]interface{}{
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
                Message: "cum",
            },
            Labels: map[string]string{
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "ad",
                Host: "natus",
                Password: "sed",
                Port: 612096,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "dolor",
                    ClientCertificate: "natus",
                    ClientKey: "laboriosam",
                },
                Username: "Tyra.Turcotte35",
            },
            Name: "iste",
            Provider: "CLOUDSQL",
            State: "FAILED",
        },
        AccessToken: "quidem",
        Alt: "json",
        Callback: "ipsa",
        ConnectionProfileID: "reiciendis",
        Fields: "est",
        Key: "mollitia",
        OauthToken: "laborum",
        Parent: "dolores",
        PrettyPrint: false,
        QuotaUser: "dolorem",
        RequestID: "corporis",
        UploadType: "explicabo",
        UploadProtocol: "nobis",
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