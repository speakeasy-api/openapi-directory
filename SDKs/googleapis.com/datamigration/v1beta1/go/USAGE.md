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
            Parent: "animi",
        },
        QueryParams: operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "media",
            Callback: "quis",
            ConnectionProfileID: "repudiandae",
            Fields: "dolorem",
            Key: "eum",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "velit",
            RequestID: "unde",
            UploadType: "esse",
            UploadProtocol: "libero",
        },
        Request: &shared.ConnectionProfileInput{
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: "NEVER",
                    AutoStorageIncrease: false,
                    DataDiskSizeGb: "id",
                    DataDiskType: "PD_HDD",
                    DatabaseFlags: map[string]string{
                        "molestiae": "est",
                        "molestiae": "commodi",
                        "impedit": "ipsa",
                    },
                    DatabaseVersion: "MYSQL_5_6",
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: "aut",
                                Label: "aut",
                                TTL: "consequuntur",
                                Value: "asperiores",
                            },
                        },
                        EnableIpv4: false,
                        PrivateNetwork: "in",
                        RequireSsl: true,
                    },
                    RootPassword: "molestiae",
                    SourceID: "dolores",
                    StorageAutoResizeLimit: "ut",
                    Tier: "eos",
                    UserLabels: map[string]string{
                        "tempora": "excepturi",
                        "repellendus": "nihil",
                    },
                    Zone: "quasi",
                },
            },
            DisplayName: "et",
            Error: &shared.Status{
                Code: 5616495351279140944,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "aut": "qui",
                        "laborum": "quod",
                        "eius": "officia",
                    },
                    map[string]interface{}{
                        "itaque": "a",
                    },
                },
                Message: "minima",
            },
            Labels: map[string]string{
                "est": "sed",
                "odio": "non",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: "aspernatur",
                Host: "quod",
                Password: "et",
                Port: 8176960718989686902,
                Ssl: &shared.SslConfigInput{
                    CaCertificate: "corporis",
                    ClientCertificate: "rerum",
                    ClientKey: "ut",
                },
                Username: "asperiores",
            },
            Name: "animi",
            Provider: "CLOUDSQL",
            State: "DELETING",
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