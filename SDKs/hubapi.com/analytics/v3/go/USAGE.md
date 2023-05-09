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
    res, err := s.BehavioralEventsTracking.PostEventsV3Send(ctx, shared.BehavioralEventHTTPCompletionRequest{
        Email: sdk.String("Larue_Rau85@yahoo.com"),
        EventName: "corrupti",
        ObjectID: sdk.String("illum"),
        OccurredAt: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        Properties: map[string]string{
            "suscipit": "iure",
            "magnam": "debitis",
            "ipsa": "delectus",
        },
        Utk: sdk.String("tempora"),
    }, operations.PostEventsV3SendSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->