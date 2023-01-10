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
            Parent: "sint",
        },
        QueryParams: operations.EssentialcontactsProjectsContactsComputeQueryParams{
            DollarXgafv: "1",
            AccessToken: "eos",
            Alt: "json",
            Callback: "ex",
            Fields: "dolor",
            Key: "odio",
            NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
                "ALL",
                "PRODUCT_UPDATES",
            },
            OauthToken: "deserunt",
            PageSize: 6503842544790942575,
            PageToken: "aut",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "odio",
            UploadProtocol: "inventore",
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