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
        Security: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity{
            Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Filter: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PageSize: 623564,
            PageToken: "deserunt",
            PrettyPrint: false,
            QuotaUser: "suscipit",
            UploadType: "iure",
            UploadProtocol: "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsFieldsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1beta2ListFieldsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->