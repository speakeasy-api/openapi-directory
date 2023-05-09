<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.EssentialcontactsProjectsContactsCompute(ctx, operations.EssentialcontactsProjectsContactsComputeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumProductUpdates,
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumSecurity,
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumBilling,
        },
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(384382),
        PageToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.EssentialcontactsProjectsContactsComputeSecurity{
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