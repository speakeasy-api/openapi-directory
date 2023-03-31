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

    req := operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PageSize: 423655,
        PageToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsFieldsList(ctx, req, operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1ListFieldsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->