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
            Alloydb: &shared.AlloyDbConnectionProfileInput{
                ClusterID: sdk.String("provident"),
                Settings: &shared.AlloyDbSettingsInput{
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("distinctio"),
                    },
                    InitialUser: &shared.UserPasswordInput{
                        Password: sdk.String("quibusdam"),
                        User: sdk.String("unde"),
                    },
                    Labels: map[string]string{
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                    },
                    PrimaryInstanceSettings: &shared.PrimaryInstanceSettingsInput{
                        DatabaseFlags: map[string]string{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        ID: sdk.String("796ed151-a05d-4fc2-9df7-cc78ca1ba928"),
                        Labels: map[string]string{
                            "optio": "totam",
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                        MachineConfig: &shared.MachineConfig{
                            CPUCount: sdk.Int(736918),
                        },
                    },
                    VpcNetwork: sdk.String("esse"),
                },
            },
            Cloudsql: &shared.CloudSQLConnectionProfileInput{
                Settings: &shared.CloudSQLSettingsInput{
                    ActivationPolicy: shared.CloudSQLSettingsActivationPolicyEnumSQLActivationPolicyUnspecified.ToPointer(),
                    AutoStorageIncrease: sdk.Bool(false),
                    AvailabilityType: shared.CloudSQLSettingsAvailabilityTypeEnumZonal.ToPointer(),
                    CmekKeyName: sdk.String("aspernatur"),
                    Collation: sdk.String("perferendis"),
                    DataDiskSizeGb: sdk.String("ad"),
                    DataDiskType: shared.CloudSQLSettingsDataDiskTypeEnumPdSsd.ToPointer(),
                    DatabaseFlags: map[string]string{
                        "iste": "dolor",
                    },
                    DatabaseVersion: shared.CloudSQLSettingsDatabaseVersionEnumMysql80.ToPointer(),
                    IPConfig: &shared.SQLIPConfig{
                        AllocatedIPRange: sdk.String("laboriosam"),
                        AuthorizedNetworks: []shared.SQLACLEntry{
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("saepe"),
                                Label: sdk.String("fuga"),
                                TTL: sdk.String("in"),
                                Value: sdk.String("corporis"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("iste"),
                                Label: sdk.String("iure"),
                                TTL: sdk.String("saepe"),
                                Value: sdk.String("quidem"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("architecto"),
                                Label: sdk.String("ipsa"),
                                TTL: sdk.String("reiciendis"),
                                Value: sdk.String("est"),
                            },
                            shared.SQLACLEntry{
                                ExpireTime: sdk.String("mollitia"),
                                Label: sdk.String("laborum"),
                                TTL: sdk.String("dolores"),
                                Value: sdk.String("dolorem"),
                            },
                        },
                        EnableIpv4: sdk.Bool(false),
                        PrivateNetwork: sdk.String("corporis"),
                        RequireSsl: sdk.Bool(false),
                    },
                    RootPassword: sdk.String("explicabo"),
                    SecondaryZone: sdk.String("nobis"),
                    SourceID: sdk.String("enim"),
                    StorageAutoResizeLimit: sdk.String("omnis"),
                    Tier: sdk.String("nemo"),
                    UserLabels: map[string]string{
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                    Zone: sdk.String("doloribus"),
                },
            },
            DisplayName: sdk.String("sapiente"),
            Error: &shared.Status{
                Code: sdk.Int(102044),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "culpa": "consequuntur",
                    },
                    map[string]interface{}{
                        "mollitia": "occaecati",
                        "numquam": "commodi",
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    map[string]interface{}{
                        "quis": "vitae",
                    },
                },
                Message: sdk.String("laborum"),
            },
            Labels: map[string]string{
                "enim": "odit",
                "quo": "sequi",
                "tenetur": "ipsam",
            },
            Mysql: &shared.MySQLConnectionProfileInput{
                CloudSQLID: sdk.String("id"),
                Host: sdk.String("possimus"),
                Password: sdk.String("aut"),
                Port: sdk.Int(97101),
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("error"),
                    ClientCertificate: sdk.String("temporibus"),
                    ClientKey: sdk.String("laborum"),
                },
                Username: sdk.String("Austyn_Witting46"),
            },
            Name: sdk.String("Jan Bednar"),
            Oracle: &shared.OracleConnectionProfileInput{
                DatabaseService: sdk.String("cum"),
                ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                    Hostname: sdk.String("agile-arch-rival.info"),
                    Password: sdk.String("ut"),
                    Port: sdk.Int(979587),
                    PrivateKey: sdk.String("dicta"),
                    Username: sdk.String("Floy.Gulgowski"),
                },
                Host: sdk.String("harum"),
                Password: sdk.String("enim"),
                Port: sdk.Int(880476),
                PrivateConnectivity: &shared.PrivateConnectivity{
                    PrivateConnection: sdk.String("commodi"),
                },
                StaticServiceIPConnectivity: map[string]interface{}{
                    "quae": "ipsum",
                    "quidem": "molestias",
                    "excepturi": "pariatur",
                    "modi": "praesentium",
                },
                Username: sdk.String("Judah92"),
            },
            Postgresql: &shared.PostgreSQLConnectionProfileInput{
                CloudSQLID: sdk.String("sint"),
                Host: sdk.String("veritatis"),
                Password: sdk.String("itaque"),
                Port: sdk.Int(277718),
                PrivateServiceConnectConnectivity: &shared.PrivateServiceConnectConnectivity{
                    ServiceAttachment: sdk.String("enim"),
                },
                Ssl: &shared.SslConfigInput{
                    CaCertificate: sdk.String("consequatur"),
                    ClientCertificate: sdk.String("est"),
                    ClientKey: sdk.String("quibusdam"),
                },
                StaticIPConnectivity: map[string]interface{}{
                    "deserunt": "distinctio",
                },
                Username: sdk.String("Ron18"),
            },
            Provider: shared.ConnectionProfileProviderEnumCloudsql.ToPointer(),
            State: shared.ConnectionProfileStateEnumUpdating.ToPointer(),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        ConnectionProfileID: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        RequestID: sdk.String("tempora"),
        SkipValidation: sdk.Bool(false),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
        ValidateOnly: sdk.Bool(false),
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