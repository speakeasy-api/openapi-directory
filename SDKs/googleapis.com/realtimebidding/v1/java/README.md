# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersCreativesWatchRequest req = new RealtimebiddingBiddersCreativesWatchRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            RealtimebiddingBiddersCreativesWatchResponse res = sdk.bidders.realtimebiddingBiddersCreativesWatch(req, new RealtimebiddingBiddersCreativesWatchSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.watchCreativesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bidders](docs/bidders/README.md)

* [realtimebiddingBiddersCreativesWatch](docs/bidders/README.md#realtimebiddingbidderscreativeswatch) - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* [realtimebiddingBiddersEndpointsList](docs/bidders/README.md#realtimebiddingbiddersendpointslist) - Lists all the bidder's endpoints.
* [realtimebiddingBiddersList](docs/bidders/README.md#realtimebiddingbidderslist) - Lists all the bidder accounts that belong to the caller.
* [realtimebiddingBiddersPretargetingConfigsActivate](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsactivate) - Activates a pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedApps](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsaddtargetedapps) - Adds targeted apps to the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsaddtargetedpublishers) - Adds targeted publishers to the pretargeting config.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedSites](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsaddtargetedsites) - Adds targeted sites to the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsCreate](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigscreate) - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* [realtimebiddingBiddersPretargetingConfigsDelete](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsdelete) - Deletes a pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsList](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigslist) - Lists all pretargeting configurations for a single bidder.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsremovetargetedapps) - Removes targeted apps from the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsremovetargetedpublishers) - Removes targeted publishers from the pretargeting config.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigsremovetargetedsites) - Removes targeted sites from the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsSuspend](docs/bidders/README.md#realtimebiddingbidderspretargetingconfigssuspend) - Suspends a pretargeting configuration.
* [realtimebiddingBiddersPublisherConnectionsBatchApprove](docs/bidders/README.md#realtimebiddingbidderspublisherconnectionsbatchapprove) - Batch approves multiple publisher connections.
* [realtimebiddingBiddersPublisherConnectionsBatchReject](docs/bidders/README.md#realtimebiddingbidderspublisherconnectionsbatchreject) - Batch rejects multiple publisher connections.
* [realtimebiddingBiddersPublisherConnectionsList](docs/bidders/README.md#realtimebiddingbidderspublisherconnectionslist) - Lists publisher connections for a given bidder.

### [buyers](docs/buyers/README.md)

* [realtimebiddingBuyersCreativesCreate](docs/buyers/README.md#realtimebiddingbuyerscreativescreate) - Creates a creative.
* [realtimebiddingBuyersCreativesList](docs/buyers/README.md#realtimebiddingbuyerscreativeslist) - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* [realtimebiddingBuyersCreativesPatch](docs/buyers/README.md#realtimebiddingbuyerscreativespatch) - Updates a creative.
* [realtimebiddingBuyersList](docs/buyers/README.md#realtimebiddingbuyerslist) - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* [realtimebiddingBuyersUserListsClose](docs/buyers/README.md#realtimebiddingbuyersuserlistsclose) - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* [realtimebiddingBuyersUserListsCreate](docs/buyers/README.md#realtimebiddingbuyersuserlistscreate) - Create a new user list.
* [realtimebiddingBuyersUserListsGet](docs/buyers/README.md#realtimebiddingbuyersuserlistsget) - Gets a user list by its name.
* [realtimebiddingBuyersUserListsGetRemarketingTag](docs/buyers/README.md#realtimebiddingbuyersuserlistsgetremarketingtag) - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* [realtimebiddingBuyersUserListsList](docs/buyers/README.md#realtimebiddingbuyersuserlistslist) - Lists the user lists visible to the current user.
* [realtimebiddingBuyersUserListsOpen](docs/buyers/README.md#realtimebiddingbuyersuserlistsopen) - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* [realtimebiddingBuyersUserListsUpdate](docs/buyers/README.md#realtimebiddingbuyersuserlistsupdate) - Update the given user list. Only user lists with URLRestrictions can be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
