# Projects

### Available Operations

* [OrgpolicyProjectsConstraintsList](#orgpolicyprojectsconstraintslist) - Lists constraints that could be applied on the specified resource.
* [OrgpolicyProjectsPoliciesCreate](#orgpolicyprojectspoliciescreate) - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* [OrgpolicyProjectsPoliciesDelete](#orgpolicyprojectspoliciesdelete) - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* [OrgpolicyProjectsPoliciesGet](#orgpolicyprojectspoliciesget) - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* [OrgpolicyProjectsPoliciesGetEffectivePolicy](#orgpolicyprojectspoliciesgeteffectivepolicy) - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [OrgpolicyProjectsPoliciesList](#orgpolicyprojectspolicieslist) - Retrieves all of the policies that exist on a particular resource.
* [OrgpolicyProjectsPoliciesPatch](#orgpolicyprojectspoliciespatch) - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

## OrgpolicyProjectsConstraintsList

Lists constraints that could be applied on the specified resource.

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
    res, err := s.Projects.OrgpolicyProjectsConstraintsList(ctx, operations.OrgpolicyProjectsConstraintsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(616934),
        PageToken: sdk.String("laboriosam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.OrgpolicyProjectsConstraintsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2ListConstraintsResponse != nil {
        // handle response
    }
}
```

## OrgpolicyProjectsPoliciesCreate

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

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
    res, err := s.Projects.OrgpolicyProjectsPoliciesCreate(ctx, operations.OrgpolicyProjectsPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudOrgpolicyV2PolicyInput: &shared.GoogleCloudOrgpolicyV2PolicyInput{
            Alternate: &shared.GoogleCloudOrgpolicyV2AlternatePolicySpecInput{
                Launch: sdk.String("iste"),
                Spec: &shared.GoogleCloudOrgpolicyV2PolicySpecInput{
                    Etag: sdk.String("iure"),
                    InheritFromParent: sdk.Bool(false),
                    Reset: sdk.Bool(false),
                    Rules: []shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                            AllowAll: sdk.Bool(false),
                            Condition: &shared.GoogleTypeExpr{
                                Description: sdk.String("quidem"),
                                Expression: sdk.String("architecto"),
                                Location: sdk.String("ipsa"),
                                Title: sdk.String("Dr."),
                            },
                            DenyAll: sdk.Bool(false),
                            Enforce: sdk.Bool(false),
                            Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                                AllowedValues: []string{
                                    "mollitia",
                                    "laborum",
                                    "dolores",
                                },
                                DeniedValues: []string{
                                    "corporis",
                                },
                            },
                        },
                        shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                            AllowAll: sdk.Bool(false),
                            Condition: &shared.GoogleTypeExpr{
                                Description: sdk.String("explicabo"),
                                Expression: sdk.String("nobis"),
                                Location: sdk.String("enim"),
                                Title: sdk.String("Miss"),
                            },
                            DenyAll: sdk.Bool(false),
                            Enforce: sdk.Bool(false),
                            Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                                AllowedValues: []string{
                                    "minima",
                                    "excepturi",
                                },
                                DeniedValues: []string{
                                    "iure",
                                },
                            },
                        },
                        shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                            AllowAll: sdk.Bool(false),
                            Condition: &shared.GoogleTypeExpr{
                                Description: sdk.String("culpa"),
                                Expression: sdk.String("doloribus"),
                                Location: sdk.String("sapiente"),
                                Title: sdk.String("Mr."),
                            },
                            DenyAll: sdk.Bool(false),
                            Enforce: sdk.Bool(false),
                            Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                                AllowedValues: []string{
                                    "dolorem",
                                    "culpa",
                                    "consequuntur",
                                },
                                DeniedValues: []string{
                                    "mollitia",
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                            },
                        },
                        shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                            AllowAll: sdk.Bool(false),
                            Condition: &shared.GoogleTypeExpr{
                                Description: sdk.String("quam"),
                                Expression: sdk.String("molestiae"),
                                Location: sdk.String("velit"),
                                Title: sdk.String("Miss"),
                            },
                            DenyAll: sdk.Bool(false),
                            Enforce: sdk.Bool(false),
                            Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                                AllowedValues: []string{
                                    "quis",
                                },
                                DeniedValues: []string{
                                    "laborum",
                                },
                            },
                        },
                    },
                },
            },
            DryRunSpec: &shared.GoogleCloudOrgpolicyV2PolicySpecInput{
                Etag: sdk.String("animi"),
                InheritFromParent: sdk.Bool(false),
                Reset: sdk.Bool(false),
                Rules: []shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("odit"),
                            Expression: sdk.String("quo"),
                            Location: sdk.String("sequi"),
                            Title: sdk.String("Dr."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "id",
                                "possimus",
                            },
                            DeniedValues: []string{
                                "quasi",
                            },
                        },
                    },
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("error"),
                            Expression: sdk.String("temporibus"),
                            Location: sdk.String("laborum"),
                            Title: sdk.String("Mr."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "voluptatibus",
                                "vero",
                                "nihil",
                                "praesentium",
                            },
                            DeniedValues: []string{
                                "ipsa",
                                "omnis",
                                "voluptate",
                                "cum",
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Sharon Kiehn"),
            Spec: &shared.GoogleCloudOrgpolicyV2PolicySpecInput{
                Etag: sdk.String("dicta"),
                InheritFromParent: sdk.Bool(false),
                Reset: sdk.Bool(false),
                Rules: []shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("dolore"),
                            Expression: sdk.String("iusto"),
                            Location: sdk.String("dicta"),
                            Title: sdk.String("Miss"),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "accusamus",
                                "commodi",
                            },
                            DeniedValues: []string{
                                "quae",
                                "ipsum",
                                "quidem",
                                "molestias",
                            },
                        },
                    },
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("excepturi"),
                            Expression: sdk.String("pariatur"),
                            Location: sdk.String("modi"),
                            Title: sdk.String("Ms."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "voluptates",
                                "quasi",
                                "repudiandae",
                            },
                            DeniedValues: []string{
                                "veritatis",
                                "itaque",
                                "incidunt",
                            },
                        },
                    },
                },
            },
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
    }, operations.OrgpolicyProjectsPoliciesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2Policy != nil {
        // handle response
    }
}
```

## OrgpolicyProjectsPoliciesDelete

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

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
    res, err := s.Projects.OrgpolicyProjectsPoliciesDelete(ctx, operations.OrgpolicyProjectsPoliciesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        Name: "Vernon Abshire",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.OrgpolicyProjectsPoliciesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## OrgpolicyProjectsPoliciesGet

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

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
    res, err := s.Projects.OrgpolicyProjectsPoliciesGet(ctx, operations.OrgpolicyProjectsPoliciesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        Name: "Sherri Tremblay",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.OrgpolicyProjectsPoliciesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2Policy != nil {
        // handle response
    }
}
```

## OrgpolicyProjectsPoliciesGetEffectivePolicy

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

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
    res, err := s.Projects.OrgpolicyProjectsPoliciesGetEffectivePolicy(ctx, operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        Name: "Blanca Schulist",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.OrgpolicyProjectsPoliciesGetEffectivePolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2Policy != nil {
        // handle response
    }
}
```

## OrgpolicyProjectsPoliciesList

Retrieves all of the policies that exist on a particular resource.

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
    res, err := s.Projects.OrgpolicyProjectsPoliciesList(ctx, operations.OrgpolicyProjectsPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("provident"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(501324),
        PageToken: sdk.String("deleniti"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.OrgpolicyProjectsPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2ListPoliciesResponse != nil {
        // handle response
    }
}
```

## OrgpolicyProjectsPoliciesPatch

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

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
    res, err := s.Projects.OrgpolicyProjectsPoliciesPatch(ctx, operations.OrgpolicyProjectsPoliciesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudOrgpolicyV2PolicyInput: &shared.GoogleCloudOrgpolicyV2PolicyInput{
            Alternate: &shared.GoogleCloudOrgpolicyV2AlternatePolicySpecInput{
                Launch: sdk.String("natus"),
                Spec: &shared.GoogleCloudOrgpolicyV2PolicySpecInput{
                    Etag: sdk.String("omnis"),
                    InheritFromParent: sdk.Bool(false),
                    Reset: sdk.Bool(false),
                    Rules: []shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                            AllowAll: sdk.Bool(false),
                            Condition: &shared.GoogleTypeExpr{
                                Description: sdk.String("perferendis"),
                                Expression: sdk.String("nihil"),
                                Location: sdk.String("magnam"),
                                Title: sdk.String("Miss"),
                            },
                            DenyAll: sdk.Bool(false),
                            Enforce: sdk.Bool(false),
                            Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                                AllowedValues: []string{
                                    "labore",
                                    "labore",
                                    "suscipit",
                                },
                                DeniedValues: []string{
                                    "nobis",
                                    "eum",
                                    "vero",
                                },
                            },
                        },
                        shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                            AllowAll: sdk.Bool(false),
                            Condition: &shared.GoogleTypeExpr{
                                Description: sdk.String("aspernatur"),
                                Expression: sdk.String("architecto"),
                                Location: sdk.String("magnam"),
                                Title: sdk.String("Mr."),
                            },
                            DenyAll: sdk.Bool(false),
                            Enforce: sdk.Bool(false),
                            Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                                AllowedValues: []string{
                                    "ullam",
                                    "provident",
                                    "quos",
                                },
                                DeniedValues: []string{
                                    "accusantium",
                                    "mollitia",
                                    "reiciendis",
                                },
                            },
                        },
                    },
                },
            },
            DryRunSpec: &shared.GoogleCloudOrgpolicyV2PolicySpecInput{
                Etag: sdk.String("mollitia"),
                InheritFromParent: sdk.Bool(false),
                Reset: sdk.Bool(false),
                Rules: []shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("eum"),
                            Expression: sdk.String("dolor"),
                            Location: sdk.String("necessitatibus"),
                            Title: sdk.String("Mr."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "quasi",
                                "iure",
                            },
                            DeniedValues: []string{
                                "debitis",
                                "eius",
                                "maxime",
                                "deleniti",
                            },
                        },
                    },
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("facilis"),
                            Expression: sdk.String("in"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Mr."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "ullam",
                                "expedita",
                                "nihil",
                                "repellat",
                            },
                            DeniedValues: []string{
                                "sed",
                                "saepe",
                                "pariatur",
                                "accusantium",
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Irma Morissette DDS"),
            Spec: &shared.GoogleCloudOrgpolicyV2PolicySpecInput{
                Etag: sdk.String("illum"),
                InheritFromParent: sdk.Bool(false),
                Reset: sdk.Bool(false),
                Rules: []shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("maxime"),
                            Expression: sdk.String("ea"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mr."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "accusantium",
                                "ab",
                            },
                            DeniedValues: []string{
                                "quidem",
                                "ipsam",
                                "voluptate",
                                "autem",
                            },
                        },
                    },
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("nam"),
                            Expression: sdk.String("eaque"),
                            Location: sdk.String("pariatur"),
                            Title: sdk.String("Mrs."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "perferendis",
                                "fugiat",
                                "amet",
                                "aut",
                            },
                            DeniedValues: []string{
                                "corporis",
                                "hic",
                                "libero",
                                "nobis",
                            },
                        },
                    },
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("dolores"),
                            Expression: sdk.String("quis"),
                            Location: sdk.String("totam"),
                            Title: sdk.String("Ms."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "quis",
                            },
                            DeniedValues: []string{
                                "eos",
                            },
                        },
                    },
                    shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule{
                        AllowAll: sdk.Bool(false),
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("perferendis"),
                            Expression: sdk.String("dolores"),
                            Location: sdk.String("minus"),
                            Title: sdk.String("Ms."),
                        },
                        DenyAll: sdk.Bool(false),
                        Enforce: sdk.Bool(false),
                        Values: &shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues{
                            AllowedValues: []string{
                                "vero",
                            },
                            DeniedValues: []string{
                                "hic",
                                "recusandae",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("porro"),
        Name: "Ms. Vickie Mraz",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UpdateMask: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.OrgpolicyProjectsPoliciesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2Policy != nil {
        // handle response
    }
}
```
