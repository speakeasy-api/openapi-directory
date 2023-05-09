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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccessPolicies](docs/accesspolicies/README.md)

* [AccesscontextmanagerAccessPoliciesAccessLevelsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelscreate) - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* [AccesscontextmanagerAccessPoliciesAccessLevelsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelslist) - List all Access Levels for an access policy.
* [AccesscontextmanagerAccessPoliciesCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciescreate) - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* [AccesscontextmanagerAccessPoliciesList](docs/accesspolicies/README.md#accesscontextmanageraccesspolicieslist) - List all AccessPolicies under a container.
* [AccesscontextmanagerAccessPoliciesServicePerimetersCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* [AccesscontextmanagerAccessPoliciesServicePerimetersDelete](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimetersdelete) - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* [AccesscontextmanagerAccessPoliciesServicePerimetersList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterslist) - List all Service Perimeters for an access policy.
* [AccesscontextmanagerAccessPoliciesServicePerimetersPatch](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterspatch) - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### [Operations](docs/operations/README.md)

* [AccesscontextmanagerOperationsGet](docs/operations/README.md#accesscontextmanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
