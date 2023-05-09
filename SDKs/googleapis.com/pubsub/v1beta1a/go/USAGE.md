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
    res, err := s.Subscriptions.PubsubSubscriptionsAcknowledge(ctx, operations.PubsubSubscriptionsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AcknowledgeRequest: &shared.AcknowledgeRequest{
            AckID: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Subscription: sdk.String("nulla"),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.PubsubSubscriptionsAcknowledgeSecurity{
        Option1: &operations.PubsubSubscriptionsAcknowledgeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->