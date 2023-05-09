# TagValues

### Available Operations

* [CloudresourcemanagerTagValuesCreate](#cloudresourcemanagertagvaluescreate) - Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
* [CloudresourcemanagerTagValuesGet](#cloudresourcemanagertagvaluesget) - Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* [CloudresourcemanagerTagValuesGetIamPolicy](#cloudresourcemanagertagvaluesgetiampolicy) - Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
* [CloudresourcemanagerTagValuesGetNamespaced](#cloudresourcemanagertagvaluesgetnamespaced) - Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* [CloudresourcemanagerTagValuesList](#cloudresourcemanagertagvalueslist) - Lists all TagValues for a specific TagKey.
* [CloudresourcemanagerTagValuesPatch](#cloudresourcemanagertagvaluespatch) - Updates the attributes of the TagValue resource.
* [CloudresourcemanagerTagValuesSetIamPolicy](#cloudresourcemanagertagvaluessetiampolicy) - Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
* [CloudresourcemanagerTagValuesTagHoldsCreate](#cloudresourcemanagertagvaluestagholdscreate) - Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
* [CloudresourcemanagerTagValuesTagHoldsDelete](#cloudresourcemanagertagvaluestagholdsdelete) - Deletes a TagHold.
* [CloudresourcemanagerTagValuesTagHoldsList](#cloudresourcemanagertagvaluestagholdslist) - Lists TagHolds under a TagValue.
* [CloudresourcemanagerTagValuesTestIamPermissions](#cloudresourcemanagertagvaluestestiampermissions) - Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

## CloudresourcemanagerTagValuesCreate

Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesCreate(ctx, operations.CloudresourcemanagerTagValuesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TagValueInput: &shared.TagValueInput{
            Description: sdk.String("necessitatibus"),
            Etag: sdk.String("odit"),
            Name: sdk.String("Joyce Kertzmann"),
            Parent: sdk.String("eius"),
            ShortName: sdk.String("maxime"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("nihil"),
        ValidateOnly: sdk.Bool(false),
    }, operations.CloudresourcemanagerTagValuesCreateSecurity{
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

## CloudresourcemanagerTagValuesGet

Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesGet(ctx, operations.CloudresourcemanagerTagValuesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("accusantium"),
        Name: "Irma Morissette DDS",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("ea"),
    }, operations.CloudresourcemanagerTagValuesGetSecurity{
        Option1: &operations.CloudresourcemanagerTagValuesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagValue != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagValuesGetIamPolicy

Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesGetIamPolicy(ctx, operations.CloudresourcemanagerTagValuesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(139972),
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        Resource: "autem",
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.CloudresourcemanagerTagValuesGetIamPolicySecurity{
        Option1: &operations.CloudresourcemanagerTagValuesGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagValuesGetNamespaced

Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesGetNamespaced(ctx, operations.CloudresourcemanagerTagValuesGetNamespacedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("amet"),
        Name: sdk.String("Erma Hessel"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("totam"),
    }, operations.CloudresourcemanagerTagValuesGetNamespacedSecurity{
        Option1: &operations.CloudresourcemanagerTagValuesGetNamespacedSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagValue != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagValuesList

Lists all TagValues for a specific TagKey.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesList(ctx, operations.CloudresourcemanagerTagValuesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("eos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("dolores"),
        PageSize: sdk.Int64(793698),
        PageToken: sdk.String("quam"),
        Parent: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("hic"),
    }, operations.CloudresourcemanagerTagValuesListSecurity{
        Option1: &operations.CloudresourcemanagerTagValuesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagValuesResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagValuesPatch

Updates the attributes of the TagValue resource.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesPatch(ctx, operations.CloudresourcemanagerTagValuesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TagValueInput: &shared.TagValueInput{
            Description: sdk.String("omnis"),
            Etag: sdk.String("facilis"),
            Name: sdk.String("George Sawayn"),
            Parent: sdk.String("error"),
            ShortName: sdk.String("eaque"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("earum"),
        Name: "Sheryl Parisian",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UpdateMask: sdk.String("libero"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quaerat"),
        ValidateOnly: sdk.Bool(false),
    }, operations.CloudresourcemanagerTagValuesPatchSecurity{
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

## CloudresourcemanagerTagValuesSetIamPolicy

Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesSetIamPolicy(ctx, operations.CloudresourcemanagerTagValuesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolor",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("ipsum"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cum",
                                    "voluptate",
                                    "dignissimos",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsa",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "odio",
                                    "quaerat",
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
                            Description: sdk.String("voluptas"),
                            Expression: sdk.String("natus"),
                            Location: sdk.String("eos"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "fugiat",
                        },
                        Role: sdk.String("ab"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("soluta"),
                            Expression: sdk.String("dolorum"),
                            Location: sdk.String("iusto"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "deleniti",
                            "omnis",
                            "necessitatibus",
                        },
                        Role: sdk.String("distinctio"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("asperiores"),
                            Expression: sdk.String("nihil"),
                            Location: sdk.String("ipsum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "saepe",
                            "eius",
                            "aspernatur",
                        },
                        Role: sdk.String("perferendis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("amet"),
                            Expression: sdk.String("optio"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "suscipit",
                            "deserunt",
                            "provident",
                            "minima",
                        },
                        Role: sdk.String("repellendus"),
                    },
                },
                Etag: sdk.String("totam"),
                Version: sdk.Int(628982),
            },
            UpdateMask: sdk.String("alias"),
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        Resource: "dolorum",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("esse"),
    }, operations.CloudresourcemanagerTagValuesSetIamPolicySecurity{
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

## CloudresourcemanagerTagValuesTagHoldsCreate

Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesTagHoldsCreate(ctx, operations.CloudresourcemanagerTagValuesTagHoldsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TagHoldInput: &shared.TagHoldInput{
            HelpLink: sdk.String("iusto"),
            Holder: sdk.String("ipsum"),
            Origin: sdk.String("quisquam"),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("enim"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("nihil"),
        ValidateOnly: sdk.Bool(false),
    }, operations.CloudresourcemanagerTagValuesTagHoldsCreateSecurity{
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

## CloudresourcemanagerTagValuesTagHoldsDelete

Deletes a TagHold.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesTagHoldsDelete(ctx, operations.CloudresourcemanagerTagValuesTagHoldsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("vel"),
        Key: sdk.String("libero"),
        Name: "Joanna Kohler",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("pariatur"),
        ValidateOnly: sdk.Bool(false),
    }, operations.CloudresourcemanagerTagValuesTagHoldsDeleteSecurity{
        Option1: &operations.CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagValuesTagHoldsList

Lists TagHolds under a TagValue.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesTagHoldsList(ctx, operations.CloudresourcemanagerTagValuesTagHoldsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("incidunt"),
        Filter: sdk.String("aspernatur"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("distinctio"),
        PageSize: sdk.Int64(704474),
        PageToken: sdk.String("aliquid"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("qui"),
    }, operations.CloudresourcemanagerTagValuesTagHoldsListSecurity{
        Option1: &operations.CloudresourcemanagerTagValuesTagHoldsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagHoldsResponse != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagValuesTestIamPermissions

Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

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
    res, err := s.TagValues.CloudresourcemanagerTagValuesTestIamPermissions(ctx, operations.CloudresourcemanagerTagValuesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "magni",
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("nam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        Resource: "soluta",
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("et"),
    }, operations.CloudresourcemanagerTagValuesTestIamPermissionsSecurity{
        Option1: &operations.CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
