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
    }

    ctx := context.Background()
    res, err := s.ContactGroups.PeopleContactGroupsBatchGet(ctx, req, operations.PeopleContactGroupsBatchGetSecurity{
        Option1: &operations.PeopleContactGroupsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetContactGroupsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->