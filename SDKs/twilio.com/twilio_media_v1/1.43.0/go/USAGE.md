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
    res, err := s.CreateMediaProcessor(ctx, operations.CreateMediaProcessorCreateMediaProcessorRequest{
        Extension: "corrupti",
        ExtensionContext: "provident",
        ExtensionEnvironment: sdk.String("distinctio"),
        MaxDuration: sdk.Int64(844266),
        StatusCallback: sdk.String("https://tidy-mascara.org"),
        StatusCallbackMethod: operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPost.ToPointer(),
    }, operations.CreateMediaProcessorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1MediaProcessor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->