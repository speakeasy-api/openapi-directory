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
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, operations.RealtimebiddingBiddersCreativesWatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.RealtimebiddingBiddersCreativesWatchSecurity{
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


### [Bidders](docs/bidders/README.md)

* [RealtimebiddingBiddersCreativesWatch](docs/bidders/README.md#realtimebiddingbidderscreativeswatch) - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* [RealtimebiddingBiddersEndpointsList](docs/bidders/README.md#realtimebiddingbiddersendpointslist) - Lists all the bidder's endpoints.
* [RealtimebiddingBiddersList](docs/bidders/README.md#realtimebiddingbidderslist) - Lists all the bidder accounts that belong to the caller.
* [RealtimebiddingBiddersPretargetingConfigsActivate](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsactivate) - Activates a pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsAddTargetedApps](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsaddtargetedapps) - Adds targeted apps to the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishers](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsaddtargetedpublishers) - Adds targeted publishers to the pretargeting config.
* [RealtimebiddingBiddersPretargetingConfigsAddTargetedSites](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsaddtargetedsites) - Adds targeted sites to the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsCreate](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigscreate) - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* [RealtimebiddingBiddersPretargetingConfigsDelete](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsdelete) - Deletes a pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsList](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigslist) - Lists all pretargeting configurations for a single bidder.
* [RealtimebiddingBiddersPretargetingConfigsRemoveTargetedApps](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsremovetargetedapps) - Removes targeted apps from the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsremovetargetedpublishers) - Removes targeted publishers from the pretargeting config.
* [RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSites](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsremovetargetedsites) - Removes targeted sites from the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsSuspend](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigssuspend) - Suspends a pretargeting configuration.
* [RealtimebiddingBiddersPublisherConnectionsBatchApprove](docs/bidders/README.md#realtimebiddingbidderspublisherconnectionsbatchapprove) - Batch approves multiple publisher connections.
* [RealtimebiddingBiddersPublisherConnectionsBatchReject](docs/bidders/README.md#realtimebiddingbidderspublisherconnectionsbatchreject) - Batch rejects multiple publisher connections.
* [RealtimebiddingBiddersPublisherConnectionsList](docs/bidders/README.md#realtimebiddingbidderspublisherconnectionslist) - Lists publisher connections for a given bidder.

### [Buyers](docs/buyers/README.md)

* [RealtimebiddingBuyersCreativesCreate](docs/buyers/README.md#realtimebiddingbuyerscreativescreate) - Creates a creative.
* [RealtimebiddingBuyersCreativesList](docs/buyers/README.md#realtimebiddingbuyerscreativeslist) - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* [RealtimebiddingBuyersCreativesPatch](docs/buyers/README.md#realtimebiddingbuyerscreativespatch) - Updates a creative.
* [RealtimebiddingBuyersList](docs/buyers/README.md#realtimebiddingbuyerslist) - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* [RealtimebiddingBuyersUserListsClose](docs/buyers/README.md#realtimebiddingbuyersuserlistsclose) - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* [RealtimebiddingBuyersUserListsCreate](docs/buyers/README.md#realtimebiddingbuyersuserlistscreate) - Create a new user list.
* [RealtimebiddingBuyersUserListsGet](docs/buyers/README.md#realtimebiddingbuyersuserlistsget) - Gets a user list by its name.
* [RealtimebiddingBuyersUserListsGetRemarketingTag](docs/buyers/README.md#realtimebiddingbuyersuserlistsgetremarketingtag) - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* [RealtimebiddingBuyersUserListsList](docs/buyers/README.md#realtimebiddingbuyersuserlistslist) - Lists the user lists visible to the current user.
* [RealtimebiddingBuyersUserListsOpen](docs/buyers/README.md#realtimebiddingbuyersuserlistsopen) - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* [RealtimebiddingBuyersUserListsUpdate](docs/buyers/README.md#realtimebiddingbuyersuserlistsupdate) - Update the given user list. Only user lists with URLRestrictions can be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
