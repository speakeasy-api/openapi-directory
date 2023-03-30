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
        Security: operations.PubsubSubscriptionsAcknowledgeSecurity{
            Option1: &operations.PubsubSubscriptionsAcknowledgeSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.PubsubSubscriptionsAcknowledgeQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.AcknowledgeRequest{
            AckID: []string{
                "suscipit",
                "iure",
                "magnam",
            },
            Subscription: "debitis",
        },
    }

    ctx := context.Background()
    res, err := s.Subscriptions.PubsubSubscriptionsAcknowledge(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->