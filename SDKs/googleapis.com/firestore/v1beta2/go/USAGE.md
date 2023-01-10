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
            Parent: "vel",
        },
        QueryParams: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptatum",
            Alt: "json",
            Callback: "quis",
            Fields: "quis",
            Filter: "tempore",
            Key: "quasi",
            OauthToken: "architecto",
            PageSize: 6391953149941375058,
            PageToken: "voluptates",
            PrettyPrint: true,
            QuotaUser: "laborum",
            UploadType: "id",
            UploadProtocol: "odio",
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