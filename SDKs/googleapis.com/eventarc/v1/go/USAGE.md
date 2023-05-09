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
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsCreate(ctx, operations.EventarcProjectsLocationsChannelConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelConnectionInput: &shared.ChannelConnectionInput{
            ActivationToken: sdk.String("provident"),
            Channel: sdk.String("distinctio"),
            Name: sdk.String("Stuart Stiedemann"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        ChannelConnectionID: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->