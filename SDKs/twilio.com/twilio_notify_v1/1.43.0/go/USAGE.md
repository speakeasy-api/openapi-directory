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
    res, err := s.CreateBinding(ctx, operations.CreateBindingRequest{
        RequestBody: &operations.CreateBindingCreateBindingRequest{
            Address: "5786 Little Streets",
            BindingType: shared.BindingEnumBindingTypeEnumSms,
            CredentialSid: sdk.String("error"),
            Endpoint: sdk.String("deserunt"),
            Identity: "suscipit",
            NotificationProtocolVersion: sdk.String("iure"),
            Tag: []string{
                "debitis",
                "ipsa",
            },
        },
        ServiceSid: "delectus",
    }, operations.CreateBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->