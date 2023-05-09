# V1

### Available Operations

* [IapGetIamPolicy](#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapGetIapSettings](#iapgetiapsettings) - Gets the IAP settings on a particular IAP protected resource.
* [IapSetIamPolicy](#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapTestIamPermissions](#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapUpdateIapSettings](#iapupdateiapsettings) - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

## IapGetIamPolicy

Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

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
    res, err := s.V1.IapGetIamPolicy(ctx, operations.IapGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(916723),
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        Resource: "consequatur",
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.IapGetIamPolicySecurity{
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

## IapGetIapSettings

Gets the IAP settings on a particular IAP protected resource.

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
    res, err := s.V1.IapGetIapSettings(ctx, operations.IapGetIapSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("labore"),
        Key: sdk.String("modi"),
        Name: "Beth McGlynn Sr.",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.IapGetIapSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IapSettings != nil {
        // handle response
    }
}
```

## IapSetIamPolicy

Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

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
    res, err := s.V1.IapSetIamPolicy(ctx, operations.IapSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("tempora"),
                            Expression: sdk.String("facilis"),
                            Location: sdk.String("tempore"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "eum",
                            "non",
                            "eligendi",
                            "sint",
                        },
                        Role: sdk.String("aliquid"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("provident"),
                            Expression: sdk.String("necessitatibus"),
                            Location: sdk.String("sint"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "debitis",
                        },
                        Role: sdk.String("a"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("dolorum"),
                            Expression: sdk.String("in"),
                            Location: sdk.String("in"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "rerum",
                            "dicta",
                            "magnam",
                            "cumque",
                        },
                        Role: sdk.String("facere"),
                    },
                },
                Etag: sdk.String("ea"),
                Version: sdk.Int(396506),
            },
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        Resource: "quidem",
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.IapSetIamPolicySecurity{
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

## IapTestIamPermissions

Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

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
    res, err := s.V1.IapTestIamPermissions(ctx, operations.IapTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "deleniti",
                "sapiente",
                "amet",
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        Resource: "nihil",
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.IapTestIamPermissionsSecurity{
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

## IapUpdateIapSettings

Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

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
    res, err := s.V1.IapUpdateIapSettings(ctx, operations.IapUpdateIapSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        IapSettings: &shared.IapSettings{
            AccessSettings: &shared.AccessSettings{
                AllowedDomainsSettings: &shared.AllowedDomainsSettings{
                    Domains: []string{
                        "labore",
                        "suscipit",
                    },
                    Enable: sdk.Bool(false),
                },
                CorsSettings: &shared.CorsSettings{
                    AllowHTTPOptions: sdk.Bool(false),
                },
                GcipSettings: &shared.GcipSettings{
                    LoginPageURI: sdk.String("natus"),
                    TenantIds: []string{
                        "eum",
                        "vero",
                        "aspernatur",
                    },
                },
                OauthSettings: &shared.OAuthSettings{
                    LoginHint: sdk.String("architecto"),
                },
                PolicyDelegationSettings: &shared.PolicyDelegationSettings{
                    IamPermission: sdk.String("magnam"),
                    IamServiceName: sdk.String("et"),
                    PolicyName: &shared.PolicyName{
                        ID: sdk.String("959890af-a563-4e25-96fe-4c8b711e5b7f"),
                        Region: sdk.String("quibusdam"),
                        Type: sdk.String("sed"),
                    },
                    Resource: &shared.Resource{
                        Labels: map[string]string{
                            "pariatur": "accusantium",
                            "consequuntur": "praesentium",
                            "natus": "magni",
                            "sunt": "quo",
                        },
                        Name: sdk.String("Ervin Schoen"),
                        Service: sdk.String("odit"),
                        Type: sdk.String("ea"),
                    },
                },
                ReauthSettings: &shared.ReauthSettings{
                    MaxAge: sdk.String("accusantium"),
                    Method: shared.ReauthSettingsMethodEnumMethodUnspecified.ToPointer(),
                    PolicyType: shared.ReauthSettingsPolicyTypeEnumDefault.ToPointer(),
                },
            },
            ApplicationSettings: &shared.ApplicationSettings{
                AccessDeniedPageSettings: &shared.AccessDeniedPageSettings{
                    AccessDeniedPageURI: sdk.String("quidem"),
                    GenerateTroubleshootingURI: sdk.Bool(false),
                    RemediationTokenGenerationEnabled: sdk.Bool(false),
                },
                AttributePropagationSettings: &shared.AttributePropagationSettings{
                    Enable: sdk.Bool(false),
                    Expression: sdk.String("ipsam"),
                    OutputCredentials: []shared.AttributePropagationSettingsOutputCredentialsEnum{
                        shared.AttributePropagationSettingsOutputCredentialsEnumHeader,
                        shared.AttributePropagationSettingsOutputCredentialsEnumJwt,
                    },
                },
                CookieDomain: sdk.String("eaque"),
                CsmSettings: &shared.CsmSettings{
                    RctokenAud: sdk.String("pariatur"),
                },
            },
            Name: sdk.String("Camille Armstrong"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        Name: "Ernest Hayes",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UpdateMask: sdk.String("nesciunt"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.IapUpdateIapSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IapSettings != nil {
        // handle response
    }
}
```
