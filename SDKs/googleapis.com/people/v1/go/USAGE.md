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
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            GroupFields: "vero",
            Key: "perspiciatis",
            MaxMembers: 847252,
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            ResourceNames: []string{
                "eum",
                "iusto",
                "ullam",
            },
            UploadType: "saepe",
            UploadProtocol: "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.ContactGroups.PeopleContactGroupsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetContactGroupsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->