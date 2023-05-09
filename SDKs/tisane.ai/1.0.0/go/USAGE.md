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
    res, err := s.LanguageModelDirectAccess.GetFamilyDetails(ctx, operations.GetFamilyDetailsRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        ID: sdk.String("{family_id}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFamilyDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->