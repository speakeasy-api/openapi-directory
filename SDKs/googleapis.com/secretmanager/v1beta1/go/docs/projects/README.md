# Projects

### Available Operations

* [SecretmanagerProjectsLocationsList](#secretmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [SecretmanagerProjectsSecretsAddVersion](#secretmanagerprojectssecretsaddversion) - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* [SecretmanagerProjectsSecretsCreate](#secretmanagerprojectssecretscreate) - Creates a new Secret containing no SecretVersions.
* [SecretmanagerProjectsSecretsDelete](#secretmanagerprojectssecretsdelete) - Deletes a Secret.
* [SecretmanagerProjectsSecretsGetIamPolicy](#secretmanagerprojectssecretsgetiampolicy) - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* [SecretmanagerProjectsSecretsList](#secretmanagerprojectssecretslist) - Lists Secrets.
* [SecretmanagerProjectsSecretsPatch](#secretmanagerprojectssecretspatch) - Updates metadata of an existing Secret.
* [SecretmanagerProjectsSecretsSetIamPolicy](#secretmanagerprojectssecretssetiampolicy) - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* [SecretmanagerProjectsSecretsTestIamPermissions](#secretmanagerprojectssecretstestiampermissions) - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [SecretmanagerProjectsSecretsVersionsAccess](#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.
* [SecretmanagerProjectsSecretsVersionsDestroy](#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [SecretmanagerProjectsSecretsVersionsDisable](#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [SecretmanagerProjectsSecretsVersionsEnable](#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [SecretmanagerProjectsSecretsVersionsGet](#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.
* [SecretmanagerProjectsSecretsVersionsList](#secretmanagerprojectssecretsversionslist) - Lists SecretVersions. This call does not return secret data.

## SecretmanagerProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.SecretmanagerProjectsLocationsList(ctx, operations.SecretmanagerProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.SecretmanagerProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsAddVersion

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsAddVersion(ctx, operations.SecretmanagerProjectsSecretsAddVersionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddSecretVersionRequest: &shared.AddSecretVersionRequest{
            Payload: &shared.SecretPayload{
                Data: sdk.String("at"),
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
    }, operations.SecretmanagerProjectsSecretsAddVersionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretVersion != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsCreate

Creates a new Secret containing no SecretVersions.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsCreate(ctx, operations.SecretmanagerProjectsSecretsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SecretInput: &shared.SecretInput{
            Labels: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            Replication: &shared.Replication{
                Automatic: map[string]interface{}{
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                UserManaged: &shared.UserManaged{
                    Replicas: []shared.Replica{
                        shared.Replica{
                            Location: sdk.String("esse"),
                        },
                        shared.Replica{
                            Location: sdk.String("ipsum"),
                        },
                        shared.Replica{
                            Location: sdk.String("excepturi"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        SecretID: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.SecretmanagerProjectsSecretsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Secret != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsDelete

Deletes a Secret.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsDelete(ctx, operations.SecretmanagerProjectsSecretsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        Name: "Roger Beier",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.SecretmanagerProjectsSecretsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsGetIamPolicy

Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsGetIamPolicy(ctx, operations.SecretmanagerProjectsSecretsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        OptionsRequestedPolicyVersion: sdk.Int64(570197),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        Resource: "iure",
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.SecretmanagerProjectsSecretsGetIamPolicySecurity{
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

## SecretmanagerProjectsSecretsList

Lists Secrets.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsList(ctx, operations.SecretmanagerProjectsSecretsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.SecretmanagerProjectsSecretsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecretsResponse != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsPatch

Updates metadata of an existing Secret.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsPatch(ctx, operations.SecretmanagerProjectsSecretsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SecretInput: &shared.SecretInput{
            Labels: map[string]string{
                "quia": "quis",
                "vitae": "laborum",
                "animi": "enim",
            },
            Replication: &shared.Replication{
                Automatic: map[string]interface{}{
                    "quo": "sequi",
                },
                UserManaged: &shared.UserManaged{
                    Replicas: []shared.Replica{
                        shared.Replica{
                            Location: sdk.String("ipsam"),
                        },
                        shared.Replica{
                            Location: sdk.String("id"),
                        },
                        shared.Replica{
                            Location: sdk.String("possimus"),
                        },
                        shared.Replica{
                            Location: sdk.String("aut"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        Name: "Jan Thiel",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UpdateMask: sdk.String("omnis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("cum"),
    }, operations.SecretmanagerProjectsSecretsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Secret != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsSetIamPolicy

Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsSetIamPolicy(ctx, operations.SecretmanagerProjectsSecretsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "maiores",
                                    "dicta",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "iusto",
                                    "dicta",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("enim"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("commodi"),
                            Expression: sdk.String("repudiandae"),
                            Location: sdk.String("quae"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "molestias",
                            "excepturi",
                            "pariatur",
                        },
                        Role: sdk.String("modi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("praesentium"),
                            Expression: sdk.String("rem"),
                            Location: sdk.String("voluptates"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "sint",
                            "veritatis",
                            "itaque",
                            "incidunt",
                        },
                        Role: sdk.String("enim"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("consequatur"),
                            Expression: sdk.String("est"),
                            Location: sdk.String("quibusdam"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "distinctio",
                            "quibusdam",
                            "labore",
                        },
                        Role: sdk.String("modi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("qui"),
                            Expression: sdk.String("aliquid"),
                            Location: sdk.String("cupiditate"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "magni",
                        },
                        Role: sdk.String("assumenda"),
                    },
                },
                Etag: sdk.String("ipsam"),
                Version: sdk.Int(4695),
            },
            UpdateMask: sdk.String("fugit"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        Resource: "eum",
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.SecretmanagerProjectsSecretsSetIamPolicySecurity{
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

## SecretmanagerProjectsSecretsTestIamPermissions

Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsTestIamPermissions(ctx, operations.SecretmanagerProjectsSecretsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "provident",
                "necessitatibus",
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        Resource: "in",
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.SecretmanagerProjectsSecretsTestIamPermissionsSecurity{
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

## SecretmanagerProjectsSecretsVersionsAccess

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsVersionsAccess(ctx, operations.SecretmanagerProjectsSecretsVersionsAccessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("facere"),
        Key: sdk.String("ea"),
        Name: "Kayla Thompson",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.SecretmanagerProjectsSecretsVersionsAccessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessSecretVersionResponse != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsVersionsDestroy

Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsVersionsDestroy(ctx, operations.SecretmanagerProjectsSecretsVersionsDestroyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "id": "blanditiis",
            "deleniti": "sapiente",
            "amet": "deserunt",
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("molestiae"),
        Name: "Marcia Gutkowski",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("natus"),
    }, operations.SecretmanagerProjectsSecretsVersionsDestroySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretVersion != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsVersionsDisable

Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsVersionsDisable(ctx, operations.SecretmanagerProjectsSecretsVersionsDisableRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "vero": "aspernatur",
            "architecto": "magnam",
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Key: sdk.String("quos"),
        Name: "Kenneth O'Hara",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.SecretmanagerProjectsSecretsVersionsDisableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretVersion != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsVersionsEnable

Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsVersionsEnable(ctx, operations.SecretmanagerProjectsSecretsVersionsEnableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quasi": "iure",
            "doloribus": "debitis",
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("in"),
        Name: "Diane VonRueden",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sed"),
    }, operations.SecretmanagerProjectsSecretsVersionsEnableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretVersion != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsVersionsGet

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsVersionsGet(ctx, operations.SecretmanagerProjectsSecretsVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        Name: "Joan Satterfield",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.SecretmanagerProjectsSecretsVersionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecretVersion != nil {
        // handle response
    }
}
```

## SecretmanagerProjectsSecretsVersionsList

Lists SecretVersions. This call does not return secret data.

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
    res, err := s.Projects.SecretmanagerProjectsSecretsVersionsList(ctx, operations.SecretmanagerProjectsSecretsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(420075),
        PageToken: sdk.String("nam"),
        Parent: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.SecretmanagerProjectsSecretsVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecretVersionsResponse != nil {
        // handle response
    }
}
```
