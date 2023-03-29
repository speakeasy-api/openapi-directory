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
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.ConnectionProfileInput{
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
                    AutoStorageIncrease: false,
                    DataDiskSizeGb: "saepe",
                    DataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
                    DatabaseFlags: map[string]string{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                    DatabaseVersion: "MYSQL_5_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "quo",
                                Label: "quasi",
                                TTL: "laboriosam",
                                Value: "dicta",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "est",
                                Label: "voluptatem",
                                TTL: "consequatur",
                                Value: "fugiat",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "a",
                                Label: "omnis",
                                TTL: "eos",
                                Value: "accusamus",
                            },
                            shared.SQLACLEntry{
                                ExpireTime: "accusamus",
                                Label: "reiciendis",
                                TTL: "rem",
                                Value: "quibusdam",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "et",
                        RequireSsl: false,
                    },
                    RootPassword: "praesentium",
                    SourceID: "occaecati",
                    StorageAutoResizeLimit: "dolor",
                    Tier: "soluta",
                    UserLabels: map[string]string{
                        "quisquam": "rerum",
                    },
                    Zone: "culpa",
                },
            },
            DisplayName: "qui",
            Error: &shared.Status{
                Code: 537373,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "occaecati": "odit",
                        "esse": "rem",
                        "voluptatem": "amet",
                        "est": "id",
                    },
                    map[string]interface{}{
                        "numquam": "similique",
                        "dolores": "sit",
                    },
                    map[string]interface{}{
                        "et": "voluptatem",
                        "laborum": "modi",
                    },
                    map[string]interface{}{
                        "iure": "earum",
                        "ut": "soluta",
                        "qui": "ea",
                    },
                },
                Message: "laborum",
            },
            Labels: map[string]string{
                "ut": "optio",
                "aspernatur": "inventore",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "ut",
                Host: "libero",
                Password: "et",
                Port: 670638,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "ipsum",
                    ClientCertificate: "non",
                    ClientKey: "ea",
                },
                Username: "Braulio60",
            },
            Name: "commodi",
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