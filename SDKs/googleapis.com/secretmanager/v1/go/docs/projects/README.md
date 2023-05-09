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
* [SecretmanagerProjectsSecretsVersionsAccess](#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* [SecretmanagerProjectsSecretsVersionsDestroy](#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [SecretmanagerProjectsSecretsVersionsDisable](#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [SecretmanagerProjectsSecretsVersionsEnable](#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [SecretmanagerProjectsSecretsVersionsGet](#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
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
                DataCrc32c: sdk.String("maiores"),
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
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
            Annotations: map[string]string{
                "deleniti": "hic",
            },
            Etag: sdk.String("optio"),
            ExpireTime: sdk.String("totam"),
            Labels: map[string]string{
                "commodi": "molestiae",
            },
            Replication: &shared.Replication{
                Automatic: &shared.Automatic{
                    CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                        KmsKeyName: sdk.String("modi"),
                    },
                },
                UserManaged: &shared.UserManaged{
                    Replicas: []shared.Replica{
                        shared.Replica{
                            CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                                KmsKeyName: sdk.String("impedit"),
                            },
                            Location: sdk.String("cum"),
                        },
                    },
                },
            },
            Rotation: &shared.Rotation{
                NextRotationTime: sdk.String("esse"),
                RotationPeriod: sdk.String("ipsum"),
            },
            Topics: []shared.Topic{
                shared.Topic{
                    Name: sdk.String("Dorothy Hane"),
                },
                shared.Topic{
                    Name: sdk.String("Curtis Morissette"),
                },
                shared.Topic{
                    Name: sdk.String("Wilbur Kirlin"),
                },
            },
            TTL: sdk.String("iure"),
            VersionAliases: map[string]string{
                "quidem": "architecto",
                "ipsa": "reiciendis",
                "est": "mollitia",
                "laborum": "dolores",
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("omnis"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        SecretID: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
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
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Etag: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        Name: "Jaime O'Hara",
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("enim"),
        OptionsRequestedPolicyVersion: sdk.Int64(138183),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        Resource: "sequi",
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
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
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("error"),
        Filter: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
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
            Annotations: map[string]string{
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            Etag: sdk.String("maiores"),
            ExpireTime: sdk.String("dicta"),
            Labels: map[string]string{
                "dolore": "iusto",
                "dicta": "harum",
            },
            Replication: &shared.Replication{
                Automatic: &shared.Automatic{
                    CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                        KmsKeyName: sdk.String("enim"),
                    },
                },
                UserManaged: &shared.UserManaged{
                    Replicas: []shared.Replica{
                        shared.Replica{
                            CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                                KmsKeyName: sdk.String("commodi"),
                            },
                            Location: sdk.String("repudiandae"),
                        },
                        shared.Replica{
                            CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                                KmsKeyName: sdk.String("quae"),
                            },
                            Location: sdk.String("ipsum"),
                        },
                        shared.Replica{
                            CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                                KmsKeyName: sdk.String("quidem"),
                            },
                            Location: sdk.String("molestias"),
                        },
                        shared.Replica{
                            CustomerManagedEncryption: &shared.CustomerManagedEncryption{
                                KmsKeyName: sdk.String("excepturi"),
                            },
                            Location: sdk.String("pariatur"),
                        },
                    },
                },
            },
            Rotation: &shared.Rotation{
                NextRotationTime: sdk.String("modi"),
                RotationPeriod: sdk.String("praesentium"),
            },
            Topics: []shared.Topic{
                shared.Topic{
                    Name: sdk.String("Carl Waelchi DVM"),
                },
                shared.Topic{
                    Name: sdk.String("Erin Altenwerth"),
                },
                shared.Topic{
                    Name: sdk.String("Joanna Rau"),
                },
            },
            TTL: sdk.String("modi"),
            VersionAliases: map[string]string{
                "aliquid": "cupiditate",
            },
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        Name: "Denise Pagac",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UpdateMask: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
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
                                    "provident",
                                    "necessitatibus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolor",
                                    "debitis",
                                    "a",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "illum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("rerum"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cumque",
                                    "facere",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("aliquid"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "non",
                                    "occaecati",
                                    "enim",
                                    "accusamus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "provident",
                                    "nam",
                                    "id",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sapiente",
                                    "amet",
                                    "deserunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("vel"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "id",
                                    "labore",
                                    "labore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nobis",
                                    "eum",
                                    "vero",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("architecto"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("et"),
                            Expression: sdk.String("excepturi"),
                            Location: sdk.String("ullam"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "sint",
                            "accusantium",
                            "mollitia",
                        },
                        Role: sdk.String("reiciendis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("mollitia"),
                            Expression: sdk.String("ad"),
                            Location: sdk.String("eum"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "odit",
                            "nemo",
                            "quasi",
                            "iure",
                        },
                        Role: sdk.String("doloribus"),
                    },
                },
                Etag: sdk.String("debitis"),
                Version: sdk.Int(260341),
            },
            UpdateMask: sdk.String("maxime"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        Resource: "expedita",
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
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
                "saepe",
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        Resource: "quo",
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("pariatur"),
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

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

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
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("ea"),
        Key: sdk.String("accusantium"),
        Name: "Ebony Predovic",
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("pariatur"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DestroySecretVersionRequest: &shared.DestroySecretVersionRequest{
            Etag: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        Name: "Mindy Renner",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("eaque"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DisableSecretVersionRequest: &shared.DisableSecretVersionRequest{
            Etag: sdk.String("nesciunt"),
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("minus"),
        Key: sdk.String("quam"),
        Name: "Eula Hegmann",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("voluptatem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnableSecretVersionRequest: &shared.EnableSecretVersionRequest{
            Etag: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("rerum"),
        Name: "Ollie Watsica",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("provident"),
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

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

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
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("quos"),
        Key: sdk.String("aliquid"),
        Name: "Dawn Fadel",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("voluptate"),
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
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("numquam"),
        Filter: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("ipsa"),
        PageSize: sdk.Int64(434417),
        PageToken: sdk.String("odio"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quidem"),
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
