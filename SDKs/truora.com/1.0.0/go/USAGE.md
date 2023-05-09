<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Behavior.ReportBehavior(ctx, shared.CreateBehaviorInput{
        BirthDate: types.MustTimeFromString("2021-10-25T05:21:43.948Z"),
        Country: shared.CreateBehaviorInputCountryEnumCr,
        DocumentID: "quibusdam",
        DocumentType: shared.CreateBehaviorInputDocumentTypeEnumName,
        Email: "Karley_Stamm@hotmail.com",
        FeedbackDate: types.MustTimeFromString("2022-03-26T09:37:56.283Z"),
        FirstName: "Hunter",
        LastName: "Gulgowski",
        PhoneNumber: sdk.String("debitis"),
        Reason: shared.CreateBehaviorInputReasonEnumRape,
    }, operations.ReportBehaviorSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviourOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->