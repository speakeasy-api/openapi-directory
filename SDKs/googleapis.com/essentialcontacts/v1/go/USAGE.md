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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
            "PRODUCT_UPDATES",
            "SECURITY",
            "BILLING",
        },
        OauthToken: "deserunt",
        PageSize: 384382,
        PageToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Projects.EssentialcontactsProjectsContactsCompute(ctx, req, operations.EssentialcontactsProjectsContactsComputeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1ComputeContactsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->