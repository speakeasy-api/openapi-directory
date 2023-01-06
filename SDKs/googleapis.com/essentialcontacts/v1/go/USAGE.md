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
            Parent: "voluptas",
        },
        QueryParams: operations.EssentialcontactsProjectsContactsComputeQueryParams{
            DollarXgafv: "2",
            AccessToken: "quaerat",
            Alt: "media",
            Callback: "aperiam",
            Fields: "perspiciatis",
            Key: "nemo",
            NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
                "PRODUCT_UPDATES",
                "TECHNICAL",
                "SECURITY",
            },
            OauthToken: "a",
            PageSize: 3339606016778658165,
            PageToken: "nostrum",
            PrettyPrint: true,
            QuotaUser: "vero",
            UploadType: "ut",
            UploadProtocol: "cumque",
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