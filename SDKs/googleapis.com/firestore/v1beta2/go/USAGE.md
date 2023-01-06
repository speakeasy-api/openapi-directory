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
            Parent: "maxime",
        },
        QueryParams: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "json",
            Callback: "saepe",
            Fields: "voluptates",
            Filter: "amet",
            Key: "voluptas",
            OauthToken: "consectetur",
            PageSize: 9161478771946698252,
            PageToken: "itaque",
            PrettyPrint: false,
            QuotaUser: "molestiae",
            UploadType: "dolores",
            UploadProtocol: "dolor",
        },
    }
    
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsFieldsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1beta2ListFieldsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->