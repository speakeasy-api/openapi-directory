# AccessPolicies

### Available Operations

* [AccesscontextmanagerAccessPoliciesAccessLevelsCreate](#accesscontextmanageraccesspoliciesaccesslevelscreate) - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* [AccesscontextmanagerAccessPoliciesAccessLevelsList](#accesscontextmanageraccesspoliciesaccesslevelslist) - Lists all access levels for an access policy.
* [AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll](#accesscontextmanageraccesspoliciesaccesslevelsreplaceall) - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* [AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate](#accesscontextmanageraccesspoliciesauthorizedorgsdescscreate) - Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
* [AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList](#accesscontextmanageraccesspoliciesauthorizedorgsdescslist) - Lists all authorized orgs descs for an access policy.
* [AccesscontextmanagerAccessPoliciesCreate](#accesscontextmanageraccesspoliciescreate) - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* [AccesscontextmanagerAccessPoliciesGetIamPolicy](#accesscontextmanageraccesspoliciesgetiampolicy) - Gets the IAM policy for the specified Access Context Manager access policy.
* [AccesscontextmanagerAccessPoliciesList](#accesscontextmanageraccesspolicieslist) - Lists all access policies in an organization.
* [AccesscontextmanagerAccessPoliciesServicePerimetersCommit](#accesscontextmanageraccesspoliciesserviceperimeterscommit) - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* [AccesscontextmanagerAccessPoliciesServicePerimetersCreate](#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* [AccesscontextmanagerAccessPoliciesServicePerimetersList](#accesscontextmanageraccesspoliciesserviceperimeterslist) - Lists all service perimeters for an access policy.
* [AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll](#accesscontextmanageraccesspoliciesserviceperimetersreplaceall) - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* [AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions](#accesscontextmanageraccesspoliciesserviceperimeterstestiampermissions) - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* [AccesscontextmanagerAccessPoliciesSetIamPolicy](#accesscontextmanageraccesspoliciessetiampolicy) - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

## AccesscontextmanagerAccessPoliciesAccessLevelsCreate

Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessLevel: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: shared.BasicLevelCombiningFunctionEnumAnd.ToPointer(),
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumBasic,
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported,
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("laborum"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                            },
                            RequireAdminApproval: sdk.Bool(false),
                            RequireCorpOwned: sdk.Bool(false),
                            RequireScreenlock: sdk.Bool(false),
                        },
                        IPSubnetworks: []string{
                            "odit",
                            "quo",
                        },
                        Members: []string{
                            "tenetur",
                        },
                        Negate: sdk.Bool(false),
                        Regions: []string{
                            "id",
                            "possimus",
                        },
                        RequiredAccessLevels: []string{
                            "quasi",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumBasic,
                                shared.DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified,
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncrypted,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncrypted,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported,
                                shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("ipsa"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("voluptate"),
                                    OsType: shared.OsConstraintOsTypeEnumAndroid.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("perferendis"),
                                    OsType: shared.OsConstraintOsTypeEnumOsUnspecified.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                                shared.OsConstraint{
                                    MinimumVersion: sdk.String("reprehenderit"),
                                    OsType: shared.OsConstraintOsTypeEnumDesktopMac.ToPointer(),
                                    RequireVerifiedChromeOs: sdk.Bool(false),
                                },
                            },
                            RequireAdminApproval: sdk.Bool(false),
                            RequireCorpOwned: sdk.Bool(false),
                            RequireScreenlock: sdk.Bool(false),
                        },
                        IPSubnetworks: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                        Members: []string{
                            "harum",
                        },
                        Negate: sdk.Bool(false),
                        Regions: []string{
                            "accusamus",
                            "commodi",
                        },
                        RequiredAccessLevels: []string{
                            "quae",
                            "ipsum",
                            "quidem",
                            "molestias",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: sdk.String("excepturi"),
                    Expression: sdk.String("pariatur"),
                    Location: sdk.String("modi"),
                    Title: sdk.String("Ms."),
                },
            },
            Description: sdk.String("rem"),
            Name: sdk.String("Carl Waelchi DVM"),
            Title: sdk.String("Mrs."),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("deserunt"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
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

## AccesscontextmanagerAccessPoliciesAccessLevelsList

Lists all access levels for an access policy.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsList(ctx, operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessLevelFormat: operations.AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnumAsDefined.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("magni"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(4695),
        PageToken: sdk.String("fugit"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessLevelsResponse != nil {
        // handle response
    }
}
```

## AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll

Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll(ctx, operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReplaceAccessLevelsRequest: &shared.ReplaceAccessLevelsRequest{
            AccessLevels: []shared.AccessLevel{
                shared.AccessLevel{
                    Basic: &shared.BasicLevel{
                        CombiningFunction: shared.BasicLevelCombiningFunctionEnumOr.ToPointer(),
                        Conditions: []shared.Condition{
                            shared.Condition{
                                DevicePolicy: &shared.DevicePolicy{
                                    AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                        shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                    },
                                    AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported,
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumEncrypted,
                                    },
                                    OsConstraints: []shared.OsConstraint{
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("officia"),
                                            OsType: shared.OsConstraintOsTypeEnumDesktopMac.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("debitis"),
                                            OsType: shared.OsConstraintOsTypeEnumIos.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("dolorum"),
                                            OsType: shared.OsConstraintOsTypeEnumDesktopLinux.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                    },
                                    RequireAdminApproval: sdk.Bool(false),
                                    RequireCorpOwned: sdk.Bool(false),
                                    RequireScreenlock: sdk.Bool(false),
                                },
                                IPSubnetworks: []string{
                                    "illum",
                                    "maiores",
                                },
                                Members: []string{
                                    "dicta",
                                    "magnam",
                                    "cumque",
                                },
                                Negate: sdk.Bool(false),
                                Regions: []string{
                                    "ea",
                                    "aliquid",
                                    "laborum",
                                    "accusamus",
                                },
                                RequiredAccessLevels: []string{
                                    "occaecati",
                                },
                            },
                            shared.Condition{
                                DevicePolicy: &shared.DevicePolicy{
                                    AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                        shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                        shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                    },
                                    AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumUnencrypted,
                                    },
                                    OsConstraints: []shared.OsConstraint{
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("deleniti"),
                                            OsType: shared.OsConstraintOsTypeEnumIos.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("amet"),
                                            OsType: shared.OsConstraintOsTypeEnumDesktopChromeOs.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("nisi"),
                                            OsType: shared.OsConstraintOsTypeEnumDesktopWindows.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                    },
                                    RequireAdminApproval: sdk.Bool(false),
                                    RequireCorpOwned: sdk.Bool(false),
                                    RequireScreenlock: sdk.Bool(false),
                                },
                                IPSubnetworks: []string{
                                    "omnis",
                                    "molestiae",
                                    "perferendis",
                                },
                                Members: []string{
                                    "magnam",
                                    "distinctio",
                                },
                                Negate: sdk.Bool(false),
                                Regions: []string{
                                    "labore",
                                    "labore",
                                    "suscipit",
                                },
                                RequiredAccessLevels: []string{
                                    "nobis",
                                    "eum",
                                    "vero",
                                },
                            },
                        },
                    },
                    Custom: &shared.CustomLevel{
                        Expr: &shared.Expr{
                            Description: sdk.String("aspernatur"),
                            Expression: sdk.String("architecto"),
                            Location: sdk.String("magnam"),
                            Title: sdk.String("Mr."),
                        },
                    },
                    Description: sdk.String("excepturi"),
                    Name: sdk.String("Ramona Lueilwitz MD"),
                    Title: sdk.String("Dr."),
                },
                shared.AccessLevel{
                    Basic: &shared.BasicLevel{
                        CombiningFunction: shared.BasicLevelCombiningFunctionEnumOr.ToPointer(),
                        Conditions: []shared.Condition{
                            shared.Condition{
                                DevicePolicy: &shared.DevicePolicy{
                                    AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                        shared.DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified,
                                        shared.DevicePolicyAllowedDeviceManagementLevelsEnumComplete,
                                    },
                                    AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported,
                                    },
                                    OsConstraints: []shared.OsConstraint{
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("iure"),
                                            OsType: shared.OsConstraintOsTypeEnumIos.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                    },
                                    RequireAdminApproval: sdk.Bool(false),
                                    RequireCorpOwned: sdk.Bool(false),
                                    RequireScreenlock: sdk.Bool(false),
                                },
                                IPSubnetworks: []string{
                                    "eius",
                                    "maxime",
                                    "deleniti",
                                    "facilis",
                                },
                                Members: []string{
                                    "architecto",
                                    "architecto",
                                },
                                Negate: sdk.Bool(false),
                                Regions: []string{
                                    "ullam",
                                    "expedita",
                                    "nihil",
                                    "repellat",
                                },
                                RequiredAccessLevels: []string{
                                    "sed",
                                    "saepe",
                                    "pariatur",
                                    "accusantium",
                                },
                            },
                            shared.Condition{
                                DevicePolicy: &shared.DevicePolicy{
                                    AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                        shared.DevicePolicyAllowedDeviceManagementLevelsEnumBasic,
                                    },
                                    AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnspecified,
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnspecified,
                                        shared.DevicePolicyAllowedEncryptionStatusesEnumEncrypted,
                                    },
                                    OsConstraints: []shared.OsConstraint{
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("pariatur"),
                                            OsType: shared.OsConstraintOsTypeEnumAndroid.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("ea"),
                                            OsType: shared.OsConstraintOsTypeEnumDesktopLinux.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("odit"),
                                            OsType: shared.OsConstraintOsTypeEnumDesktopWindows.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                        shared.OsConstraint{
                                            MinimumVersion: sdk.String("accusantium"),
                                            OsType: shared.OsConstraintOsTypeEnumOsUnspecified.ToPointer(),
                                            RequireVerifiedChromeOs: sdk.Bool(false),
                                        },
                                    },
                                    RequireAdminApproval: sdk.Bool(false),
                                    RequireCorpOwned: sdk.Bool(false),
                                    RequireScreenlock: sdk.Bool(false),
                                },
                                IPSubnetworks: []string{
                                    "quidem",
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                                Members: []string{
                                    "eaque",
                                    "pariatur",
                                    "nemo",
                                },
                                Negate: sdk.Bool(false),
                                Regions: []string{
                                    "perferendis",
                                    "fugiat",
                                    "amet",
                                    "aut",
                                },
                                RequiredAccessLevels: []string{
                                    "corporis",
                                    "hic",
                                    "libero",
                                    "nobis",
                                },
                            },
                        },
                    },
                    Custom: &shared.CustomLevel{
                        Expr: &shared.Expr{
                            Description: sdk.String("dolores"),
                            Expression: sdk.String("quis"),
                            Location: sdk.String("totam"),
                            Title: sdk.String("Ms."),
                        },
                    },
                    Description: sdk.String("eaque"),
                    Name: sdk.String("Mr. Robin Daugherty"),
                    Title: sdk.String("Ms."),
                },
            },
            Etag: sdk.String("dolor"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("facilis"),
        Parent: "perspiciatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity{
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

## AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate

Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate(ctx, operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AuthorizedOrgsDesc: &shared.AuthorizedOrgsDesc{
            AssetType: shared.AuthorizedOrgsDescAssetTypeEnumAssetTypeDevice.ToPointer(),
            AuthorizationDirection: shared.AuthorizedOrgsDescAuthorizationDirectionEnumAuthorizationDirectionUnspecified.ToPointer(),
            AuthorizationType: shared.AuthorizedOrgsDescAuthorizationTypeEnumAuthorizationTypeTrust.ToPointer(),
            Name: sdk.String("Travis Zemlak"),
            Orgs: []string{
                "dolorum",
                "deleniti",
                "pariatur",
            },
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("quos"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateSecurity{
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

## AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList

Lists all authorized orgs descs for an access policy.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList(ctx, operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("dignissimos"),
        PageSize: sdk.Int64(970237),
        PageToken: sdk.String("amet"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedOrgsDescsResponse != nil {
        // handle response
    }
}
```

## AccesscontextmanagerAccessPoliciesCreate

Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesCreate(ctx, operations.AccesscontextmanagerAccessPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessPolicy: &shared.AccessPolicy{
            Etag: sdk.String("iure"),
            Name: sdk.String("Bertha Thompson"),
            Parent: sdk.String("voluptas"),
            Scopes: []string{
                "eos",
                "atque",
                "sit",
            },
            Title: sdk.String("Dr."),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.AccesscontextmanagerAccessPoliciesCreateSecurity{
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

## AccesscontextmanagerAccessPoliciesGetIamPolicy

Gets the IAM policy for the specified Access Context Manager access policy.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesGetIamPolicy(ctx, operations.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(990339),
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("id"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        Resource: "perferendis",
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.AccesscontextmanagerAccessPoliciesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## AccesscontextmanagerAccessPoliciesList

Lists all access policies in an organization.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesList(ctx, operations.AccesscontextmanagerAccessPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("minima"),
        PageSize: sdk.Int64(831049),
        PageToken: sdk.String("totam"),
        Parent: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.AccesscontextmanagerAccessPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessPoliciesResponse != nil {
        // handle response
    }
}
```

## AccesscontextmanagerAccessPoliciesServicePerimetersCommit

Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersCommit(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CommitServicePerimetersRequest: &shared.CommitServicePerimetersRequest{
            Etag: sdk.String("vel"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("esse"),
        Parent: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity{
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

## AccesscontextmanagerAccessPoliciesServicePerimetersCreate

Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersCreate(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServicePerimeter: &shared.ServicePerimeter{
            Description: sdk.String("amet"),
            Name: sdk.String("Tomas Funk"),
            PerimeterType: shared.ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge.ToPointer(),
            Spec: &shared.ServicePerimeterConfig{
                AccessLevels: []string{
                    "nihil",
                    "sit",
                    "expedita",
                },
                EgressPolicies: []shared.EgressPolicy{
                    shared.EgressPolicy{
                        EgressFrom: &shared.EgressFrom{
                            Identities: []string{
                                "vel",
                            },
                            IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                        },
                        EgressTo: &shared.EgressTo{
                            ExternalResources: []string{
                                "deserunt",
                                "quam",
                            },
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("qui"),
                                            Permission: sdk.String("cupiditate"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("maxime"),
                                            Permission: sdk.String("pariatur"),
                                        },
                                    },
                                    ServiceName: sdk.String("soluta"),
                                },
                            },
                            Resources: []string{
                                "laborum",
                            },
                        },
                    },
                },
                IngressPolicies: []shared.IngressPolicy{
                    shared.IngressPolicy{
                        IngressFrom: &shared.IngressFrom{
                            Identities: []string{
                                "aspernatur",
                                "dolores",
                            },
                            IdentityType: shared.IngressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                            Sources: []shared.IngressSource{
                                shared.IngressSource{
                                    AccessLevel: sdk.String("aliquid"),
                                    Resource: sdk.String("quam"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("molestias"),
                                    Resource: sdk.String("temporibus"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("qui"),
                                    Resource: sdk.String("neque"),
                                },
                            },
                        },
                        IngressTo: &shared.IngressTo{
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("odio"),
                                            Permission: sdk.String("sunt"),
                                        },
                                    },
                                    ServiceName: sdk.String("ullam"),
                                },
                            },
                            Resources: []string{
                                "hic",
                                "voluptatem",
                                "cumque",
                            },
                        },
                    },
                    shared.IngressPolicy{
                        IngressFrom: &shared.IngressFrom{
                            Identities: []string{
                                "nobis",
                                "et",
                                "saepe",
                            },
                            IdentityType: shared.IngressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                            Sources: []shared.IngressSource{
                                shared.IngressSource{
                                    AccessLevel: sdk.String("nobis"),
                                    Resource: sdk.String("quos"),
                                },
                            },
                        },
                        IngressTo: &shared.IngressTo{
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("aperiam"),
                                            Permission: sdk.String("delectus"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("dolorem"),
                                            Permission: sdk.String("dolore"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("labore"),
                                            Permission: sdk.String("adipisci"),
                                        },
                                    },
                                    ServiceName: sdk.String("dolorum"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("quae"),
                                            Permission: sdk.String("aut"),
                                        },
                                    },
                                    ServiceName: sdk.String("quas"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("consequatur"),
                                            Permission: sdk.String("est"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("repellendus"),
                                            Permission: sdk.String("porro"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("doloribus"),
                                            Permission: sdk.String("ut"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("facilis"),
                                            Permission: sdk.String("cupiditate"),
                                        },
                                    },
                                    ServiceName: sdk.String("qui"),
                                },
                            },
                            Resources: []string{
                                "laudantium",
                            },
                        },
                    },
                    shared.IngressPolicy{
                        IngressFrom: &shared.IngressFrom{
                            Identities: []string{
                                "occaecati",
                                "voluptatibus",
                            },
                            IdentityType: shared.IngressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                            Sources: []shared.IngressSource{
                                shared.IngressSource{
                                    AccessLevel: sdk.String("omnis"),
                                    Resource: sdk.String("quis"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("ipsum"),
                                    Resource: sdk.String("delectus"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("voluptate"),
                                    Resource: sdk.String("consectetur"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("vero"),
                                    Resource: sdk.String("tenetur"),
                                },
                            },
                        },
                        IngressTo: &shared.IngressTo{
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("distinctio"),
                                            Permission: sdk.String("quod"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("odio"),
                                            Permission: sdk.String("similique"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("facilis"),
                                            Permission: sdk.String("vero"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("ducimus"),
                                            Permission: sdk.String("dolore"),
                                        },
                                    },
                                    ServiceName: sdk.String("quibusdam"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("sequi"),
                                            Permission: sdk.String("natus"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("impedit"),
                                            Permission: sdk.String("aut"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("voluptatibus"),
                                            Permission: sdk.String("exercitationem"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("nulla"),
                                            Permission: sdk.String("fugit"),
                                        },
                                    },
                                    ServiceName: sdk.String("porro"),
                                },
                            },
                            Resources: []string{
                                "doloribus",
                                "iusto",
                                "eligendi",
                                "ducimus",
                            },
                        },
                    },
                },
                Resources: []string{
                    "officia",
                },
                RestrictedServices: []string{
                    "ipsam",
                    "ea",
                },
                VpcAccessibleServices: &shared.VpcAccessibleServices{
                    AllowedServices: []string{
                        "vel",
                    },
                    EnableRestriction: sdk.Bool(false),
                },
            },
            Status: &shared.ServicePerimeterConfig{
                AccessLevels: []string{
                    "magnam",
                    "ratione",
                    "ex",
                    "laudantium",
                },
                EgressPolicies: []shared.EgressPolicy{
                    shared.EgressPolicy{
                        EgressFrom: &shared.EgressFrom{
                            Identities: []string{
                                "maiores",
                            },
                            IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                        },
                        EgressTo: &shared.EgressTo{
                            ExternalResources: []string{
                                "nulla",
                                "excepturi",
                            },
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("sapiente"),
                                            Permission: sdk.String("quisquam"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("saepe"),
                                            Permission: sdk.String("ea"),
                                        },
                                    },
                                    ServiceName: sdk.String("impedit"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("veniam"),
                                            Permission: sdk.String("aliquid"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("inventore"),
                                            Permission: sdk.String("magnam"),
                                        },
                                    },
                                    ServiceName: sdk.String("ea"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("consectetur"),
                                            Permission: sdk.String("recusandae"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("aspernatur"),
                                            Permission: sdk.String("minima"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("eaque"),
                                            Permission: sdk.String("a"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("libero"),
                                            Permission: sdk.String("aut"),
                                        },
                                    },
                                    ServiceName: sdk.String("aut"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("impedit"),
                                            Permission: sdk.String("aliquam"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("fugit"),
                                            Permission: sdk.String("accusamus"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("inventore"),
                                            Permission: sdk.String("non"),
                                        },
                                    },
                                    ServiceName: sdk.String("et"),
                                },
                            },
                            Resources: []string{
                                "laborum",
                                "placeat",
                                "velit",
                            },
                        },
                    },
                },
                IngressPolicies: []shared.IngressPolicy{
                    shared.IngressPolicy{
                        IngressFrom: &shared.IngressFrom{
                            Identities: []string{
                                "nobis",
                                "quas",
                            },
                            IdentityType: shared.IngressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                            Sources: []shared.IngressSource{
                                shared.IngressSource{
                                    AccessLevel: sdk.String("voluptas"),
                                    Resource: sdk.String("libero"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("quasi"),
                                    Resource: sdk.String("tempora"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("numquam"),
                                    Resource: sdk.String("explicabo"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("provident"),
                                    Resource: sdk.String("ipsa"),
                                },
                            },
                        },
                        IngressTo: &shared.IngressTo{
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("odio"),
                                            Permission: sdk.String("eius"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("esse"),
                                            Permission: sdk.String("esse"),
                                        },
                                    },
                                    ServiceName: sdk.String("rem"),
                                },
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("reprehenderit"),
                                            Permission: sdk.String("quidem"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("fugiat"),
                                            Permission: sdk.String("ut"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("eum"),
                                            Permission: sdk.String("suscipit"),
                                        },
                                    },
                                    ServiceName: sdk.String("assumenda"),
                                },
                            },
                            Resources: []string{
                                "praesentium",
                            },
                        },
                    },
                    shared.IngressPolicy{
                        IngressFrom: &shared.IngressFrom{
                            Identities: []string{
                                "veritatis",
                                "ipsa",
                                "id",
                                "quidem",
                            },
                            IdentityType: shared.IngressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                            Sources: []shared.IngressSource{
                                shared.IngressSource{
                                    AccessLevel: sdk.String("illum"),
                                    Resource: sdk.String("quo"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("fuga"),
                                    Resource: sdk.String("eius"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("eos"),
                                    Resource: sdk.String("voluptas"),
                                },
                                shared.IngressSource{
                                    AccessLevel: sdk.String("ab"),
                                    Resource: sdk.String("cupiditate"),
                                },
                            },
                        },
                        IngressTo: &shared.IngressTo{
                            Operations: []shared.APIOperation{
                                shared.APIOperation{
                                    MethodSelectors: []shared.MethodSelector{
                                        shared.MethodSelector{
                                            Method: sdk.String("debitis"),
                                            Permission: sdk.String("ipsam"),
                                        },
                                        shared.MethodSelector{
                                            Method: sdk.String("aspernatur"),
                                            Permission: sdk.String("sequi"),
                                        },
                                    },
                                    ServiceName: sdk.String("quo"),
                                },
                            },
                            Resources: []string{
                                "recusandae",
                                "aperiam",
                            },
                        },
                    },
                },
                Resources: []string{
                    "quod",
                    "dignissimos",
                    "inventore",
                },
                RestrictedServices: []string{
                    "totam",
                    "accusamus",
                },
                VpcAccessibleServices: &shared.VpcAccessibleServices{
                    AllowedServices: []string{
                        "odio",
                        "occaecati",
                    },
                    EnableRestriction: sdk.Bool(false),
                },
            },
            Title: sdk.String("Ms."),
            UseExplicitDryRunSpec: sdk.Bool(false),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("porro"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity{
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

## AccesscontextmanagerAccessPoliciesServicePerimetersList

Lists all service perimeters for an access policy.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersList(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("explicabo"),
        PageSize: sdk.Int64(325685),
        PageToken: sdk.String("nisi"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("ratione"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicePerimetersResponse != nil {
        // handle response
    }
}
```

## AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll

Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReplaceServicePerimetersRequest: &shared.ReplaceServicePerimetersRequest{
            Etag: sdk.String("saepe"),
            ServicePerimeters: []shared.ServicePerimeter{
                shared.ServicePerimeter{
                    Description: sdk.String("atque"),
                    Name: sdk.String("Tamara Vandervort IV"),
                    PerimeterType: shared.ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge.ToPointer(),
                    Spec: &shared.ServicePerimeterConfig{
                        AccessLevels: []string{
                            "vero",
                            "aliquid",
                            "quasi",
                        },
                        EgressPolicies: []shared.EgressPolicy{
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "harum",
                                        "molestiae",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "minima",
                                        "distinctio",
                                        "eligendi",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("tempore"),
                                                    Permission: sdk.String("adipisci"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("cumque"),
                                                    Permission: sdk.String("consequuntur"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("consequatur"),
                                                    Permission: sdk.String("minus"),
                                                },
                                            },
                                            ServiceName: sdk.String("quaerat"),
                                        },
                                    },
                                    Resources: []string{
                                        "consectetur",
                                        "esse",
                                        "blanditiis",
                                        "provident",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "nulla",
                                        "quas",
                                        "esse",
                                        "quasi",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "sint",
                                        "pariatur",
                                        "possimus",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("asperiores"),
                                                    Permission: sdk.String("facere"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("veritatis"),
                                                    Permission: sdk.String("consequuntur"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("quasi"),
                                                    Permission: sdk.String("similique"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("culpa"),
                                                    Permission: sdk.String("aliquid"),
                                                },
                                            },
                                            ServiceName: sdk.String("tenetur"),
                                        },
                                    },
                                    Resources: []string{
                                        "earum",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "in",
                                        "eius",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "soluta",
                                        "accusantium",
                                        "aliquam",
                                        "sapiente",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("reprehenderit"),
                                                    Permission: sdk.String("ullam"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nisi"),
                                                    Permission: sdk.String("aut"),
                                                },
                                            },
                                            ServiceName: sdk.String("voluptatum"),
                                        },
                                    },
                                    Resources: []string{
                                        "quibusdam",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "deleniti",
                                        "itaque",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "omnis",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("at"),
                                                    Permission: sdk.String("et"),
                                                },
                                            },
                                            ServiceName: sdk.String("voluptate"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("minima"),
                                                    Permission: sdk.String("veritatis"),
                                                },
                                            },
                                            ServiceName: sdk.String("consectetur"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("iste"),
                                                    Permission: sdk.String("temporibus"),
                                                },
                                            },
                                            ServiceName: sdk.String("accusantium"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("aut"),
                                                    Permission: sdk.String("laudantium"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("eum"),
                                                    Permission: sdk.String("mollitia"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ab"),
                                                    Permission: sdk.String("corrupti"),
                                                },
                                            },
                                            ServiceName: sdk.String("non"),
                                        },
                                    },
                                    Resources: []string{
                                        "dolor",
                                    },
                                },
                            },
                        },
                        IngressPolicies: []shared.IngressPolicy{
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "impedit",
                                        "explicabo",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("dignissimos"),
                                            Resource: sdk.String("dicta"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("velit"),
                                                    Permission: sdk.String("voluptatibus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("voluptas"),
                                                    Permission: sdk.String("asperiores"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("aperiam"),
                                                    Permission: sdk.String("ea"),
                                                },
                                            },
                                            ServiceName: sdk.String("quaerat"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("repellendus"),
                                                    Permission: sdk.String("officia"),
                                                },
                                            },
                                            ServiceName: sdk.String("maxime"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("officia"),
                                                    Permission: sdk.String("asperiores"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nemo"),
                                                    Permission: sdk.String("quae"),
                                                },
                                            },
                                            ServiceName: sdk.String("quaerat"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("quod"),
                                                    Permission: sdk.String("labore"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ab"),
                                                    Permission: sdk.String("adipisci"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("fuga"),
                                                    Permission: sdk.String("id"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("suscipit"),
                                                    Permission: sdk.String("velit"),
                                                },
                                            },
                                            ServiceName: sdk.String("culpa"),
                                        },
                                    },
                                    Resources: []string{
                                        "recusandae",
                                        "totam",
                                        "fugiat",
                                    },
                                },
                            },
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "ducimus",
                                        "quos",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("possimus"),
                                            Resource: sdk.String("facilis"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("cum"),
                                            Resource: sdk.String("commodi"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("reiciendis"),
                                                    Permission: sdk.String("assumenda"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nemo"),
                                                    Permission: sdk.String("recusandae"),
                                                },
                                            },
                                            ServiceName: sdk.String("aliquid"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("cum"),
                                                    Permission: sdk.String("consectetur"),
                                                },
                                            },
                                            ServiceName: sdk.String("in"),
                                        },
                                    },
                                    Resources: []string{
                                        "earum",
                                        "facere",
                                    },
                                },
                            },
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "doloribus",
                                        "suscipit",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("saepe"),
                                            Resource: sdk.String("necessitatibus"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("dolore"),
                                            Resource: sdk.String("sunt"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("asperiores"),
                                            Resource: sdk.String("adipisci"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("beatae"),
                                                    Permission: sdk.String("dignissimos"),
                                                },
                                            },
                                            ServiceName: sdk.String("a"),
                                        },
                                    },
                                    Resources: []string{
                                        "consectetur",
                                        "corporis",
                                        "harum",
                                        "laboriosam",
                                    },
                                },
                            },
                        },
                        Resources: []string{
                            "voluptates",
                        },
                        RestrictedServices: []string{
                            "vitae",
                            "accusamus",
                            "similique",
                        },
                        VpcAccessibleServices: &shared.VpcAccessibleServices{
                            AllowedServices: []string{
                                "aspernatur",
                                "voluptas",
                            },
                            EnableRestriction: sdk.Bool(false),
                        },
                    },
                    Status: &shared.ServicePerimeterConfig{
                        AccessLevels: []string{
                            "voluptas",
                            "minima",
                        },
                        EgressPolicies: []shared.EgressPolicy{
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "adipisci",
                                        "minus",
                                        "dolores",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "dolore",
                                        "aliquam",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("ullam"),
                                                    Permission: sdk.String("adipisci"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("cum"),
                                                    Permission: sdk.String("blanditiis"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("quas"),
                                                    Permission: sdk.String("hic"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nesciunt"),
                                                    Permission: sdk.String("culpa"),
                                                },
                                            },
                                            ServiceName: sdk.String("corrupti"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("totam"),
                                                    Permission: sdk.String("hic"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("exercitationem"),
                                                    Permission: sdk.String("nobis"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("sit"),
                                                    Permission: sdk.String("rerum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("sed"),
                                                    Permission: sdk.String("reiciendis"),
                                                },
                                            },
                                            ServiceName: sdk.String("explicabo"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("facilis"),
                                                    Permission: sdk.String("voluptate"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("expedita"),
                                                    Permission: sdk.String("ab"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("iste"),
                                                    Permission: sdk.String("dolore"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("laborum"),
                                                    Permission: sdk.String("sed"),
                                                },
                                            },
                                            ServiceName: sdk.String("in"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("quidem"),
                                                    Permission: sdk.String("explicabo"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("voluptas"),
                                                    Permission: sdk.String("unde"),
                                                },
                                            },
                                            ServiceName: sdk.String("architecto"),
                                        },
                                    },
                                    Resources: []string{
                                        "sapiente",
                                        "debitis",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "reiciendis",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "maiores",
                                        "incidunt",
                                        "sed",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("necessitatibus"),
                                                    Permission: sdk.String("ipsum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ea"),
                                                    Permission: sdk.String("occaecati"),
                                                },
                                            },
                                            ServiceName: sdk.String("quos"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("tempora"),
                                                    Permission: sdk.String("tempora"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("voluptate"),
                                                    Permission: sdk.String("reiciendis"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ex"),
                                                    Permission: sdk.String("sit"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("non"),
                                                    Permission: sdk.String("officiis"),
                                                },
                                            },
                                            ServiceName: sdk.String("praesentium"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("quaerat"),
                                                    Permission: sdk.String("incidunt"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ipsam"),
                                                    Permission: sdk.String("debitis"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("rem"),
                                                    Permission: sdk.String("sit"),
                                                },
                                            },
                                            ServiceName: sdk.String("nobis"),
                                        },
                                    },
                                    Resources: []string{
                                        "veniam",
                                        "minima",
                                        "recusandae",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "nulla",
                                        "magni",
                                        "aperiam",
                                        "saepe",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "in",
                                        "officiis",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("exercitationem"),
                                                    Permission: sdk.String("praesentium"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("cum"),
                                                    Permission: sdk.String("laboriosam"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("dolorum"),
                                                    Permission: sdk.String("voluptatum"),
                                                },
                                            },
                                            ServiceName: sdk.String("error"),
                                        },
                                    },
                                    Resources: []string{
                                        "expedita",
                                        "debitis",
                                        "neque",
                                        "dolorum",
                                    },
                                },
                            },
                        },
                        IngressPolicies: []shared.IngressPolicy{
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "dolorum",
                                        "corrupti",
                                        "accusamus",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("fugit"),
                                            Resource: sdk.String("ut"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("fugiat"),
                                            Resource: sdk.String("voluptatem"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("culpa"),
                                            Resource: sdk.String("expedita"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("esse"),
                                                    Permission: sdk.String("ipsam"),
                                                },
                                            },
                                            ServiceName: sdk.String("sit"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("quas"),
                                                    Permission: sdk.String("repudiandae"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("corporis"),
                                                    Permission: sdk.String("et"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("blanditiis"),
                                                    Permission: sdk.String("ex"),
                                                },
                                            },
                                            ServiceName: sdk.String("sed"),
                                        },
                                    },
                                    Resources: []string{
                                        "vel",
                                    },
                                },
                            },
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "saepe",
                                        "error",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("reiciendis"),
                                            Resource: sdk.String("dolorem"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("harum"),
                                            Resource: sdk.String("dicta"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("labore"),
                                                    Permission: sdk.String("quidem"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("atque"),
                                                    Permission: sdk.String("laborum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nam"),
                                                    Permission: sdk.String("tenetur"),
                                                },
                                            },
                                            ServiceName: sdk.String("laboriosam"),
                                        },
                                    },
                                    Resources: []string{
                                        "amet",
                                    },
                                },
                            },
                        },
                        Resources: []string{
                            "voluptate",
                            "unde",
                            "reiciendis",
                        },
                        RestrictedServices: []string{
                            "repellendus",
                            "delectus",
                            "voluptates",
                        },
                        VpcAccessibleServices: &shared.VpcAccessibleServices{
                            AllowedServices: []string{
                                "est",
                            },
                            EnableRestriction: sdk.Bool(false),
                        },
                    },
                    Title: sdk.String("Miss"),
                    UseExplicitDryRunSpec: sdk.Bool(false),
                },
                shared.ServicePerimeter{
                    Description: sdk.String("reprehenderit"),
                    Name: sdk.String("Grant Langosh"),
                    PerimeterType: shared.ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular.ToPointer(),
                    Spec: &shared.ServicePerimeterConfig{
                        AccessLevels: []string{
                            "repudiandae",
                            "quasi",
                            "atque",
                            "reprehenderit",
                        },
                        EgressPolicies: []shared.EgressPolicy{
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "suscipit",
                                        "quidem",
                                        "maxime",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "amet",
                                        "assumenda",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("error"),
                                                    Permission: sdk.String("officiis"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("officiis"),
                                                    Permission: sdk.String("accusamus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("natus"),
                                                    Permission: sdk.String("minima"),
                                                },
                                            },
                                            ServiceName: sdk.String("aspernatur"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("maiores"),
                                                    Permission: sdk.String("corrupti"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("at"),
                                                    Permission: sdk.String("error"),
                                                },
                                            },
                                            ServiceName: sdk.String("blanditiis"),
                                        },
                                    },
                                    Resources: []string{
                                        "repudiandae",
                                        "atque",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "sunt",
                                        "recusandae",
                                        "dolorum",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "reiciendis",
                                        "doloremque",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("accusantium"),
                                                    Permission: sdk.String("beatae"),
                                                },
                                            },
                                            ServiceName: sdk.String("dolores"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("laboriosam"),
                                                    Permission: sdk.String("velit"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("a"),
                                                    Permission: sdk.String("molestias"),
                                                },
                                            },
                                            ServiceName: sdk.String("magnam"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("consequuntur"),
                                                    Permission: sdk.String("occaecati"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("officiis"),
                                                    Permission: sdk.String("perspiciatis"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("in"),
                                                    Permission: sdk.String("adipisci"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("eveniet"),
                                                    Permission: sdk.String("occaecati"),
                                                },
                                            },
                                            ServiceName: sdk.String("consequuntur"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("id"),
                                                    Permission: sdk.String("quis"),
                                                },
                                            },
                                            ServiceName: sdk.String("reprehenderit"),
                                        },
                                    },
                                    Resources: []string{
                                        "illo",
                                        "corporis",
                                        "quidem",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "non",
                                        "vero",
                                        "doloremque",
                                        "iure",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "quae",
                                        "molestiae",
                                        "eveniet",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("iure"),
                                                    Permission: sdk.String("necessitatibus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ratione"),
                                                    Permission: sdk.String("laborum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("distinctio"),
                                                    Permission: sdk.String("voluptatum"),
                                                },
                                            },
                                            ServiceName: sdk.String("rem"),
                                        },
                                    },
                                    Resources: []string{
                                        "ad",
                                        "repellat",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "corporis",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "mollitia",
                                        "voluptas",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("reiciendis"),
                                                    Permission: sdk.String("dolores"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("id"),
                                                    Permission: sdk.String("minima"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("dolore"),
                                                    Permission: sdk.String("dolorum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nesciunt"),
                                                    Permission: sdk.String("quae"),
                                                },
                                            },
                                            ServiceName: sdk.String("recusandae"),
                                        },
                                    },
                                    Resources: []string{
                                        "quaerat",
                                        "molestiae",
                                        "ex",
                                    },
                                },
                            },
                        },
                        IngressPolicies: []shared.IngressPolicy{
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "adipisci",
                                        "debitis",
                                        "laudantium",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("recusandae"),
                                            Resource: sdk.String("esse"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("provident"),
                                            Resource: sdk.String("quis"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("provident"),
                                                    Permission: sdk.String("aspernatur"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ullam"),
                                                    Permission: sdk.String("quasi"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("animi"),
                                                    Permission: sdk.String("nostrum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("mollitia"),
                                                    Permission: sdk.String("provident"),
                                                },
                                            },
                                            ServiceName: sdk.String("possimus"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("ex"),
                                                    Permission: sdk.String("aliquid"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("accusantium"),
                                                    Permission: sdk.String("repellat"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("doloribus"),
                                                    Permission: sdk.String("ullam"),
                                                },
                                            },
                                            ServiceName: sdk.String("in"),
                                        },
                                    },
                                    Resources: []string{
                                        "earum",
                                        "officia",
                                        "laborum",
                                    },
                                },
                            },
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "modi",
                                        "voluptatibus",
                                        "molestias",
                                        "officiis",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("vitae"),
                                            Resource: sdk.String("rerum"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("tempora"),
                                            Resource: sdk.String("quis"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("inventore"),
                                            Resource: sdk.String("fugit"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("cumque"),
                                            Resource: sdk.String("quae"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("aspernatur"),
                                                    Permission: sdk.String("eum"),
                                                },
                                            },
                                            ServiceName: sdk.String("eius"),
                                        },
                                    },
                                    Resources: []string{
                                        "at",
                                        "impedit",
                                        "eos",
                                    },
                                },
                            },
                        },
                        Resources: []string{
                            "eum",
                            "dicta",
                            "minima",
                            "beatae",
                        },
                        RestrictedServices: []string{
                            "provident",
                            "earum",
                            "soluta",
                        },
                        VpcAccessibleServices: &shared.VpcAccessibleServices{
                            AllowedServices: []string{
                                "illum",
                                "eaque",
                                "earum",
                                "perspiciatis",
                            },
                            EnableRestriction: sdk.Bool(false),
                        },
                    },
                    Status: &shared.ServicePerimeterConfig{
                        AccessLevels: []string{
                            "debitis",
                            "aliquid",
                            "porro",
                            "suscipit",
                        },
                        EgressPolicies: []shared.EgressPolicy{
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "cumque",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "animi",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("consequatur"),
                                                    Permission: sdk.String("quasi"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("et"),
                                                    Permission: sdk.String("ducimus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("natus"),
                                                    Permission: sdk.String("occaecati"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("suscipit"),
                                                    Permission: sdk.String("adipisci"),
                                                },
                                            },
                                            ServiceName: sdk.String("quasi"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("doloribus"),
                                                    Permission: sdk.String("nulla"),
                                                },
                                            },
                                            ServiceName: sdk.String("necessitatibus"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("tempora"),
                                                    Permission: sdk.String("nihil"),
                                                },
                                            },
                                            ServiceName: sdk.String("molestiae"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("iusto"),
                                                    Permission: sdk.String("esse"),
                                                },
                                            },
                                            ServiceName: sdk.String("praesentium"),
                                        },
                                    },
                                    Resources: []string{
                                        "reiciendis",
                                        "vel",
                                        "architecto",
                                        "fugiat",
                                    },
                                },
                            },
                        },
                        IngressPolicies: []shared.IngressPolicy{
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "odio",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("ex"),
                                            Resource: sdk.String("consectetur"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("aliquid"),
                                            Resource: sdk.String("ipsa"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("nostrum"),
                                                    Permission: sdk.String("fugiat"),
                                                },
                                            },
                                            ServiceName: sdk.String("expedita"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("officia"),
                                                    Permission: sdk.String("suscipit"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("aliquid"),
                                                    Permission: sdk.String("perferendis"),
                                                },
                                            },
                                            ServiceName: sdk.String("eum"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("iste"),
                                                    Permission: sdk.String("id"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ab"),
                                                    Permission: sdk.String("error"),
                                                },
                                            },
                                            ServiceName: sdk.String("possimus"),
                                        },
                                    },
                                    Resources: []string{
                                        "mollitia",
                                        "laborum",
                                        "libero",
                                        "ad",
                                    },
                                },
                            },
                        },
                        Resources: []string{
                            "enim",
                            "vitae",
                            "repellendus",
                        },
                        RestrictedServices: []string{
                            "quo",
                            "ex",
                        },
                        VpcAccessibleServices: &shared.VpcAccessibleServices{
                            AllowedServices: []string{
                                "ad",
                                "expedita",
                            },
                            EnableRestriction: sdk.Bool(false),
                        },
                    },
                    Title: sdk.String("Mr."),
                    UseExplicitDryRunSpec: sdk.Bool(false),
                },
                shared.ServicePerimeter{
                    Description: sdk.String("molestias"),
                    Name: sdk.String("Gene Brekke"),
                    PerimeterType: shared.ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular.ToPointer(),
                    Spec: &shared.ServicePerimeterConfig{
                        AccessLevels: []string{
                            "est",
                            "culpa",
                            "voluptatem",
                        },
                        EgressPolicies: []shared.EgressPolicy{
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "architecto",
                                        "fuga",
                                        "pariatur",
                                        "debitis",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "deleniti",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("sapiente"),
                                                    Permission: sdk.String("rem"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("minus"),
                                                    Permission: sdk.String("nemo"),
                                                },
                                            },
                                            ServiceName: sdk.String("asperiores"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("ullam"),
                                                    Permission: sdk.String("perferendis"),
                                                },
                                            },
                                            ServiceName: sdk.String("illum"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("impedit"),
                                                    Permission: sdk.String("quibusdam"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("nam"),
                                                    Permission: sdk.String("ipsam"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("culpa"),
                                                    Permission: sdk.String("dolor"),
                                                },
                                            },
                                            ServiceName: sdk.String("aliquam"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("deleniti"),
                                                    Permission: sdk.String("veritatis"),
                                                },
                                            },
                                            ServiceName: sdk.String("tempora"),
                                        },
                                    },
                                    Resources: []string{
                                        "consequatur",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "sit",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "ab",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("dolor"),
                                                    Permission: sdk.String("fugiat"),
                                                },
                                            },
                                            ServiceName: sdk.String("ipsam"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("ipsa"),
                                                    Permission: sdk.String("quas"),
                                                },
                                            },
                                            ServiceName: sdk.String("eveniet"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("officiis"),
                                                    Permission: sdk.String("esse"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("necessitatibus"),
                                                    Permission: sdk.String("sed"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("veniam"),
                                                    Permission: sdk.String("nesciunt"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("expedita"),
                                                    Permission: sdk.String("eum"),
                                                },
                                            },
                                            ServiceName: sdk.String("vel"),
                                        },
                                    },
                                    Resources: []string{
                                        "magnam",
                                        "exercitationem",
                                        "ab",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "autem",
                                        "nobis",
                                        "laboriosam",
                                        "recusandae",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "exercitationem",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("nisi"),
                                                    Permission: sdk.String("at"),
                                                },
                                            },
                                            ServiceName: sdk.String("vero"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("harum"),
                                                    Permission: sdk.String("sequi"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("doloribus"),
                                                    Permission: sdk.String("repudiandae"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("optio"),
                                                    Permission: sdk.String("occaecati"),
                                                },
                                            },
                                            ServiceName: sdk.String("nemo"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("blanditiis"),
                                                    Permission: sdk.String("officia"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("voluptas"),
                                                    Permission: sdk.String("numquam"),
                                                },
                                            },
                                            ServiceName: sdk.String("nemo"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("eius"),
                                                    Permission: sdk.String("aspernatur"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("ducimus"),
                                                    Permission: sdk.String("nesciunt"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("fuga"),
                                                    Permission: sdk.String("laudantium"),
                                                },
                                            },
                                            ServiceName: sdk.String("incidunt"),
                                        },
                                    },
                                    Resources: []string{
                                        "rem",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "dicta",
                                        "nisi",
                                        "consequuntur",
                                        "consectetur",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "reiciendis",
                                        "soluta",
                                        "alias",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("occaecati"),
                                                    Permission: sdk.String("iste"),
                                                },
                                            },
                                            ServiceName: sdk.String("magni"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("fuga"),
                                                    Permission: sdk.String("accusamus"),
                                                },
                                            },
                                            ServiceName: sdk.String("voluptatibus"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("omnis"),
                                                    Permission: sdk.String("delectus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("minima"),
                                                    Permission: sdk.String("praesentium"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("maxime"),
                                                    Permission: sdk.String("magnam"),
                                                },
                                            },
                                            ServiceName: sdk.String("temporibus"),
                                        },
                                    },
                                    Resources: []string{
                                        "commodi",
                                        "itaque",
                                        "commodi",
                                    },
                                },
                            },
                        },
                        IngressPolicies: []shared.IngressPolicy{
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "modi",
                                        "nam",
                                        "vero",
                                        "voluptatem",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("alias"),
                                            Resource: sdk.String("quasi"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("non"),
                                            Resource: sdk.String("maiores"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("nulla"),
                                                    Permission: sdk.String("deserunt"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("esse"),
                                                    Permission: sdk.String("nemo"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("reprehenderit"),
                                                    Permission: sdk.String("est"),
                                                },
                                            },
                                            ServiceName: sdk.String("quis"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("accusamus"),
                                                    Permission: sdk.String("impedit"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("hic"),
                                                    Permission: sdk.String("necessitatibus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("asperiores"),
                                                    Permission: sdk.String("ex"),
                                                },
                                            },
                                            ServiceName: sdk.String("voluptas"),
                                        },
                                    },
                                    Resources: []string{
                                        "delectus",
                                        "quae",
                                        "minus",
                                        "fuga",
                                    },
                                },
                            },
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "consectetur",
                                        "velit",
                                        "atque",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("magni"),
                                            Resource: sdk.String("soluta"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("repudiandae"),
                                            Resource: sdk.String("nam"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("dolore"),
                                            Resource: sdk.String("iusto"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("voluptate"),
                                            Resource: sdk.String("sequi"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("quo"),
                                                    Permission: sdk.String("deleniti"),
                                                },
                                            },
                                            ServiceName: sdk.String("quibusdam"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("odit"),
                                                    Permission: sdk.String("voluptatibus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("vel"),
                                                    Permission: sdk.String("magnam"),
                                                },
                                            },
                                            ServiceName: sdk.String("quibusdam"),
                                        },
                                    },
                                    Resources: []string{
                                        "facere",
                                    },
                                },
                            },
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "architecto",
                                        "voluptatibus",
                                        "quia",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumAnyServiceAccount.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("velit"),
                                            Resource: sdk.String("illo"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("accusantium"),
                                            Resource: sdk.String("vel"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("vero"),
                                                    Permission: sdk.String("excepturi"),
                                                },
                                            },
                                            ServiceName: sdk.String("eum"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("ut"),
                                                    Permission: sdk.String("perspiciatis"),
                                                },
                                            },
                                            ServiceName: sdk.String("earum"),
                                        },
                                    },
                                    Resources: []string{
                                        "impedit",
                                    },
                                },
                            },
                        },
                        Resources: []string{
                            "iste",
                            "itaque",
                            "alias",
                            "nisi",
                        },
                        RestrictedServices: []string{
                            "velit",
                            "laborum",
                            "non",
                            "dolor",
                        },
                        VpcAccessibleServices: &shared.VpcAccessibleServices{
                            AllowedServices: []string{
                                "sit",
                                "doloremque",
                            },
                            EnableRestriction: sdk.Bool(false),
                        },
                    },
                    Status: &shared.ServicePerimeterConfig{
                        AccessLevels: []string{
                            "officia",
                        },
                        EgressPolicies: []shared.EgressPolicy{
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "quidem",
                                        "voluptas",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyUserAccount.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "perspiciatis",
                                        "expedita",
                                        "deleniti",
                                        "a",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("unde"),
                                                    Permission: sdk.String("necessitatibus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("animi"),
                                                    Permission: sdk.String("impedit"),
                                                },
                                            },
                                            ServiceName: sdk.String("ipsam"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("est"),
                                                    Permission: sdk.String("error"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("esse"),
                                                    Permission: sdk.String("labore"),
                                                },
                                            },
                                            ServiceName: sdk.String("veritatis"),
                                        },
                                    },
                                    Resources: []string{
                                        "consectetur",
                                        "vitae",
                                        "inventore",
                                        "dolorem",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "qui",
                                        "iste",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "soluta",
                                        "libero",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("odio"),
                                                    Permission: sdk.String("fugit"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("alias"),
                                                    Permission: sdk.String("magni"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("vel"),
                                                    Permission: sdk.String("quae"),
                                                },
                                            },
                                            ServiceName: sdk.String("quae"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("neque"),
                                                    Permission: sdk.String("exercitationem"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("itaque"),
                                                    Permission: sdk.String("et"),
                                                },
                                            },
                                            ServiceName: sdk.String("ipsum"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("nulla"),
                                                    Permission: sdk.String("distinctio"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("maxime"),
                                                    Permission: sdk.String("quia"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("quia"),
                                                    Permission: sdk.String("nostrum"),
                                                },
                                            },
                                            ServiceName: sdk.String("omnis"),
                                        },
                                    },
                                    Resources: []string{
                                        "dicta",
                                        "id",
                                        "libero",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "officia",
                                        "quos",
                                        "placeat",
                                        "sit",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumAnyIdentity.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "voluptates",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("totam"),
                                                    Permission: sdk.String("dolore"),
                                                },
                                            },
                                            ServiceName: sdk.String("eligendi"),
                                        },
                                    },
                                    Resources: []string{
                                        "voluptatem",
                                        "autem",
                                        "esse",
                                    },
                                },
                            },
                            shared.EgressPolicy{
                                EgressFrom: &shared.EgressFrom{
                                    Identities: []string{
                                        "assumenda",
                                    },
                                    IdentityType: shared.EgressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                },
                                EgressTo: &shared.EgressTo{
                                    ExternalResources: []string{
                                        "facere",
                                        "corrupti",
                                        "molestiae",
                                    },
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("necessitatibus"),
                                                    Permission: sdk.String("tempore"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("sint"),
                                                    Permission: sdk.String("ea"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("autem"),
                                                    Permission: sdk.String("ipsam"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("rerum"),
                                                    Permission: sdk.String("laudantium"),
                                                },
                                            },
                                            ServiceName: sdk.String("corporis"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("voluptatibus"),
                                                    Permission: sdk.String("cum"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("at"),
                                                    Permission: sdk.String("alias"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("quia"),
                                                    Permission: sdk.String("quidem"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("fuga"),
                                                    Permission: sdk.String("repudiandae"),
                                                },
                                            },
                                            ServiceName: sdk.String("accusantium"),
                                        },
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("officiis"),
                                                    Permission: sdk.String("eos"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("quibusdam"),
                                                    Permission: sdk.String("odio"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("praesentium"),
                                                    Permission: sdk.String("odit"),
                                                },
                                            },
                                            ServiceName: sdk.String("explicabo"),
                                        },
                                    },
                                    Resources: []string{
                                        "error",
                                        "earum",
                                    },
                                },
                            },
                        },
                        IngressPolicies: []shared.IngressPolicy{
                            shared.IngressPolicy{
                                IngressFrom: &shared.IngressFrom{
                                    Identities: []string{
                                        "similique",
                                        "ut",
                                        "quidem",
                                        "quis",
                                    },
                                    IdentityType: shared.IngressFromIdentityTypeEnumIdentityTypeUnspecified.ToPointer(),
                                    Sources: []shared.IngressSource{
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("molestiae"),
                                            Resource: sdk.String("delectus"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("cupiditate"),
                                            Resource: sdk.String("fugit"),
                                        },
                                        shared.IngressSource{
                                            AccessLevel: sdk.String("numquam"),
                                            Resource: sdk.String("numquam"),
                                        },
                                    },
                                },
                                IngressTo: &shared.IngressTo{
                                    Operations: []shared.APIOperation{
                                        shared.APIOperation{
                                            MethodSelectors: []shared.MethodSelector{
                                                shared.MethodSelector{
                                                    Method: sdk.String("officia"),
                                                    Permission: sdk.String("dignissimos"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("optio"),
                                                    Permission: sdk.String("necessitatibus"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("corporis"),
                                                    Permission: sdk.String("qui"),
                                                },
                                                shared.MethodSelector{
                                                    Method: sdk.String("expedita"),
                                                    Permission: sdk.String("voluptatum"),
                                                },
                                            },
                                            ServiceName: sdk.String("cupiditate"),
                                        },
                                    },
                                    Resources: []string{
                                        "placeat",
                                        "enim",
                                    },
                                },
                            },
                        },
                        Resources: []string{
                            "in",
                        },
                        RestrictedServices: []string{
                            "eum",
                            "modi",
                            "corporis",
                            "magnam",
                        },
                        VpcAccessibleServices: &shared.VpcAccessibleServices{
                            AllowedServices: []string{
                                "maiores",
                                "tempore",
                                "aperiam",
                                "libero",
                            },
                            EnableRestriction: sdk.Bool(false),
                        },
                    },
                    Title: sdk.String("Mr."),
                    UseExplicitDryRunSpec: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("velit"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("est"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity{
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

## AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "tempore",
                "vero",
                "odit",
                "repellat",
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        Resource: "ducimus",
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## AccesscontextmanagerAccessPoliciesSetIamPolicy

Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### Example Usage

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesSetIamPolicy(ctx, operations.AccesscontextmanagerAccessPoliciesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "pariatur",
                                    "itaque",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ex",
                                    "quaerat",
                                    "commodi",
                                    "officiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("quidem"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quam"),
                            Expression: sdk.String("dolorem"),
                            Location: sdk.String("modi"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "vero",
                            "sequi",
                            "repudiandae",
                        },
                        Role: sdk.String("cum"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("dicta"),
                            Expression: sdk.String("earum"),
                            Location: sdk.String("veniam"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "nam",
                        },
                        Role: sdk.String("dicta"),
                    },
                },
                Etag: sdk.String("consequuntur"),
                Version: sdk.Int(899867),
            },
            UpdateMask: sdk.String("nobis"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        Resource: "libero",
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AccesscontextmanagerAccessPoliciesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```
