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
    
    req := operations.PeopleContactGroupsBatchGetRequest{
        Security: operations.PeopleContactGroupsBatchGetSecurity{
            Option1: &operations.PeopleContactGroupsBatchGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.PeopleContactGroupsBatchGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            GroupFields: "dolor",
            Key: "expedita",
            MaxMembers: 6044372234677422456,
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            ResourceNames: []string{
                "dicta",
                "debitis",
                "voluptatum",
            },
            UploadType: "et",
            UploadProtocol: "ut",
        },
    }
    
    res, err := s.ContactGroups.PeopleContactGroupsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetContactGroupsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->