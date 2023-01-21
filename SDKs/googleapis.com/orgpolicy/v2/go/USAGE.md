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
            Parent: "sit",
        },
        QueryParams: operations.OrgpolicyOrganizationsCustomConstraintsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "DENY",
            Condition: "debitis",
            Description: "voluptatum",
            DisplayName: "et",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "UPDATE",
                "UPDATE",
                "UPDATE",
            },
            Name: "iste",
            ResourceTypes: []string{
                "totam",
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