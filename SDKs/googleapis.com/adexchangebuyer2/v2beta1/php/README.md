# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\ClientEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->client = new Client();
    $request->client->clientAccountId = 'provident';
    $request->client->clientName = 'distinctio';
    $request->client->entityId = 'quibusdam';
    $request->client->entityName = 'unde';
    $request->client->entityType = ClientEntityTypeEnum::ENTITY_TYPE_UNCLASSIFIED;
    $request->client->partnerClientId = 'corrupti';
    $request->client->role = ClientRoleEnum::CLIENT_DEAL_APPROVER;
    $request->client->status = ClientStatusEnum::DISABLED;
    $request->client->visibleToSeller = false;
    $request->accessToken = 'error';
    $request->accountId = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new Adexchangebuyer2AccountsClientsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsCreate($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [adexchangebuyer2AccountsClientsCreate](docs/accounts/README.md#adexchangebuyer2accountsclientscreate) - Creates a new client buyer.
* [adexchangebuyer2AccountsClientsGet](docs/accounts/README.md#adexchangebuyer2accountsclientsget) - Gets a client buyer with a given client account ID.
* [adexchangebuyer2AccountsClientsInvitationsCreate](docs/accounts/README.md#adexchangebuyer2accountsclientsinvitationscreate) - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
* [adexchangebuyer2AccountsClientsInvitationsGet](docs/accounts/README.md#adexchangebuyer2accountsclientsinvitationsget) - Retrieves an existing client user invitation.
* [adexchangebuyer2AccountsClientsInvitationsList](docs/accounts/README.md#adexchangebuyer2accountsclientsinvitationslist) - Lists all the client users invitations for a client with a given account ID.
* [adexchangebuyer2AccountsClientsList](docs/accounts/README.md#adexchangebuyer2accountsclientslist) - Lists all the clients for the current sponsor buyer.
* [adexchangebuyer2AccountsClientsUpdate](docs/accounts/README.md#adexchangebuyer2accountsclientsupdate) - Updates an existing client buyer.
* [adexchangebuyer2AccountsClientsUsersGet](docs/accounts/README.md#adexchangebuyer2accountsclientsusersget) - Retrieves an existing client user.
* [adexchangebuyer2AccountsClientsUsersList](docs/accounts/README.md#adexchangebuyer2accountsclientsuserslist) - Lists all the known client users for a specified sponsor buyer account ID.
* [adexchangebuyer2AccountsClientsUsersUpdate](docs/accounts/README.md#adexchangebuyer2accountsclientsusersupdate) - Updates an existing client user. Only the user status can be changed on update.
* [adexchangebuyer2AccountsCreativesCreate](docs/accounts/README.md#adexchangebuyer2accountscreativescreate) - Creates a creative.
* [adexchangebuyer2AccountsCreativesDealAssociationsAdd](docs/accounts/README.md#adexchangebuyer2accountscreativesdealassociationsadd) - Associate an existing deal with a creative.
* [adexchangebuyer2AccountsCreativesDealAssociationsList](docs/accounts/README.md#adexchangebuyer2accountscreativesdealassociationslist) - List all creative-deal associations.
* [adexchangebuyer2AccountsCreativesDealAssociationsRemove](docs/accounts/README.md#adexchangebuyer2accountscreativesdealassociationsremove) - Remove the association between a deal and a creative.
* [adexchangebuyer2AccountsCreativesGet](docs/accounts/README.md#adexchangebuyer2accountscreativesget) - Gets a creative.
* [adexchangebuyer2AccountsCreativesList](docs/accounts/README.md#adexchangebuyer2accountscreativeslist) - Lists creatives.
* [adexchangebuyer2AccountsCreativesStopWatching](docs/accounts/README.md#adexchangebuyer2accountscreativesstopwatching) - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
* [adexchangebuyer2AccountsCreativesUpdate](docs/accounts/README.md#adexchangebuyer2accountscreativesupdate) - Updates a creative.
* [adexchangebuyer2AccountsCreativesWatch](docs/accounts/README.md#adexchangebuyer2accountscreativeswatch) - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
* [adexchangebuyer2AccountsFinalizedProposalsList](docs/accounts/README.md#adexchangebuyer2accountsfinalizedproposalslist) - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
* [adexchangebuyer2AccountsFinalizedProposalsPause](docs/accounts/README.md#adexchangebuyer2accountsfinalizedproposalspause) - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* [adexchangebuyer2AccountsFinalizedProposalsResume](docs/accounts/README.md#adexchangebuyer2accountsfinalizedproposalsresume) - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* [adexchangebuyer2AccountsProductsGet](docs/accounts/README.md#adexchangebuyer2accountsproductsget) - Gets the requested product by ID.
* [adexchangebuyer2AccountsProductsList](docs/accounts/README.md#adexchangebuyer2accountsproductslist) - List all products visible to the buyer (optionally filtered by the specified PQL query).
* [adexchangebuyer2AccountsProposalsAccept](docs/accounts/README.md#adexchangebuyer2accountsproposalsaccept) - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
* [adexchangebuyer2AccountsProposalsAddNote](docs/accounts/README.md#adexchangebuyer2accountsproposalsaddnote) - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
* [adexchangebuyer2AccountsProposalsCancelNegotiation](docs/accounts/README.md#adexchangebuyer2accountsproposalscancelnegotiation) - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
* [adexchangebuyer2AccountsProposalsCompleteSetup](docs/accounts/README.md#adexchangebuyer2accountsproposalscompletesetup) - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
* [adexchangebuyer2AccountsProposalsCreate](docs/accounts/README.md#adexchangebuyer2accountsproposalscreate) - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
* [adexchangebuyer2AccountsProposalsGet](docs/accounts/README.md#adexchangebuyer2accountsproposalsget) - Gets a proposal given its ID. The proposal is returned at its head revision.
* [adexchangebuyer2AccountsProposalsList](docs/accounts/README.md#adexchangebuyer2accountsproposalslist) - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
* [adexchangebuyer2AccountsProposalsPause](docs/accounts/README.md#adexchangebuyer2accountsproposalspause) - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
* [adexchangebuyer2AccountsProposalsResume](docs/accounts/README.md#adexchangebuyer2accountsproposalsresume) - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
* [adexchangebuyer2AccountsProposalsUpdate](docs/accounts/README.md#adexchangebuyer2accountsproposalsupdate) - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
* [adexchangebuyer2AccountsPublisherProfilesGet](docs/accounts/README.md#adexchangebuyer2accountspublisherprofilesget) - Gets the requested publisher profile by id.
* [adexchangebuyer2AccountsPublisherProfilesList](docs/accounts/README.md#adexchangebuyer2accountspublisherprofileslist) - List all publisher profiles visible to the buyer

### [bidders](docs/bidders/README.md)

* [adexchangebuyer2BiddersFilterSetsBidMetricsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsbidmetricslist) - Lists all metrics that are measured in terms of number of bids.
* [adexchangebuyer2BiddersFilterSetsBidResponseErrorsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsbidresponseerrorslist) - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* [adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsbidresponseswithoutbidslist) - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* [adexchangebuyer2BiddersFilterSetsCreate](docs/bidders/README.md#adexchangebuyer2biddersfiltersetscreate) - Creates the specified filter set for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsDelete](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsdelete) - Deletes the requested filter set from the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsfilteredbidrequestslist) - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsfilteredbidscreativeslist) - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsfilteredbidsdetailslist) - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsfilteredbidslist) - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* [adexchangebuyer2BiddersFilterSetsGet](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsget) - Retrieves the requested filter set for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsImpressionMetricsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsimpressionmetricslist) - Lists all metrics that are measured in terms of number of impressions.
* [adexchangebuyer2BiddersFilterSetsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetslist) - Lists all filter sets for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsLosingBidsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetslosingbidslist) - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* [adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList](docs/bidders/README.md#adexchangebuyer2biddersfiltersetsnonbillablewinningbidslist) - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
