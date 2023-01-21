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
    
    req := operations.EssentialcontactsProjectsContactsComputeRequest{
        Security: operations.EssentialcontactsProjectsContactsComputeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.EssentialcontactsProjectsContactsComputePathParams{
            Parent: "sit",
        },
        QueryParams: operations.EssentialcontactsProjectsContactsComputeQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
                "NOTIFICATION_CATEGORY_UNSPECIFIED",
                "SECURITY",
                "LEGAL",
            },
            OauthToken: "rerum",
            PageSize: 7837839688282259259,
            PageToken: "debitis",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "ut",
            UploadProtocol: "dolorem",
        },
    }
    
    res, err := s.Projects.EssentialcontactsProjectsContactsCompute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1ComputeContactsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->