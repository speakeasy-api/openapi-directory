# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/marketing/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest{
        BatchInputMarketingEventSubscriber: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 592845,
                    Properties: map[string]string{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Vid: 623564,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 645894,
                    Properties: map[string]string{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    Vid: 963663,
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 272656,
                    Properties: map[string]string{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    Vid: 479977,
                },
            },
        },
        ExternalAccountID: "excepturi",
        ExternalEventID: "nisi",
        SubscriberState: "recusandae",
    }

    ctx := context.Background()
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx, req, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseSubscriberVidResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AttendanceSubscriberStateChanges

* `PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate` - Record
* `PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail` - Record

### MarketingEventsExternal

* `DeleteMarketingV3MarketingEventsEventsExternalEventIDArchive`
* `GetMarketingV3MarketingEventsEventsExternalEventIDGetByID`
* `PatchMarketingV3MarketingEventsEventsExternalEventIDUpdate`
* `PostMarketingV3MarketingEventsEventsDeleteArchiveBatch`
* `PostMarketingV3MarketingEventsEventsUpsertDoUpsert`
* `PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancel`
* `PostMarketingV3MarketingEventsEventsExternalEventIDCompleteComplete`
* `PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByID`
* `PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByID`
* `PostMarketingV3MarketingEventsEventsCreate`
* `PutMarketingV3MarketingEventsEventsExternalEventIDReplace`

### Search

* `GetMarketingV3MarketingEventsEventsSearchDoSearch` - Search for marketing events

### SettingsExternal

* `GetMarketingV3MarketingEventsAppIDSettingsGetAll`
* `PostMarketingV3MarketingEventsAppIDSettingsCreate`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
