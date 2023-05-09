# V1beta1

### Available Operations

* [ServicebrokerGetIamPolicy](#servicebrokergetiampolicy) - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* [ServicebrokerSetIamPolicy](#servicebrokersetiampolicy) - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* [ServicebrokerTestIamPermissions](#servicebrokertestiampermissions) - Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

## ServicebrokerGetIamPolicy

Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.

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
    res, err := s.V1beta1.ServicebrokerGetIamPolicy(ctx, operations.ServicebrokerGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("labore"),
        OptionsRequestedPolicyVersion: sdk.Int64(383462),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "nobis",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("vero"),
    }, operations.ServicebrokerGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerSetIamPolicy

Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED

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
    res, err := s.V1beta1.ServicebrokerSetIamPolicy(ctx, operations.ServicebrokerSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("magnam"),
                            Expression: sdk.String("et"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "quos",
                            "sint",
                            "accusantium",
                        },
                        Role: sdk.String("mollitia"),
                    },
                },
                Etag: sdk.String("reiciendis"),
                Version: sdk.Int(652103),
            },
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        Resource: "iure",
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ServicebrokerSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerTestIamPermissions

Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

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
    res, err := s.V1beta1.ServicebrokerTestIamPermissions(ctx, operations.ServicebrokerTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "deleniti",
                "facilis",
                "in",
                "architecto",
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        Resource: "sed",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ServicebrokerTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
