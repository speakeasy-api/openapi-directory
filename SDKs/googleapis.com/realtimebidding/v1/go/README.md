# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/realtimebidding/v1/go
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

    req := operations.RealtimebiddingBiddersCreativesWatchRequest{
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        Parent: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, req, operations.RealtimebiddingBiddersCreativesWatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchCreativesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Bidders

* `RealtimebiddingBiddersCreativesWatch` - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* `RealtimebiddingBiddersEndpointsList` - Lists all the bidder's endpoints.
* `RealtimebiddingBiddersList` - Lists all the bidder accounts that belong to the caller.
* `RealtimebiddingBiddersPretargetingConfigsActivate` - Activates a pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsAddTargetedApps` - Adds targeted apps to the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishers` - Adds targeted publishers to the pretargeting config.
* `RealtimebiddingBiddersPretargetingConfigsAddTargetedSites` - Adds targeted sites to the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsCreate` - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* `RealtimebiddingBiddersPretargetingConfigsDelete` - Deletes a pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsList` - Lists all pretargeting configurations for a single bidder.
* `RealtimebiddingBiddersPretargetingConfigsRemoveTargetedApps` - Removes targeted apps from the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers` - Removes targeted publishers from the pretargeting config.
* `RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSites` - Removes targeted sites from the pretargeting configuration.
* `RealtimebiddingBiddersPretargetingConfigsSuspend` - Suspends a pretargeting configuration.
* `RealtimebiddingBiddersPublisherConnectionsBatchApprove` - Batch approves multiple publisher connections.
* `RealtimebiddingBiddersPublisherConnectionsBatchReject` - Batch rejects multiple publisher connections.
* `RealtimebiddingBiddersPublisherConnectionsList` - Lists publisher connections for a given bidder.

### Buyers

* `RealtimebiddingBuyersCreativesCreate` - Creates a creative.
* `RealtimebiddingBuyersCreativesList` - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* `RealtimebiddingBuyersCreativesPatch` - Updates a creative.
* `RealtimebiddingBuyersList` - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* `RealtimebiddingBuyersUserListsClose` - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* `RealtimebiddingBuyersUserListsCreate` - Create a new user list.
* `RealtimebiddingBuyersUserListsGet` - Gets a user list by its name.
* `RealtimebiddingBuyersUserListsGetRemarketingTag` - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* `RealtimebiddingBuyersUserListsList` - Lists the user lists visible to the current user.
* `RealtimebiddingBuyersUserListsOpen` - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* `RealtimebiddingBuyersUserListsUpdate` - Update the given user list. Only user lists with URLRestrictions can be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
