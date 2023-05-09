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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesList(req, new AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAuctionPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe

Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "repellendus");
                }};
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe(req, new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.auctionPackage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients

Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubscribeClientsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                subscribeClientsRequest = new SubscribeClientsRequest() {{
                    clients = new String[]{{
                        add("nam"),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients(req, new AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity("molestiae", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.auctionPackage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe

Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("esse", "ipsum");
                    put("excepturi", "aspernatur");
                    put("perferendis", "ad");
                }};
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe(req, new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.auctionPackage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients

Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UnsubscribeClientsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest req = new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                unsubscribeClientsRequest = new UnsubscribeClientsRequest() {{
                    clients = new String[]{{
                        add("quidem"),
                        add("architecto"),
                        add("ipsa"),
                        add("reiciendis"),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients(req, new AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity("omnis", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.auctionPackage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersClientsCreate

Creates a new client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientInput;
import org.openapis.openapi.models.shared.ClientRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsCreateRequest req = new AuthorizedbuyersmarketplaceBuyersClientsCreateRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                clientInput = new ClientInput() {{
                    displayName = "accusantium";
                    partnerClientId = "iure";
                    role = ClientRoleEnum.CLIENT_DEAL_NEGOTIATOR;
                    sellerVisible = false;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            AuthorizedbuyersmarketplaceBuyersClientsCreateResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsCreate(req, new AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity("occaecati", "numquam") {{
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

## authorizedbuyersmarketplaceBuyersClientsList

Lists all the clients for the current buyer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsListRequest req = new AuthorizedbuyersmarketplaceBuyersClientsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                filter = "quis";
                key = "vitae";
                oauthToken = "laborum";
                pageSize = 656330L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            AuthorizedbuyersmarketplaceBuyersClientsListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsList(req, new AuthorizedbuyersmarketplaceBuyersClientsListSecurity("tenetur", "ipsam") {{
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

## authorizedbuyersmarketplaceBuyersClientsUsersActivate

Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest req = new AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quasi", "error");
                }};
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

            AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsUsersActivate(req, new AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity("ipsa", "omnis") {{
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

## authorizedbuyersmarketplaceBuyersClientsUsersCreate

Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientUserInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest req = new AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                clientUserInput = new ClientUserInput() {{
                    email = "Alison97@gmail.com";
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
            }};            

            AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsUsersCreate(req, new AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity("repudiandae", "quae") {{
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

## authorizedbuyersmarketplaceBuyersClientsUsersDeactivate

Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest req = new AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("excepturi", "pariatur");
                    put("modi", "praesentium");
                    put("rem", "voluptates");
                }};
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsUsersDeactivate(req, new AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity("quibusdam", "explicabo") {{
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

## authorizedbuyersmarketplaceBuyersClientsUsersDelete

Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest req = new AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsUsersDelete(req, new AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity("assumenda", "ipsam") {{
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

## authorizedbuyersmarketplaceBuyersClientsUsersList

Lists all client users for a specified client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest req = new AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "facilis";
                key = "tempore";
                oauthToken = "labore";
                pageSize = 962189L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersClientsUsersList(req, new AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity("aliquid", "provident") {{
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

## authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative

Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity;
import org.openapis.openapi.models.shared.AddCreativeRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest req = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                addCreativeRequest = new AddCreativeRequest() {{
                    creative = "officia";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "dolorum";
                key = "in";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "maiores";
                uploadProtocol = "rerum";
            }};            

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative(req, new AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity("dicta", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finalizedDeal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsList

Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest req = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                filter = "non";
                key = "occaecati";
                oauthToken = "enim";
                orderBy = "accusamus";
                pageSize = 965417L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersFinalizedDealsList(req, new AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity("blanditiis", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFinalizedDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsPause

Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PauseFinalizedDealRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest req = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                pauseFinalizedDealRequest = new PauseFinalizedDealRequest() {{
                    reason = "deserunt";
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersFinalizedDealsPause(req, new AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity("id", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finalizedDeal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsResume

Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest req = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nobis", "eum");
                    put("vero", "aspernatur");
                    put("architecto", "magnam");
                }};
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "provident";
                key = "quos";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "mollitia";
                uploadProtocol = "reiciendis";
            }};            

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersFinalizedDealsResume(req, new AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeSecurity("mollitia", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finalizedDeal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe

Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest req = new AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("odit", "nemo");
                    put("quasi", "iure");
                    put("doloribus", "debitis");
                    put("eius", "maxime");
                }};
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe(req, new AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finalizedDeal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersProposalsAccept

Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity;
import org.openapis.openapi.models.shared.AcceptProposalRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                acceptProposalRequest = new AcceptProposalRequest() {{
                    proposalRevision = "pariatur";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "natus";
                key = "magni";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "illum";
                uploadProtocol = "pariatur";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsAccept(req, new AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity("maxime", "ea") {{
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

## authorizedbuyersmarketplaceBuyersProposalsAddNote

Creates a note for this proposal and sends to the seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity;
import org.openapis.openapi.models.shared.AddNoteRequestInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                addNoteRequestInput = new AddNoteRequestInput() {{
                    note = new NoteInput() {{
                        note = "ea";
                    }};;
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nam";
                uploadProtocol = "eaque";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsAddNote(req, new AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity("pariatur", "nemo") {{
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

## authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation

Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("amet", "aut");
                    put("cumque", "corporis");
                    put("hic", "libero");
                    put("nobis", "dolores");
                }};
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eaque";
                key = "quis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "perferendis";
                uploadProtocol = "dolores";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation(req, new AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity("minus", "quam") {{
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

## authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate

Batch updates multiple deals in the same proposal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity;
import org.openapis.openapi.models.shared.AdSize;
import org.openapis.openapi.models.shared.AdSizeTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateDealsRequestInput;
import org.openapis.openapi.models.shared.CriteriaTargeting;
import org.openapis.openapi.models.shared.DayPart;
import org.openapis.openapi.models.shared.DayPartDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingTimeZoneTypeEnum;
import org.openapis.openapi.models.shared.DealInput;
import org.openapis.openapi.models.shared.FirstPartyMobileApplicationTargeting;
import org.openapis.openapi.models.shared.InventorySizeTargeting;
import org.openapis.openapi.models.shared.InventoryTypeTargeting;
import org.openapis.openapi.models.shared.InventoryTypeTargetingInventoryTypesEnum;
import org.openapis.openapi.models.shared.MarketplaceTargeting;
import org.openapis.openapi.models.shared.MobileApplicationTargeting;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.OperatingSystemTargeting;
import org.openapis.openapi.models.shared.PlacementTargeting;
import org.openapis.openapi.models.shared.PreferredDealTerms;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceTypeEnum;
import org.openapis.openapi.models.shared.PrivateAuctionTermsInput;
import org.openapis.openapi.models.shared.ProgrammaticGuaranteedTerms;
import org.openapis.openapi.models.shared.ProgrammaticGuaranteedTermsReservationTypeEnum;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.UpdateDealRequestInput;
import org.openapis.openapi.models.shared.UriTargeting;
import org.openapis.openapi.models.shared.VideoTargeting;
import org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum;
import org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                batchUpdateDealsRequestInput = new BatchUpdateDealsRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.UpdateDealRequestInput[]{{
                        add(new UpdateDealRequestInput() {{
                            deal = new DealInput() {{
                                estimatedGrossSpend = new Money() {{
                                    currencyCode = "hic";
                                    nanos = 928082;
                                    units = "omnis";
                                }};
                                flightEndTime = "facilis";
                                flightStartTime = "perspiciatis";
                                name = "Robyn Cruickshank";
                                preferredDealTerms = new PreferredDealTerms() {{
                                    fixedPrice = new Price() {{
                                        amount = new Money() {{
                                            currencyCode = "eaque";
                                            nanos = 577229;
                                            units = "rerum";
                                        }};
                                        type = PriceTypeEnum.TYPE_UNSPECIFIED;
                                    }};
                                }};
                                privateAuctionTerms = new PrivateAuctionTermsInput() {{
                                    floorPrice = new Price() {{
                                        amount = new Money() {{
                                            currencyCode = "asperiores";
                                            nanos = 934214;
                                            units = "modi";
                                        }};
                                        type = PriceTypeEnum.CPM;
                                    }};
                                }};
                                programmaticGuaranteedTerms = new ProgrammaticGuaranteedTerms() {{
                                    fixedPrice = new Price() {{
                                        amount = new Money() {{
                                            currencyCode = "dolorum";
                                            nanos = 535633;
                                            units = "pariatur";
                                        }};
                                        type = PriceTypeEnum.CPM;
                                    }};
                                    guaranteedLooks = "nobis";
                                    impressionCap = "libero";
                                    minimumDailyLooks = "delectus";
                                    percentShareOfVoice = "quaerat";
                                    reservationType = ProgrammaticGuaranteedTermsReservationTypeEnum.STANDARD;
                                }};
                                publisherProfile = "aliquid";
                                sellerTimeZone = new TimeZone() {{
                                    id = "33323f9b-77f3-4a41-8067-4ebf69280d1b";
                                    version = "dolorum";
                                }};
                                targeting = new MarketplaceTargeting() {{
                                    daypartTargeting = new DayPartTargeting() {{
                                        dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                            add(new DayPart() {{
                                                dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                endTime = new TimeOfDay() {{
                                                    hours = 677082;
                                                    minutes = 536579;
                                                    nanos = 607045;
                                                    seconds = 896672;
                                                }};
                                                startTime = new TimeOfDay() {{
                                                    hours = 714697;
                                                    minutes = 990339;
                                                    nanos = 469497;
                                                    seconds = 216897;
                                                }};
                                            }}),
                                            add(new DayPart() {{
                                                dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                endTime = new TimeOfDay() {{
                                                    hours = 663078;
                                                    minutes = 906418;
                                                    nanos = 263322;
                                                    seconds = 137220;
                                                }};
                                                startTime = new TimeOfDay() {{
                                                    hours = 20651;
                                                    minutes = 229219;
                                                    nanos = 758379;
                                                    seconds = 881586;
                                                }};
                                            }}),
                                        }};
                                        timeZoneType = DayPartTargetingTimeZoneTypeEnum.TIME_ZONE_TYPE_UNSPECIFIED;
                                    }};
                                    geoTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("suscipit"),
                                            add("deserunt"),
                                            add("provident"),
                                            add("minima"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("totam"),
                                            add("similique"),
                                            add("alias"),
                                            add("at"),
                                        }};
                                    }};
                                    inventorySizeTargeting = new InventorySizeTargeting() {{
                                        excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "tempora";
                                                type = AdSizeTypeEnum.INTERSTITIAL;
                                                width = "quod";
                                            }}),
                                            add(new AdSize() {{
                                                height = "officiis";
                                                type = AdSizeTypeEnum.TYPE_UNSPECIFIED;
                                                width = "dolorum";
                                            }}),
                                        }};
                                        targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "esse";
                                                type = AdSizeTypeEnum.NATIVE_;
                                                width = "iusto";
                                            }}),
                                            add(new AdSize() {{
                                                height = "ipsum";
                                                type = AdSizeTypeEnum.NATIVE_;
                                                width = "tenetur";
                                            }}),
                                            add(new AdSize() {{
                                                height = "amet";
                                                type = AdSizeTypeEnum.NATIVE_;
                                                width = "accusamus";
                                            }}),
                                            add(new AdSize() {{
                                                height = "numquam";
                                                type = AdSizeTypeEnum.PIXEL;
                                                width = "dolorem";
                                            }}),
                                        }};
                                    }};
                                    inventoryTypeTargeting = new InventoryTypeTargeting() {{
                                        inventoryTypes = new org.openapis.openapi.models.shared.InventoryTypeTargetingInventoryTypesEnum[]{{
                                            add(InventoryTypeTargetingInventoryTypesEnum.MOBILE_APP),
                                            add(InventoryTypeTargetingInventoryTypesEnum.BROWSER),
                                            add(InventoryTypeTargetingInventoryTypesEnum.INVENTORY_TYPE_UNSPECIFIED),
                                            add(InventoryTypeTargetingInventoryTypesEnum.MOBILE_APP),
                                        }};
                                    }};
                                    placementTargeting = new PlacementTargeting() {{
                                        mobileApplicationTargeting = new MobileApplicationTargeting() {{
                                            firstPartyTargeting = new FirstPartyMobileApplicationTargeting() {{
                                                excludedAppIds = new String[]{{
                                                    add("sed"),
                                                }};
                                                targetedAppIds = new String[]{{
                                                    add("libero"),
                                                    add("voluptas"),
                                                }};
                                            }};
                                        }};
                                        uriTargeting = new UriTargeting() {{
                                            excludedUris = new String[]{{
                                                add("quam"),
                                                add("ipsum"),
                                                add("incidunt"),
                                            }};
                                            targetedUris = new String[]{{
                                                add("cupiditate"),
                                            }};
                                        }};
                                    }};
                                    technologyTargeting = new TechnologyTargeting() {{
                                        deviceCapabilityTargeting = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("pariatur"),
                                                add("soluta"),
                                                add("dicta"),
                                                add("laborum"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("incidunt"),
                                                add("aspernatur"),
                                                add("dolores"),
                                            }};
                                        }};
                                        deviceCategoryTargeting = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("facilis"),
                                                add("aliquid"),
                                                add("quam"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("temporibus"),
                                                add("qui"),
                                                add("neque"),
                                            }};
                                        }};
                                        operatingSystemTargeting = new OperatingSystemTargeting() {{
                                            operatingSystemCriteria = new CriteriaTargeting() {{
                                                excludedCriteriaIds = new String[]{{
                                                    add("magni"),
                                                }};
                                                targetedCriteriaIds = new String[]{{
                                                    add("sunt"),
                                                    add("ullam"),
                                                }};
                                            }};
                                            operatingSystemVersionCriteria = new CriteriaTargeting() {{
                                                excludedCriteriaIds = new String[]{{
                                                    add("hic"),
                                                    add("voluptatem"),
                                                    add("cumque"),
                                                }};
                                                targetedCriteriaIds = new String[]{{
                                                    add("nobis"),
                                                    add("et"),
                                                    add("saepe"),
                                                }};
                                            }};
                                        }};
                                    }};
                                    userListTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("veritatis"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("quos"),
                                            add("tempore"),
                                            add("cupiditate"),
                                        }};
                                    }};
                                    videoTargeting = new VideoTargeting() {{
                                        excludedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum[]{{
                                            add(VideoTargetingExcludedPositionTypesEnum.POSTROLL),
                                        }};
                                        targetedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum[]{{
                                            add(VideoTargetingTargetedPositionTypesEnum.PREROLL),
                                        }};
                                    }};
                                }};
                            }};
                            updateMask = "labore";
                        }}),
                        add(new UpdateDealRequestInput() {{
                            deal = new DealInput() {{
                                estimatedGrossSpend = new Money() {{
                                    currencyCode = "adipisci";
                                    nanos = 677263;
                                    units = "architecto";
                                }};
                                flightEndTime = "quae";
                                flightStartTime = "aut";
                                name = "Percy Altenwerth";
                                preferredDealTerms = new PreferredDealTerms() {{
                                    fixedPrice = new Price() {{
                                        amount = new Money() {{
                                            currencyCode = "porro";
                                            nanos = 984330;
                                            units = "ut";
                                        }};
                                        type = PriceTypeEnum.CPD;
                                    }};
                                }};
                                privateAuctionTerms = new PrivateAuctionTermsInput() {{
                                    floorPrice = new Price() {{
                                        amount = new Money() {{
                                            currencyCode = "cupiditate";
                                            nanos = 181631;
                                            units = "quae";
                                        }};
                                        type = PriceTypeEnum.CPM;
                                    }};
                                }};
                                programmaticGuaranteedTerms = new ProgrammaticGuaranteedTerms() {{
                                    fixedPrice = new Price() {{
                                        amount = new Money() {{
                                            currencyCode = "odio";
                                            nanos = 580447;
                                            units = "voluptatibus";
                                        }};
                                        type = PriceTypeEnum.CPD;
                                    }};
                                    guaranteedLooks = "vero";
                                    impressionCap = "omnis";
                                    minimumDailyLooks = "quis";
                                    percentShareOfVoice = "ipsum";
                                    reservationType = ProgrammaticGuaranteedTermsReservationTypeEnum.SPONSORSHIP;
                                }};
                                publisherProfile = "voluptate";
                                sellerTimeZone = new TimeZone() {{
                                    id = "3ef7fbc7-abd7-44dd-b9c0-f5d2cff7c70a";
                                    version = "tempora";
                                }};
                                targeting = new MarketplaceTargeting() {{
                                    daypartTargeting = new DayPartTargeting() {{
                                        dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                            add(new DayPart() {{
                                                dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                                endTime = new TimeOfDay() {{
                                                    hours = 136900;
                                                    minutes = 428224;
                                                    nanos = 822118;
                                                    seconds = 297842;
                                                }};
                                                startTime = new TimeOfDay() {{
                                                    hours = 189848;
                                                    minutes = 401132;
                                                    nanos = 511319;
                                                    seconds = 120657;
                                                }};
                                            }}),
                                            add(new DayPart() {{
                                                dayOfWeek = DayPartDayOfWeekEnum.MONDAY;
                                                endTime = new TimeOfDay() {{
                                                    hours = 980700;
                                                    minutes = 97844;
                                                    nanos = 406120;
                                                    seconds = 862192;
                                                }};
                                                startTime = new TimeOfDay() {{
                                                    hours = 569211;
                                                    minutes = 972920;
                                                    nanos = 343605;
                                                    seconds = 960835;
                                                }};
                                            }}),
                                        }};
                                        timeZoneType = DayPartTargetingTimeZoneTypeEnum.USER;
                                    }};
                                    geoTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("ea"),
                                            add("impedit"),
                                            add("corporis"),
                                            add("veniam"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("inventore"),
                                            add("magnam"),
                                        }};
                                    }};
                                    inventorySizeTargeting = new InventorySizeTargeting() {{
                                        excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "quo";
                                                type = AdSizeTypeEnum.PIXEL;
                                                width = "recusandae";
                                            }}),
                                            add(new AdSize() {{
                                                height = "aspernatur";
                                                type = AdSizeTypeEnum.PIXEL;
                                                width = "eaque";
                                            }}),
                                        }};
                                        targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                            add(new AdSize() {{
                                                height = "libero";
                                                type = AdSizeTypeEnum.TYPE_UNSPECIFIED;
                                                width = "aut";
                                            }}),
                                            add(new AdSize() {{
                                                height = "deleniti";
                                                type = AdSizeTypeEnum.NATIVE_;
                                                width = "aliquam";
                                            }}),
                                            add(new AdSize() {{
                                                height = "fugit";
                                                type = AdSizeTypeEnum.FLUID;
                                                width = "inventore";
                                            }}),
                                            add(new AdSize() {{
                                                height = "non";
                                                type = AdSizeTypeEnum.TYPE_UNSPECIFIED;
                                                width = "dolorum";
                                            }}),
                                        }};
                                    }};
                                    inventoryTypeTargeting = new InventoryTypeTargeting() {{
                                        inventoryTypes = new org.openapis.openapi.models.shared.InventoryTypeTargetingInventoryTypesEnum[]{{
                                            add(InventoryTypeTargetingInventoryTypesEnum.VIDEO_PLAYER),
                                            add(InventoryTypeTargetingInventoryTypesEnum.INVENTORY_TYPE_UNSPECIFIED),
                                            add(InventoryTypeTargetingInventoryTypesEnum.BROWSER),
                                        }};
                                    }};
                                    placementTargeting = new PlacementTargeting() {{
                                        mobileApplicationTargeting = new MobileApplicationTargeting() {{
                                            firstPartyTargeting = new FirstPartyMobileApplicationTargeting() {{
                                                excludedAppIds = new String[]{{
                                                    add("nobis"),
                                                    add("quas"),
                                                }};
                                                targetedAppIds = new String[]{{
                                                    add("nulla"),
                                                    add("voluptas"),
                                                    add("libero"),
                                                    add("quasi"),
                                                }};
                                            }};
                                        }};
                                        uriTargeting = new UriTargeting() {{
                                            excludedUris = new String[]{{
                                                add("numquam"),
                                                add("explicabo"),
                                            }};
                                            targetedUris = new String[]{{
                                                add("ipsa"),
                                                add("molestiae"),
                                                add("magnam"),
                                            }};
                                        }};
                                    }};
                                    technologyTargeting = new TechnologyTargeting() {{
                                        deviceCapabilityTargeting = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("eius"),
                                                add("esse"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("rem"),
                                                add("fuga"),
                                            }};
                                        }};
                                        deviceCategoryTargeting = new CriteriaTargeting() {{
                                            excludedCriteriaIds = new String[]{{
                                                add("quidem"),
                                                add("fugiat"),
                                            }};
                                            targetedCriteriaIds = new String[]{{
                                                add("eum"),
                                                add("suscipit"),
                                            }};
                                        }};
                                        operatingSystemTargeting = new OperatingSystemTargeting() {{
                                            operatingSystemCriteria = new CriteriaTargeting() {{
                                                excludedCriteriaIds = new String[]{{
                                                    add("eos"),
                                                    add("praesentium"),
                                                    add("quisquam"),
                                                    add("veritatis"),
                                                }};
                                                targetedCriteriaIds = new String[]{{
                                                    add("id"),
                                                }};
                                            }};
                                            operatingSystemVersionCriteria = new CriteriaTargeting() {{
                                                excludedCriteriaIds = new String[]{{
                                                    add("neque"),
                                                    add("quo"),
                                                    add("illum"),
                                                }};
                                                targetedCriteriaIds = new String[]{{
                                                    add("fuga"),
                                                    add("eius"),
                                                    add("eos"),
                                                    add("voluptas"),
                                                }};
                                            }};
                                        }};
                                    }};
                                    userListTargeting = new CriteriaTargeting() {{
                                        excludedCriteriaIds = new String[]{{
                                            add("cupiditate"),
                                        }};
                                        targetedCriteriaIds = new String[]{{
                                            add("tempora"),
                                        }};
                                    }};
                                    videoTargeting = new VideoTargeting() {{
                                        excludedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum[]{{
                                            add(VideoTargetingExcludedPositionTypesEnum.PREROLL),
                                            add(VideoTargetingExcludedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                            add(VideoTargetingExcludedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                            add(VideoTargetingExcludedPositionTypesEnum.POSTROLL),
                                        }};
                                        targetedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum[]{{
                                            add(VideoTargetingTargetedPositionTypesEnum.POSTROLL),
                                            add(VideoTargetingTargetedPositionTypesEnum.POSITION_TYPE_UNSPECIFIED),
                                        }};
                                    }};
                                }};
                            }};
                            updateMask = "distinctio";
                        }}),
                    }};
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "nihil";
                key = "totam";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "odio";
                uploadProtocol = "occaecati";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate(req, new AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity("commodi", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchUpdateDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersProposalsDealsList

Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "eum";
                key = "quas";
                oauthToken = "praesentium";
                pageSize = 159867L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "fuga";
                uploadProtocol = "mollitia";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsDealsList(req, new AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity("incidunt", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersProposalsDealsPatch

Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity;
import org.openapis.openapi.models.shared.AdSize;
import org.openapis.openapi.models.shared.AdSizeTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CriteriaTargeting;
import org.openapis.openapi.models.shared.DayPart;
import org.openapis.openapi.models.shared.DayPartDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingTimeZoneTypeEnum;
import org.openapis.openapi.models.shared.DealInput;
import org.openapis.openapi.models.shared.FirstPartyMobileApplicationTargeting;
import org.openapis.openapi.models.shared.InventorySizeTargeting;
import org.openapis.openapi.models.shared.InventoryTypeTargeting;
import org.openapis.openapi.models.shared.InventoryTypeTargetingInventoryTypesEnum;
import org.openapis.openapi.models.shared.MarketplaceTargeting;
import org.openapis.openapi.models.shared.MobileApplicationTargeting;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.OperatingSystemTargeting;
import org.openapis.openapi.models.shared.PlacementTargeting;
import org.openapis.openapi.models.shared.PreferredDealTerms;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceTypeEnum;
import org.openapis.openapi.models.shared.PrivateAuctionTermsInput;
import org.openapis.openapi.models.shared.ProgrammaticGuaranteedTerms;
import org.openapis.openapi.models.shared.ProgrammaticGuaranteedTermsReservationTypeEnum;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.UriTargeting;
import org.openapis.openapi.models.shared.VideoTargeting;
import org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum;
import org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                dealInput = new DealInput() {{
                    estimatedGrossSpend = new Money() {{
                        currencyCode = "nisi";
                        nanos = 147014;
                        units = "sapiente";
                    }};;
                    flightEndTime = "consequuntur";
                    flightStartTime = "ratione";
                    name = "Kerry Mayert IV";
                    preferredDealTerms = new PreferredDealTerms() {{
                        fixedPrice = new Price() {{
                            amount = new Money() {{
                                currencyCode = "eveniet";
                                nanos = 882042;
                                units = "veritatis";
                            }};;
                            type = PriceTypeEnum.CPM;
                        }};;
                    }};;
                    privateAuctionTerms = new PrivateAuctionTermsInput() {{
                        floorPrice = new Price() {{
                            amount = new Money() {{
                                currencyCode = "quod";
                                nanos = 724168;
                                units = "vero";
                            }};;
                            type = PriceTypeEnum.CPM;
                        }};;
                    }};;
                    programmaticGuaranteedTerms = new ProgrammaticGuaranteedTerms() {{
                        fixedPrice = new Price() {{
                            amount = new Money() {{
                                currencyCode = "quasi";
                                nanos = 904045;
                                units = "vel";
                            }};;
                            type = PriceTypeEnum.CPD;
                        }};;
                        guaranteedLooks = "molestiae";
                        impressionCap = "rerum";
                        minimumDailyLooks = "occaecati";
                        percentShareOfVoice = "minima";
                        reservationType = ProgrammaticGuaranteedTermsReservationTypeEnum.SPONSORSHIP;
                    }};;
                    publisherProfile = "eligendi";
                    sellerTimeZone = new TimeZone() {{
                        id = "0ab3c20c-4f37-489f-9871-f99dd2efd121";
                        version = "similique";
                    }};;
                    targeting = new MarketplaceTargeting() {{
                        daypartTargeting = new DayPartTargeting() {{
                            dayParts = new org.openapis.openapi.models.shared.DayPart[]{{
                                add(new DayPart() {{
                                    dayOfWeek = DayPartDayOfWeekEnum.WEDNESDAY;
                                    endTime = new TimeOfDay() {{
                                        hours = 949298;
                                        minutes = 62713;
                                        nanos = 936747;
                                        seconds = 424032;
                                    }};
                                    startTime = new TimeOfDay() {{
                                        hours = 447378;
                                        minutes = 258684;
                                        nanos = 727697;
                                        seconds = 849039;
                                    }};
                                }}),
                                add(new DayPart() {{
                                    dayOfWeek = DayPartDayOfWeekEnum.FRIDAY;
                                    endTime = new TimeOfDay() {{
                                        hours = 33304;
                                        minutes = 306986;
                                        nanos = 958983;
                                        seconds = 119771;
                                    }};
                                    startTime = new TimeOfDay() {{
                                        hours = 355369;
                                        minutes = 443879;
                                        nanos = 356707;
                                        seconds = 391774;
                                    }};
                                }}),
                                add(new DayPart() {{
                                    dayOfWeek = DayPartDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    endTime = new TimeOfDay() {{
                                        hours = 531849;
                                        minutes = 185232;
                                        nanos = 845358;
                                        seconds = 401259;
                                    }};
                                    startTime = new TimeOfDay() {{
                                        hours = 536275;
                                        minutes = 929292;
                                        nanos = 680270;
                                        seconds = 99615;
                                    }};
                                }}),
                            }};
                            timeZoneType = DayPartTargetingTimeZoneTypeEnum.SELLER;
                        }};;
                        geoTargeting = new CriteriaTargeting() {{
                            excludedCriteriaIds = new String[]{{
                                add("quasi"),
                                add("at"),
                                add("et"),
                                add("voluptate"),
                            }};
                            targetedCriteriaIds = new String[]{{
                                add("minima"),
                            }};
                        }};;
                        inventorySizeTargeting = new InventorySizeTargeting() {{
                            excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                add(new AdSize() {{
                                    height = "consectetur";
                                    type = AdSizeTypeEnum.PIXEL;
                                    width = "iste";
                                }}),
                            }};
                            targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                                add(new AdSize() {{
                                    height = "accusantium";
                                    type = AdSizeTypeEnum.INTERSTITIAL;
                                    width = "aut";
                                }}),
                                add(new AdSize() {{
                                    height = "laudantium";
                                    type = AdSizeTypeEnum.INTERSTITIAL;
                                    width = "mollitia";
                                }}),
                                add(new AdSize() {{
                                    height = "ab";
                                    type = AdSizeTypeEnum.INTERSTITIAL;
                                    width = "non";
                                }}),
                                add(new AdSize() {{
                                    height = "voluptatem";
                                    type = AdSizeTypeEnum.PIXEL;
                                    width = "occaecati";
                                }}),
                            }};
                        }};;
                        inventoryTypeTargeting = new InventoryTypeTargeting() {{
                            inventoryTypes = new org.openapis.openapi.models.shared.InventoryTypeTargetingInventoryTypesEnum[]{{
                                add(InventoryTypeTargetingInventoryTypesEnum.VIDEO_PLAYER),
                                add(InventoryTypeTargetingInventoryTypesEnum.INVENTORY_TYPE_UNSPECIFIED),
                            }};
                        }};;
                        placementTargeting = new PlacementTargeting() {{
                            mobileApplicationTargeting = new MobileApplicationTargeting() {{
                                firstPartyTargeting = new FirstPartyMobileApplicationTargeting() {{
                                    excludedAppIds = new String[]{{
                                        add("aut"),
                                        add("dignissimos"),
                                    }};
                                    targetedAppIds = new String[]{{
                                        add("maiores"),
                                    }};
                                }};;
                            }};;
                            uriTargeting = new UriTargeting() {{
                                excludedUris = new String[]{{
                                    add("velit"),
                                    add("voluptatibus"),
                                    add("voluptas"),
                                }};
                                targetedUris = new String[]{{
                                    add("aperiam"),
                                    add("ea"),
                                    add("quaerat"),
                                    add("consequuntur"),
                                }};
                            }};;
                        }};;
                        technologyTargeting = new TechnologyTargeting() {{
                            deviceCapabilityTargeting = new CriteriaTargeting() {{
                                excludedCriteriaIds = new String[]{{
                                    add("officia"),
                                    add("maxime"),
                                    add("dignissimos"),
                                    add("officia"),
                                }};
                                targetedCriteriaIds = new String[]{{
                                    add("nemo"),
                                    add("quae"),
                                    add("quaerat"),
                                    add("porro"),
                                }};
                            }};;
                            deviceCategoryTargeting = new CriteriaTargeting() {{
                                excludedCriteriaIds = new String[]{{
                                    add("labore"),
                                    add("ab"),
                                    add("adipisci"),
                                    add("fuga"),
                                }};
                                targetedCriteriaIds = new String[]{{
                                    add("suscipit"),
                                    add("velit"),
                                    add("culpa"),
                                }};
                            }};;
                            operatingSystemTargeting = new OperatingSystemTargeting() {{
                                operatingSystemCriteria = new CriteriaTargeting() {{
                                    excludedCriteriaIds = new String[]{{
                                        add("recusandae"),
                                        add("totam"),
                                        add("fugiat"),
                                    }};
                                    targetedCriteriaIds = new String[]{{
                                        add("ducimus"),
                                        add("quos"),
                                    }};
                                }};;
                                operatingSystemVersionCriteria = new CriteriaTargeting() {{
                                    excludedCriteriaIds = new String[]{{
                                        add("labore"),
                                        add("possimus"),
                                    }};
                                    targetedCriteriaIds = new String[]{{
                                        add("cum"),
                                        add("commodi"),
                                        add("in"),
                                    }};
                                }};;
                            }};;
                        }};;
                        userListTargeting = new CriteriaTargeting() {{
                            excludedCriteriaIds = new String[]{{
                                add("reiciendis"),
                                add("assumenda"),
                            }};
                            targetedCriteriaIds = new String[]{{
                                add("recusandae"),
                                add("aliquid"),
                            }};
                        }};;
                        videoTargeting = new VideoTargeting() {{
                            excludedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingExcludedPositionTypesEnum[]{{
                                add(VideoTargetingExcludedPositionTypesEnum.MIDROLL),
                            }};
                            targetedPositionTypes = new org.openapis.openapi.models.shared.VideoTargetingTargetedPositionTypesEnum[]{{
                                add(VideoTargetingTargetedPositionTypesEnum.PREROLL),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "numquam";
                key = "doloribus";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "reiciendis";
                updateMask = "quidem";
                uploadType = "saepe";
                uploadProtocol = "necessitatibus";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsDealsPatch(req, new AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity("dolore", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizedbuyersmarketplaceBuyersProposalsList

Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsListRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "dignissimos";
                filter = "a";
                key = "debitis";
                oauthToken = "consectetur";
                pageSize = 358107L;
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "ipsa";
                uploadProtocol = "voluptates";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsList(req, new AuthorizedbuyersmarketplaceBuyersProposalsListSecurity("libero", "vitae") {{
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

## authorizedbuyersmarketplaceBuyersProposalsSendRfp

Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity;
import org.openapis.openapi.models.shared.AdSize;
import org.openapis.openapi.models.shared.AdSizeTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.CriteriaTargeting;
import org.openapis.openapi.models.shared.InventorySizeTargeting;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.PreferredDealTerms;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceTypeEnum;
import org.openapis.openapi.models.shared.ProgrammaticGuaranteedTerms;
import org.openapis.openapi.models.shared.ProgrammaticGuaranteedTermsReservationTypeEnum;
import org.openapis.openapi.models.shared.SendRfpRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest req = new AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                sendRfpRequest = new SendRfpRequest() {{
                    buyerContacts = new org.openapis.openapi.models.shared.Contact[]{{
                        add(new Contact() {{
                            displayName = "aspernatur";
                            email = "Garland74@yahoo.com";
                        }}),
                        add(new Contact() {{
                            displayName = "dolorum";
                            email = "Pete.DAmore@gmail.com";
                        }}),
                    }};
                    client = "dolore";
                    displayName = "aliquam";
                    estimatedGrossSpend = new Money() {{
                        currencyCode = "officiis";
                        nanos = 839189;
                        units = "ullam";
                    }};;
                    flightEndTime = "adipisci";
                    flightStartTime = "cum";
                    geoTargeting = new CriteriaTargeting() {{
                        excludedCriteriaIds = new String[]{{
                            add("quas"),
                            add("hic"),
                            add("nesciunt"),
                        }};
                        targetedCriteriaIds = new String[]{{
                            add("corrupti"),
                            add("pariatur"),
                            add("totam"),
                        }};
                    }};;
                    inventorySizeTargeting = new InventorySizeTargeting() {{
                        excludedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                            add(new AdSize() {{
                                height = "exercitationem";
                                type = AdSizeTypeEnum.NATIVE_;
                                width = "sit";
                            }}),
                            add(new AdSize() {{
                                height = "rerum";
                                type = AdSizeTypeEnum.TYPE_UNSPECIFIED;
                                width = "reiciendis";
                            }}),
                            add(new AdSize() {{
                                height = "explicabo";
                                type = AdSizeTypeEnum.FLUID;
                                width = "facilis";
                            }}),
                            add(new AdSize() {{
                                height = "voluptate";
                                type = AdSizeTypeEnum.NATIVE_;
                                width = "ab";
                            }}),
                        }};
                        targetedInventorySizes = new org.openapis.openapi.models.shared.AdSize[]{{
                            add(new AdSize() {{
                                height = "dolore";
                                type = AdSizeTypeEnum.NATIVE_;
                                width = "sed";
                            }}),
                            add(new AdSize() {{
                                height = "in";
                                type = AdSizeTypeEnum.INTERSTITIAL;
                                width = "quidem";
                            }}),
                            add(new AdSize() {{
                                height = "explicabo";
                                type = AdSizeTypeEnum.PIXEL;
                                width = "unde";
                            }}),
                        }};
                    }};;
                    note = "architecto";
                    preferredDealTerms = new PreferredDealTerms() {{
                        fixedPrice = new Price() {{
                            amount = new Money() {{
                                currencyCode = "suscipit";
                                nanos = 960257;
                                units = "debitis";
                            }};;
                            type = PriceTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                    }};;
                    programmaticGuaranteedTerms = new ProgrammaticGuaranteedTerms() {{
                        fixedPrice = new Price() {{
                            amount = new Money() {{
                                currencyCode = "reiciendis";
                                nanos = 19300;
                                units = "corrupti";
                            }};;
                            type = PriceTypeEnum.CPD;
                        }};;
                        guaranteedLooks = "incidunt";
                        impressionCap = "sed";
                        minimumDailyLooks = "provident";
                        percentShareOfVoice = "eius";
                        reservationType = ProgrammaticGuaranteedTermsReservationTypeEnum.SPONSORSHIP;
                    }};;
                    publisherProfile = "ipsum";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "voluptatibus";
                key = "tempora";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "reiciendis";
                uploadProtocol = "ex";
            }};            

            AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersProposalsSendRfp(req, new AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity("sit", "non") {{
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

## authorizedbuyersmarketplaceBuyersPublisherProfilesGet

Gets the requested publisher profile by name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest req = new AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "ipsam";
                key = "debitis";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "nobis";
                uploadProtocol = "error";
            }};            

            AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersPublisherProfilesGet(req, new AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity("veniam", "minima") {{
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

## authorizedbuyersmarketplaceBuyersPublisherProfilesList

Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse;
import org.openapis.openapi.models.operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest req = new AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "saepe";
                filter = "numquam";
                key = "veniam";
                oauthToken = "in";
                pageSize = 889234L;
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "exercitationem";
                uploadProtocol = "praesentium";
            }};            

            AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse res = sdk.buyers.authorizedbuyersmarketplaceBuyersPublisherProfilesList(req, new AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity("cum", "laboriosam") {{
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
