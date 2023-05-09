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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.ClientEntityTypeEnum;
import org.openapis.openapi.models.shared.ClientRoleEnum;
import org.openapis.openapi.models.shared.ClientStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsCreateRequest req = new Adexchangebuyer2AccountsClientsCreateRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                client = new Client() {{
                    clientAccountId = "iusto";
                    clientName = "excepturi";
                    entityId = "nisi";
                    entityName = "recusandae";
                    entityType = ClientEntityTypeEnum.ENTITY_TYPE_UNCLASSIFIED;
                    partnerClientId = "ab";
                    role = ClientRoleEnum.CLIENT_DEAL_VIEWER;
                    status = ClientStatusEnum.CLIENT_STATUS_UNSPECIFIED;
                    visibleToSeller = false;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            Adexchangebuyer2AccountsClientsCreateResponse res = sdk.accounts.adexchangebuyer2AccountsClientsCreate(req, new Adexchangebuyer2AccountsClientsCreateSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsGet

Gets a client buyer with a given client account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsGetRequest req = new Adexchangebuyer2AccountsClientsGetRequest("quod", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            Adexchangebuyer2AccountsClientsGetResponse res = sdk.accounts.adexchangebuyer2AccountsClientsGet(req, new Adexchangebuyer2AccountsClientsGetSecurity("hic", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsInvitationsCreate

Creates and sends out an email invitation to access an Ad Exchange client buyer account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientUserInvitation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsInvitationsCreateRequest req = new Adexchangebuyer2AccountsClientsInvitationsCreateRequest("totam", "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                clientUserInvitation = new ClientUserInvitation() {{
                    clientAccountId = "molestiae";
                    email = "Christy.Ryan21@gmail.com";
                    invitationId = "excepturi";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            Adexchangebuyer2AccountsClientsInvitationsCreateResponse res = sdk.accounts.adexchangebuyer2AccountsClientsInvitationsCreate(req, new Adexchangebuyer2AccountsClientsInvitationsCreateSecurity("hic", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientUserInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsInvitationsGet

Retrieves an existing client user invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsInvitationsGetRequest req = new Adexchangebuyer2AccountsClientsInvitationsGetRequest("fuga", "in", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            Adexchangebuyer2AccountsClientsInvitationsGetResponse res = sdk.accounts.adexchangebuyer2AccountsClientsInvitationsGet(req, new Adexchangebuyer2AccountsClientsInvitationsGetSecurity("dolores", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientUserInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsInvitationsList

Lists all the client users invitations for a client with a given account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsInvitationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsInvitationsListRequest req = new Adexchangebuyer2AccountsClientsInvitationsListRequest("corporis", "explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                pageSize = 438601L;
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            Adexchangebuyer2AccountsClientsInvitationsListResponse res = sdk.accounts.adexchangebuyer2AccountsClientsInvitationsList(req, new Adexchangebuyer2AccountsClientsInvitationsListSecurity("mollitia", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClientUserInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsList

Lists all the clients for the current sponsor buyer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsListRequest req = new Adexchangebuyer2AccountsClientsListRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "commodi";
                oauthToken = "quam";
                pageSize = 474697L;
                pageToken = "velit";
                partnerClientId = "error";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            Adexchangebuyer2AccountsClientsListResponse res = sdk.accounts.adexchangebuyer2AccountsClientsList(req, new Adexchangebuyer2AccountsClientsListSecurity("laborum", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsUpdate

Updates an existing client buyer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUpdateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUpdateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.ClientEntityTypeEnum;
import org.openapis.openapi.models.shared.ClientRoleEnum;
import org.openapis.openapi.models.shared.ClientStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsUpdateRequest req = new Adexchangebuyer2AccountsClientsUpdateRequest("enim", "odit") {{
                dollarXgafv = XgafvEnum.TWO;
                client = new Client() {{
                    clientAccountId = "sequi";
                    clientName = "tenetur";
                    entityId = "ipsam";
                    entityName = "id";
                    entityType = ClientEntityTypeEnum.ENTITY_TYPE_UNCLASSIFIED;
                    partnerClientId = "aut";
                    role = ClientRoleEnum.CLIENT_ROLE_UNSPECIFIED;
                    status = ClientStatusEnum.DISABLED;
                    visibleToSeller = false;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            Adexchangebuyer2AccountsClientsUpdateResponse res = sdk.accounts.adexchangebuyer2AccountsClientsUpdate(req, new Adexchangebuyer2AccountsClientsUpdateSecurity("ipsa", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsUsersGet

Retrieves an existing client user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsUsersGetRequest req = new Adexchangebuyer2AccountsClientsUsersGetRequest("voluptate", "cum", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            Adexchangebuyer2AccountsClientsUsersGetResponse res = sdk.accounts.adexchangebuyer2AccountsClientsUsersGet(req, new Adexchangebuyer2AccountsClientsUsersGetSecurity("enim", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsUsersList

Lists all the known client users for a specified sponsor buyer account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsUsersListRequest req = new Adexchangebuyer2AccountsClientsUsersListRequest("commodi", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                pageSize = 508969L;
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "quasi";
                uploadProtocol = "repudiandae";
            }};            

            Adexchangebuyer2AccountsClientsUsersListResponse res = sdk.accounts.adexchangebuyer2AccountsClientsUsersList(req, new Adexchangebuyer2AccountsClientsUsersListSecurity("sint", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClientUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsClientsUsersUpdate

Updates an existing client user. Only the user status can be changed on update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsUsersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientUser;
import org.openapis.openapi.models.shared.ClientUserStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsUsersUpdateRequest req = new Adexchangebuyer2AccountsClientsUsersUpdateRequest("itaque", "incidunt", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                clientUser = new ClientUser() {{
                    clientAccountId = "est";
                    email = "Brendon_OConnell28@hotmail.com";
                    status = ClientUserStatusEnum.PENDING;
                    userId = "qui";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "alias";
                uploadProtocol = "fugit";
            }};            

            Adexchangebuyer2AccountsClientsUsersUpdateResponse res = sdk.accounts.adexchangebuyer2AccountsClientsUsersUpdate(req, new Adexchangebuyer2AccountsClientsUsersUpdateSecurity("dolorum", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesCreate

Creates a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesCreateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesCreateSecurity;
import org.openapis.openapi.models.shared.AdTechnologyProviders;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppContext;
import org.openapis.openapi.models.shared.AppContextAppTypesEnum;
import org.openapis.openapi.models.shared.AuctionContext;
import org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum;
import org.openapis.openapi.models.shared.Correction;
import org.openapis.openapi.models.shared.CorrectionTypeEnum;
import org.openapis.openapi.models.shared.Creative;
import org.openapis.openapi.models.shared.CreativeAttributesEnum;
import org.openapis.openapi.models.shared.CreativeDealsStatusEnum;
import org.openapis.openapi.models.shared.CreativeOpenAuctionStatusEnum;
import org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum;
import org.openapis.openapi.models.shared.Disapproval;
import org.openapis.openapi.models.shared.DisapprovalReasonEnum;
import org.openapis.openapi.models.shared.HtmlContent;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.LocationContext;
import org.openapis.openapi.models.shared.NativeContent;
import org.openapis.openapi.models.shared.PlatformContext;
import org.openapis.openapi.models.shared.PlatformContextPlatformsEnum;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum;
import org.openapis.openapi.models.shared.ServingContext;
import org.openapis.openapi.models.shared.ServingContextAllEnum;
import org.openapis.openapi.models.shared.ServingRestriction;
import org.openapis.openapi.models.shared.ServingRestrictionStatusEnum;
import org.openapis.openapi.models.shared.VideoContent;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesCreateRequest req = new Adexchangebuyer2AccountsCreativesCreateRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "tempore";
                    adChoicesDestinationUrl = "labore";
                    adTechnologyProviders = new AdTechnologyProviders() {{
                        detectedProviderIds = new String[]{{
                            add("eum"),
                            add("non"),
                            add("eligendi"),
                            add("sint"),
                        }};
                        hasUnidentifiedProvider = false;
                    }};;
                    advertiserName = "aliquid";
                    agencyId = "provident";
                    apiUpdateTime = "necessitatibus";
                    attributes = new org.openapis.openapi.models.shared.CreativeAttributesEnum[]{{
                        add(CreativeAttributesEnum.RICH_MEDIA_CAPABILITY_TYPE_HTML5),
                        add(CreativeAttributesEnum.EXPANDING_DIRECTION_DOWN),
                        add(CreativeAttributesEnum.ANY_INTERSTITIAL),
                    }};
                    clickThroughUrls = new String[]{{
                        add("dolorum"),
                        add("in"),
                        add("in"),
                        add("illum"),
                    }};
                    corrections = new org.openapis.openapi.models.shared.Correction[]{{
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(249796),
                                            add(581273),
                                            add(313218),
                                            add(881736),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(716075),
                                            add(660174),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(590873),
                                            add(551816),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("odit"),
                                add("nemo"),
                                add("quasi"),
                                add("iure"),
                            }};
                            type = CorrectionTypeEnum.VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED;
                        }}),
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(352312),
                                            add(714242),
                                            add(469249),
                                            add(998848),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(407183),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(359978),
                                            add(944124),
                                            add(729991),
                                            add(749999),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(463451),
                                            add(223924),
                                            add(874573),
                                            add(345352),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("blanditiis"),
                            }};
                            type = CorrectionTypeEnum.SSL_ATTRIBUTE_ADDED;
                        }}),
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(589910),
                                            add(750844),
                                            add(730122),
                                            add(964490),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("qui"),
                            }};
                            type = CorrectionTypeEnum.SSL_ATTRIBUTE_REMOVED;
                        }}),
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(56418),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(743835),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(881586),
                                            add(320017),
                                            add(904425),
                                            add(383464),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(687488),
                                            add(483409),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("dolorem"),
                                add("sapiente"),
                            }};
                            type = CorrectionTypeEnum.REQUIRED_VENDOR_ADDED;
                        }}),
                    }};
                    creativeId = "nihil";
                    dealsStatus = CreativeDealsStatusEnum.STATUS_UNSPECIFIED;
                    declaredClickThroughUrls = new String[]{{
                        add("neque"),
                        add("sed"),
                        add("vel"),
                    }};
                    detectedAdvertiserIds = new String[]{{
                        add("voluptas"),
                        add("deserunt"),
                        add("quam"),
                    }};
                    detectedDomains = new String[]{{
                        add("incidunt"),
                    }};
                    detectedLanguages = new String[]{{
                        add("cupiditate"),
                    }};
                    detectedProductCategories = new Integer[]{{
                        add(863856),
                        add(747080),
                        add(117531),
                        add(674848),
                    }};
                    detectedSensitiveCategories = new Integer[]{{
                        add(276894),
                        add(132068),
                        add(174909),
                    }};
                    html = new HtmlContent() {{
                        height = 716860;
                        snippet = "facilis";
                        width = 396060;
                    }};;
                    impressionTrackingUrls = new String[]{{
                        add("molestias"),
                        add("temporibus"),
                    }};
                    native_ = new NativeContent() {{
                        advertiserName = "qui";
                        appIcon = new Image() {{
                            height = 204865;
                            url = "fugit";
                            width = 164959;
                        }};;
                        body = "odio";
                        callToAction = "sunt";
                        clickLinkUrl = "ullam";
                        clickTrackingUrl = "nam";
                        headline = "hic";
                        image = new Image() {{
                            height = 30452;
                            url = "cumque";
                            width = 746994;
                        }};;
                        logo = new Image() {{
                            height = 748664;
                            url = "et";
                            width = 903720;
                        }};;
                        priceDisplayText = "ipsum";
                        starRating = 834.22;
                        storeUrl = "nobis";
                        videoUrl = "quos";
                    }};;
                    openAuctionStatus = CreativeOpenAuctionStatusEnum.PENDING_REVIEW;
                    restrictedCategories = new org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum[]{{
                        add(CreativeRestrictedCategoriesEnum.NO_RESTRICTED_CATEGORIES),
                        add(CreativeRestrictedCategoriesEnum.ALCOHOL),
                        add(CreativeRestrictedCategoriesEnum.NO_RESTRICTED_CATEGORIES),
                    }};
                    servingRestrictions = new org.openapis.openapi.models.shared.ServingRestriction[]{{
                        add(new ServingRestriction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(555649),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(876506),
                                            add(606476),
                                            add(338159),
                                            add(218403),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            disapproval = new Disapproval() {{
                                details = new String[]{{
                                    add("odio"),
                                    add("similique"),
                                    add("facilis"),
                                    add("vero"),
                                }};
                                reason = DisapprovalReasonEnum.INVALID_URL_PROTOCOL;
                            }};
                            disapprovalReasons = new org.openapis.openapi.models.shared.Disapproval[]{{
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("illum"),
                                        add("sequi"),
                                        add("natus"),
                                        add("impedit"),
                                    }};
                                    reason = DisapprovalReasonEnum.BROKEN_URL;
                                }}),
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("exercitationem"),
                                        add("nulla"),
                                        add("fugit"),
                                        add("porro"),
                                    }};
                                    reason = DisapprovalReasonEnum.BAIL_BONDS;
                                }}),
                            }};
                            status = ServingRestrictionStatusEnum.PENDING_REVIEW;
                        }}),
                        add(new ServingRestriction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(822118),
                                            add(297842),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(906556),
                                            add(411372),
                                            add(774048),
                                            add(359271),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            disapproval = new Disapproval() {{
                                details = new String[]{{
                                    add("recusandae"),
                                }};
                                reason = DisapprovalReasonEnum.INCORRECT_AD_TECHNOLOGY_DECLARATION;
                            }};
                            disapprovalReasons = new org.openapis.openapi.models.shared.Disapproval[]{{
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("a"),
                                    }};
                                    reason = DisapprovalReasonEnum.SENSITIVE_EVENTS;
                                }}),
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("aut"),
                                    }};
                                    reason = DisapprovalReasonEnum.CLICK_TO_DOWNLOAD_NOT_AN_APP;
                                }}),
                            }};
                            status = ServingRestrictionStatusEnum.PENDING_REVIEW;
                        }}),
                    }};
                    vendorIds = new Integer[]{{
                        add(146946),
                        add(882860),
                    }};
                    version = 79522;
                    video = new VideoContent() {{
                        videoUrl = "non";
                        videoVastXml = "et";
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "placeat";
                duplicateIdMode = Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum.NO_DUPLICATES;
                fields = "eum";
                key = "autem";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "assumenda";
                uploadProtocol = "nulla";
            }};            

            Adexchangebuyer2AccountsCreativesCreateResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesCreate(req, new Adexchangebuyer2AccountsCreativesCreateSecurity("voluptas", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesDealAssociationsAdd

Associate an existing deal with a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity;
import org.openapis.openapi.models.shared.AddDealAssociationRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeDealAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest req = new Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest("quasi", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                addDealAssociationRequest = new AddDealAssociationRequest() {{
                    association = new CreativeDealAssociation() {{
                        accountId = "explicabo";
                        creativeId = "provident";
                        dealsId = "ipsa";
                    }};;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "eius";
                key = "esse";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "fuga";
                uploadProtocol = "reprehenderit";
            }};            

            Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesDealAssociationsAdd(req, new Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity("quidem", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesDealAssociationsList

List all creative-deal associations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesDealAssociationsListRequest req = new Adexchangebuyer2AccountsCreativesDealAssociationsListRequest("ut", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "quisquam";
                key = "veritatis";
                oauthToken = "ipsa";
                pageSize = 660040L;
                pageToken = "quidem";
                prettyPrint = false;
                query = "neque";
                quotaUser = "quo";
                uploadType = "illum";
                uploadProtocol = "quo";
            }};            

            Adexchangebuyer2AccountsCreativesDealAssociationsListResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesDealAssociationsList(req, new Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity("fuga", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDealAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesDealAssociationsRemove

Remove the association between a deal and a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeDealAssociation;
import org.openapis.openapi.models.shared.RemoveDealAssociationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest req = new Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest("eos", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                removeDealAssociationRequest = new RemoveDealAssociationRequest() {{
                    association = new CreativeDealAssociation() {{
                        accountId = "cupiditate";
                        creativeId = "consequatur";
                        dealsId = "tempora";
                    }};;
                }};;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "sequi";
                key = "quo";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "aperiam";
                uploadProtocol = "distinctio";
            }};            

            Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesDealAssociationsRemove(req, new Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity("quod", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesGet

Gets a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesGetRequest req = new Adexchangebuyer2AccountsCreativesGetRequest("inventore", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "occaecati";
                key = "commodi";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "deserunt";
                uploadProtocol = "molestiae";
            }};            

            Adexchangebuyer2AccountsCreativesGetResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesGet(req, new Adexchangebuyer2AccountsCreativesGetSecurity("accusantium", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesList

Lists creatives.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesListRequest req = new Adexchangebuyer2AccountsCreativesListRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "fugit";
                key = "fuga";
                oauthToken = "mollitia";
                pageSize = 277596L;
                pageToken = "atque";
                prettyPrint = false;
                query = "explicabo";
                quotaUser = "minima";
                uploadType = "nisi";
                uploadProtocol = "fugit";
            }};            

            Adexchangebuyer2AccountsCreativesListResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesList(req, new Adexchangebuyer2AccountsCreativesListSecurity("sapiente", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCreativesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesStopWatching

Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesStopWatchingSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesStopWatchingRequest req = new Adexchangebuyer2AccountsCreativesStopWatchingRequest("ratione", "explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("atque", "et");
                    put("esse", "eveniet");
                    put("accusamus", "veritatis");
                }};
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "vero";
                key = "aliquid";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "vel";
                uploadProtocol = "harum";
            }};            

            Adexchangebuyer2AccountsCreativesStopWatchingResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesStopWatching(req, new Adexchangebuyer2AccountsCreativesStopWatchingSecurity("molestiae", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesUpdate

Updates a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesUpdateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesUpdateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesUpdateSecurity;
import org.openapis.openapi.models.shared.AdTechnologyProviders;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppContext;
import org.openapis.openapi.models.shared.AppContextAppTypesEnum;
import org.openapis.openapi.models.shared.AuctionContext;
import org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum;
import org.openapis.openapi.models.shared.Correction;
import org.openapis.openapi.models.shared.CorrectionTypeEnum;
import org.openapis.openapi.models.shared.Creative;
import org.openapis.openapi.models.shared.CreativeAttributesEnum;
import org.openapis.openapi.models.shared.CreativeDealsStatusEnum;
import org.openapis.openapi.models.shared.CreativeOpenAuctionStatusEnum;
import org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum;
import org.openapis.openapi.models.shared.Disapproval;
import org.openapis.openapi.models.shared.DisapprovalReasonEnum;
import org.openapis.openapi.models.shared.HtmlContent;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.LocationContext;
import org.openapis.openapi.models.shared.NativeContent;
import org.openapis.openapi.models.shared.PlatformContext;
import org.openapis.openapi.models.shared.PlatformContextPlatformsEnum;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum;
import org.openapis.openapi.models.shared.ServingContext;
import org.openapis.openapi.models.shared.ServingContextAllEnum;
import org.openapis.openapi.models.shared.ServingRestriction;
import org.openapis.openapi.models.shared.ServingRestrictionStatusEnum;
import org.openapis.openapi.models.shared.VideoContent;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesUpdateRequest req = new Adexchangebuyer2AccountsCreativesUpdateRequest("occaecati", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                creative = new Creative() {{
                    accountId = "eligendi";
                    adChoicesDestinationUrl = "sit";
                    adTechnologyProviders = new AdTechnologyProviders() {{
                        detectedProviderIds = new String[]{{
                            add("tempore"),
                            add("adipisci"),
                            add("cumque"),
                        }};
                        hasUnidentifiedProvider = false;
                    }};;
                    advertiserName = "consequuntur";
                    agencyId = "consequatur";
                    apiUpdateTime = "minus";
                    attributes = new org.openapis.openapi.models.shared.CreativeAttributesEnum[]{{
                        add(CreativeAttributesEnum.RENDERING_SIZELESS_ADX),
                        add(CreativeAttributesEnum.EXPANDING_DIRECTION_DOWN),
                    }};
                    clickThroughUrls = new String[]{{
                        add("blanditiis"),
                        add("provident"),
                    }};
                    corrections = new org.openapis.openapi.models.shared.Correction[]{{
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(908844),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(849039),
                                            add(742238),
                                            add(33304),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(536275),
                                            add(929292),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(232744),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("mollitia"),
                                add("ab"),
                            }};
                            type = CorrectionTypeEnum.REQUIRED_VENDOR_ADDED;
                        }}),
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(12036),
                                            add(491025),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(368102),
                                            add(65304),
                                            add(312753),
                                            add(783235),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("recusandae"),
                                add("totam"),
                                add("fugiat"),
                            }};
                            type = CorrectionTypeEnum.REQUIRED_ATTRIBUTE_ADDED;
                        }}),
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(968904),
                                            add(828657),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(985492),
                                            add(381760),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("non"),
                            }};
                            type = CorrectionTypeEnum.SSL_ATTRIBUTE_REMOVED;
                        }}),
                        add(new Correction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(385237),
                                            add(58356),
                                            add(916727),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("voluptas"),
                                add("minima"),
                            }};
                            type = CorrectionTypeEnum.IN_BANNER_VIDEO_ATTRIBUTE_ADDED;
                        }}),
                    }};
                    creativeId = "dolorum";
                    dealsStatus = CreativeDealsStatusEnum.NOT_CHECKED;
                    declaredClickThroughUrls = new String[]{{
                        add("dolores"),
                        add("blanditiis"),
                        add("in"),
                        add("dolore"),
                    }};
                    detectedAdvertiserIds = new String[]{{
                        add("officiis"),
                        add("temporibus"),
                    }};
                    detectedDomains = new String[]{{
                        add("adipisci"),
                        add("cum"),
                    }};
                    detectedLanguages = new String[]{{
                        add("quas"),
                        add("hic"),
                        add("nesciunt"),
                    }};
                    detectedProductCategories = new Integer[]{{
                        add(548519),
                        add(867290),
                        add(519643),
                    }};
                    detectedSensitiveCategories = new Integer[]{{
                        add(348783),
                        add(750765),
                        add(24619),
                        add(699575),
                    }};
                    html = new HtmlContent() {{
                        height = 148829;
                        snippet = "reiciendis";
                        width = 131852;
                    }};;
                    impressionTrackingUrls = new String[]{{
                        add("facilis"),
                        add("voluptate"),
                        add("expedita"),
                        add("ab"),
                    }};
                    native_ = new NativeContent() {{
                        advertiserName = "iste";
                        appIcon = new Image() {{
                            height = 292794;
                            url = "laborum";
                            width = 152354;
                        }};;
                        body = "in";
                        callToAction = "commodi";
                        clickLinkUrl = "quidem";
                        clickTrackingUrl = "explicabo";
                        headline = "voluptas";
                        image = new Image() {{
                            height = 604118;
                            url = "architecto";
                            width = 382808;
                        }};;
                        logo = new Image() {{
                            height = 960257;
                            url = "debitis";
                            width = 72434;
                        }};;
                        priceDisplayText = "reiciendis";
                        starRating = 193;
                        storeUrl = "corrupti";
                        videoUrl = "maiores";
                    }};;
                    openAuctionStatus = CreativeOpenAuctionStatusEnum.NOT_CHECKED;
                    restrictedCategories = new org.openapis.openapi.models.shared.CreativeRestrictedCategoriesEnum[]{{
                        add(CreativeRestrictedCategoriesEnum.ALCOHOL),
                    }};
                    servingRestrictions = new org.openapis.openapi.models.shared.ServingRestriction[]{{
                        add(new ServingRestriction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(455444),
                                            add(970076),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(333507),
                                            add(329543),
                                            add(924159),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.DESKTOP),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(944708),
                                            add(710529),
                                            add(892863),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(30235),
                                            add(635057),
                                            add(710337),
                                            add(299643),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            disapproval = new Disapproval() {{
                                details = new String[]{{
                                    add("repudiandae"),
                                    add("corporis"),
                                    add("et"),
                                }};
                                reason = DisapprovalReasonEnum.UNDECLARED_RESTRICTED_CONTENT;
                            }};
                            disapprovalReasons = new org.openapis.openapi.models.shared.Disapproval[]{{
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("sit"),
                                    }};
                                    reason = DisapprovalReasonEnum.INCORRECT_IMAGE_LAYOUT;
                                }}),
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("saepe"),
                                        add("error"),
                                    }};
                                    reason = DisapprovalReasonEnum.LENGTH_OF_IMAGE_ANIMATION;
                                }}),
                            }};
                            status = ServingRestrictionStatusEnum.STATUS_UNSPECIFIED;
                        }}),
                        add(new ServingRestriction() {{
                            contexts = new org.openapis.openapi.models.shared.ServingContext[]{{
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(289776),
                                            add(695270),
                                            add(539074),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.WEB),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(667285),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                            add(AuctionContextAuctionTypesEnum.DIRECT_DEALS),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(461007),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                                add(new ServingContext() {{
                                    all = ServingContextAllEnum.SIMPLE_CONTEXT;
                                    appType = new AppContext() {{
                                        appTypes = new org.openapis.openapi.models.shared.AppContextAppTypesEnum[]{{
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.WEB),
                                            add(AppContextAppTypesEnum.NATIVE_),
                                        }};
                                    }};
                                    auctionType = new AuctionContext() {{
                                        auctionTypes = new org.openapis.openapi.models.shared.AuctionContextAuctionTypesEnum[]{{
                                            add(AuctionContextAuctionTypesEnum.OPEN_AUCTION),
                                        }};
                                    }};
                                    location = new LocationContext() {{
                                        geoCriteriaIds = new Integer[]{{
                                            add(544647),
                                            add(871786),
                                            add(621693),
                                            add(502721),
                                        }};
                                    }};
                                    platform = new PlatformContext() {{
                                        platforms = new org.openapis.openapi.models.shared.PlatformContextPlatformsEnum[]{{
                                            add(PlatformContextPlatformsEnum.IOS),
                                            add(PlatformContextPlatformsEnum.ANDROID),
                                        }};
                                    }};
                                    securityType = new SecurityContext() {{
                                        securities = new org.openapis.openapi.models.shared.SecurityContextSecuritiesEnum[]{{
                                            add(SecurityContextSecuritiesEnum.INSECURE),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                            add(SecurityContextSecuritiesEnum.SSL),
                                        }};
                                    }};
                                }}),
                            }};
                            disapproval = new Disapproval() {{
                                details = new String[]{{
                                    add("labore"),
                                    add("reiciendis"),
                                    add("doloremque"),
                                    add("repudiandae"),
                                }};
                                reason = DisapprovalReasonEnum.DESTINATION_URLS_UNDECLARED;
                            }};
                            disapprovalReasons = new org.openapis.openapi.models.shared.Disapproval[]{{
                                add(new Disapproval() {{
                                    details = new String[]{{
                                        add("dolores"),
                                    }};
                                    reason = DisapprovalReasonEnum.UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN;
                                }}),
                            }};
                            status = ServingRestrictionStatusEnum.DISAPPROVAL;
                        }}),
                    }};
                    vendorIds = new Integer[]{{
                        add(952143),
                    }};
                    version = 562783;
                    video = new VideoContent() {{
                        videoUrl = "magnam";
                        videoVastXml = "saepe";
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "perspiciatis";
                key = "in";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "occaecati";
                uploadProtocol = "consequuntur";
            }};            

            Adexchangebuyer2AccountsCreativesUpdateResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesUpdate(req, new Adexchangebuyer2AccountsCreativesUpdateSecurity("fugit", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsCreativesWatch

Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesWatchRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesWatchResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsCreativesWatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WatchCreativeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsCreativesWatchRequest req = new Adexchangebuyer2AccountsCreativesWatchRequest("quis", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                watchCreativeRequest = new WatchCreativeRequest() {{
                    topic = "illo";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "non";
                key = "vero";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "ipsa";
                uploadProtocol = "totam";
            }};            

            Adexchangebuyer2AccountsCreativesWatchResponse res = sdk.accounts.adexchangebuyer2AccountsCreativesWatch(req, new Adexchangebuyer2AccountsCreativesWatchSecurity("quae", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsFinalizedProposalsList

List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsFinalizedProposalsListRequest req = new Adexchangebuyer2AccountsFinalizedProposalsListRequest("eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "ratione";
                filter = "laborum";
                filterSyntax = Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum.LIST_FILTER;
                key = "voluptatum";
                oauthToken = "rem";
                pageSize = 304446L;
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "alias";
                uploadProtocol = "corporis";
            }};            

            Adexchangebuyer2AccountsFinalizedProposalsListResponse res = sdk.accounts.adexchangebuyer2AccountsFinalizedProposalsList(req, new Adexchangebuyer2AccountsFinalizedProposalsListSecurity("perspiciatis", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProposalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsFinalizedProposalsPause

Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PauseProposalDealsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsFinalizedProposalsPauseRequest req = new Adexchangebuyer2AccountsFinalizedProposalsPauseRequest("mollitia", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                pauseProposalDealsRequest = new PauseProposalDealsRequest() {{
                    externalDealIds = new String[]{{
                        add("reiciendis"),
                        add("dolores"),
                        add("id"),
                        add("minima"),
                    }};
                    reason = "dolore";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "recusandae";
                key = "omnis";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "ex";
                uploadProtocol = "ut";
            }};            

            Adexchangebuyer2AccountsFinalizedProposalsPauseResponse res = sdk.accounts.adexchangebuyer2AccountsFinalizedProposalsPause(req, new Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity("culpa", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsFinalizedProposalsResume

Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResumeProposalDealsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsFinalizedProposalsResumeRequest req = new Adexchangebuyer2AccountsFinalizedProposalsResumeRequest("debitis", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                resumeProposalDealsRequest = new ResumeProposalDealsRequest() {{
                    externalDealIds = new String[]{{
                        add("recusandae"),
                        add("esse"),
                    }};
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "reiciendis";
                key = "provident";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "quasi";
                uploadProtocol = "animi";
            }};            

            Adexchangebuyer2AccountsFinalizedProposalsResumeResponse res = sdk.accounts.adexchangebuyer2AccountsFinalizedProposalsResume(req, new Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity("nostrum", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProductsGet

Gets the requested product by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProductsGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProductsGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProductsGetRequest req = new Adexchangebuyer2AccountsProductsGetRequest("provident", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "repellat";
                key = "doloribus";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "nam";
                uploadProtocol = "earum";
            }};            

            Adexchangebuyer2AccountsProductsGetResponse res = sdk.accounts.adexchangebuyer2AccountsProductsGet(req, new Adexchangebuyer2AccountsProductsGetSecurity("officia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProductsList

List all products visible to the buyer (optionally filtered by the specified PQL query).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProductsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProductsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProductsListRequest req = new Adexchangebuyer2AccountsProductsListRequest("placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "sapiente";
                filter = "cumque";
                key = "vitae";
                oauthToken = "rerum";
                pageSize = 272229L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "fugit";
                uploadProtocol = "cumque";
            }};            

            Adexchangebuyer2AccountsProductsListResponse res = sdk.accounts.adexchangebuyer2AccountsProductsList(req, new Adexchangebuyer2AccountsProductsListSecurity("quae", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsAccept

Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsAcceptRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsAcceptResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsAcceptSecurity;
import org.openapis.openapi.models.shared.AcceptProposalRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsAcceptRequest req = new Adexchangebuyer2AccountsProposalsAcceptRequest("velit", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                acceptProposalRequest = new AcceptProposalRequest() {{
                    proposalRevision = "eius";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "eos";
                key = "sapiente";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "minima";
                uploadProtocol = "beatae";
            }};            

            Adexchangebuyer2AccountsProposalsAcceptResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsAccept(req, new Adexchangebuyer2AccountsProposalsAcceptSecurity("cupiditate", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsAddNote

Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsAddNoteRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsAddNoteResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsAddNoteSecurity;
import org.openapis.openapi.models.shared.AddNoteRequestInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsAddNoteRequest req = new Adexchangebuyer2AccountsProposalsAddNoteRequest("earum", "soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                addNoteRequestInput = new AddNoteRequestInput() {{
                    note = new NoteInput() {{
                        note = "illum";
                    }};;
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "maiores";
                key = "debitis";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "suscipit";
                uploadProtocol = "dolorem";
            }};            

            Adexchangebuyer2AccountsProposalsAddNoteResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsAddNote(req, new Adexchangebuyer2AccountsProposalsAddNoteSecurity("fugit", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.note != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsCancelNegotiation

Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsCancelNegotiationRequest req = new Adexchangebuyer2AccountsProposalsCancelNegotiationRequest("fuga", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nulla", "consequatur");
                    put("quasi", "et");
                    put("ducimus", "natus");
                    put("occaecati", "suscipit");
                }};
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "doloribus";
                key = "nulla";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "tempora";
                uploadProtocol = "nihil";
            }};            

            Adexchangebuyer2AccountsProposalsCancelNegotiationResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsCancelNegotiation(req, new Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity("molestiae", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsCompleteSetup

You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCompleteSetupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsCompleteSetupRequest req = new Adexchangebuyer2AccountsProposalsCompleteSetupRequest("iusto", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("reiciendis", "vel");
                    put("architecto", "fugiat");
                    put("doloremque", "dicta");
                    put("odio", "tempora");
                }};
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "aliquid";
                key = "ipsa";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "nostrum";
                uploadProtocol = "fugiat";
            }};            

            Adexchangebuyer2AccountsProposalsCompleteSetupResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsCompleteSetup(req, new Adexchangebuyer2AccountsProposalsCompleteSetupSecurity("expedita", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsCreate

Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCreateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsCreateSecurity;
import org.openapis.openapi.models.shared.AdSize;
import org.openapis.openapi.models.shared.AdSizeSizeTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.CreativeRestrictions;
import org.openapis.openapi.models.shared.CreativeRestrictionsCreativeFormatEnum;
import org.openapis.openapi.models.shared.CreativeRestrictionsSkippableAdTypeEnum;
import org.openapis.openapi.models.shared.CreativeSize;
import org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum;
import org.openapis.openapi.models.shared.CreativeSizeCreativeSizeTypeEnum;
import org.openapis.openapi.models.shared.CreativeSizeNativeTemplateEnum;
import org.openapis.openapi.models.shared.CreativeSizeSkippableAdTypeEnum;
import org.openapis.openapi.models.shared.CreativeSpecification;
import org.openapis.openapi.models.shared.CriteriaTargeting;
import org.openapis.openapi.models.shared.DayPart;
import org.openapis.openapi.models.shared.DayPartDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingTimeZoneTypeEnum;
import org.openapis.openapi.models.shared.DealInput;
import org.openapis.openapi.models.shared.DealPauseStatus;
import org.openapis.openapi.models.shared.DealPauseStatusFirstPausedByEnum;
import org.openapis.openapi.models.shared.DealServingMetadata;
import org.openapis.openapi.models.shared.DealSyndicationProductEnum;
import org.openapis.openapi.models.shared.DealTerms;
import org.openapis.openapi.models.shared.DealTermsBrandingTypeEnum;
import org.openapis.openapi.models.shared.FirstPartyMobileApplicationTargeting;
import org.openapis.openapi.models.shared.GuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.GuaranteedFixedPriceTermsReservationTypeEnum;
import org.openapis.openapi.models.shared.InventorySizeTargeting;
import org.openapis.openapi.models.shared.MarketplaceTargeting;
import org.openapis.openapi.models.shared.MobileApplicationTargeting;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.NonGuaranteedAuctionTerms;
import org.openapis.openapi.models.shared.NonGuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.OperatingSystemTargeting;
import org.openapis.openapi.models.shared.PlacementTargeting;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PricePerBuyer;
import org.openapis.openapi.models.shared.PricePricingTypeEnum;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.ProposalInput;
import org.openapis.openapi.models.shared.SellerInput;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TargetingCriteria;
import org.openapis.openapi.models.shared.TargetingValue;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.UrlTargeting;
import org.openapis.openapi.models.shared.VideoTargeting;
import org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum;
import org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsCreateRequest req = new Adexchangebuyer2AccountsProposalsCreateRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                proposalInput = new ProposalInput() {{
                    billedBuyer = new Buyer() {{
                        accountId = "aliquid";
                    }};;
                    buyer = new Buyer() {{
                        accountId = "perferendis";
                    }};;
                    buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                        add(new ContactInformation() {{
                            email = "Leta62@yahoo.com";
                            name = "Pat O'Keefe";
                        }}),
                        add(new ContactInformation() {{
                            email = "Kaitlyn83@gmail.com";
                            name = "Krista Jakubowski";
                        }}),
                    }};
                    buyerPrivateData = new PrivateData() {{
                        referenceId = "expedita";
                    }};;
                    deals = new org.openapis.openapi.models.shared.DealInput[]{{
                        add(new DealInput() {{
                            availableEndTime = "molestias";
                            availableStartTime = "cum";
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "aliquid";
                            }};
                            createProductId = "beatae";
                            createProductRevision = "voluptatum";
                            creativeRestrictions = new CreativeRestrictions() {{
                                creativeFormat = CreativeRestrictionsCreativeFormatEnum.DISPLAY;
                                creativeSpecifications = new org.openapis.openapi.models.shared.CreativeSpecification[]{{
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "est";
                                                sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                                width = "voluptatem";
                                            }}),
                                            add(new AdSize() {{
                                                height = "sapiente";
                                                sizeType = AdSizeSizeTypeEnum.FLUID;
                                                width = "architecto";
                                            }}),
                                            add(new AdSize() {{
                                                height = "fuga";
                                                sizeType = AdSizeSizeTypeEnum.FLUID;
                                                width = "debitis";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "voluptatem";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "deleniti";
                                        }};
                                    }}),
                                }};
                                skippableAdType = CreativeRestrictionsSkippableAdTypeEnum.NOT_SKIPPABLE;
                            }};
                            dealServingMetadata = new DealServingMetadata() {{
                                dealPauseStatus = new DealPauseStatus() {{
                                    buyerPauseReason = "ex";
                                    firstPausedBy = DealPauseStatusFirstPausedByEnum.SELLER;
                                    hasBuyerPaused = false;
                                    hasSellerPaused = false;
                                    sellerPauseReason = "rem";
                                }};
                            }};
                            dealTerms = new DealTerms() {{
                                brandingType = DealTermsBrandingTypeEnum.SEMI_TRANSPARENT;
                                description = "nemo";
                                estimatedGrossSpend = new Price() {{
                                    amount = new Money() {{
                                        currencyCode = "asperiores";
                                        nanos = 190567;
                                        units = "ullam";
                                    }};
                                    pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                }};
                                estimatedImpressionsPerDay = "illum";
                                guaranteedFixedPriceTerms = new GuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("quibusdam"),
                                                add("nam"),
                                                add("ipsam"),
                                                add("culpa"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "dolor";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "aliquam";
                                                    nanos = 80532;
                                                    units = "deleniti";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("dolor"),
                                                add("consequatur"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "architecto";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "sit";
                                                    nanos = 265039;
                                                    units = "fugit";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("quae"),
                                                add("dolor"),
                                                add("fugiat"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "ipsam";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "consequuntur";
                                                    nanos = 55107;
                                                    units = "quas";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                            }};
                                        }}),
                                    }};
                                    guaranteedImpressions = "impedit";
                                    guaranteedLooks = "officiis";
                                    impressionCap = "esse";
                                    minimumDailyLooks = "necessitatibus";
                                    percentShareOfVoice = "sed";
                                    reservationType = GuaranteedFixedPriceTermsReservationTypeEnum.RESERVATION_TYPE_UNSPECIFIED;
                                }};
                                nonGuaranteedAuctionTerms = new NonGuaranteedAuctionTerms() {{
                                    autoOptimizePrivateAuction = false;
                                    reservePricesPerBuyer = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("eum"),
                                                add("vel"),
                                                add("voluptatum"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "magnam";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "exercitationem";
                                                    nanos = 70410;
                                                    units = "porro";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                    }};
                                }};
                                nonGuaranteedFixedPriceTerms = new NonGuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("recusandae"),
                                                add("consequuntur"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptatem";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "exercitationem";
                                                    nanos = 895692;
                                                    units = "quasi";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("vero"),
                                                add("est"),
                                                add("harum"),
                                                add("sequi"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "doloribus";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "repudiandae";
                                                    nanos = 759283;
                                                    units = "occaecati";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("blanditiis"),
                                                add("officia"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptas";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "numquam";
                                                    nanos = 364912;
                                                    units = "quos";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("ducimus"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "nesciunt";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "fuga";
                                                    nanos = 514054;
                                                    units = "incidunt";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                    }};
                                }};
                                sellerTimeZone = "rem";
                            }};
                            description = "fugiat";
                            displayName = "dicta";
                            syndicationProduct = DealSyndicationProductEnum.CONTENT;
                            targeting = new MarketplaceTargeting() {{
                                geoTargeting = new CriteriaTargeting() {{
                                    excludedCriteriaIds = new String[]{{
                                        add("consectetur"),
                                    }};
                                    targetedCriteriaIds = new String[]{{
                                        add("cupiditate"),
                                    }};
                                }};
                                inventorySizeTargeting = new InventorySizeTargeting() {{
                                    excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                        add(new AdSize() {{
                                            height = "soluta";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "omnis";
                                        }}),
                                        add(new AdSize() {{
                                            height = "eos";
                                            sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                            width = "iste";
                                        }}),
                                        add(new AdSize() {{
                                            height = "magni";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "fuga";
                                        }}),
                                        add(new AdSize() {{
                                            height = "accusamus";
                                            sizeType = AdSizeSizeTypeEnum.FLUID;
                                            width = "distinctio";
                                        }}),
                                    }};
                                    targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                        add(new AdSize() {{
                                            height = "delectus";
                                            sizeType = AdSizeSizeTypeEnum.PIXEL;
                                            width = "praesentium";
                                        }}),
                                        add(new AdSize() {{
                                            height = "maxime";
                                            sizeType = AdSizeSizeTypeEnum.PIXEL;
                                            width = "temporibus";
                                        }}),
                                        add(new AdSize() {{
                                            height = "quos";
                                            sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                            width = "itaque";
                                        }}),
                                    }};
                                }};
                                placementTargeting = new PlacementTargeting() {{
                                    mobileApplicationTargeting = new MobileApplicationTargeting() {{
                                        firstPartyTargeting = new FirstPartyMobileApplicationTargeting() {{
                                            excludedAppIds = new String[]{{
                                                add("totam"),
                                                add("earum"),
                                            }};
                                            targetedAppIds = new String[]{{
                                                add("nam"),
                                                add("vero"),
                                            }};
                                        }};
                                    }};
                                    urlTargeting = new UrlTargeting() {{
                                        excludedUrls = new String[]{{
                                            add("ipsam"),
                                        }};
                                        targetedUrls = new String[]{{
                                            add("alias"),
                                            add("quasi"),
                                        }};
                                    }};
                                }};
                                technologyTargeting = new TechnologyTargeting() {{
                                    deviceCapabilityTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("maiores"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("sint"),
                                            add("nulla"),
                                        }};
                                    }};
                                    deviceCategoryTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("esse"),
                                            add("nemo"),
                                            add("reprehenderit"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("quis"),
                                            add("sint"),
                                            add("accusamus"),
                                        }};
                                    }};
                                    operatingSystemTargeting = new OperatingSystemTargeting() {{
                                        operatingSystemCriteria = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("hic"),
                                                add("necessitatibus"),
                                                add("asperiores"),
                                                add("ex"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("debitis"),
                                                add("delectus"),
                                            }};
                                        }};
                                        operatingSystemVersionCriteria = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("minus"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("laborum"),
                                                add("consectetur"),
                                                add("velit"),
                                            }};
                                        }};
                                    }};
                                }};
                                videoTargeting = new VideoTargeting() {{
                                    excludedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum[]{{
                                        add(VideoTargetingExcludedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                        add(VideoTargetingExcludedPositionTypesEnum.POSTROLL),
                                        add(VideoTargetingExcludedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                    }};
                                    targetedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum[]{{
                                        add(VideoTargetingTargetedPositionTypesEnum.POSTROLL),
                                        add(VideoTargetingTargetedPositionTypesEnum.MIDROLL),
                                        add(VideoTargetingTargetedPositionTypesEnum.PREROLL),
                                    }};
                                }};
                            }};
                            targetingCriterion = new org.openapis.openapi.models.shared.TargetingCriteria[]{{
                                add(new TargetingCriteria() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 778172;
                                                        width = 535468;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.NATIVE_;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 139072;
                                                    width = 974990;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 78969;
                                                            minutes = 818034;
                                                            nanos = 726878;
                                                            seconds = 102413;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 975425;
                                                            minutes = 156383;
                                                            nanos = 782090;
                                                            seconds = 304198;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 75359;
                                                            minutes = 36561;
                                                            nanos = 424663;
                                                            seconds = 406922;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 107617;
                                                            minutes = 877751;
                                                            nanos = 568218;
                                                            seconds = 431994;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "ut";
                                            stringValue = "perspiciatis";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 2677;
                                                        width = 391797;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 931505;
                                                        width = 242178;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 673838;
                                                        width = 250398;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 224467;
                                                        width = 483394;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.UNKNOWN_NATIVE_TEMPLATE;
                                                size = new Size() {{
                                                    height = 7468;
                                                    width = 639705;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 377406;
                                                            minutes = 705148;
                                                            nanos = 809365;
                                                            seconds = 596065;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 709036;
                                                            minutes = 537236;
                                                            nanos = 954334;
                                                            seconds = 455579;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 600193;
                                                            minutes = 897543;
                                                            nanos = 654082;
                                                            seconds = 769967;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 373040;
                                                            minutes = 357425;
                                                            nanos = 668234;
                                                            seconds = 621666;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "labore";
                                            stringValue = "veritatis";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 212434;
                                                        width = 322017;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 403026;
                                                    width = 367626;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 678060;
                                                            minutes = 487676;
                                                            nanos = 144691;
                                                            seconds = 545;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 168042;
                                                            minutes = 425402;
                                                            nanos = 64435;
                                                            seconds = 63553;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 208253;
                                                            minutes = 348357;
                                                            nanos = 932394;
                                                            seconds = 88248;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 215398;
                                                            minutes = 602229;
                                                            nanos = 858338;
                                                            seconds = 714376;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 157222;
                                                            minutes = 159146;
                                                            nanos = 342137;
                                                            seconds = 605712;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 727250;
                                                            minutes = 115661;
                                                            nanos = 663318;
                                                            seconds = 727888;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "officia";
                                            stringValue = "quos";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 49348;
                                                        width = 517137;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 715053;
                                                    width = 32273;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 824798;
                                                            minutes = 107210;
                                                            nanos = 668606;
                                                            seconds = 817339;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 545918;
                                                            minutes = 473143;
                                                            nanos = 588812;
                                                            seconds = 882284;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 733289;
                                                            minutes = 575078;
                                                            nanos = 409726;
                                                            seconds = 421819;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 373511;
                                                            minutes = 702952;
                                                            nanos = 515638;
                                                            seconds = 357207;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "voluptatibus";
                                            stringValue = "cum";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 34070;
                                                        width = 710456;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 885208;
                                                        width = 177005;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 844854;
                                                        width = 483518;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 510128;
                                                        width = 140316;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 621473;
                                                    width = 937117;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.SKIPPABLE_AD_TYPE_UNSPECIFIED;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 282837;
                                                            minutes = 693746;
                                                            nanos = 339631;
                                                            seconds = 106255;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 600213;
                                                            minutes = 476946;
                                                            nanos = 963198;
                                                            seconds = 585593;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 253625;
                                                            minutes = 256916;
                                                            nanos = 201010;
                                                            seconds = 873557;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 637856;
                                                            minutes = 491892;
                                                            nanos = 760744;
                                                            seconds = 898961;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 185518;
                                                            minutes = 708898;
                                                            nanos = 532669;
                                                            seconds = 587375;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 326269;
                                                            minutes = 809594;
                                                            nanos = 316542;
                                                            seconds = 204072;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 796397;
                                                            minutes = 433077;
                                                            nanos = 266408;
                                                            seconds = 357347;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 298264;
                                                            minutes = 914971;
                                                            nanos = 978173;
                                                            seconds = 731744;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "libero";
                                            stringValue = "ratione";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 779180;
                                                        width = 242099;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 795591;
                                                        width = 684553;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 770873;
                                                    width = 963741;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 997437;
                                                            minutes = 865946;
                                                            nanos = 362888;
                                                            seconds = 441321;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 45234;
                                                            minutes = 486410;
                                                            nanos = 325297;
                                                            seconds = 448369;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 567846;
                                                            minutes = 172195;
                                                            nanos = 621169;
                                                            seconds = 85076;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 498180;
                                                            minutes = 452729;
                                                            nanos = 866789;
                                                            seconds = 932666;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 763165;
                                                            minutes = 401428;
                                                            nanos = 311486;
                                                            seconds = 416692;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 888616;
                                                            minutes = 810839;
                                                            nanos = 697274;
                                                            seconds = 348192;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 211455;
                                                            minutes = 264619;
                                                            nanos = 59383;
                                                            seconds = 575534;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 876027;
                                                            minutes = 194901;
                                                            nanos = 918547;
                                                            seconds = 741232;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "earum";
                                            stringValue = "veniam";
                                        }}),
                                    }};
                                    key = "animi";
                                }}),
                                add(new TargetingCriteria() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 56877;
                                                        width = 497357;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 980486;
                                                        width = 87382;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 96450;
                                                        width = 386447;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.NATIVE_;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 566506;
                                                    width = 578210;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 988749;
                                                            minutes = 757364;
                                                            nanos = 574032;
                                                            seconds = 314573;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 944950;
                                                            minutes = 657319;
                                                            nanos = 559774;
                                                            seconds = 517326;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 484966;
                                                            minutes = 51170;
                                                            nanos = 901163;
                                                            seconds = 104078;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 554645;
                                                            minutes = 614438;
                                                            nanos = 826862;
                                                            seconds = 731634;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "velit";
                                            stringValue = "doloremque";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 42924;
                                                        width = 339756;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 333072;
                                                        width = 727481;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 99733;
                                                        width = 584593;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.INTERSTITIAL;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 820023;
                                                    width = 251464;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 993002;
                                                            minutes = 330267;
                                                            nanos = 164532;
                                                            seconds = 813880;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 512905;
                                                            minutes = 140384;
                                                            nanos = 863477;
                                                            seconds = 227362;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 68852;
                                                            minutes = 242637;
                                                            nanos = 705710;
                                                            seconds = 731065;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 395233;
                                                            minutes = 977518;
                                                            nanos = 310840;
                                                            seconds = 503748;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 392430;
                                                            minutes = 335977;
                                                            nanos = 391933;
                                                            seconds = 727771;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 794507;
                                                            minutes = 815200;
                                                            nanos = 706061;
                                                            seconds = 217663;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 973819;
                                                            minutes = 974589;
                                                            nanos = 162358;
                                                            seconds = 891581;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 290841;
                                                            minutes = 700928;
                                                            nanos = 179795;
                                                            seconds = 440777;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "neque";
                                            stringValue = "iusto";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 889448;
                                                        width = 495617;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 220104;
                                                        width = 118041;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 622894;
                                                        width = 784731;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 458970;
                                                    width = 854115;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 965090;
                                                            minutes = 482584;
                                                            nanos = 491201;
                                                            seconds = 729828;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 72350;
                                                            minutes = 69182;
                                                            nanos = 280114;
                                                            seconds = 879174;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "tempore";
                                            stringValue = "veniam";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 444121;
                                                        width = 506312;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 367046;
                                                        width = 999809;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 789770;
                                                        width = 197259;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 467119;
                                                        width = 534908;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 828841;
                                                    width = 304173;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 921719;
                                                            minutes = 9683;
                                                            nanos = 805264;
                                                            seconds = 136357;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 723942;
                                                            minutes = 711991;
                                                            nanos = 559174;
                                                            seconds = 590858;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 700045;
                                                            minutes = 492361;
                                                            nanos = 360934;
                                                            seconds = 873833;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 629377;
                                                            minutes = 833982;
                                                            nanos = 434827;
                                                            seconds = 213835;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 771226;
                                                            minutes = 415033;
                                                            nanos = 12171;
                                                            seconds = 32055;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 322829;
                                                            minutes = 60995;
                                                            nanos = 229567;
                                                            seconds = 849320;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "quidem";
                                            stringValue = "cum";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 514922;
                                                        width = 40710;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.NATIVE_;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 228646;
                                                    width = 587967;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 920272;
                                                            minutes = 10063;
                                                            nanos = 366244;
                                                            seconds = 475826;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 930840;
                                                            minutes = 708771;
                                                            nanos = 545779;
                                                            seconds = 43975;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 879522;
                                                            minutes = 178635;
                                                            nanos = 520081;
                                                            seconds = 115861;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 30661;
                                                            minutes = 244376;
                                                            nanos = 224413;
                                                            seconds = 124289;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 223291;
                                                            minutes = 582320;
                                                            nanos = 539813;
                                                            seconds = 107472;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 868255;
                                                            minutes = 287544;
                                                            nanos = 794988;
                                                            seconds = 456704;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 20950;
                                                            minutes = 698558;
                                                            nanos = 411615;
                                                            seconds = 46791;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 489459;
                                                            minutes = 998026;
                                                            nanos = 243678;
                                                            seconds = 784115;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "consectetur";
                                            stringValue = "eligendi";
                                        }}),
                                    }};
                                    key = "dignissimos";
                                }}),
                            }};
                            webPropertyCode = "consectetur";
                        }}),
                    }};
                    displayName = "soluta";
                    seller = new SellerInput() {{
                        accountId = "natus";
                    }};;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "tenetur";
                key = "aspernatur";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "illum";
                uploadProtocol = "laborum";
            }};            

            Adexchangebuyer2AccountsProposalsCreateResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsCreate(req, new Adexchangebuyer2AccountsProposalsCreateSecurity("dignissimos", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsGet

Gets a proposal given its ID. The proposal is returned at its head revision.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsGetRequest req = new Adexchangebuyer2AccountsProposalsGetRequest("qui", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                fields = "nihil";
                key = "non";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "hic";
                uploadProtocol = "deserunt";
            }};            

            Adexchangebuyer2AccountsProposalsGetResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsGet(req, new Adexchangebuyer2AccountsProposalsGetSecurity("delectus", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsList

List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsListRequest req = new Adexchangebuyer2AccountsProposalsListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "repudiandae";
                filter = "modi";
                filterSyntax = Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum.PQL;
                key = "explicabo";
                oauthToken = "accusamus";
                pageSize = 525809L;
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "deleniti";
                uploadProtocol = "enim";
            }};            

            Adexchangebuyer2AccountsProposalsListResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsList(req, new Adexchangebuyer2AccountsProposalsListSecurity("voluptate", "similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProposalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsPause

Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsPauseRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsPauseResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PauseProposalRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsPauseRequest req = new Adexchangebuyer2AccountsProposalsPauseRequest("minima", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                pauseProposalRequest = new PauseProposalRequest() {{
                    reason = "sit";
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "mollitia";
                key = "dignissimos";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "molestiae";
                uploadProtocol = "veniam";
            }};            

            Adexchangebuyer2AccountsProposalsPauseResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsPause(req, new Adexchangebuyer2AccountsProposalsPauseSecurity("reiciendis", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsResume

Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsResumeRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsResumeResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsResumeRequest req = new Adexchangebuyer2AccountsProposalsResumeRequest("modi", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("odio", "commodi");
                    put("numquam", "dolorum");
                    put("possimus", "voluptate");
                    put("consectetur", "nesciunt");
                }};
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "sunt";
                key = "distinctio";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "et";
                uploadProtocol = "facilis";
            }};            

            Adexchangebuyer2AccountsProposalsResumeResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsResume(req, new Adexchangebuyer2AccountsProposalsResumeSecurity("amet", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsProposalsUpdate

Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsUpdateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsUpdateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsProposalsUpdateSecurity;
import org.openapis.openapi.models.shared.AdSize;
import org.openapis.openapi.models.shared.AdSizeSizeTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.CreativeRestrictions;
import org.openapis.openapi.models.shared.CreativeRestrictionsCreativeFormatEnum;
import org.openapis.openapi.models.shared.CreativeRestrictionsSkippableAdTypeEnum;
import org.openapis.openapi.models.shared.CreativeSize;
import org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum;
import org.openapis.openapi.models.shared.CreativeSizeCreativeSizeTypeEnum;
import org.openapis.openapi.models.shared.CreativeSizeNativeTemplateEnum;
import org.openapis.openapi.models.shared.CreativeSizeSkippableAdTypeEnum;
import org.openapis.openapi.models.shared.CreativeSpecification;
import org.openapis.openapi.models.shared.CriteriaTargeting;
import org.openapis.openapi.models.shared.DayPart;
import org.openapis.openapi.models.shared.DayPartDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingTimeZoneTypeEnum;
import org.openapis.openapi.models.shared.DealInput;
import org.openapis.openapi.models.shared.DealPauseStatus;
import org.openapis.openapi.models.shared.DealPauseStatusFirstPausedByEnum;
import org.openapis.openapi.models.shared.DealServingMetadata;
import org.openapis.openapi.models.shared.DealSyndicationProductEnum;
import org.openapis.openapi.models.shared.DealTerms;
import org.openapis.openapi.models.shared.DealTermsBrandingTypeEnum;
import org.openapis.openapi.models.shared.FirstPartyMobileApplicationTargeting;
import org.openapis.openapi.models.shared.GuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.GuaranteedFixedPriceTermsReservationTypeEnum;
import org.openapis.openapi.models.shared.InventorySizeTargeting;
import org.openapis.openapi.models.shared.MarketplaceTargeting;
import org.openapis.openapi.models.shared.MobileApplicationTargeting;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.NonGuaranteedAuctionTerms;
import org.openapis.openapi.models.shared.NonGuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.OperatingSystemTargeting;
import org.openapis.openapi.models.shared.PlacementTargeting;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PricePerBuyer;
import org.openapis.openapi.models.shared.PricePricingTypeEnum;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.ProposalInput;
import org.openapis.openapi.models.shared.SellerInput;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TargetingCriteria;
import org.openapis.openapi.models.shared.TargetingValue;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.UrlTargeting;
import org.openapis.openapi.models.shared.VideoTargeting;
import org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum;
import org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsProposalsUpdateRequest req = new Adexchangebuyer2AccountsProposalsUpdateRequest("fuga", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                proposalInput = new ProposalInput() {{
                    billedBuyer = new Buyer() {{
                        accountId = "aut";
                    }};;
                    buyer = new Buyer() {{
                        accountId = "quos";
                    }};;
                    buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                        add(new ContactInformation() {{
                            email = "Arnulfo90@hotmail.com";
                            name = "Angelo Stokes";
                        }}),
                        add(new ContactInformation() {{
                            email = "Aaron.Vandervort27@gmail.com";
                            name = "Phyllis Tremblay Sr.";
                        }}),
                        add(new ContactInformation() {{
                            email = "Dillan_Rowe63@yahoo.com";
                            name = "Everett Dickinson";
                        }}),
                    }};
                    buyerPrivateData = new PrivateData() {{
                        referenceId = "impedit";
                    }};;
                    deals = new org.openapis.openapi.models.shared.DealInput[]{{
                        add(new DealInput() {{
                            availableEndTime = "odit";
                            availableStartTime = "velit";
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "reiciendis";
                            }};
                            createProductId = "repellat";
                            createProductRevision = "nulla";
                            creativeRestrictions = new CreativeRestrictions() {{
                                creativeFormat = CreativeRestrictionsCreativeFormatEnum.VIDEO;
                                creativeSpecifications = new org.openapis.openapi.models.shared.CreativeSpecification[]{{
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "doloremque";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "rerum";
                                            }}),
                                            add(new AdSize() {{
                                                height = "recusandae";
                                                sizeType = AdSizeSizeTypeEnum.FLUID;
                                                width = "non";
                                            }}),
                                            add(new AdSize() {{
                                                height = "rem";
                                                sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                                width = "ullam";
                                            }}),
                                            add(new AdSize() {{
                                                height = "quisquam";
                                                sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                                width = "voluptatibus";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "eligendi";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "officiis";
                                        }};
                                    }}),
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "architecto";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "optio";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "rem";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "facilis";
                                        }};
                                    }}),
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "a";
                                                sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                                width = "dicta";
                                            }}),
                                            add(new AdSize() {{
                                                height = "quos";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "dolore";
                                            }}),
                                            add(new AdSize() {{
                                                height = "modi";
                                                sizeType = AdSizeSizeTypeEnum.FLUID;
                                                width = "maxime";
                                            }}),
                                            add(new AdSize() {{
                                                height = "modi";
                                                sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                                width = "assumenda";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "vero";
                                            sizeType = AdSizeSizeTypeEnum.FLUID;
                                            width = "impedit";
                                        }};
                                    }}),
                                }};
                                skippableAdType = CreativeRestrictionsSkippableAdTypeEnum.NOT_SKIPPABLE;
                            }};
                            dealServingMetadata = new DealServingMetadata() {{
                                dealPauseStatus = new DealPauseStatus() {{
                                    buyerPauseReason = "accusamus";
                                    firstPausedBy = DealPauseStatusFirstPausedByEnum.BUYER;
                                    hasBuyerPaused = false;
                                    hasSellerPaused = false;
                                    sellerPauseReason = "reiciendis";
                                }};
                            }};
                            dealTerms = new DealTerms() {{
                                brandingType = DealTermsBrandingTypeEnum.BRANDING_TYPE_UNSPECIFIED;
                                description = "sint";
                                estimatedGrossSpend = new Price() {{
                                    amount = new Money() {{
                                        currencyCode = "nihil";
                                        nanos = 458412;
                                        units = "iure";
                                    }};
                                    pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                }};
                                estimatedImpressionsPerDay = "nesciunt";
                                guaranteedFixedPriceTerms = new GuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("neque"),
                                                add("corporis"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptas";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "consequuntur";
                                                    nanos = 641133;
                                                    units = "reprehenderit";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("ipsa"),
                                                add("rem"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "maiores";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "accusantium";
                                                    nanos = 331452;
                                                    units = "saepe";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("aliquam"),
                                                add("quos"),
                                                add("doloribus"),
                                                add("fugiat"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "est";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "delectus";
                                                    nanos = 245278;
                                                    units = "vitae";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("illo"),
                                                add("repellat"),
                                                add("nemo"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "doloribus";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "possimus";
                                                    nanos = 603323;
                                                    units = "incidunt";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                    }};
                                    guaranteedImpressions = "ipsam";
                                    guaranteedLooks = "cupiditate";
                                    impressionCap = "optio";
                                    minimumDailyLooks = "alias";
                                    percentShareOfVoice = "quidem";
                                    reservationType = GuaranteedFixedPriceTermsReservationTypeEnum.RESERVATION_TYPE_UNSPECIFIED;
                                }};
                                nonGuaranteedAuctionTerms = new NonGuaranteedAuctionTerms() {{
                                    autoOptimizePrivateAuction = false;
                                    reservePricesPerBuyer = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("consequuntur"),
                                                add("veniam"),
                                                add("debitis"),
                                                add("officia"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "sint";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "ut";
                                                    nanos = 256768;
                                                    units = "tenetur";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("in"),
                                                add("minima"),
                                                add("ex"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "minus";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "ab";
                                                    nanos = 108165;
                                                    units = "hic";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                    }};
                                }};
                                nonGuaranteedFixedPriceTerms = new NonGuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("ducimus"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "fuga";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "minima";
                                                    nanos = 102446;
                                                    units = "qui";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("incidunt"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "adipisci";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "praesentium";
                                                    nanos = 220528;
                                                    units = "exercitationem";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("impedit"),
                                                add("sit"),
                                                add("nemo"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "culpa";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "consequuntur";
                                                    nanos = 230571;
                                                    units = "deserunt";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("quod"),
                                                add("itaque"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "a";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "quisquam";
                                                    nanos = 316550;
                                                    units = "doloribus";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                            }};
                                        }}),
                                    }};
                                }};
                                sellerTimeZone = "officiis";
                            }};
                            description = "architecto";
                            displayName = "alias";
                            syndicationProduct = DealSyndicationProductEnum.VIDEO;
                            targeting = new MarketplaceTargeting() {{
                                geoTargeting = new CriteriaTargeting() {{
                                    excludedCriteriaIds = new String[]{{
                                        add("nobis"),
                                    }};
                                    targetedCriteriaIds = new String[]{{
                                        add("quia"),
                                        add("dicta"),
                                        add("vel"),
                                        add("perspiciatis"),
                                    }};
                                }};
                                inventorySizeTargeting = new InventorySizeTargeting() {{
                                    excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                        add(new AdSize() {{
                                            height = "ullam";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "accusantium";
                                        }}),
                                        add(new AdSize() {{
                                            height = "perferendis";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "provident";
                                        }}),
                                        add(new AdSize() {{
                                            height = "cumque";
                                            sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                            width = "quibusdam";
                                        }}),
                                        add(new AdSize() {{
                                            height = "quod";
                                            sizeType = AdSizeSizeTypeEnum.PIXEL;
                                            width = "recusandae";
                                        }}),
                                    }};
                                    targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                        add(new AdSize() {{
                                            height = "magnam";
                                            sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                            width = "laboriosam";
                                        }}),
                                    }};
                                }};
                                placementTargeting = new PlacementTargeting() {{
                                    mobileApplicationTargeting = new MobileApplicationTargeting() {{
                                        firstPartyTargeting = new FirstPartyMobileApplicationTargeting() {{
                                            excludedAppIds = new String[]{{
                                                add("odio"),
                                            }};
                                            targetedAppIds = new String[]{{
                                                add("provident"),
                                                add("cum"),
                                                add("doloribus"),
                                            }};
                                        }};
                                    }};
                                    urlTargeting = new UrlTargeting() {{
                                        excludedUrls = new String[]{{
                                            add("quidem"),
                                            add("itaque"),
                                            add("laboriosam"),
                                        }};
                                        targetedUrls = new String[]{{
                                            add("modi"),
                                            add("perspiciatis"),
                                            add("hic"),
                                        }};
                                    }};
                                }};
                                technologyTargeting = new TechnologyTargeting() {{
                                    deviceCapabilityTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("aspernatur"),
                                            add("libero"),
                                            add("nam"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("recusandae"),
                                            add("quod"),
                                        }};
                                    }};
                                    deviceCategoryTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("saepe"),
                                            add("autem"),
                                            add("quo"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("illum"),
                                        }};
                                    }};
                                    operatingSystemTargeting = new OperatingSystemTargeting() {{
                                        operatingSystemCriteria = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("illum"),
                                                add("facilis"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("mollitia"),
                                            }};
                                        }};
                                        operatingSystemVersionCriteria = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("recusandae"),
                                                add("distinctio"),
                                                add("pariatur"),
                                                add("ad"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("laborum"),
                                                add("eveniet"),
                                                add("laborum"),
                                                add("incidunt"),
                                            }};
                                        }};
                                    }};
                                }};
                                videoTargeting = new VideoTargeting() {{
                                    excludedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum[]{{
                                        add(VideoTargetingExcludedPositionTypesEnum.PREROLL),
                                        add(VideoTargetingExcludedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                        add(VideoTargetingExcludedPositionTypesEnum.PREROLL),
                                        add(VideoTargetingExcludedPositionTypesEnum.MIDROLL),
                                    }};
                                    targetedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum[]{{
                                        add(VideoTargetingTargetedPositionTypesEnum.MIDROLL),
                                        add(VideoTargetingTargetedPositionTypesEnum.MIDROLL),
                                        add(VideoTargetingTargetedPositionTypesEnum.MIDROLL),
                                    }};
                                }};
                            }};
                            targetingCriterion = new org.openapis.openapi.models.shared.TargetingCriteria[]{{
                                add(new TargetingCriteria() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 301309;
                                                        width = 308528;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 755868;
                                                        width = 942185;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 603650;
                                                    width = 860311;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 344289;
                                                            minutes = 460909;
                                                            nanos = 548849;
                                                            seconds = 684799;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 815225;
                                                            minutes = 773659;
                                                            nanos = 98610;
                                                            seconds = 647218;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 385739;
                                                            minutes = 41179;
                                                            nanos = 31574;
                                                            seconds = 816421;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 901008;
                                                            minutes = 807564;
                                                            nanos = 9375;
                                                            seconds = 51007;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 627161;
                                                            minutes = 783274;
                                                            nanos = 502453;
                                                            seconds = 60892;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 169819;
                                                            minutes = 885797;
                                                            nanos = 148379;
                                                            seconds = 898111;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "ipsa";
                                            stringValue = "excepturi";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 523365;
                                                        width = 118615;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 380595;
                                                        width = 938257;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 985360;
                                                        width = 244569;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 260588;
                                                        width = 458212;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.INTERSTITIAL;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 94697;
                                                    width = 203621;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 185816;
                                                            minutes = 771241;
                                                            nanos = 104736;
                                                            seconds = 278329;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 116558;
                                                            minutes = 139133;
                                                            nanos = 357639;
                                                            seconds = 701441;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 624498;
                                                            minutes = 424854;
                                                            nanos = 35581;
                                                            seconds = 664197;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 388169;
                                                            minutes = 401688;
                                                            nanos = 555679;
                                                            seconds = 85794;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 62688;
                                                            minutes = 631719;
                                                            nanos = 278116;
                                                            seconds = 462583;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 169312;
                                                            minutes = 646329;
                                                            nanos = 965095;
                                                            seconds = 609537;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "nesciunt";
                                            stringValue = "maxime";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 980410;
                                                        width = 512081;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 243904;
                                                        width = 971764;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 230305;
                                                        width = 363845;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 948444;
                                                    width = 555294;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 955466;
                                                            minutes = 749702;
                                                            nanos = 598316;
                                                            seconds = 34245;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 118917;
                                                            minutes = 795546;
                                                            nanos = 417539;
                                                            seconds = 908734;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 735740;
                                                            minutes = 693747;
                                                            nanos = 265930;
                                                            seconds = 916341;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 145435;
                                                            minutes = 259377;
                                                            nanos = 194058;
                                                            seconds = 758194;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "esse";
                                            stringValue = "blanditiis";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 930429;
                                                        width = 861591;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 643419;
                                                        width = 359097;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 246577;
                                                        width = 887701;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 315022;
                                                        width = 638609;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.NATIVE_;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 922094;
                                                    width = 35742;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 502106;
                                                            minutes = 260911;
                                                            nanos = 786189;
                                                            seconds = 177929;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 748023;
                                                            minutes = 620054;
                                                            nanos = 793568;
                                                            seconds = 154389;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 440847;
                                                            minutes = 800799;
                                                            nanos = 552440;
                                                            seconds = 548846;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 227870;
                                                            minutes = 473326;
                                                            nanos = 227156;
                                                            seconds = 675126;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 21358;
                                                            minutes = 897058;
                                                            nanos = 102316;
                                                            seconds = 564627;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 292177;
                                                            minutes = 125811;
                                                            nanos = 982991;
                                                            seconds = 205011;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 936845;
                                                            minutes = 330596;
                                                            nanos = 373106;
                                                            seconds = 51053;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 350387;
                                                            minutes = 331269;
                                                            nanos = 469994;
                                                            seconds = 320326;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "tenetur";
                                            stringValue = "quis";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 694728;
                                                        width = 831031;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 958146;
                                                    width = 152364;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 100233;
                                                            minutes = 240696;
                                                            nanos = 867115;
                                                            seconds = 688463;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 294266;
                                                            minutes = 976762;
                                                            nanos = 435353;
                                                            seconds = 127087;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 746688;
                                                            minutes = 677509;
                                                            nanos = 242531;
                                                            seconds = 937865;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 510020;
                                                            minutes = 621140;
                                                            nanos = 252473;
                                                            seconds = 97810;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 884361;
                                                            minutes = 687589;
                                                            nanos = 769156;
                                                            seconds = 42615;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 711871;
                                                            minutes = 549237;
                                                            nanos = 53733;
                                                            seconds = 643199;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 570423;
                                                            minutes = 167435;
                                                            nanos = 273677;
                                                            seconds = 821904;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 220824;
                                                            minutes = 700529;
                                                            nanos = 153582;
                                                            seconds = 883078;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "delectus";
                                            stringValue = "minus";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 37129;
                                                        width = 75850;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 14251;
                                                        width = 984031;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 823472;
                                                    width = 205499;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 652515;
                                                            minutes = 65121;
                                                            nanos = 552646;
                                                            seconds = 44571;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 251200;
                                                            minutes = 913284;
                                                            nanos = 324052;
                                                            seconds = 305047;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 557987;
                                                            minutes = 162450;
                                                            nanos = 982445;
                                                            seconds = 81581;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 400448;
                                                            minutes = 513185;
                                                            nanos = 665872;
                                                            seconds = 221329;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "consectetur";
                                            stringValue = "cumque";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 271306;
                                                        width = 503449;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 258059;
                                                        width = 196374;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 532320;
                                                        width = 27078;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 703189;
                                                        width = 84178;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.NATIVE_;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 694088;
                                                    width = 517121;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 471207;
                                                            minutes = 374062;
                                                            nanos = 658199;
                                                            seconds = 413780;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 716;
                                                            minutes = 686380;
                                                            nanos = 14780;
                                                            seconds = 295892;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 303292;
                                                            minutes = 613702;
                                                            nanos = 355889;
                                                            seconds = 755738;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 810302;
                                                            minutes = 378403;
                                                            nanos = 577590;
                                                            seconds = 600934;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 469170;
                                                            minutes = 78246;
                                                            nanos = 725316;
                                                            seconds = 371287;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 97659;
                                                            minutes = 766591;
                                                            nanos = 117491;
                                                            seconds = 688684;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "facilis";
                                            stringValue = "beatae";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 543353;
                                                        width = 886118;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 739633;
                                                        width = 863330;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 956871;
                                                        width = 775427;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 793282;
                                                    width = 781491;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 726851;
                                                            minutes = 774880;
                                                            nanos = 457150;
                                                            seconds = 944033;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 802216;
                                                            minutes = 36691;
                                                            nanos = 743531;
                                                            seconds = 147400;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 756287;
                                                            minutes = 927490;
                                                            nanos = 83791;
                                                            seconds = 13637;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 516124;
                                                            minutes = 480421;
                                                            nanos = 219860;
                                                            seconds = 917152;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 169935;
                                                            minutes = 701841;
                                                            nanos = 39222;
                                                            seconds = 30192;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 430146;
                                                            minutes = 873320;
                                                            nanos = 431253;
                                                            seconds = 444479;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "blanditiis";
                                            stringValue = "nihil";
                                        }}),
                                    }};
                                    key = "atque";
                                }}),
                                add(new TargetingCriteria() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 667213;
                                                        width = 318379;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.INTERSTITIAL;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.UNKNOWN_NATIVE_TEMPLATE;
                                                size = new Size() {{
                                                    height = 62130;
                                                    width = 556133;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 958068;
                                                            minutes = 901651;
                                                            nanos = 965735;
                                                            seconds = 642234;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 620126;
                                                            minutes = 763869;
                                                            nanos = 617497;
                                                            seconds = 312511;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 156098;
                                                            minutes = 887284;
                                                            nanos = 651467;
                                                            seconds = 765070;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 337081;
                                                            minutes = 313590;
                                                            nanos = 430235;
                                                            seconds = 365539;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "nesciunt";
                                            stringValue = "sit";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 912151;
                                                        width = 506250;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 118349;
                                                        width = 144179;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 25190;
                                                        width = 396234;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 898638;
                                                        width = 148975;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.INTERSTITIAL;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.UNKNOWN_NATIVE_TEMPLATE;
                                                size = new Size() {{
                                                    height = 200190;
                                                    width = 963913;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 266680;
                                                            minutes = 122085;
                                                            nanos = 771092;
                                                            seconds = 259600;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 528320;
                                                            minutes = 60078;
                                                            nanos = 872991;
                                                            seconds = 209860;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 132305;
                                                            minutes = 80284;
                                                            nanos = 193236;
                                                            seconds = 143078;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 685467;
                                                            minutes = 943103;
                                                            nanos = 49499;
                                                            seconds = 211301;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "aperiam";
                                            stringValue = "aspernatur";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 760279;
                                                        width = 750537;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 404422;
                                                        width = 998023;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 711615;
                                                    width = 944203;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 106682;
                                                            minutes = 627341;
                                                            nanos = 408774;
                                                            seconds = 657301;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 296128;
                                                            minutes = 945419;
                                                            nanos = 493407;
                                                            seconds = 457835;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 512488;
                                                            minutes = 461050;
                                                            nanos = 908539;
                                                            seconds = 935161;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 246402;
                                                            minutes = 884765;
                                                            nanos = 263346;
                                                            seconds = 701978;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "dignissimos";
                                            stringValue = "ipsam";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 308819;
                                                        width = 103988;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 506966;
                                                        width = 907899;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 730003;
                                                    width = 615277;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.SKIPPABLE_AD_TYPE_UNSPECIFIED;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 835646;
                                                            minutes = 576657;
                                                            nanos = 483459;
                                                            seconds = 315671;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 881189;
                                                            minutes = 44467;
                                                            nanos = 916419;
                                                            seconds = 512310;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 63825;
                                                            minutes = 607545;
                                                            nanos = 848063;
                                                            seconds = 526584;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 949370;
                                                            minutes = 537946;
                                                            nanos = 264958;
                                                            seconds = 937664;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 305189;
                                                            minutes = 286726;
                                                            nanos = 983434;
                                                            seconds = 196646;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 902132;
                                                            minutes = 8904;
                                                            nanos = 458723;
                                                            seconds = 891302;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 789016;
                                                            minutes = 769047;
                                                            nanos = 302878;
                                                            seconds = 677895;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 644827;
                                                            minutes = 319834;
                                                            nanos = 970411;
                                                            seconds = 196451;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "laborum";
                                            stringValue = "nobis";
                                        }}),
                                    }};
                                    key = "quibusdam";
                                }}),
                            }};
                            webPropertyCode = "omnis";
                        }}),
                        add(new DealInput() {{
                            availableEndTime = "aut";
                            availableStartTime = "ipsam";
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "officia";
                            }};
                            createProductId = "cupiditate";
                            createProductRevision = "reprehenderit";
                            creativeRestrictions = new CreativeRestrictions() {{
                                creativeFormat = CreativeRestrictionsCreativeFormatEnum.CREATIVE_FORMAT_UNSPECIFIED;
                                creativeSpecifications = new org.openapis.openapi.models.shared.CreativeSpecification[]{{
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "ad";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "molestiae";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "quia";
                                            sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                            width = "sed";
                                        }};
                                    }}),
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "iusto";
                                                sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                                width = "eos";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "repellendus";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "ipsa";
                                        }};
                                    }}),
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "dolore";
                                                sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                                width = "accusantium";
                                            }}),
                                            add(new AdSize() {{
                                                height = "distinctio";
                                                sizeType = AdSizeSizeTypeEnum.FLUID;
                                                width = "quam";
                                            }}),
                                            add(new AdSize() {{
                                                height = "est";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "delectus";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "culpa";
                                            sizeType = AdSizeSizeTypeEnum.INTERSTITIAL;
                                            width = "iusto";
                                        }};
                                    }}),
                                    add(new CreativeSpecification() {{
                                        creativeCompanionSizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "voluptatibus";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "non";
                                            }}),
                                            add(new AdSize() {{
                                                height = "ullam";
                                                sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                                width = "voluptas";
                                            }}),
                                            add(new AdSize() {{
                                                height = "doloribus";
                                                sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                                width = "recusandae";
                                            }}),
                                            add(new AdSize() {{
                                                height = "corporis";
                                                sizeType = AdSizeSizeTypeEnum.PIXEL;
                                                width = "necessitatibus";
                                            }}),
                                        }};
                                        creativeSize = new AdSize() {{
                                            height = "distinctio";
                                            sizeType = AdSizeSizeTypeEnum.FLUID;
                                            width = "laboriosam";
                                        }};
                                    }}),
                                }};
                                skippableAdType = CreativeRestrictionsSkippableAdTypeEnum.SKIPPABLE_AD_TYPE_UNSPECIFIED;
                            }};
                            dealServingMetadata = new DealServingMetadata() {{
                                dealPauseStatus = new DealPauseStatus() {{
                                    buyerPauseReason = "optio";
                                    firstPausedBy = DealPauseStatusFirstPausedByEnum.BUYER_SELLER_ROLE_UNSPECIFIED;
                                    hasBuyerPaused = false;
                                    hasSellerPaused = false;
                                    sellerPauseReason = "sunt";
                                }};
                            }};
                            dealTerms = new DealTerms() {{
                                brandingType = DealTermsBrandingTypeEnum.BRANDING_TYPE_UNSPECIFIED;
                                description = "voluptatibus";
                                estimatedGrossSpend = new Price() {{
                                    amount = new Money() {{
                                        currencyCode = "doloremque";
                                        nanos = 149498;
                                        units = "amet";
                                    }};
                                    pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                }};
                                estimatedImpressionsPerDay = "in";
                                guaranteedFixedPriceTerms = new GuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("ratione"),
                                                add("dolor"),
                                                add("nisi"),
                                                add("dignissimos"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "reiciendis";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "itaque";
                                                    nanos = 114767;
                                                    units = "est";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("minus"),
                                                add("quos"),
                                                add("possimus"),
                                                add("maiores"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "odio";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "provident";
                                                    nanos = 960933;
                                                    units = "aperiam";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                    }};
                                    guaranteedImpressions = "nesciunt";
                                    guaranteedLooks = "provident";
                                    impressionCap = "ex";
                                    minimumDailyLooks = "repellendus";
                                    percentShareOfVoice = "unde";
                                    reservationType = GuaranteedFixedPriceTermsReservationTypeEnum.RESERVATION_TYPE_UNSPECIFIED;
                                }};
                                nonGuaranteedAuctionTerms = new NonGuaranteedAuctionTerms() {{
                                    autoOptimizePrivateAuction = false;
                                    reservePricesPerBuyer = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("commodi"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "labore";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "expedita";
                                                    nanos = 446737;
                                                    units = "quisquam";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("nulla"),
                                                add("maiores"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "distinctio";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "mollitia";
                                                    nanos = 770997;
                                                    units = "accusamus";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("blanditiis"),
                                                add("cum"),
                                                add("dicta"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "impedit";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "tempora";
                                                    nanos = 908249;
                                                    units = "repudiandae";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("quas"),
                                                add("impedit"),
                                                add("vel"),
                                                add("eligendi"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "recusandae";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "ex";
                                                    nanos = 105094;
                                                    units = "veritatis";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                            }};
                                        }}),
                                    }};
                                }};
                                nonGuaranteedFixedPriceTerms = new NonGuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("quidem"),
                                                add("illo"),
                                                add("quo"),
                                                add("dignissimos"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "minus";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "distinctio";
                                                    nanos = 823341;
                                                    units = "cum";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("earum"),
                                                add("quod"),
                                                add("nihil"),
                                                add("quaerat"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "ipsum";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "ducimus";
                                                    nanos = 514625;
                                                    units = "rerum";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_MILLE;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("ad"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "sequi";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "beatae";
                                                    nanos = 481042;
                                                    units = "esse";
                                                }};
                                                pricingType = PricePricingTypeEnum.PRICING_TYPE_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            advertiserIds = new String[]{{
                                                add("nulla"),
                                                add("impedit"),
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "cupiditate";
                                            }};
                                            price = new Price() {{
                                                amount = new Money() {{
                                                    currencyCode = "illo";
                                                    nanos = 348665;
                                                    units = "laborum";
                                                }};
                                                pricingType = PricePricingTypeEnum.COST_PER_DAY;
                                            }};
                                        }}),
                                    }};
                                }};
                                sellerTimeZone = "fugit";
                            }};
                            description = "maxime";
                            displayName = "dolorum";
                            syndicationProduct = DealSyndicationProductEnum.GAMES;
                            targeting = new MarketplaceTargeting() {{
                                geoTargeting = new CriteriaTargeting() {{
                                    excludedCriteriaIds = new String[]{{
                                        add("illum"),
                                        add("quibusdam"),
                                    }};
                                    targetedCriteriaIds = new String[]{{
                                        add("esse"),
                                        add("explicabo"),
                                    }};
                                }};
                                inventorySizeTargeting = new InventorySizeTargeting() {{
                                    excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                        add(new AdSize() {{
                                            height = "temporibus";
                                            sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                            width = "ipsa";
                                        }}),
                                    }};
                                    targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                        add(new AdSize() {{
                                            height = "exercitationem";
                                            sizeType = AdSizeSizeTypeEnum.NATIVE_;
                                            width = "repudiandae";
                                        }}),
                                        add(new AdSize() {{
                                            height = "aspernatur";
                                            sizeType = AdSizeSizeTypeEnum.FLUID;
                                            width = "neque";
                                        }}),
                                        add(new AdSize() {{
                                            height = "officia";
                                            sizeType = AdSizeSizeTypeEnum.PIXEL;
                                            width = "harum";
                                        }}),
                                        add(new AdSize() {{
                                            height = "ducimus";
                                            sizeType = AdSizeSizeTypeEnum.SIZE_TYPE_UNSPECIFIED;
                                            width = "perferendis";
                                        }}),
                                    }};
                                }};
                                placementTargeting = new PlacementTargeting() {{
                                    mobileApplicationTargeting = new MobileApplicationTargeting() {{
                                        firstPartyTargeting = new FirstPartyMobileApplicationTargeting() {{
                                            excludedAppIds = new String[]{{
                                                add("iusto"),
                                                add("corrupti"),
                                                add("molestiae"),
                                            }};
                                            targetedAppIds = new String[]{{
                                                add("iure"),
                                                add("ab"),
                                            }};
                                        }};
                                    }};
                                    urlTargeting = new UrlTargeting() {{
                                        excludedUrls = new String[]{{
                                            add("amet"),
                                            add("sapiente"),
                                        }};
                                        targetedUrls = new String[]{{
                                            add("est"),
                                            add("iure"),
                                        }};
                                    }};
                                }};
                                technologyTargeting = new TechnologyTargeting() {{
                                    deviceCapabilityTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("provident"),
                                            add("laudantium"),
                                            add("nam"),
                                            add("nemo"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("ipsam"),
                                            add("minima"),
                                        }};
                                    }};
                                    deviceCategoryTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("perferendis"),
                                            add("corrupti"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("fugiat"),
                                        }};
                                    }};
                                    operatingSystemTargeting = new OperatingSystemTargeting() {{
                                        operatingSystemCriteria = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("doloremque"),
                                                add("cum"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("similique"),
                                                add("porro"),
                                                add("impedit"),
                                                add("nisi"),
                                            }};
                                        }};
                                        operatingSystemVersionCriteria = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("soluta"),
                                                add("fugiat"),
                                                add("laboriosam"),
                                                add("nam"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("maiores"),
                                                add("consectetur"),
                                            }};
                                        }};
                                    }};
                                }};
                                videoTargeting = new VideoTargeting() {{
                                    excludedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum[]{{
                                        add(VideoTargetingExcludedPositionTypesEnum.POSTROLL),
                                        add(VideoTargetingExcludedPositionTypesEnum.MIDROLL),
                                        add(VideoTargetingExcludedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                        add(VideoTargetingExcludedPositionTypesEnum.MIDROLL),
                                    }};
                                    targetedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum[]{{
                                        add(VideoTargetingTargetedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                    }};
                                }};
                            }};
                            targetingCriterion = new org.openapis.openapi.models.shared.TargetingCriteria[]{{
                                add(new TargetingCriteria() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 821016;
                                                        width = 143061;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 373054;
                                                        width = 343454;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 196852;
                                                        width = 529310;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 748606;
                                                    width = 269600;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 46384;
                                                            minutes = 915408;
                                                            nanos = 822711;
                                                            seconds = 146583;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 27946;
                                                            minutes = 919171;
                                                            nanos = 360635;
                                                            seconds = 411626;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 305267;
                                                            minutes = 501768;
                                                            nanos = 943063;
                                                            seconds = 980649;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 990652;
                                                            minutes = 420985;
                                                            nanos = 198892;
                                                            seconds = 585628;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "provident";
                                            stringValue = "beatae";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 827314;
                                                        width = 776421;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 684499;
                                                        width = 733763;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 417333;
                                                        width = 146742;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 393122;
                                                    width = 397160;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 68292;
                                                            minutes = 929067;
                                                            nanos = 790305;
                                                            seconds = 53529;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 4929;
                                                            minutes = 181622;
                                                            nanos = 163263;
                                                            seconds = 112224;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 193334;
                                                            minutes = 227431;
                                                            nanos = 346608;
                                                            seconds = 847018;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 506532;
                                                            minutes = 601626;
                                                            nanos = 629461;
                                                            seconds = 753261;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "amet";
                                            stringValue = "debitis";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 27400;
                                                        width = 778039;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 329973;
                                                        width = 307532;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 591143;
                                                        width = 875693;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 938094;
                                                        width = 42763;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.UNKNOWN_NATIVE_TEMPLATE;
                                                size = new Size() {{
                                                    height = 43715;
                                                    width = 273732;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 638363;
                                                            minutes = 406493;
                                                            nanos = 101770;
                                                            seconds = 953564;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 673010;
                                                            minutes = 84288;
                                                            nanos = 801816;
                                                            seconds = 951103;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 34989;
                                                            minutes = 415125;
                                                            nanos = 538944;
                                                            seconds = 519985;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 945637;
                                                            minutes = 451807;
                                                            nanos = 461754;
                                                            seconds = 799830;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "sapiente";
                                            stringValue = "reiciendis";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 66596;
                                                        width = 405789;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 235970;
                                                        width = 982409;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 153097;
                                                        width = 657141;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 528315;
                                                    width = 21668;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 945190;
                                                            minutes = 959696;
                                                            nanos = 242013;
                                                            seconds = 240292;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 250298;
                                                            minutes = 763140;
                                                            nanos = 850196;
                                                            seconds = 870183;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 562066;
                                                            minutes = 371295;
                                                            nanos = 456222;
                                                            seconds = 675755;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 596185;
                                                            minutes = 915647;
                                                            nanos = 428810;
                                                            seconds = 95123;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 484942;
                                                            minutes = 416934;
                                                            nanos = 780789;
                                                            seconds = 400470;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 648497;
                                                            minutes = 695347;
                                                            nanos = 126512;
                                                            seconds = 92851;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "magni";
                                            stringValue = "natus";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 987384;
                                                        width = 926027;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 787452;
                                                        width = 818078;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.INTERSTITIAL;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 588473;
                                                    width = 221490;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 431258;
                                                            minutes = 385291;
                                                            nanos = 672627;
                                                            seconds = 422276;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 828481;
                                                            minutes = 129631;
                                                            nanos = 852689;
                                                            seconds = 41306;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "alias";
                                            stringValue = "velit";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 555386;
                                                        width = 802976;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.NATIVE_;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_CONTENT_AD;
                                                size = new Size() {{
                                                    height = 39047;
                                                    width = 516833;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 144058;
                                                            minutes = 84207;
                                                            nanos = 899652;
                                                            seconds = 611970;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 116463;
                                                            minutes = 369099;
                                                            nanos = 163181;
                                                            seconds = 765271;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 247615;
                                                            minutes = 109569;
                                                            nanos = 123495;
                                                            seconds = 565845;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 107042;
                                                            minutes = 420233;
                                                            nanos = 494765;
                                                            seconds = 728474;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 900676;
                                                            minutes = 218783;
                                                            nanos = 769872;
                                                            seconds = 550799;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 849690;
                                                            minutes = 717853;
                                                            nanos = 32945;
                                                            seconds = 249803;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.TUESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 10164;
                                                            minutes = 515433;
                                                            nanos = 831067;
                                                            seconds = 415953;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 843679;
                                                            minutes = 231255;
                                                            nanos = 377680;
                                                            seconds = 307874;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "tenetur";
                                            stringValue = "assumenda";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 3709;
                                                        width = 404121;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 845078;
                                                        width = 116867;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 154840;
                                                        width = 412481;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 255264;
                                                    width = 523109;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.NOT_SKIPPABLE;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 359874;
                                                            minutes = 797527;
                                                            nanos = 175803;
                                                            seconds = 808050;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 570039;
                                                            minutes = 927021;
                                                            nanos = 551778;
                                                            seconds = 115561;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 217279;
                                                            minutes = 9358;
                                                            nanos = 742899;
                                                            seconds = 898155;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 196000;
                                                            minutes = 925847;
                                                            nanos = 286329;
                                                            seconds = 240624;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 45677;
                                                            minutes = 172696;
                                                            nanos = 848860;
                                                            seconds = 481553;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 168976;
                                                            minutes = 109683;
                                                            nanos = 396884;
                                                            seconds = 321697;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.PUBLISHER;
                                            }};
                                            longValue = "vel";
                                            stringValue = "minima";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 311247;
                                                        width = 94122;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 525223;
                                                        width = 493579;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_VIDEO_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 590969;
                                                    width = 818422;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.SKIPPABLE_AD_TYPE_UNSPECIFIED;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SUNDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 601228;
                                                            minutes = 645609;
                                                            nanos = 834587;
                                                            seconds = 7919;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 237972;
                                                            minutes = 39069;
                                                            nanos = 761927;
                                                            seconds = 269731;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "cumque";
                                            stringValue = "maxime";
                                        }}),
                                    }};
                                    key = "et";
                                }}),
                                add(new TargetingCriteria() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 270477;
                                                        width = 177337;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 616183;
                                                        width = 32719;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.NATIVE_APP_INSTALL_AD;
                                                size = new Size() {{
                                                    height = 703407;
                                                    width = 514609;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 642576;
                                                            minutes = 312690;
                                                            nanos = 361371;
                                                            seconds = 884325;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 481307;
                                                            minutes = 958533;
                                                            nanos = 459086;
                                                            seconds = 207512;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "quisquam";
                                            stringValue = "praesentium";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 29881;
                                                        width = 665960;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.REGULAR;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.UNKNOWN_NATIVE_TEMPLATE;
                                                size = new Size() {{
                                                    height = 621810;
                                                    width = 973894;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.GENERIC;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 841816;
                                                            minutes = 937591;
                                                            nanos = 566669;
                                                            seconds = 256567;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 476801;
                                                            minutes = 773833;
                                                            nanos = 621883;
                                                            seconds = 656159;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.THURSDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 399585;
                                                            minutes = 469384;
                                                            nanos = 706328;
                                                            seconds = 759451;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 279673;
                                                            minutes = 178201;
                                                            nanos = 299379;
                                                            seconds = 171172;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 431843;
                                                            minutes = 423701;
                                                            nanos = 320748;
                                                            seconds = 552287;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 74124;
                                                            minutes = 383381;
                                                            nanos = 844471;
                                                            seconds = 855484;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                            }};
                                            longValue = "culpa";
                                            stringValue = "atque";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new CreativeSize() {{
                                                allowedFormats = new org.openapis.openapi.models.shared.CreativeSizeAllowedFormatsEnum[]{{
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.UNKNOWN),
                                                    add(CreativeSizeAllowedFormatsEnum.AUDIO),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.Size[]{{
                                                    add(new Size() {{
                                                        height = 711310;
                                                        width = 266370;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 768244;
                                                        width = 368599;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 578081;
                                                        width = 219279;
                                                    }}),
                                                    add(new Size() {{
                                                        height = 879193;
                                                        width = 789038;
                                                    }}),
                                                }};
                                                creativeSizeType = CreativeSizeCreativeSizeTypeEnum.CREATIVE_SIZE_TYPE_UNSPECIFIED;
                                                nativeTemplate = CreativeSizeNativeTemplateEnum.UNKNOWN_NATIVE_TEMPLATE;
                                                size = new Size() {{
                                                    height = 779823;
                                                    width = 840017;
                                                }};
                                                skippableAdType = CreativeSizeSkippableAdTypeEnum.INSTREAM_SELECT;
                                            }};
                                            dayPartTargetingValue = new DayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.SATURDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 59023;
                                                            minutes = 879208;
                                                            nanos = 810982;
                                                            seconds = 464878;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 627756;
                                                            minutes = 962408;
                                                            nanos = 904983;
                                                            seconds = 813975;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 869088;
                                                            minutes = 561121;
                                                            nanos = 12877;
                                                            seconds = 836548;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 947515;
                                                            minutes = 278050;
                                                            nanos = 254648;
                                                            seconds = 546950;
                                                        }};
                                                    }}),
                                                    add(new DayPart() {{
                                                        dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                                        endTime = new TimeOfDay() {{
                                                            hours = 293617;
                                                            minutes = 456599;
                                                            nanos = 968205;
                                                            seconds = 611792;
                                                        }};
                                                        startTime = new TimeOfDay() {{
                                                            hours = 226196;
                                                            minutes = 581019;
                                                            nanos = 15738;
                                                            seconds = 771289;
                                                        }};
                                                    }}),
                                                }};
                                                timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_SOURCE_UNSPECIFIED;
                                            }};
                                            longValue = "quos";
                                            stringValue = "blanditiis";
                                        }}),
                                    }};
                                    key = "quas";
                                }}),
                            }};
                            webPropertyCode = "voluptatem";
                        }}),
                    }};
                    displayName = "provident";
                    seller = new SellerInput() {{
                        accountId = "quas";
                    }};;
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "facilis";
                key = "maiores";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "a";
                uploadProtocol = "consectetur";
            }};            

            Adexchangebuyer2AccountsProposalsUpdateResponse res = sdk.accounts.adexchangebuyer2AccountsProposalsUpdate(req, new Adexchangebuyer2AccountsProposalsUpdateSecurity("sapiente", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsPublisherProfilesGet

Gets the requested publisher profile by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsPublisherProfilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsPublisherProfilesGetRequest req = new Adexchangebuyer2AccountsPublisherProfilesGetRequest("assumenda", "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "aut";
                key = "quam";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "asperiores";
                uploadProtocol = "modi";
            }};            

            Adexchangebuyer2AccountsPublisherProfilesGetResponse res = sdk.accounts.adexchangebuyer2AccountsPublisherProfilesGet(req, new Adexchangebuyer2AccountsPublisherProfilesGetSecurity("facere", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.publisherProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2AccountsPublisherProfilesList

List all publisher profiles visible to the buyer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsPublisherProfilesListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsPublisherProfilesListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsPublisherProfilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsPublisherProfilesListRequest req = new Adexchangebuyer2AccountsPublisherProfilesListRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "fugiat";
                key = "soluta";
                oauthToken = "ipsa";
                pageSize = 967047L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "eos";
                uploadProtocol = "quas";
            }};            

            Adexchangebuyer2AccountsPublisherProfilesListResponse res = sdk.accounts.adexchangebuyer2AccountsPublisherProfilesList(req, new Adexchangebuyer2AccountsPublisherProfilesListSecurity("quasi", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPublisherProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
