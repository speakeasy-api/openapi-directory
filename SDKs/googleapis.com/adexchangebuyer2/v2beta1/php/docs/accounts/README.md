# accounts

### Available Operations

* [adexchangebuyer2AccountsClientsCreate](#adexchangebuyer2accountsclientscreate) - Creates a new client buyer.
* [adexchangebuyer2AccountsClientsGet](#adexchangebuyer2accountsclientsget) - Gets a client buyer with a given client account ID.
* [adexchangebuyer2AccountsClientsInvitationsCreate](#adexchangebuyer2accountsclientsinvitationscreate) - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
* [adexchangebuyer2AccountsClientsInvitationsGet](#adexchangebuyer2accountsclientsinvitationsget) - Retrieves an existing client user invitation.
* [adexchangebuyer2AccountsClientsInvitationsList](#adexchangebuyer2accountsclientsinvitationslist) - Lists all the client users invitations for a client with a given account ID.
* [adexchangebuyer2AccountsClientsList](#adexchangebuyer2accountsclientslist) - Lists all the clients for the current sponsor buyer.
* [adexchangebuyer2AccountsClientsUpdate](#adexchangebuyer2accountsclientsupdate) - Updates an existing client buyer.
* [adexchangebuyer2AccountsClientsUsersGet](#adexchangebuyer2accountsclientsusersget) - Retrieves an existing client user.
* [adexchangebuyer2AccountsClientsUsersList](#adexchangebuyer2accountsclientsuserslist) - Lists all the known client users for a specified sponsor buyer account ID.
* [adexchangebuyer2AccountsClientsUsersUpdate](#adexchangebuyer2accountsclientsusersupdate) - Updates an existing client user. Only the user status can be changed on update.
* [adexchangebuyer2AccountsCreativesCreate](#adexchangebuyer2accountscreativescreate) - Creates a creative.
* [adexchangebuyer2AccountsCreativesDealAssociationsAdd](#adexchangebuyer2accountscreativesdealassociationsadd) - Associate an existing deal with a creative.
* [adexchangebuyer2AccountsCreativesDealAssociationsList](#adexchangebuyer2accountscreativesdealassociationslist) - List all creative-deal associations.
* [adexchangebuyer2AccountsCreativesDealAssociationsRemove](#adexchangebuyer2accountscreativesdealassociationsremove) - Remove the association between a deal and a creative.
* [adexchangebuyer2AccountsCreativesGet](#adexchangebuyer2accountscreativesget) - Gets a creative.
* [adexchangebuyer2AccountsCreativesList](#adexchangebuyer2accountscreativeslist) - Lists creatives.
* [adexchangebuyer2AccountsCreativesStopWatching](#adexchangebuyer2accountscreativesstopwatching) - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
* [adexchangebuyer2AccountsCreativesUpdate](#adexchangebuyer2accountscreativesupdate) - Updates a creative.
* [adexchangebuyer2AccountsCreativesWatch](#adexchangebuyer2accountscreativeswatch) - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
* [adexchangebuyer2AccountsFinalizedProposalsList](#adexchangebuyer2accountsfinalizedproposalslist) - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
* [adexchangebuyer2AccountsFinalizedProposalsPause](#adexchangebuyer2accountsfinalizedproposalspause) - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* [adexchangebuyer2AccountsFinalizedProposalsResume](#adexchangebuyer2accountsfinalizedproposalsresume) - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* [adexchangebuyer2AccountsProductsGet](#adexchangebuyer2accountsproductsget) - Gets the requested product by ID.
* [adexchangebuyer2AccountsProductsList](#adexchangebuyer2accountsproductslist) - List all products visible to the buyer (optionally filtered by the specified PQL query).
* [adexchangebuyer2AccountsProposalsAccept](#adexchangebuyer2accountsproposalsaccept) - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
* [adexchangebuyer2AccountsProposalsAddNote](#adexchangebuyer2accountsproposalsaddnote) - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
* [adexchangebuyer2AccountsProposalsCancelNegotiation](#adexchangebuyer2accountsproposalscancelnegotiation) - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
* [adexchangebuyer2AccountsProposalsCompleteSetup](#adexchangebuyer2accountsproposalscompletesetup) - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
* [adexchangebuyer2AccountsProposalsCreate](#adexchangebuyer2accountsproposalscreate) - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
* [adexchangebuyer2AccountsProposalsGet](#adexchangebuyer2accountsproposalsget) - Gets a proposal given its ID. The proposal is returned at its head revision.
* [adexchangebuyer2AccountsProposalsList](#adexchangebuyer2accountsproposalslist) - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
* [adexchangebuyer2AccountsProposalsPause](#adexchangebuyer2accountsproposalspause) - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
* [adexchangebuyer2AccountsProposalsResume](#adexchangebuyer2accountsproposalsresume) - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
* [adexchangebuyer2AccountsProposalsUpdate](#adexchangebuyer2accountsproposalsupdate) - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
* [adexchangebuyer2AccountsPublisherProfilesGet](#adexchangebuyer2accountspublisherprofilesget) - Gets the requested publisher profile by id.
* [adexchangebuyer2AccountsPublisherProfilesList](#adexchangebuyer2accountspublisherprofileslist) - List all publisher profiles visible to the buyer

## adexchangebuyer2AccountsClientsCreate

Creates a new client buyer.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->client = new Client();
    $request->client->clientAccountId = 'minus';
    $request->client->clientName = 'placeat';
    $request->client->entityId = 'voluptatum';
    $request->client->entityName = 'iusto';
    $request->client->entityType = ClientEntityTypeEnum::BRAND;
    $request->client->partnerClientId = 'nisi';
    $request->client->role = ClientRoleEnum::CLIENT_DEAL_APPROVER;
    $request->client->status = ClientStatusEnum::ACTIVE;
    $request->client->visibleToSeller = false;
    $request->accessToken = 'ab';
    $request->accountId = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

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

## adexchangebuyer2AccountsClientsGet

Gets a client buyer with a given client account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->accountId = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->clientAccountId = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new Adexchangebuyer2AccountsClientsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsGet($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsInvitationsCreate

Creates and sends out an email invitation to access an Ad Exchange client buyer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsInvitationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientUserInvitation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsInvitationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsInvitationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->clientUserInvitation = new ClientUserInvitation();
    $request->clientUserInvitation->clientAccountId = 'occaecati';
    $request->clientUserInvitation->email = 'Kale_Welch10@gmail.com';
    $request->clientUserInvitation->invitationId = 'commodi';
    $request->accessToken = 'molestiae';
    $request->accountId = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->clientAccountId = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new Adexchangebuyer2AccountsClientsInvitationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsInvitationsCreate($request, $requestSecurity);

    if ($response->clientUserInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsInvitationsGet

Retrieves an existing client user invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsInvitationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsInvitationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsInvitationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->accountId = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->clientAccountId = 'laboriosam';
    $request->fields = 'hic';
    $request->invitationId = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new Adexchangebuyer2AccountsClientsInvitationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsInvitationsGet($request, $requestSecurity);

    if ($response->clientUserInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsInvitationsList

Lists all the client users invitations for a client with a given account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsInvitationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsInvitationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsInvitationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->accountId = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->clientAccountId = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new Adexchangebuyer2AccountsClientsInvitationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsInvitationsList($request, $requestSecurity);

    if ($response->listClientUserInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsList

Lists all the clients for the current sponsor buyer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->accountId = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->pageSize = 958950;
    $request->pageToken = 'architecto';
    $request->partnerClientId = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new Adexchangebuyer2AccountsClientsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsList($request, $requestSecurity);

    if ($response->listClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsUpdate

Updates an existing client buyer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\ClientEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->client = new Client();
    $request->client->clientAccountId = 'mollitia';
    $request->client->clientName = 'occaecati';
    $request->client->entityId = 'numquam';
    $request->client->entityName = 'commodi';
    $request->client->entityType = ClientEntityTypeEnum::BRAND;
    $request->client->partnerClientId = 'molestiae';
    $request->client->role = ClientRoleEnum::CLIENT_ROLE_UNSPECIFIED;
    $request->client->status = ClientStatusEnum::DISABLED;
    $request->client->visibleToSeller = false;
    $request->accessToken = 'quia';
    $request->accountId = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->clientAccountId = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new Adexchangebuyer2AccountsClientsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsUpdate($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsUsersGet

Retrieves an existing client user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUsersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->accountId = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->clientAccountId = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';
    $request->userId = 'praesentium';

    $requestSecurity = new Adexchangebuyer2AccountsClientsUsersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsUsersGet($request, $requestSecurity);

    if ($response->clientUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsUsersList

Lists all the known client users for a specified sponsor buyer account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsUsersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->accountId = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->clientAccountId = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->pageSize = 979587;
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new Adexchangebuyer2AccountsClientsUsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsUsersList($request, $requestSecurity);

    if ($response->listClientUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsClientsUsersUpdate

Updates an existing client user. Only the user status can be changed on update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUsersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientUser;
use \OpenAPI\OpenAPI\Models\Shared\ClientUserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsUsersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsUsersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->clientUser = new ClientUser();
    $request->clientUser->clientAccountId = 'harum';
    $request->clientUser->email = 'Shania.Jerde21@gmail.com';
    $request->clientUser->status = ClientUserStatusEnum::ACTIVE;
    $request->clientUser->userId = 'molestias';
    $request->accessToken = 'excepturi';
    $request->accountId = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->clientAccountId = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'itaque';
    $request->userId = 'incidunt';

    $requestSecurity = new Adexchangebuyer2AccountsClientsUsersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsUsersUpdate($request, $requestSecurity);

    if ($response->clientUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesCreate

Creates a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\AdTechnologyProviders;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAttributesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Correction;
use \OpenAPI\OpenAPI\Models\Shared\ServingContext;
use \OpenAPI\OpenAPI\Models\Shared\ServingContextAllEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppContext;
use \OpenAPI\OpenAPI\Models\Shared\AppContextAppTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuctionContext;
use \OpenAPI\OpenAPI\Models\Shared\AuctionContextAuctionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationContext;
use \OpenAPI\OpenAPI\Models\Shared\PlatformContext;
use \OpenAPI\OpenAPI\Models\Shared\PlatformContextPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityContext;
use \OpenAPI\OpenAPI\Models\Shared\SecurityContextSecuritiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CorrectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDealsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HtmlContent;
use \OpenAPI\OpenAPI\Models\Shared\NativeContent;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOpenAuctionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictedCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServingRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Disapproval;
use \OpenAPI\OpenAPI\Models\Shared\DisapprovalReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServingRestrictionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creative = new Creative();
    $request->creative->accountId = 'consequatur';
    $request->creative->adChoicesDestinationUrl = 'est';
    $request->creative->adTechnologyProviders = new AdTechnologyProviders();
    $request->creative->adTechnologyProviders->detectedProviderIds = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->creative->adTechnologyProviders->hasUnidentifiedProvider = false;
    $request->creative->advertiserName = 'labore';
    $request->creative->agencyId = 'modi';
    $request->creative->apiUpdateTime = 'qui';
    $request->creative->attributes = [
        CreativeAttributesEnum::RICH_MEDIA_CAPABILITY_TYPE_MRAID,
        CreativeAttributesEnum::INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH,
    ];
    $request->creative->clickThroughUrls = [
        'magni',
    ];
    $request->creative->corrections = [
        new Correction(),
        new Correction(),
        new Correction(),
        new Correction(),
    ];
    $request->creative->creativeId = 'ipsam';
    $request->creative->dealsStatus = CreativeDealsStatusEnum::STATUS_UNSPECIFIED;
    $request->creative->declaredClickThroughUrls = [
        'dolorum',
    ];
    $request->creative->detectedAdvertiserIds = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->creative->detectedDomains = [
        'delectus',
        'eum',
    ];
    $request->creative->detectedLanguages = [
        'eligendi',
    ];
    $request->creative->detectedProductCategories = [
        396098,
        592042,
        896039,
    ];
    $request->creative->detectedSensitiveCategories = [
        638921,
        223081,
        891555,
    ];
    $request->creative->html = new HtmlContent();
    $request->creative->html->height = 952749;
    $request->creative->html->snippet = 'dolorum';
    $request->creative->html->width = 447125;
    $request->creative->impressionTrackingUrls = [
        'illum',
        'maiores',
    ];
    $request->creative->native = new NativeContent();
    $request->creative->native->advertiserName = 'rerum';
    $request->creative->native->appIcon = new Image();
    $request->creative->native->appIcon->height = 116202;
    $request->creative->native->appIcon->url = 'magnam';
    $request->creative->native->appIcon->width = 767024;
    $request->creative->native->body = 'facere';
    $request->creative->native->callToAction = 'ea';
    $request->creative->native->clickLinkUrl = 'aliquid';
    $request->creative->native->clickTrackingUrl = 'laborum';
    $request->creative->native->headline = 'accusamus';
    $request->creative->native->image = new Image();
    $request->creative->native->image->height = 249796;
    $request->creative->native->image->url = 'occaecati';
    $request->creative->native->image->width = 313218;
    $request->creative->native->logo = new Image();
    $request->creative->native->logo->height = 881736;
    $request->creative->native->logo->url = 'delectus';
    $request->creative->native->logo->width = 692532;
    $request->creative->native->priceDisplayText = 'provident';
    $request->creative->native->starRating = 7252.55;
    $request->creative->native->storeUrl = 'id';
    $request->creative->native->videoUrl = 'blanditiis';
    $request->creative->openAuctionStatus = CreativeOpenAuctionStatusEnum::APPROVED;
    $request->creative->restrictedCategories = [
        CreativeRestrictedCategoriesEnum::NO_RESTRICTED_CATEGORIES,
        CreativeRestrictedCategoriesEnum::ALCOHOL,
        CreativeRestrictedCategoriesEnum::NO_RESTRICTED_CATEGORIES,
        CreativeRestrictedCategoriesEnum::NO_RESTRICTED_CATEGORIES,
    ];
    $request->creative->servingRestrictions = [
        new ServingRestriction(),
        new ServingRestriction(),
        new ServingRestriction(),
    ];
    $request->creative->vendorIds = [
        474867,
        19193,
        470132,
    ];
    $request->creative->version = 301575;
    $request->creative->video = new VideoContent();
    $request->creative->video->videoUrl = 'distinctio';
    $request->creative->video->videoVastXml = 'id';
    $request->accessToken = 'labore';
    $request->accountId = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->duplicateIdMode = Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum::FORCE_ENABLE_DUPLICATE_IDS;
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesCreate($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesDealAssociationsAdd

Associate an existing deal with a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddDealAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDealAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addDealAssociationRequest = new AddDealAssociationRequest();
    $request->addDealAssociationRequest->association = new CreativeDealAssociation();
    $request->addDealAssociationRequest->association->accountId = 'ullam';
    $request->addDealAssociationRequest->association->creativeId = 'provident';
    $request->addDealAssociationRequest->association->dealsId = 'quos';
    $request->accessToken = 'sint';
    $request->accountId = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->creativeId = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesDealAssociationsAdd($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesDealAssociationsList

List all creative-deal associations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesDealAssociationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesDealAssociationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->accountId = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->creativeId = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->pageSize = 100226;
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->query = 'repudiandae';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesDealAssociationsList($request, $requestSecurity);

    if ($response->listDealAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesDealAssociationsRemove

Remove the association between a deal and a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveDealAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDealAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removeDealAssociationRequest = new RemoveDealAssociationRequest();
    $request->removeDealAssociationRequest->association = new CreativeDealAssociation();
    $request->removeDealAssociationRequest->association->accountId = 'quibusdam';
    $request->removeDealAssociationRequest->association->creativeId = 'sed';
    $request->removeDealAssociationRequest->association->dealsId = 'saepe';
    $request->accessToken = 'pariatur';
    $request->accountId = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->creativeId = 'natus';
    $request->fields = 'magni';
    $request->key = 'sunt';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesDealAssociationsRemove($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesGet

Gets a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->accountId = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->creativeId = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesGet($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesList

Lists creatives.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->accountId = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->oauthToken = 'aut';
    $request->pageSize = 764912;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->query = 'hic';
    $request->quotaUser = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesList($request, $requestSecurity);

    if ($response->listCreativesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesStopWatching

Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesStopWatchingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesStopWatchingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesStopWatchingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dignissimos' => 'eaque',
        'quis' => 'nesciunt',
        'eos' => 'perferendis',
    ];
    $request->accessToken = 'dolores';
    $request->accountId = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->creativeId = 'vero';
    $request->fields = 'nostrum';
    $request->key = 'hic';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesStopWatchingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesStopWatching($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesUpdate

Updates a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\AdTechnologyProviders;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAttributesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Correction;
use \OpenAPI\OpenAPI\Models\Shared\ServingContext;
use \OpenAPI\OpenAPI\Models\Shared\ServingContextAllEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppContext;
use \OpenAPI\OpenAPI\Models\Shared\AppContextAppTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuctionContext;
use \OpenAPI\OpenAPI\Models\Shared\AuctionContextAuctionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationContext;
use \OpenAPI\OpenAPI\Models\Shared\PlatformContext;
use \OpenAPI\OpenAPI\Models\Shared\PlatformContextPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityContext;
use \OpenAPI\OpenAPI\Models\Shared\SecurityContextSecuritiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CorrectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDealsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HtmlContent;
use \OpenAPI\OpenAPI\Models\Shared\NativeContent;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\CreativeOpenAuctionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictedCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServingRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Disapproval;
use \OpenAPI\OpenAPI\Models\Shared\DisapprovalReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServingRestrictionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoContent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creative = new Creative();
    $request->creative->accountId = 'porro';
    $request->creative->adChoicesDestinationUrl = 'consequuntur';
    $request->creative->adTechnologyProviders = new AdTechnologyProviders();
    $request->creative->adTechnologyProviders->detectedProviderIds = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->creative->adTechnologyProviders->hasUnidentifiedProvider = false;
    $request->creative->advertiserName = 'rerum';
    $request->creative->agencyId = 'adipisci';
    $request->creative->apiUpdateTime = 'asperiores';
    $request->creative->attributes = [
        CreativeAttributesEnum::EXPANDING_DIRECTION_RIGHT,
        CreativeAttributesEnum::RICH_MEDIA_CAPABILITY_TYPE_FLASH,
        CreativeAttributesEnum::SKIPPABLE_INSTREAM_VIDEO,
        CreativeAttributesEnum::EXPANDING_ACTION_ROLLOVER_TO_EXPAND,
    ];
    $request->creative->clickThroughUrls = [
        'provident',
        'nobis',
        'libero',
        'delectus',
    ];
    $request->creative->corrections = [
        new Correction(),
        new Correction(),
    ];
    $request->creative->creativeId = 'quos';
    $request->creative->dealsStatus = CreativeDealsStatusEnum::CONDITIONALLY_APPROVED;
    $request->creative->declaredClickThroughUrls = [
        'dolorem',
    ];
    $request->creative->detectedAdvertiserIds = [
        'qui',
    ];
    $request->creative->detectedDomains = [
        'hic',
    ];
    $request->creative->detectedLanguages = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->creative->detectedProductCategories = [
        227414,
        680545,
        254356,
        85295,
    ];
    $request->creative->detectedSensitiveCategories = [
        56418,
    ];
    $request->creative->html = new HtmlContent();
    $request->creative->html->height = 434417;
    $request->creative->html->snippet = 'odio';
    $request->creative->html->width = 311796;
    $request->creative->impressionTrackingUrls = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->creative->native = new NativeContent();
    $request->creative->native->advertiserName = 'eos';
    $request->creative->native->appIcon = new Image();
    $request->creative->native->appIcon->height = 542499;
    $request->creative->native->appIcon->url = 'sit';
    $request->creative->native->appIcon->width = 854614;
    $request->creative->native->body = 'ab';
    $request->creative->native->callToAction = 'soluta';
    $request->creative->native->clickLinkUrl = 'dolorum';
    $request->creative->native->clickTrackingUrl = 'iusto';
    $request->creative->native->headline = 'voluptate';
    $request->creative->native->image = new Image();
    $request->creative->native->image->height = 677082;
    $request->creative->native->image->url = 'deleniti';
    $request->creative->native->image->width = 607045;
    $request->creative->native->logo = new Image();
    $request->creative->native->logo->height = 896672;
    $request->creative->native->logo->url = 'distinctio';
    $request->creative->native->logo->width = 990339;
    $request->creative->native->priceDisplayText = 'nihil';
    $request->creative->native->starRating = 2168.97;
    $request->creative->native->storeUrl = 'voluptate';
    $request->creative->native->videoUrl = 'id';
    $request->creative->openAuctionStatus = CreativeOpenAuctionStatusEnum::STATUS_TYPE_UNSPECIFIED;
    $request->creative->restrictedCategories = [
        CreativeRestrictedCategoriesEnum::NO_RESTRICTED_CATEGORIES,
        CreativeRestrictedCategoriesEnum::NO_RESTRICTED_CATEGORIES,
    ];
    $request->creative->servingRestrictions = [
        new ServingRestriction(),
    ];
    $request->creative->vendorIds = [
        881586,
        320017,
        904425,
        383464,
    ];
    $request->creative->version = 645785;
    $request->creative->video = new VideoContent();
    $request->creative->video->videoUrl = 'provident';
    $request->creative->video->videoVastXml = 'minima';
    $request->accessToken = 'repellendus';
    $request->accountId = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->creativeId = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesUpdate($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsCreativesWatch

Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WatchCreativeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsCreativesWatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsCreativesWatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->watchCreativeRequest = new WatchCreativeRequest();
    $request->watchCreativeRequest->topic = 'a';
    $request->accessToken = 'esse';
    $request->accountId = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->creativeId = 'quisquam';
    $request->fields = 'tenetur';
    $request->key = 'amet';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new Adexchangebuyer2AccountsCreativesWatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsCreativesWatch($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsFinalizedProposalsList

List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsFinalizedProposalsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->accountId = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'expedita';
    $request->filter = 'neque';
    $request->filterSyntax = Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum::FILTER_SYNTAX_UNSPECIFIED;
    $request->key = 'vel';
    $request->oauthToken = 'libero';
    $request->pageSize = 374170;
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new Adexchangebuyer2AccountsFinalizedProposalsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsFinalizedProposalsList($request, $requestSecurity);

    if ($response->listProposalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsFinalizedProposalsPause

Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PauseProposalDealsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsFinalizedProposalsPauseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pauseProposalDealsRequest = new PauseProposalDealsRequest();
    $request->pauseProposalDealsRequest->externalDealIds = [
        'maxime',
        'pariatur',
        'soluta',
    ];
    $request->pauseProposalDealsRequest->reason = 'dicta';
    $request->accessToken = 'laborum';
    $request->accountId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'dolores';
    $request->key = 'distinctio';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->proposalId = 'aliquid';
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsFinalizedProposalsPause($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsFinalizedProposalsResume

Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResumeProposalDealsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsFinalizedProposalsResumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resumeProposalDealsRequest = new ResumeProposalDealsRequest();
    $request->resumeProposalDealsRequest->externalDealIds = [
        'fugit',
    ];
    $request->accessToken = 'magni';
    $request->accountId = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->proposalId = 'cumque';
    $request->quotaUser = 'soluta';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'et';

    $requestSecurity = new Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsFinalizedProposalsResume($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProductsGet

Gets the requested product by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProductsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsum';
    $request->accountId = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->fields = 'tempore';
    $request->key = 'cupiditate';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->productId = 'delectus';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new Adexchangebuyer2AccountsProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProductsGet($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProductsList

List all products visible to the buyer (optionally filtered by the specified PQL query).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProductsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->accountId = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'quas';
    $request->filter = 'itaque';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->pageSize = 833038;
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new Adexchangebuyer2AccountsProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProductsList($request, $requestSecurity);

    if ($response->listProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsAccept

Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcceptProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsAcceptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsAcceptRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->acceptProposalRequest = new AcceptProposalRequest();
    $request->acceptProposalRequest->proposalRevision = 'qui';
    $request->accessToken = 'quae';
    $request->accountId = 'laudantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'voluptatibus';
    $request->key = 'quisquam';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->proposalId = 'omnis';
    $request->quotaUser = 'quis';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsAcceptSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsAccept($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsAddNote

Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsAddNoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddNoteRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\NoteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsAddNoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsAddNoteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addNoteRequestInput = new AddNoteRequestInput();
    $request->addNoteRequestInput->note = new NoteInput();
    $request->addNoteRequestInput->note->note = 'consectetur';
    $request->accessToken = 'vero';
    $request->accountId = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'distinctio';
    $request->key = 'quod';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->proposalId = 'similique';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsAddNoteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsAddNote($request, $requestSecurity);

    if ($response->note !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsCancelNegotiation

Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsCancelNegotiationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsCancelNegotiationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'illum' => 'sequi',
        'natus' => 'impedit',
        'aut' => 'voluptatibus',
        'exercitationem' => 'nulla',
    ];
    $request->accessToken = 'fugit';
    $request->accountId = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->proposalId = 'alias';
    $request->quotaUser = 'officia';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsCancelNegotiation($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsCompleteSetup

You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsCompleteSetupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsCompleteSetupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsCompleteSetupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'vel' => 'possimus',
    ];
    $request->accessToken = 'magnam';
    $request->accountId = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->fields = 'dicta';
    $request->key = 'dolor';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->proposalId = 'quasi';
    $request->quotaUser = 'ex';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsCompleteSetupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsCompleteSetup($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsCreate

Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProposalInput;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\DealInput;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictionsCreativeFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AdSize;
use \OpenAPI\OpenAPI\Models\Shared\AdSizeSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictionsSkippableAdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DealServingMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DealPauseStatus;
use \OpenAPI\OpenAPI\Models\Shared\DealPauseStatusFirstPausedByEnum;
use \OpenAPI\OpenAPI\Models\Shared\DealTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsBrandingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\PricePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\PricePerBuyer;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedFixedPriceTermsReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NonGuaranteedAuctionTerms;
use \OpenAPI\OpenAPI\Models\Shared\NonGuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealSyndicationProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceTargeting;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventorySizeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTargeting;
use \OpenAPI\OpenAPI\Models\Shared\MobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\FirstPartyMobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\UrlTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingExcludedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingTargetedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValue;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSize;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeAllowedFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeCreativeSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeNativeTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeSkippableAdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPart;
use \OpenAPI\OpenAPI\Models\Shared\DayPartDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingTimeZoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SellerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->proposalInput = new ProposalInput();
    $request->proposalInput->billedBuyer = new Buyer();
    $request->proposalInput->billedBuyer->accountId = 'nostrum';
    $request->proposalInput->buyer = new Buyer();
    $request->proposalInput->buyer->accountId = 'sapiente';
    $request->proposalInput->buyerContacts = [
        new ContactInformation(),
        new ContactInformation(),
        new ContactInformation(),
        new ContactInformation(),
    ];
    $request->proposalInput->buyerPrivateData = new PrivateData();
    $request->proposalInput->buyerPrivateData->referenceId = 'saepe';
    $request->proposalInput->deals = [
        new DealInput(),
        new DealInput(),
    ];
    $request->proposalInput->displayName = 'impedit';
    $request->proposalInput->seller = new SellerInput();
    $request->proposalInput->seller->accountId = 'corporis';
    $request->accessToken = 'veniam';
    $request->accountId = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'ea';
    $request->key = 'quo';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsCreate($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsGet

Gets a proposal given its ID. The proposal is returned at its head revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->accountId = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'deleniti';
    $request->key = 'impedit';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->proposalId = 'fugit';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'non';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsGet($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsList

List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->accountId = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'eum';
    $request->filter = 'autem';
    $request->filterSyntax = Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum::LIST_FILTER;
    $request->key = 'quas';
    $request->oauthToken = 'assumenda';
    $request->pageSize = 860552;
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsList($request, $requestSecurity);

    if ($response->listProposalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsPause

Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PauseProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsPauseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pauseProposalRequest = new PauseProposalRequest();
    $request->pauseProposalRequest->reason = 'explicabo';
    $request->accessToken = 'provident';
    $request->accountId = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'odio';
    $request->key = 'eius';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->proposalId = 'esse';
    $request->quotaUser = 'rem';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsPause($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsResume

Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsResumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ut' => 'eum',
        'suscipit' => 'assumenda',
        'eos' => 'praesentium',
        'quisquam' => 'veritatis',
    ];
    $request->accessToken = 'ipsa';
    $request->accountId = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->proposalId = 'fuga';
    $request->quotaUser = 'eius';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsResume($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsProposalsUpdate

Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProposalInput;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\DealInput;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictionsCreativeFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AdSize;
use \OpenAPI\OpenAPI\Models\Shared\AdSizeSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeRestrictionsSkippableAdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DealServingMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DealPauseStatus;
use \OpenAPI\OpenAPI\Models\Shared\DealPauseStatusFirstPausedByEnum;
use \OpenAPI\OpenAPI\Models\Shared\DealTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsBrandingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\PricePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\PricePerBuyer;
use \OpenAPI\OpenAPI\Models\Shared\GuaranteedFixedPriceTermsReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NonGuaranteedAuctionTerms;
use \OpenAPI\OpenAPI\Models\Shared\NonGuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealSyndicationProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceTargeting;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaTargeting;
use \OpenAPI\OpenAPI\Models\Shared\InventorySizeTargeting;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTargeting;
use \OpenAPI\OpenAPI\Models\Shared\MobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\FirstPartyMobileApplicationTargeting;
use \OpenAPI\OpenAPI\Models\Shared\UrlTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingExcludedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoTargetingTargetedPositionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValue;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSize;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeAllowedFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeCreativeSizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeNativeTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeSizeSkippableAdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPart;
use \OpenAPI\OpenAPI\Models\Shared\DayPartDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingTimeZoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SellerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsProposalsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsProposalsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->proposalInput = new ProposalInput();
    $request->proposalInput->billedBuyer = new Buyer();
    $request->proposalInput->billedBuyer->accountId = 'cupiditate';
    $request->proposalInput->buyer = new Buyer();
    $request->proposalInput->buyer->accountId = 'consequatur';
    $request->proposalInput->buyerContacts = [
        new ContactInformation(),
        new ContactInformation(),
    ];
    $request->proposalInput->buyerPrivateData = new PrivateData();
    $request->proposalInput->buyerPrivateData->referenceId = 'debitis';
    $request->proposalInput->deals = [
        new DealInput(),
        new DealInput(),
    ];
    $request->proposalInput->displayName = 'aspernatur';
    $request->proposalInput->seller = new SellerInput();
    $request->proposalInput->seller->accountId = 'sequi';
    $request->accessToken = 'quo';
    $request->accountId = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'distinctio';
    $request->key = 'quod';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->proposalId = 'inventore';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new Adexchangebuyer2AccountsProposalsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsProposalsUpdate($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsPublisherProfilesGet

Gets the requested publisher profile by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsPublisherProfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsPublisherProfilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsPublisherProfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->accountId = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'dolores';
    $request->key = 'deserunt';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->publisherProfileId = 'accusantium';
    $request->quotaUser = 'porro';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new Adexchangebuyer2AccountsPublisherProfilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsPublisherProfilesGet($request, $requestSecurity);

    if ($response->publisherProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2AccountsPublisherProfilesList

List all publisher profiles visible to the buyer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsPublisherProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsPublisherProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsPublisherProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->accountId = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'mollitia';
    $request->key = 'incidunt';
    $request->oauthToken = 'atque';
    $request->pageSize = 128860;
    $request->pageToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new Adexchangebuyer2AccountsPublisherProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsPublisherProfilesList($request, $requestSecurity);

    if ($response->listPublisherProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
