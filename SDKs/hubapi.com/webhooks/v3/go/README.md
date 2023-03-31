# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/webhooks/v3/go
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

    req := operations.DeleteWebhooksV3AppIDSettingsClearRequest{
        AppID: 548814,
    }

    ctx := context.Background()
    res, err := s.Settings.DeleteWebhooksV3AppIDSettingsClear(ctx, req, operations.DeleteWebhooksV3AppIDSettingsClearSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
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


### Settings

* `DeleteWebhooksV3AppIDSettingsClear`
* `GetWebhooksV3AppIDSettingsGetAll`
* `PutWebhooksV3AppIDSettingsConfigure`

### Subscriptions

* `DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchive`
* `GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByID`
* `GetWebhooksV3AppIDSubscriptionsGetAll`
* `PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdate`
* `PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatch`
* `PostWebhooksV3AppIDSubscriptionsCreate`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
