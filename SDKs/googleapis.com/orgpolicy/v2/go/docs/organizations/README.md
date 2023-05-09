# Organizations

### Available Operations

* [OrgpolicyOrganizationsCustomConstraintsCreate](#orgpolicyorganizationscustomconstraintscreate) - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* [OrgpolicyOrganizationsCustomConstraintsList](#orgpolicyorganizationscustomconstraintslist) - Retrieves all of the custom constraints that exist on a particular organization resource.

## OrgpolicyOrganizationsCustomConstraintsCreate

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

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
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsCreate(ctx, operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudOrgpolicyV2CustomConstraintInput: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: shared.GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnumActionTypeUnspecified.ToPointer(),
            Condition: sdk.String("quis"),
            Description: sdk.String("veritatis"),
            DisplayName: sdk.String("deserunt"),
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumCreate,
            },
            Name: sdk.String("Timmy Satterfield"),
            ResourceTypes: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2CustomConstraint != nil {
        // handle response
    }
}
```

## OrgpolicyOrganizationsCustomConstraintsList

Retrieves all of the custom constraints that exist on a particular organization resource.

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
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsList(ctx, operations.OrgpolicyOrganizationsCustomConstraintsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PageSize: sdk.Int64(186332),
        PageToken: sdk.String("impedit"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.OrgpolicyOrganizationsCustomConstraintsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2ListCustomConstraintsResponse != nil {
        // handle response
    }
}
```
