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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx, operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessLevel: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: shared.BasicLevelCombiningFunctionEnumOr.ToPointer(),
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumBasic,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumBasic,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("iure"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopWindows.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("debitis"),
                                    OsType: shared.OsConstraintOsTypeEnumOsUnspecified.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                            },
                            RequireAdminApproval: sdk.Bool(false),
                            RequireCorpOwned: sdk.Bool(false),
                            RequireScreenlock: sdk.Bool(false),
                        },
                        IPSubnetworks: []string{
                            "tempora",
                            "suscipit",
                            "molestiae",
                            "minus",
                        },
                        Members: []string{
                            "voluptatum",
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                        Negate: sdk.Bool(false),
                        Regions: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                        RequiredAccessLevels: []string{
                            "perferendis",
                            "ipsam",
                            "repellendus",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncrypted,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncrypted,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported,
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("porro"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("dicta"),
                                    OsType: shared.OsConstraintOsTypeEnumAndroid.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("officia"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                            },
                            RequireAdminApproval: sdk.Bool(false),
                            RequireCorpOwned: sdk.Bool(false),
                            RequireScreenlock: sdk.Bool(false),
                        },
                        IPSubnetworks: []string{
                            "deleniti",
                        },
                        Members: []string{
                            "optio",
                            "totam",
                            "beatae",
                            "commodi",
                        },
                        Negate: sdk.Bool(false),
                        Regions: []string{
                            "modi",
                            "qui",
                        },
                        RequiredAccessLevels: []string{
                            "cum",
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified,
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnspecified,
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("dolor"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("laboriosam"),
                                    OsType: shared.OsConstraintOsTypeEnumIos.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("saepe"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                            },
                            RequireAdminApproval: sdk.Bool(false),
                            RequireCorpOwned: sdk.Bool(false),
                            RequireScreenlock: sdk.Bool(false),
                        },
                        IPSubnetworks: []string{
                            "corporis",
                            "iste",
                        },
                        Members: []string{
                            "saepe",
                            "quidem",
                        },
                        Negate: sdk.Bool(false),
                        Regions: []string{
                            "ipsa",
                        },
                        RequiredAccessLevels: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: sdk.String("dolorem"),
                    Expression: sdk.String("corporis"),
                    Location: sdk.String("explicabo"),
                    Title: sdk.String("Miss"),
                },
            },
            Description: sdk.String("enim"),
            Name: sdk.String("Corey Hane III"),
            Title: sdk.String("Miss"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("culpa"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity{
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