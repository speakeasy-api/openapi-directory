# Policies

### Available Operations

* [SasportalPoliciesGet](#sasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [SasportalPoliciesSet](#sasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [SasportalPoliciesTest](#sasportalpoliciestest) - Returns permissions that a caller has on the specified resource.

## SasportalPoliciesGet

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Policies.SasportalPoliciesGet(ctx, operations.SasportalPoliciesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SasPortalGetPolicyRequest: &shared.SasPortalGetPolicyRequest{
            Resource: sdk.String("quas"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.SasportalPoliciesGetSecurity{
        Option1: &operations.SasportalPoliciesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalPolicy != nil {
        // handle response
    }
}
```

## SasportalPoliciesSet

Sets the access control policy on the specified resource. Replaces any existing policy.

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
    res, err := s.Policies.SasportalPoliciesSet(ctx, operations.SasportalPoliciesSetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SasPortalSetPolicyRequest: &shared.SasPortalSetPolicyRequest{
            DisableNotification: sdk.Bool(false),
            Policy: &shared.SasPortalPolicy{
                Assignments: []shared.SasPortalAssignment{
                    shared.SasPortalAssignment{
                        Members: []string{
                            "odio",
                            "occaecati",
                            "voluptatibus",
                        },
                        Role: sdk.String("quisquam"),
                    },
                },
                Etag: sdk.String("vero"),
            },
            Resource: sdk.String("omnis"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("hic"),
    }, operations.SasportalPoliciesSetSecurity{
        Option1: &operations.SasportalPoliciesSetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalPolicy != nil {
        // handle response
    }
}
```

## SasportalPoliciesTest

Returns permissions that a caller has on the specified resource.

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
    res, err := s.Policies.SasportalPoliciesTest(ctx, operations.SasportalPoliciesTestRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalTestPermissionsRequest: &shared.SasPortalTestPermissionsRequest{
            Permissions: []string{
                "odio",
                "similique",
                "facilis",
                "vero",
            },
            Resource: sdk.String("ducimus"),
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.SasportalPoliciesTestSecurity{
        Option1: &operations.SasportalPoliciesTestSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalTestPermissionsResponse != nil {
        // handle response
    }
}
```
