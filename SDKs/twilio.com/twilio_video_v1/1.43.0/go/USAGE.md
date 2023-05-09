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
    res, err := s.CreateComposition(ctx, operations.CreateCompositionCreateCompositionRequest{
        AudioSources: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        AudioSourcesExcluded: []string{
            "nulla",
            "corrupti",
            "illum",
        },
        Format: shared.CompositionEnumFormatEnumMp4.ToPointer(),
        Resolution: sdk.String("error"),
        RoomSid: "deserunt",
        StatusCallback: sdk.String("http://innocent-effect.org"),
        StatusCallbackMethod: operations.CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumHead.ToPointer(),
        Trim: sdk.Bool(false),
        VideoLayout: sdk.String("delectus"),
    }, operations.CreateCompositionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->