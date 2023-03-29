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
            Parent: "unde",
        },
        QueryParams: operations.OrgpolicyOrganizationsCustomConstraintsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "ALLOW",
            Condition: "iusto",
            Description: "ullam",
            DisplayName: "saepe",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "DELETE",
            },
            Name: "enim",
            ResourceTypes: []string{
                "voluptatum",
                "autem",
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