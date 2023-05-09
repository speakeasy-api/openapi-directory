# InboundSsoAssignments

### Available Operations

* [CloudidentityInboundSsoAssignmentsCreate](#cloudidentityinboundssoassignmentscreate) - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
* [CloudidentityInboundSsoAssignmentsDelete](#cloudidentityinboundssoassignmentsdelete) - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
* [CloudidentityInboundSsoAssignmentsGet](#cloudidentityinboundssoassignmentsget) - Gets an InboundSsoAssignment.
* [CloudidentityInboundSsoAssignmentsList](#cloudidentityinboundssoassignmentslist) - Lists the InboundSsoAssignments for a `Customer`.
* [CloudidentityInboundSsoAssignmentsPatch](#cloudidentityinboundssoassignmentspatch) - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

## CloudidentityInboundSsoAssignmentsCreate

Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.

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
    res, err := s.InboundSsoAssignments.CloudidentityInboundSsoAssignmentsCreate(ctx, operations.CloudidentityInboundSsoAssignmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InboundSsoAssignmentInput: &shared.InboundSsoAssignmentInput{
            Customer: sdk.String("recusandae"),
            Rank: sdk.Int(132487),
            SamlSsoInfo: &shared.SamlSsoInfo{
                InboundSamlSsoProfile: sdk.String("minima"),
            },
            SignInBehavior: &shared.SignInBehavior{
                RedirectCondition: shared.SignInBehaviorRedirectConditionEnumRedirectConditionUnspecified.ToPointer(),
            },
            SsoMode: shared.InboundSsoAssignmentSsoModeEnumDomainWideSamlIfEnabled.ToPointer(),
            TargetGroup: sdk.String("libero"),
            TargetOrgUnit: sdk.String("aut"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("et"),
    }, operations.CloudidentityInboundSsoAssignmentsCreateSecurity{
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

## CloudidentityInboundSsoAssignmentsDelete

Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.

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
    res, err := s.InboundSsoAssignments.CloudidentityInboundSsoAssignmentsDelete(ctx, operations.CloudidentityInboundSsoAssignmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        Customer: sdk.String("eum"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nobis"),
        Name: "Mack Stoltenberg",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.CloudidentityInboundSsoAssignmentsDeleteSecurity{
        Option1: &operations.CloudidentityInboundSsoAssignmentsDeleteSecurityOption1{
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

## CloudidentityInboundSsoAssignmentsGet

Gets an InboundSsoAssignment.

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
    res, err := s.InboundSsoAssignments.CloudidentityInboundSsoAssignmentsGet(ctx, operations.CloudidentityInboundSsoAssignmentsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("odio"),
        Key: sdk.String("eius"),
        Name: "Tamara Leffler",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        ReadMask: sdk.String("ut"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudidentityInboundSsoAssignmentsGetSecurity{
        Option1: &operations.CloudidentityInboundSsoAssignmentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InboundSsoAssignment != nil {
        // handle response
    }
}
```

## CloudidentityInboundSsoAssignmentsList

Lists the InboundSsoAssignments for a `Customer`.

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
    res, err := s.InboundSsoAssignments.CloudidentityInboundSsoAssignmentsList(ctx, operations.CloudidentityInboundSsoAssignmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("veritatis"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("quidem"),
        PageSize: sdk.Int64(206594),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.CloudidentityInboundSsoAssignmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInboundSsoAssignmentsResponse != nil {
        // handle response
    }
}
```

## CloudidentityInboundSsoAssignmentsPatch

Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

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
    res, err := s.InboundSsoAssignments.CloudidentityInboundSsoAssignmentsPatch(ctx, operations.CloudidentityInboundSsoAssignmentsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InboundSsoAssignmentInput: &shared.InboundSsoAssignmentInput{
            Customer: sdk.String("eos"),
            Rank: sdk.Int(373813),
            SamlSsoInfo: &shared.SamlSsoInfo{
                InboundSamlSsoProfile: sdk.String("ab"),
            },
            SignInBehavior: &shared.SignInBehavior{
                RedirectCondition: shared.SignInBehaviorRedirectConditionEnumNever.ToPointer(),
            },
            SsoMode: shared.InboundSsoAssignmentSsoModeEnumSsoModeUnspecified.ToPointer(),
            TargetGroup: sdk.String("tempora"),
            TargetOrgUnit: sdk.String("debitis"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("quo"),
        Key: sdk.String("esse"),
        Name: "Kevin Rau",
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UpdateMask: sdk.String("totam"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.CloudidentityInboundSsoAssignmentsPatchSecurity{
        Option1: &operations.CloudidentityInboundSsoAssignmentsPatchSecurityOption1{
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
