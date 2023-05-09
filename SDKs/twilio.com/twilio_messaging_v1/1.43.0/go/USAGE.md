<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateAlphaSender(ctx, operations.CreateAlphaSenderRequest{
        RequestBody: &operations.CreateAlphaSenderCreateAlphaSenderRequest{
            AlphaSender: "corrupti",
        },
        ServiceSid: "provident",
    }, operations.CreateAlphaSenderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceAlphaSender != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->