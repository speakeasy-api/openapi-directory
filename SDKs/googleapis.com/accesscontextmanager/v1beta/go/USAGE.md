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

    req := operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest{
        DollarXgafv: "2",
        AccessLevel: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "OR",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                                "COMPLETE",
                                "BASIC",
                                "COMPLETE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "UNENCRYPTED",
                                "UNENCRYPTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "iure",
                                    OsType: "DESKTOP_WINDOWS",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "debitis",
                                    OsType: "OS_UNSPECIFIED",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
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
                        Negate: false,
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
                                "COMPLETE",
                                "MANAGEMENT_UNSPECIFIED",
                                "COMPLETE",
                                "COMPLETE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSUPPORTED",
                                "ENCRYPTED",
                                "ENCRYPTED",
                                "ENCRYPTION_UNSUPPORTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "porro",
                                    OsType: "DESKTOP_CHROME_OS",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "dicta",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "officia",
                                    OsType: "DESKTOP_CHROME_OS",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
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
                        Negate: false,
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
                                "MANAGEMENT_UNSPECIFIED",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "UNENCRYPTED",
                                "ENCRYPTION_UNSPECIFIED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "dolor",
                                    OsType: "DESKTOP_CHROME_OS",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "laboriosam",
                                    OsType: "IOS",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "saepe",
                                    OsType: "DESKTOP_CHROME_OS",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "corporis",
                            "iste",
                        },
                        Members: []string{
                            "saepe",
                            "quidem",
                        },
                        Negate: false,
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
                    Description: "dolorem",
                    Expression: "corporis",
                    Location: "explicabo",
                    Title: "Miss",
                },
            },
            Description: "enim",
            Name: "omnis",
            Title: "Mrs.",
        },
        AccessToken: "minima",
        Alt: "media",
        Callback: "accusantium",
        Fields: "iure",
        Key: "culpa",
        OauthToken: "doloribus",
        Parent: "sapiente",
        PrettyPrint: false,
        QuotaUser: "architecto",
        UploadType: "mollitia",
        UploadProtocol: "dolorem",
    }

    ctx := context.Background()
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx, req, operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity{
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