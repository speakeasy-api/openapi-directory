# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/analytics/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BehavioralEventsTracking](docs/behavioraleventstracking/README.md)

* [PostEventsV3Send](docs/behavioraleventstracking/README.md#posteventsv3send) - Sends Custom Behavioral Event
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
