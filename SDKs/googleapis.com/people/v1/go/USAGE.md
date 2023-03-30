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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            GroupFields: "nulla",
            Key: "corrupti",
            MaxMembers: 847252,
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            ResourceNames: []string{
                "suscipit",
                "iure",
                "magnam",
            },
            UploadType: "debitis",
            UploadProtocol: "ipsa",
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