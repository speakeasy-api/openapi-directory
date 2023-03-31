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

    req := operations.PubsubSubscriptionsAcknowledgeRequest{
        DollarXgafv: "2",
        AcknowledgeRequest: &shared.AcknowledgeRequest{
            AckID: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Subscription: "nulla",
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Subscriptions.PubsubSubscriptionsAcknowledge(ctx, req, operations.PubsubSubscriptionsAcknowledgeSecurity{
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