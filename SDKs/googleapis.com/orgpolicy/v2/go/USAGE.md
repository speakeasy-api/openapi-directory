<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudOrgpolicyV2CustomConstraintInput: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "ALLOW",
            Condition: "distinctio",
            Description: "quibusdam",
            DisplayName: "unde",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "UPDATE",
                "DELETE",
                "CREATE",
                "UPDATE",
            },
            Name: "deserunt",
            ResourceTypes: []string{
                "iure",
                "magnam",
            },
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Fields: "tempora",
        Key: "suscipit",
        OauthToken: "molestiae",
        Parent: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsCreate(ctx, req, operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity{
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