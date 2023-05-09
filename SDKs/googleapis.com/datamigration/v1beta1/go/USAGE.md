<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatamigrationProjectsLocationsConnectionProfilesCreate(ctx, operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: shared.CloudSQLSettingsActivationPolicyEnumAlways.ToPointer(),
                    AutoStorageIncrease: sdk.Bool(false),
                    DataDiskSizeGb: sdk.String("distinctio"),
                    DataDiskType: shared.CloudSQLSettingsDataDiskTypeEnumPdHdd.ToPointer(),
                    DatabaseFlags: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    DatabaseVersion: shared.CloudSQLSettingsDatabaseVersionEnumMysql56.ToPointer(),
                    IPConfig: &shared.SQLIPConfig{
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("magnam"),
                                Label: sdk.String("debitis"),
                                TTL: sdk.String("ipsa"),
                                Value: sdk.String("delectus"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("tempora"),
                                Label: sdk.String("suscipit"),
                                TTL: sdk.String("molestiae"),
                                Value: sdk.String("minus"),
                            },
                        },
                        EnableIpv4: sdk.Bool(false),
                        PrivateNetwork: sdk.String("placeat"),
                        RequireSsl: sdk.Bool(false),
                    },
                    RootPassword: sdk.String("voluptatum"),
                    SourceID: sdk.String("iusto"),
                    StorageAutoResizeLimit: sdk.String("excepturi"),
                    Tier: sdk.String("nisi"),
                    UserLabels: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    Zone: sdk.String("sapiente"),
                },
            },
            DisplayName: sdk.String("quo"),
            Error: &shared.Status{
                Code: sdk.Int(140350),
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
                Message: sdk.String("cum"),
            },
            Labels: map[string]string{
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: sdk.String("ad"),
                Host: sdk.String("natus"),
                Password: sdk.String("sed"),
                Port: sdk.Int(612096),
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("dolor"),
                    ClientCertificate: sdk.String("natus"),
                    ClientKey: sdk.String("laboriosam"),
                },
                Username: sdk.String("Tyra.Turcotte35"),
            },
            Name: sdk.String("Brad Turcotte Jr."),
            Provider: shared.ConnectionProfileProviderEnumRds.ToPointer(),
            State: shared.ConnectionProfileStateEnumDeleting.ToPointer(),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        ConnectionProfileID: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        RequestID: sdk.String("nemo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity{
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