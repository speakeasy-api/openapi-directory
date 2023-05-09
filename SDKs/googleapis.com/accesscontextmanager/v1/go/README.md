# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1/go
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

* [AccesscontextmanagerAccessPoliciesAccessLevelsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelscreate) - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* [AccesscontextmanagerAccessPoliciesAccessLevelsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelslist) - Lists all access levels for an access policy.
* [AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelsreplaceall) - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* [AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesauthorizedorgsdescscreate) - Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
* [AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesauthorizedorgsdescslist) - Lists all authorized orgs descs for an access policy.
* [AccesscontextmanagerAccessPoliciesCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciescreate) - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* [AccesscontextmanagerAccessPoliciesGetIamPolicy](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesgetiampolicy) - Gets the IAM policy for the specified Access Context Manager access policy.
* [AccesscontextmanagerAccessPoliciesList](docs/accesspolicies/README.md#accesscontextmanageraccesspolicieslist) - Lists all access policies in an organization.
* [AccesscontextmanagerAccessPoliciesServicePerimetersCommit](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscommit) - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* [AccesscontextmanagerAccessPoliciesServicePerimetersCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* [AccesscontextmanagerAccessPoliciesServicePerimetersList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterslist) - Lists all service perimeters for an access policy.
* [AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimetersreplaceall) - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* [AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterstestiampermissions) - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* [AccesscontextmanagerAccessPoliciesSetIamPolicy](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciessetiampolicy) - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### [Operations](docs/operations/README.md)

* [AccesscontextmanagerOperationsCancel](docs/operations/README.md#accesscontextmanageroperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### [Organizations](docs/organizations/README.md)

* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingscreate) - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingsdelete) - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingsget) - Gets the GcpUserAccessBinding with the given name.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsList](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingslist) - Lists all GcpUserAccessBindings for a Google Cloud organization.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch](docs/organizations/README.md#accesscontextmanagerorganizationsgcpuseraccessbindingspatch) - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
