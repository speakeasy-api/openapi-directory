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
            Parent: "saepe",
        },
        QueryParams: operations.OrgpolicyOrganizationsCustomConstraintsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quas",
            Alt: "json",
            Callback: "quasi",
            Fields: "modi",
            Key: "blanditiis",
            OauthToken: "hic",
            PrettyPrint: true,
            QuotaUser: "perferendis",
            UploadType: "voluptatem",
            UploadProtocol: "quia",
        },
        Request: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "ALLOW",
            Condition: "ea",
            Description: "velit",
            DisplayName: "ratione",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "UPDATE",
                "UPDATE",
                "CREATE",
            },
            Name: "veritatis",
            ResourceTypes: []string{
                "ut",
                "porro",
                "voluptatem",
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