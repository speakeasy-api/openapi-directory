# V1beta1

### Available Operations

* [IapGetIamPolicy](#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapSetIamPolicy](#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapTestIamPermissions](#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. If the resource does not exist or the caller does not have Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED] will be returned. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

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
    res, err := s.V1beta1.IapGetIamPolicy(ctx, operations.IapGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(297534),
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        Resource: "placeat",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
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
    res, err := s.V1beta1.IapSetIamPolicy(ctx, operations.IapSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("recusandae"),
                            Expression: sdk.String("temporibus"),
                            Location: sdk.String("ab"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "deserunt",
                        },
                        Role: sdk.String("perferendis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ipsam"),
                            Expression: sdk.String("repellendus"),
                            Location: sdk.String("sapiente"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "at",
                        },
                        Role: sdk.String("at"),
                    },
                },
                Etag: sdk.String("maiores"),
                Version: sdk.Int(473608),
            },
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        Resource: "nam",
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
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

Returns permissions that a caller has on the Identity-Aware Proxy protected resource. If the resource does not exist or the caller does not have Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED] will be returned. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

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
    res, err := s.V1beta1.IapTestIamPermissions(ctx, operations.IapTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "hic",
                "optio",
                "totam",
            },
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        Resource: "esse",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
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
