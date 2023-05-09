# AccessPolicies

### Available Operations

* [AccesscontextmanagerAccessPoliciesAccessLevelsCreate](#accesscontextmanageraccesspoliciesaccesslevelscreate) - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* [AccesscontextmanagerAccessPoliciesAccessLevelsList](#accesscontextmanageraccesspoliciesaccesslevelslist) - List all Access Levels for an access policy.
* [AccesscontextmanagerAccessPoliciesCreate](#accesscontextmanageraccesspoliciescreate) - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* [AccesscontextmanagerAccessPoliciesList](#accesscontextmanageraccesspolicieslist) - List all AccessPolicies under a container.
* [AccesscontextmanagerAccessPoliciesServicePerimetersCreate](#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* [AccesscontextmanagerAccessPoliciesServicePerimetersDelete](#accesscontextmanageraccesspoliciesserviceperimetersdelete) - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* [AccesscontextmanagerAccessPoliciesServicePerimetersList](#accesscontextmanageraccesspoliciesserviceperimeterslist) - List all Service Perimeters for an access policy.
* [AccesscontextmanagerAccessPoliciesServicePerimetersPatch](#accesscontextmanageraccesspoliciesserviceperimeterspatch) - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

## AccesscontextmanagerAccessPoliciesAccessLevelsCreate

Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.

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

List all Access Levels for an access policy.

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

## AccesscontextmanagerAccessPoliciesCreate

Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessPolicy: &shared.AccessPolicy{
            Name: sdk.String("Lucia Kemmer"),
            Parent: sdk.String("sint"),
            Title: sdk.String("Mrs."),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("in"),
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

## AccesscontextmanagerAccessPoliciesList

List all AccessPolicies under a container.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("cumque"),
        PageSize: sdk.Int64(813798),
        PageToken: sdk.String("ea"),
        Parent: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("non"),
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

## AccesscontextmanagerAccessPoliciesServicePerimetersCreate

Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.

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
            Description: sdk.String("enim"),
            Name: sdk.String("Toby Pouros"),
            PerimeterType: shared.ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge.ToPointer(),
            Status: &shared.ServicePerimeterConfig{
                AccessLevels: []string{
                    "deleniti",
                    "sapiente",
                    "amet",
                },
                Resources: []string{
                    "nisi",
                    "vel",
                    "natus",
                },
                RestrictedServices: []string{
                    "molestiae",
                    "perferendis",
                    "nihil",
                },
                UnrestrictedServices: []string{
                    "distinctio",
                    "id",
                },
                VpcAccessibleServices: &shared.VpcAccessibleServices{
                    AllowedServices: []string{
                        "labore",
                        "suscipit",
                    },
                    EnableRestriction: sdk.Bool(false),
                },
            },
            Title: sdk.String("Miss"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("magnam"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
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

## AccesscontextmanagerAccessPoliciesServicePerimetersDelete

Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersDelete(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        Name: "Natalie Ernser",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity{
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

List all Service Perimeters for an access policy.

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
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(99569),
        PageToken: sdk.String("repudiandae"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
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

## AccesscontextmanagerAccessPoliciesServicePerimetersPatch

Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

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
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesServicePerimetersPatch(ctx, operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServicePerimeter: &shared.ServicePerimeter{
            Description: sdk.String("sed"),
            Name: sdk.String("Al Bashirian"),
            PerimeterType: shared.ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge.ToPointer(),
            Status: &shared.ServicePerimeterConfig{
                AccessLevels: []string{
                    "sunt",
                },
                Resources: []string{
                    "illum",
                    "pariatur",
                    "maxime",
                    "ea",
                },
                RestrictedServices: []string{
                    "odit",
                    "ea",
                    "accusantium",
                },
                UnrestrictedServices: []string{
                    "maiores",
                },
                VpcAccessibleServices: &shared.VpcAccessibleServices{
                    AllowedServices: []string{
                        "ipsam",
                        "voluptate",
                        "autem",
                    },
                    EnableRestriction: sdk.Bool(false),
                },
            },
            Title: sdk.String("Miss"),
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("perferendis"),
        Name: "Vincent Anderson",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UpdateMask: sdk.String("nobis"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("quis"),
    }, operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity{
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
