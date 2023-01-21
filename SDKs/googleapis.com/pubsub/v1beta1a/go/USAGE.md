<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.AcknowledgeRequest{
            AckID: []string{
                "dicta",
                "debitis",
                "voluptatum",
            },
            Subscription: "et",
        },
    }
    
    res, err := s.Subscriptions.PubsubSubscriptionsAcknowledge(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->