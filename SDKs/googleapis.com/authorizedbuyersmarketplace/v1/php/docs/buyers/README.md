# buyers

### Available Operations

* [authorizedbuyersmarketplaceBuyersAuctionPackagesList](#authorizedbuyersmarketplacebuyersauctionpackageslist) - List the auction packages subscribed by a buyer and its clients.
* [authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe](#authorizedbuyersmarketplacebuyersauctionpackagessubscribe) - Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
* [authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients](#authorizedbuyersmarketplacebuyersauctionpackagessubscribeclients) - Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
* [authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe](#authorizedbuyersmarketplacebuyersauctionpackagesunsubscribe) - Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
* [authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients](#authorizedbuyersmarketplacebuyersauctionpackagesunsubscribeclients) - Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
* [authorizedbuyersmarketplaceBuyersClientsCreate](#authorizedbuyersmarketplacebuyersclientscreate) - Creates a new client.
* [authorizedbuyersmarketplaceBuyersClientsList](#authorizedbuyersmarketplacebuyersclientslist) - Lists all the clients for the current buyer.
* [authorizedbuyersmarketplaceBuyersClientsUsersActivate](#authorizedbuyersmarketplacebuyersclientsusersactivate) - Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
* [authorizedbuyersmarketplaceBuyersClientsUsersCreate](#authorizedbuyersmarketplacebuyersclientsuserscreate) - Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
* [authorizedbuyersmarketplaceBuyersClientsUsersDeactivate](#authorizedbuyersmarketplacebuyersclientsusersdeactivate) - Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
* [authorizedbuyersmarketplaceBuyersClientsUsersDelete](#authorizedbuyersmarketplacebuyersclientsusersdelete) - Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
* [authorizedbuyersmarketplaceBuyersClientsUsersList](#authorizedbuyersmarketplacebuyersclientsuserslist) - Lists all client users for a specified client.
* [authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative](#authorizedbuyersmarketplacebuyersfinalizeddealsaddcreative) - Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
* [authorizedbuyersmarketplaceBuyersFinalizedDealsList](#authorizedbuyersmarketplacebuyersfinalizeddealslist) - Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
* [authorizedbuyersmarketplaceBuyersFinalizedDealsPause](#authorizedbuyersmarketplacebuyersfinalizeddealspause) - Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
* [authorizedbuyersmarketplaceBuyersFinalizedDealsResume](#authorizedbuyersmarketplacebuyersfinalizeddealsresume) - Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
* [authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe](#authorizedbuyersmarketplacebuyersfinalizeddealssetreadytoserve) - Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
* [authorizedbuyersmarketplaceBuyersProposalsAccept](#authorizedbuyersmarketplacebuyersproposalsaccept) - Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
* [authorizedbuyersmarketplaceBuyersProposalsAddNote](#authorizedbuyersmarketplacebuyersproposalsaddnote) - Creates a note for this proposal and sends to the seller.
* [authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation](#authorizedbuyersmarketplacebuyersproposalscancelnegotiation) - Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
* [authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate](#authorizedbuyersmarketplacebuyersproposalsdealsbatchupdate) - Batch updates multiple deals in the same proposal.
* [authorizedbuyersmarketplaceBuyersProposalsDealsList](#authorizedbuyersmarketplacebuyersproposalsdealslist) - Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
* [authorizedbuyersmarketplaceBuyersProposalsDealsPatch](#authorizedbuyersmarketplacebuyersproposalsdealspatch) - Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
* [authorizedbuyersmarketplaceBuyersProposalsList](#authorizedbuyersmarketplacebuyersproposalslist) - Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.
* [authorizedbuyersmarketplaceBuyersProposalsSendRfp](#authorizedbuyersmarketplacebuyersproposalssendrfp) - Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
* [authorizedbuyersmarketplaceBuyersPublisherProfilesGet](#authorizedbuyersmarketplacebuyerspublisherprofilesget) - Gets the requested publisher profile by name.
* [authorizedbuyersmarketplaceBuyersPublisherProfilesList](#authorizedbuyersmarketplacebuyerspublisherprofileslist) - Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

## authorizedbuyersmarketplaceBuyersAuctionPackagesList

List the auction packages subscribed by a buyer and its clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 791725;
    $request->pageToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersAuctionPackagesList($request, $requestSecurity);

    if ($response->listAuctionPackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe

Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->name = 'Bernadette Schmidt';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe($request, $requestSecurity);

    if ($response->auctionPackage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients

Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscribeClientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subscribeClientsRequest = new SubscribeClientsRequest();
    $request->subscribeClientsRequest->clients = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->auctionPackage = 'beatae';
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients($request, $requestSecurity);

    if ($response->auctionPackage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe

Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->name = 'Harvey Hessel';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe($request, $requestSecurity);

    if ($response->auctionPackage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients

Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnsubscribeClientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->unsubscribeClientsRequest = new UnsubscribeClientsRequest();
    $request->unsubscribeClientsRequest->clients = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->auctionPackage = 'explicabo';
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients($request, $requestSecurity);

    if ($response->auctionPackage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsCreate

Creates a new client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientInput;
use \OpenAPI\OpenAPI\Models\Shared\ClientRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clientInput = new ClientInput();
    $request->clientInput->displayName = 'culpa';
    $request->clientInput->partnerClientId = 'doloribus';
    $request->clientInput->role = ClientRoleEnum::CLIENT_DEAL_APPROVER;
    $request->clientInput->sellerVisible = false;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsCreate($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsList

Lists all the clients for the current buyer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->filter = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->pageSize = 656330;
    $request->pageToken = 'enim';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsList($request, $requestSecurity);

    if ($response->listClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsUsersActivate

Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'vero';
    $request->key = 'nihil';
    $request->name = 'Jan Bednar';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsUsersActivate($request, $requestSecurity);

    if ($response->clientUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsUsersCreate

Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientUserInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clientUserInput = new ClientUserInput();
    $request->clientUserInput->email = 'Blanche48@hotmail.com';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsUsersCreate($request, $requestSecurity);

    if ($response->clientUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsUsersDeactivate

Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'modi' => 'praesentium',
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->name = 'Benjamin O'Connell';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsUsersDeactivate($request, $requestSecurity);

    if ($response->clientUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsUsersDelete

Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->name = 'Denise Pagac';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsUsersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersClientsUsersList

Lists all client users for a specified client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 572252;
    $request->pageToken = 'officia';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersClientsUsersList($request, $requestSecurity);

    if ($response->listClientUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative

Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddCreativeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addCreativeRequest = new AddCreativeRequest();
    $request->addCreativeRequest->creative = 'in';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->deal = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative($request, $requestSecurity);

    if ($response->finalizedDeal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsList

Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->filter = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->orderBy = 'nam';
    $request->pageSize = 659669;
    $request->pageToken = 'blanditiis';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersFinalizedDealsList($request, $requestSecurity);

    if ($response->listFinalizedDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsPause

Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PauseFinalizedDealRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pauseFinalizedDealRequest = new PauseFinalizedDealRequest();
    $request->pauseFinalizedDealRequest->reason = 'vel';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'perferendis';
    $request->key = 'nihil';
    $request->name = 'Verna Olson';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersFinalizedDealsPause($request, $requestSecurity);

    if ($response->finalizedDeal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsResume

Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'architecto' => 'magnam',
    ];
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'provident';
    $request->key = 'quos';
    $request->name = 'Kenneth O'Hara';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersFinalizedDealsResume($request, $requestSecurity);

    if ($response->finalizedDeal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe

Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quasi' => 'iure',
        'doloribus' => 'debitis',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->deal = 'facilis';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'expedita';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe($request, $requestSecurity);

    if ($response->finalizedDeal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsAccept

Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcceptProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->acceptProposalRequest = new AcceptProposalRequest();
    $request->acceptProposalRequest->proposalRevision = 'repellat';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->key = 'accusantium';
    $request->name = 'Irma Morissette DDS';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsAccept($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsAddNote

Creates a note for this proposal and sends to the seller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddNoteRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\NoteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addNoteRequestInput = new AddNoteRequestInput();
    $request->addNoteRequestInput->note = new NoteInput();
    $request->addNoteRequestInput->note->note = 'odit';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->proposal = 'voluptate';
    $request->quotaUser = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsAddNote($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation

Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'voluptatibus' => 'perferendis',
        'fugiat' => 'amet',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'hic';
    $request->key = 'libero';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->proposal = 'dolores';
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate

Batch updates multiple deals in the same proposal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateDealsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDealRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\DealInput;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\PreferredDealTerms;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateAuctionTermsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProgrammaticGuaranteedTerms;
use \OpenAPI\OpenAPI\Models\Shared\ProgrammaticGuaranteedTermsReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPart;
use \OpenAPI\OpenAPI\Models\Shared\DayPartDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingTimeZoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventorySizeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AdSize;
use \OpenAPI\OpenAPI\Models\Shared\AdSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventoryTypeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventoryTypeTargetingInventoryTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTargeting;
use \OpenAPI\OpenAPI\Models\Shared\MobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\FirstPartyMobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\UriTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingExcludedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingTargetedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchUpdateDealsRequestInput = new BatchUpdateDealsRequestInput();
    $request->batchUpdateDealsRequestInput->requests = [
        new UpdateDealRequestInput(),
        new UpdateDealRequestInput(),
    ];
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsDealsList

Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'voluptatem';
    $request->key = 'porro';
    $request->oauthToken = 'consequuntur';
    $request->pageSize = 500026;
    $request->pageToken = 'error';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsDealsList($request, $requestSecurity);

    if ($response->listDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsDealsPatch

Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DealInput;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\PreferredDealTerms;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateAuctionTermsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProgrammaticGuaranteedTerms;
use \OpenAPI\OpenAPI\Models\Shared\ProgrammaticGuaranteedTermsReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPart;
use \OpenAPI\OpenAPI\Models\Shared\DayPartDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingTimeZoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventorySizeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AdSize;
use \OpenAPI\OpenAPI\Models\Shared\AdSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventoryTypeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventoryTypeTargetingInventoryTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTargeting;
use \OpenAPI\OpenAPI\Models\Shared\MobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\FirstPartyMobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\UriTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingExcludedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingTargetedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dealInput = new DealInput();
    $request->dealInput->estimatedGrossSpend = new Money();
    $request->dealInput->estimatedGrossSpend->currencyCode = 'earum';
    $request->dealInput->estimatedGrossSpend->nanos = 267262;
    $request->dealInput->estimatedGrossSpend->units = 'iste';
    $request->dealInput->flightEndTime = 'dolorum';
    $request->dealInput->flightStartTime = 'deleniti';
    $request->dealInput->name = 'Rene Rolfson';
    $request->dealInput->preferredDealTerms = new PreferredDealTerms();
    $request->dealInput->preferredDealTerms->fixedPrice = new Price();
    $request->dealInput->preferredDealTerms->fixedPrice->amount = new Money();
    $request->dealInput->preferredDealTerms->fixedPrice->amount->currencyCode = 'quaerat';
    $request->dealInput->preferredDealTerms->fixedPrice->amount->nanos = 554242;
    $request->dealInput->preferredDealTerms->fixedPrice->amount->units = 'aliquid';
    $request->dealInput->preferredDealTerms->fixedPrice->type = PriceTypeEnum::TYPE_UNSPECIFIED;
    $request->dealInput->privateAuctionTerms = new PrivateAuctionTermsInput();
    $request->dealInput->privateAuctionTerms->floorPrice = new Price();
    $request->dealInput->privateAuctionTerms->floorPrice->amount = new Money();
    $request->dealInput->privateAuctionTerms->floorPrice->amount->currencyCode = 'dolorem';
    $request->dealInput->privateAuctionTerms->floorPrice->amount->nanos = 222443;
    $request->dealInput->privateAuctionTerms->floorPrice->amount->units = 'qui';
    $request->dealInput->privateAuctionTerms->floorPrice->type = PriceTypeEnum::TYPE_UNSPECIFIED;
    $request->dealInput->programmaticGuaranteedTerms = new ProgrammaticGuaranteedTerms();
    $request->dealInput->programmaticGuaranteedTerms->fixedPrice = new Price();
    $request->dealInput->programmaticGuaranteedTerms->fixedPrice->amount = new Money();
    $request->dealInput->programmaticGuaranteedTerms->fixedPrice->amount->currencyCode = 'hic';
    $request->dealInput->programmaticGuaranteedTerms->fixedPrice->amount->nanos = 569574;
    $request->dealInput->programmaticGuaranteedTerms->fixedPrice->amount->units = 'cum';
    $request->dealInput->programmaticGuaranteedTerms->fixedPrice->type = PriceTypeEnum::CPM;
    $request->dealInput->programmaticGuaranteedTerms->guaranteedLooks = 'dignissimos';
    $request->dealInput->programmaticGuaranteedTerms->impressionCap = 'reiciendis';
    $request->dealInput->programmaticGuaranteedTerms->minimumDailyLooks = 'amet';
    $request->dealInput->programmaticGuaranteedTerms->percentShareOfVoice = 'dolorum';
    $request->dealInput->programmaticGuaranteedTerms->reservationType = ProgrammaticGuaranteedTermsReservationTypeEnum::RESERVATION_TYPE_UNSPECIFIED;
    $request->dealInput->publisherProfile = 'veritatis';
    $request->dealInput->sellerTimeZone = new TimeZone();
    $request->dealInput->sellerTimeZone->id = '00674ebf-6928-40d1-ba77-a89ebf737ae4';
    $request->dealInput->sellerTimeZone->version = 'aspernatur';
    $request->dealInput->targeting = new MarketplaceTargeting();
    $request->dealInput->targeting->daypartTargeting = new DayPartTargeting();
    $request->dealInput->targeting->daypartTargeting->dayParts = [
        new DayPart(),
    ];
    $request->dealInput->targeting->daypartTargeting->timeZoneType = DayPartTargetingTimeZoneTypeEnum::TIME_ZONE_TYPE_UNSPECIFIED;
    $request->dealInput->targeting->geoTargeting = new CriteriaTargeting();
    $request->dealInput->targeting->geoTargeting->excludedCriteriaIds = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->dealInput->targeting->geoTargeting->targetedCriteriaIds = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->dealInput->targeting->inventorySizeTargeting = new InventorySizeTargeting();
    $request->dealInput->targeting->inventorySizeTargeting->excludedInventorySizes = [
        new AdSize(),
        new AdSize(),
        new AdSize(),
    ];
    $request->dealInput->targeting->inventorySizeTargeting->targetedInventorySizes = [
        new AdSize(),
        new AdSize(),
        new AdSize(),
    ];
    $request->dealInput->targeting->inventoryTypeTargeting = new InventoryTypeTargeting();
    $request->dealInput->targeting->inventoryTypeTargeting->inventoryTypes = [
        InventoryTypeTargetingInventoryTypesEnum::VIDEO_PLAYER,
    ];
    $request->dealInput->targeting->placementTargeting = new PlacementTargeting();
    $request->dealInput->targeting->placementTargeting->mobileApplicationTargeting = new MobileApplicationTargeting();
    $request->dealInput->targeting->placementTargeting->mobileApplicationTargeting->firstPartyTargeting = new FirstPartyMobileApplicationTargeting();
    $request->dealInput->targeting->placementTargeting->mobileApplicationTargeting->firstPartyTargeting->excludedAppIds = [
        'tempora',
        'vel',
    ];
    $request->dealInput->targeting->placementTargeting->mobileApplicationTargeting->firstPartyTargeting->targetedAppIds = [
        'officiis',
        'qui',
        'dolorum',
        'a',
    ];
    $request->dealInput->targeting->placementTargeting->uriTargeting = new UriTargeting();
    $request->dealInput->targeting->placementTargeting->uriTargeting->excludedUris = [
        'harum',
        'iusto',
    ];
    $request->dealInput->targeting->placementTargeting->uriTargeting->targetedUris = [
        'quisquam',
    ];
    $request->dealInput->targeting->technologyTargeting = new TechnologyTargeting();
    $request->dealInput->targeting->technologyTargeting->deviceCapabilityTargeting = new CriteriaTargeting();
    $request->dealInput->targeting->technologyTargeting->deviceCapabilityTargeting->excludedCriteriaIds = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->dealInput->targeting->technologyTargeting->deviceCapabilityTargeting->targetedCriteriaIds = [
        'dolorem',
        'sapiente',
    ];
    $request->dealInput->targeting->technologyTargeting->deviceCategoryTargeting = new CriteriaTargeting();
    $request->dealInput->targeting->technologyTargeting->deviceCategoryTargeting->excludedCriteriaIds = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->dealInput->targeting->technologyTargeting->deviceCategoryTargeting->targetedCriteriaIds = [
        'sed',
    ];
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting = new OperatingSystemTargeting();
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting->operatingSystemCriteria = new CriteriaTargeting();
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting->operatingSystemCriteria->excludedCriteriaIds = [
        'libero',
        'voluptas',
    ];
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting->operatingSystemCriteria->targetedCriteriaIds = [
        'quam',
        'ipsum',
        'incidunt',
    ];
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting->operatingSystemVersionCriteria = new CriteriaTargeting();
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting->operatingSystemVersionCriteria->excludedCriteriaIds = [
        'cupiditate',
    ];
    $request->dealInput->targeting->technologyTargeting->operatingSystemTargeting->operatingSystemVersionCriteria->targetedCriteriaIds = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->dealInput->targeting->userListTargeting = new CriteriaTargeting();
    $request->dealInput->targeting->userListTargeting->excludedCriteriaIds = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->dealInput->targeting->userListTargeting->targetedCriteriaIds = [
        'facilis',
        'aliquid',
        'quam',
    ];
    $request->dealInput->targeting->videoTargeting = new VideoTargeting();
    $request->dealInput->targeting->videoTargeting->excludedPositionTypes = [
        VideoTargetingExcludedPositionTypesEnum::POSTROLL,
        VideoTargetingExcludedPositionTypesEnum::POSITION_TYPE_UNSPECIFIED,
        VideoTargetingExcludedPositionTypesEnum::POSITION_TYPE_UNSPECIFIED,
    ];
    $request->dealInput->targeting->videoTargeting->targetedPositionTypes = [
        VideoTargetingTargetedPositionTypesEnum::POSITION_TYPE_UNSPECIFIED,
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->name = 'Erma Rogahn PhD';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->updateMask = 'nobis';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsDealsPatch($request, $requestSecurity);

    if ($response->deal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsList

Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorem';
    $request->fields = 'dolore';
    $request->filter = 'labore';
    $request->key = 'adipisci';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 100294;
    $request->pageToken = 'quae';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsList($request, $requestSecurity);

    if ($response->listProposalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersProposalsSendRfp

Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendRfpRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventorySizeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AdSize;
use \OpenAPI\OpenAPI\Models\Shared\AdSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreferredDealTerms;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProgrammaticGuaranteedTerms;
use \OpenAPI\OpenAPI\Models\Shared\ProgrammaticGuaranteedTermsReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sendRfpRequest = new SendRfpRequest();
    $request->sendRfpRequest->buyerContacts = [
        new Contact(),
        new Contact(),
        new Contact(),
        new Contact(),
    ];
    $request->sendRfpRequest->client = 'porro';
    $request->sendRfpRequest->displayName = 'doloribus';
    $request->sendRfpRequest->estimatedGrossSpend = new Money();
    $request->sendRfpRequest->estimatedGrossSpend->currencyCode = 'ut';
    $request->sendRfpRequest->estimatedGrossSpend->nanos = 703495;
    $request->sendRfpRequest->estimatedGrossSpend->units = 'cupiditate';
    $request->sendRfpRequest->flightEndTime = 'qui';
    $request->sendRfpRequest->flightStartTime = 'quae';
    $request->sendRfpRequest->geoTargeting = new CriteriaTargeting();
    $request->sendRfpRequest->geoTargeting->excludedCriteriaIds = [
        'odio',
        'occaecati',
        'voluptatibus',
    ];
    $request->sendRfpRequest->geoTargeting->targetedCriteriaIds = [
        'vero',
        'omnis',
        'quis',
        'ipsum',
    ];
    $request->sendRfpRequest->inventorySizeTargeting = new InventorySizeTargeting();
    $request->sendRfpRequest->inventorySizeTargeting->excludedInventorySizes = [
        new AdSize(),
        new AdSize(),
        new AdSize(),
        new AdSize(),
    ];
    $request->sendRfpRequest->inventorySizeTargeting->targetedInventorySizes = [
        new AdSize(),
        new AdSize(),
    ];
    $request->sendRfpRequest->note = 'consectetur';
    $request->sendRfpRequest->preferredDealTerms = new PreferredDealTerms();
    $request->sendRfpRequest->preferredDealTerms->fixedPrice = new Price();
    $request->sendRfpRequest->preferredDealTerms->fixedPrice->amount = new Money();
    $request->sendRfpRequest->preferredDealTerms->fixedPrice->amount->currencyCode = 'vero';
    $request->sendRfpRequest->preferredDealTerms->fixedPrice->amount->nanos = 949319;
    $request->sendRfpRequest->preferredDealTerms->fixedPrice->amount->units = 'dignissimos';
    $request->sendRfpRequest->preferredDealTerms->fixedPrice->type = PriceTypeEnum::CPD;
    $request->sendRfpRequest->programmaticGuaranteedTerms = new ProgrammaticGuaranteedTerms();
    $request->sendRfpRequest->programmaticGuaranteedTerms->fixedPrice = new Price();
    $request->sendRfpRequest->programmaticGuaranteedTerms->fixedPrice->amount = new Money();
    $request->sendRfpRequest->programmaticGuaranteedTerms->fixedPrice->amount->currencyCode = 'distinctio';
    $request->sendRfpRequest->programmaticGuaranteedTerms->fixedPrice->amount->nanos = 799203;
    $request->sendRfpRequest->programmaticGuaranteedTerms->fixedPrice->amount->units = 'odio';
    $request->sendRfpRequest->programmaticGuaranteedTerms->fixedPrice->type = PriceTypeEnum::CPM;
    $request->sendRfpRequest->programmaticGuaranteedTerms->guaranteedLooks = 'facilis';
    $request->sendRfpRequest->programmaticGuaranteedTerms->impressionCap = 'vero';
    $request->sendRfpRequest->programmaticGuaranteedTerms->minimumDailyLooks = 'ducimus';
    $request->sendRfpRequest->programmaticGuaranteedTerms->percentShareOfVoice = 'dolore';
    $request->sendRfpRequest->programmaticGuaranteedTerms->reservationType = ProgrammaticGuaranteedTermsReservationTypeEnum::SPONSORSHIP;
    $request->sendRfpRequest->publisherProfile = 'illum';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->buyer = 'impedit';
    $request->callback = 'aut';
    $request->fields = 'voluptatibus';
    $request->key = 'exercitationem';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersProposalsSendRfp($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersPublisherProfilesGet

Gets the requested publisher profile by name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'alias';
    $request->key = 'officia';
    $request->name = 'Roberta Jenkins';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'ex';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersPublisherProfilesGet($request, $requestSecurity);

    if ($response->publisherProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizedbuyersmarketplaceBuyersPublisherProfilesList

Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quasi';
    $request->filter = 'ex';
    $request->key = 'nulla';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 972920;
    $request->pageToken = 'nostrum';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buyers->authorizedbuyersmarketplaceBuyersPublisherProfilesList($request, $requestSecurity);

    if ($response->listPublisherProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
