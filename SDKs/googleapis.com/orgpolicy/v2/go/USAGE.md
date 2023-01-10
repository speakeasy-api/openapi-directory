<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "veritatis",
        },
        QueryParams: operations.OrgpolicyOrganizationsCustomConstraintsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolor",
            Alt: "json",
            Callback: "mollitia",
            Fields: "rerum",
            Key: "rem",
            OauthToken: "recusandae",
            PrettyPrint: false,
            QuotaUser: "reprehenderit",
            UploadType: "dolorem",
            UploadProtocol: "omnis",
        },
        Request: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "DENY",
            Condition: "omnis",
            Description: "itaque",
            DisplayName: "consequuntur",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "UPDATE",
                "CREATE",
                "UPDATE",
            },
            Name: "ab",
            ResourceTypes: []string{
                "voluptas",
            },
        },
    }
    
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2CustomConstraint != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->