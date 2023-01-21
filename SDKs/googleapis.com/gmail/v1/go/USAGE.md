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
    
    req := operations.GmailUsersDraftsCreateRequest{
        Security: operations.GmailUsersDraftsCreateSecurity{
            Option1: &operations.GmailUsersDraftsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.GmailUsersDraftsCreatePathParams{
            UserID: "sit",
        },
        QueryParams: operations.GmailUsersDraftsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &operations.GmailUsersDraftsCreateRequests{
            MessageCpim: []byte("dicta"),
            MessageDeliveryStatus: []byte("debitis"),
            MessageDispositionNotification: []byte("voluptatum"),
            MessageExternalBody: []byte("et"),
            MessageFeedbackReport: []byte("ut"),
            MessageGlobal: []byte("dolorem"),
            MessageGlobalDeliveryStatus: []byte("et"),
            MessageGlobalDispositionNotification: []byte("voluptate"),
            MessageGlobalHeaders: []byte("iste"),
            MessageHTTP: []byte("vitae"),
            MessageImdnPlusXML: []byte("totam"),
            MessageNews: []byte("dolores"),
            MessagePartial: []byte("illum"),
            MessageRfc822: []byte("debitis"),
            MessageShttp: []byte("vel"),
            MessageSip: []byte("odio"),
            MessageSipfrag: []byte("dolore"),
            MessageTrackingStatus: []byte("id"),
            MessageVndSiSimp: []byte("aspernatur"),
            MessageVndWfaWsc: []byte("accusantium"),
        },
    }
    
    res, err := s.Users.GmailUsersDraftsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Draft != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->