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
        Security: operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OrgpolicyOrganizationsCustomConstraintsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.OrgpolicyOrganizationsCustomConstraintsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "ALLOW",
            Condition: "iure",
            Description: "magnam",
            DisplayName: "debitis",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "DELETE",
            },
            Name: "tempora",
            ResourceTypes: []string{
                "molestiae",
                "minus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2CustomConstraint != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->