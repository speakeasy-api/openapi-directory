<!-- Start SDK Example Usage -->
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
            ActionType: shared.GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnumAllow.ToPointer(),
            Condition: sdk.String("distinctio"),
            Description: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumUpdate,
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumDelete,
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumCreate,
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumUpdate,
            },
            Name: sdk.String("Rick Kertzmann"),
            ResourceTypes: []string{
                "delectus",
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("recusandae"),
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
<!-- End SDK Example Usage -->