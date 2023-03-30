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
            Parent: "corrupti",
        },
        QueryParams: operations.EssentialcontactsProjectsContactsComputeQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
                "SECURITY",
                "BILLING",
                "BILLING",
                "SECURITY",
            },
            OauthToken: "iure",
            PageSize: 297534,
            PageToken: "debitis",
            PrettyPrint: false,
            QuotaUser: "ipsa",
            UploadType: "delectus",
            UploadProtocol: "tempora",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.EssentialcontactsProjectsContactsCompute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1ComputeContactsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->