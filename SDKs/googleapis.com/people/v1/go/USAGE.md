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
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "media",
            Callback: "voluptas",
            Fields: "adipisci",
            GroupFields: "sit",
            Key: "et",
            MaxMembers: 3864639738060764919,
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "eum",
            ResourceNames: []string{
                "sed",
            },
            UploadType: "hic",
            UploadProtocol: "laborum",
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