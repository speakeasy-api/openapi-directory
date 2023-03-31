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

import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchSecurity;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchPathParams;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchQueryParams;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersCreativesWatchRequest req = new RealtimebiddingBiddersCreativesWatchRequest() {{
                security = new RealtimebiddingBiddersCreativesWatchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RealtimebiddingBiddersCreativesWatchPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new RealtimebiddingBiddersCreativesWatchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            RealtimebiddingBiddersCreativesWatchResponse res = sdk.bidders.realtimebiddingBiddersCreativesWatch(req);

            if (res.watchCreativesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bidders

* `realtimebiddingBiddersCreativesWatch` - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* `realtimebiddingBiddersEndpointsList` - Lists all the bidder's endpoints.
* `realtimebiddingBiddersList` - Lists all the bidder accounts that belong to the caller.
* `realtimebiddingBiddersPretargetingConfigsActivate` - Activates a pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsAddTargetedApps` - Adds targeted apps to the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers` - Adds targeted publishers to the pretargeting config.
* `realtimebiddingBiddersPretargetingConfigsAddTargetedSites` - Adds targeted sites to the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsCreate` - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* `realtimebiddingBiddersPretargetingConfigsDelete` - Deletes a pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsList` - Lists all pretargeting configurations for a single bidder.
* `realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps` - Removes targeted apps from the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers` - Removes targeted publishers from the pretargeting config.
* `realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites` - Removes targeted sites from the pretargeting configuration.
* `realtimebiddingBiddersPretargetingConfigsSuspend` - Suspends a pretargeting configuration.
* `realtimebiddingBiddersPublisherConnectionsBatchApprove` - Batch approves multiple publisher connections.
* `realtimebiddingBiddersPublisherConnectionsBatchReject` - Batch rejects multiple publisher connections.
* `realtimebiddingBiddersPublisherConnectionsList` - Lists publisher connections for a given bidder.

### buyers

* `realtimebiddingBuyersCreativesCreate` - Creates a creative.
* `realtimebiddingBuyersCreativesList` - Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
* `realtimebiddingBuyersCreativesPatch` - Updates a creative.
* `realtimebiddingBuyersList` - Lists all buyer account information the calling buyer user or service account is permissioned to manage.
* `realtimebiddingBuyersUserListsClose` - Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
* `realtimebiddingBuyersUserListsCreate` - Create a new user list.
* `realtimebiddingBuyersUserListsGet` - Gets a user list by its name.
* `realtimebiddingBuyersUserListsGetRemarketingTag` - Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
* `realtimebiddingBuyersUserListsList` - Lists the user lists visible to the current user.
* `realtimebiddingBuyersUserListsOpen` - Change the status of a user list to OPEN. This allows new users to be added to the user list.
* `realtimebiddingBuyersUserListsUpdate` - Update the given user list. Only user lists with URLRestrictions can be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
