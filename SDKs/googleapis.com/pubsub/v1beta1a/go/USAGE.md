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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.AcknowledgeRequest{
            AckID: []string{
                "eum",
                "iusto",
                "ullam",
            },
            Subscription: "saepe",
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