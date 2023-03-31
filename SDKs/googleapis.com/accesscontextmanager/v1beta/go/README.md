# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccessPolicies

* `AccesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `AccesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `AccesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `AccesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `AccesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `AccesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### Operations

* `AccesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
