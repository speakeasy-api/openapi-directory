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
    res, err := s.Projects.ResourcesettingsProjectsSettingsGet(ctx, operations.ResourcesettingsProjectsSettingsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Name: "Dallas Kassulke",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
        View: operations.ResourcesettingsProjectsSettingsGetViewEnumSettingViewUnspecified.ToPointer(),
    }, operations.ResourcesettingsProjectsSettingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudResourcesettingsV1Setting != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->