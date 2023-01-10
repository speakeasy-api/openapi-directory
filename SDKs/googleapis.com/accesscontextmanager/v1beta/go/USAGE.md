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
            Parent: "nostrum",
        },
        QueryParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "media",
            Callback: "omnis",
            Fields: "exercitationem",
            Key: "at",
            OauthToken: "vitae",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "ab",
            UploadProtocol: "provident",
        },
        Request: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "OR",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "UNENCRYPTED",
                                "ENCRYPTION_UNSUPPORTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "aspernatur",
                                    OsType: "OS_UNSPECIFIED",
                                    RequireVerifiedChromeOs: true,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "unde",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: true,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "est",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "at",
                            "repellendus",
                        },
                        Members: []string{
                            "sequi",
                        },
                        Negate: true,
                        Regions: []string{
                            "ipsam",
                        },
                        RequiredAccessLevels: []string{
                            "ut",
                            "deleniti",
                            "ea",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: "laborum",
                    Expression: "eligendi",
                    Location: "dolores",
                    Title: "qui",
                },
            },
            Description: "ea",
            Name: "nihil",
            Title: "dolorem",
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