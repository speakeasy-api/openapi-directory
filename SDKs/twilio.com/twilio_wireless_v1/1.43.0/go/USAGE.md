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
    res, err := s.CreateCommand(ctx, operations.CreateCommandCreateCommandRequest{
        CallbackMethod: operations.CreateCommandCreateCommandRequestCallbackMethodEnumPatch.ToPointer(),
        CallbackURL: sdk.String("https://salty-stag.name"),
        Command: "nulla",
        CommandMode: shared.CommandEnumCommandModeEnumBinary.ToPointer(),
        DeliveryReceiptRequested: sdk.Bool(false),
        IncludeSid: sdk.String("illum"),
        Sim: sdk.String("vel"),
    }, operations.CreateCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->