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
    
    req := operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest{
        Security: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams{
            Parent: "nemo",
        },
        QueryParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "json",
            Callback: "enim",
            Fields: "eos",
            Key: "adipisci",
            OauthToken: "eos",
            PrettyPrint: false,
            QuotaUser: "nesciunt",
            UploadType: "ipsum",
            UploadProtocol: "magni",
        },
        Request: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "OR",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "NONE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSUPPORTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "architecto",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "laborum",
                                    OsType: "DESKTOP_WINDOWS",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: true,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "qui",
                        },
                        Members: []string{
                            "ea",
                            "totam",
                        },
                        Negate: true,
                        Regions: []string{
                            "inventore",
                            "repudiandae",
                            "beatae",
                        },
                        RequiredAccessLevels: []string{
                            "voluptas",
                            "dolores",
                            "quam",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                                "NONE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSPECIFIED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "odit",
                                    OsType: "OS_UNSPECIFIED",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: true,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "officiis",
                        },
                        Members: []string{
                            "eum",
                            "et",
                            "neque",
                        },
                        Negate: true,
                        Regions: []string{
                            "et",
                            "blanditiis",
                            "architecto",
                        },
                        RequiredAccessLevels: []string{
                            "sint",
                            "officia",
                            "repellat",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                                "MANAGEMENT_UNSPECIFIED",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSUPPORTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "consequatur",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: true,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "perferendis",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: true,
                            RequireCorpOwned: true,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "et",
                        },
                        Members: []string{
                            "facilis",
                        },
                        Negate: true,
                        Regions: []string{
                            "aliquid",
                        },
                        RequiredAccessLevels: []string{
                            "rerum",
                            "officiis",
                            "corporis",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: "et",
                    Expression: "necessitatibus",
                    Location: "numquam",
                    Title: "in",
                },
            },
            Description: "animi",
            Name: "consequuntur",
            Title: "impedit",
        },
    }
    
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->