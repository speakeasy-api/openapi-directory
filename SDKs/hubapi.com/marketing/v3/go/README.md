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
    res, err := s.AttendanceSubscriberStateChanges.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest{
        BatchInputMarketingEventSubscriber: shared.BatchInputMarketingEventSubscriber{
            Inputs: []shared.MarketingEventSubscriber{
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 592845,
                    Properties: map[string]string{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    Vid: sdk.Int(623564),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 645894,
                    Properties: map[string]string{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    Vid: sdk.Int(963663),
                },
                shared.MarketingEventSubscriber{
                    InteractionDateTime: 272656,
                    Properties: map[string]string{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    Vid: sdk.Int(479977),
                },
            },
        },
        ExternalAccountID: sdk.String("excepturi"),
        ExternalEventID: "nisi",
        SubscriberState: "recusandae",
    }, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity{
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


### [AttendanceSubscriberStateChanges](docs/attendancesubscriberstatechanges/README.md)

* [PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate](docs/attendancesubscriberstatechanges/README.md#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstatecreatecreate) - Record
* [PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail](docs/attendancesubscriberstatechanges/README.md#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstateemailcreatecreatebyemail) - Record

### [MarketingEventsExternal](docs/marketingeventsexternal/README.md)

* [DeleteMarketingV3MarketingEventsEventsExternalEventIDArchive](docs/marketingeventsexternal/README.md#deletemarketingv3marketingeventseventsexternaleventidarchive)
* [GetMarketingV3MarketingEventsEventsExternalEventIDGetByID](docs/marketingeventsexternal/README.md#getmarketingv3marketingeventseventsexternaleventidgetbyid)
* [PatchMarketingV3MarketingEventsEventsExternalEventIDUpdate](docs/marketingeventsexternal/README.md#patchmarketingv3marketingeventseventsexternaleventidupdate)
* [PostMarketingV3MarketingEventsEventsDeleteArchiveBatch](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsdeletearchivebatch)
* [PostMarketingV3MarketingEventsEventsUpsertDoUpsert](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsupsertdoupsert)
* [PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancel](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidcanceldocancel)
* [PostMarketingV3MarketingEventsEventsExternalEventIDCompleteComplete](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidcompletecomplete)
* [PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByID](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidsubscriberstateemailupsertdoemailupsertbyid)
* [PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByID](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidsubscriberstateupsertdoupsertbyid)
* [PostMarketingV3MarketingEventsEventsCreate](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventscreate)
* [PutMarketingV3MarketingEventsEventsExternalEventIDReplace](docs/marketingeventsexternal/README.md#putmarketingv3marketingeventseventsexternaleventidreplace)

### [Search](docs/search/README.md)

* [GetMarketingV3MarketingEventsEventsSearchDoSearch](docs/search/README.md#getmarketingv3marketingeventseventssearchdosearch) - Search for marketing events

### [SettingsExternal](docs/settingsexternal/README.md)

* [GetMarketingV3MarketingEventsAppIDSettingsGetAll](docs/settingsexternal/README.md#getmarketingv3marketingeventsappidsettingsgetall)
* [PostMarketingV3MarketingEventsAppIDSettingsCreate](docs/settingsexternal/README.md#postmarketingv3marketingeventsappidsettingscreate)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
