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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsAddItems(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddAddressGroupItemsRequest: &shared.AddAddressGroupItemsRequest{
            Items: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            RequestID: sdk.String("nulla"),
        },
        AccessToken: sdk.String("corrupti"),
        AddressGroup: "illum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->