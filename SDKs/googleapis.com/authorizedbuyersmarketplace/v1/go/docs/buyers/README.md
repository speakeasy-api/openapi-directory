# Buyers

### Available Operations

* [AuthorizedbuyersmarketplaceBuyersAuctionPackagesList](#authorizedbuyersmarketplacebuyersauctionpackageslist) - List the auction packages subscribed by a buyer and its clients.
* [AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe](#authorizedbuyersmarketplacebuyersauctionpackagessubscribe) - Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
* [AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients](#authorizedbuyersmarketplacebuyersauctionpackagessubscribeclients) - Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
* [AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe](#authorizedbuyersmarketplacebuyersauctionpackagesunsubscribe) - Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
* [AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients](#authorizedbuyersmarketplacebuyersauctionpackagesunsubscribeclients) - Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
* [AuthorizedbuyersmarketplaceBuyersClientsCreate](#authorizedbuyersmarketplacebuyersclientscreate) - Creates a new client.
* [AuthorizedbuyersmarketplaceBuyersClientsList](#authorizedbuyersmarketplacebuyersclientslist) - Lists all the clients for the current buyer.
* [AuthorizedbuyersmarketplaceBuyersClientsUsersActivate](#authorizedbuyersmarketplacebuyersclientsusersactivate) - Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
* [AuthorizedbuyersmarketplaceBuyersClientsUsersCreate](#authorizedbuyersmarketplacebuyersclientsuserscreate) - Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
* [AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivate](#authorizedbuyersmarketplacebuyersclientsusersdeactivate) - Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
* [AuthorizedbuyersmarketplaceBuyersClientsUsersDelete](#authorizedbuyersmarketplacebuyersclientsusersdelete) - Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
* [AuthorizedbuyersmarketplaceBuyersClientsUsersList](#authorizedbuyersmarketplacebuyersclientsuserslist) - Lists all client users for a specified client.
* [AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative](#authorizedbuyersmarketplacebuyersfinalizeddealsaddcreative) - Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
* [AuthorizedbuyersmarketplaceBuyersFinalizedDealsList](#authorizedbuyersmarketplacebuyersfinalizeddealslist) - Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
* [AuthorizedbuyersmarketplaceBuyersFinalizedDealsPause](#authorizedbuyersmarketplacebuyersfinalizeddealspause) - Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
* [AuthorizedbuyersmarketplaceBuyersFinalizedDealsResume](#authorizedbuyersmarketplacebuyersfinalizeddealsresume) - Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
* [AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe](#authorizedbuyersmarketplacebuyersfinalizeddealssetreadytoserve) - Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
* [AuthorizedbuyersmarketplaceBuyersProposalsAccept](#authorizedbuyersmarketplacebuyersproposalsaccept) - Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
* [AuthorizedbuyersmarketplaceBuyersProposalsAddNote](#authorizedbuyersmarketplacebuyersproposalsaddnote) - Creates a note for this proposal and sends to the seller.
* [AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiation](#authorizedbuyersmarketplacebuyersproposalscancelnegotiation) - Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
* [AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate](#authorizedbuyersmarketplacebuyersproposalsdealsbatchupdate) - Batch updates multiple deals in the same proposal.
* [AuthorizedbuyersmarketplaceBuyersProposalsDealsList](#authorizedbuyersmarketplacebuyersproposalsdealslist) - Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
* [AuthorizedbuyersmarketplaceBuyersProposalsDealsPatch](#authorizedbuyersmarketplacebuyersproposalsdealspatch) - Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
* [AuthorizedbuyersmarketplaceBuyersProposalsList](#authorizedbuyersmarketplacebuyersproposalslist) - Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.
* [AuthorizedbuyersmarketplaceBuyersProposalsSendRfp](#authorizedbuyersmarketplacebuyersproposalssendrfp) - Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
* [AuthorizedbuyersmarketplaceBuyersPublisherProfilesGet](#authorizedbuyersmarketplacebuyerspublisherprofilesget) - Gets the requested publisher profile by name.
* [AuthorizedbuyersmarketplaceBuyersPublisherProfilesList](#authorizedbuyersmarketplacebuyerspublisherprofileslist) - Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

## AuthorizedbuyersmarketplaceBuyersAuctionPackagesList

List the auction packages subscribed by a buyer and its clients.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesList(ctx, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(791725),
        PageToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuctionPackagesResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe

Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe(ctx, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ab": "quis",
            "veritatis": "deserunt",
            "perferendis": "ipsam",
            "repellendus": "sapiente",
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        Name: "Bernadette Schmidt",
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuctionPackage != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients

Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients(ctx, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SubscribeClientsRequest: &shared.SubscribeClientsRequest{
            Clients: []string{
                "fugit",
                "deleniti",
                "hic",
            },
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AuctionPackage: "beatae",
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("esse"),
    }, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuctionPackage != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe

Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe(ctx, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "aspernatur": "perferendis",
            "ad": "natus",
            "sed": "iste",
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        Name: "Harvey Hessel",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuctionPackage != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients

Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients(ctx, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UnsubscribeClientsRequest: &shared.UnsubscribeClientsRequest{
            Clients: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AuctionPackage: "explicabo",
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuctionPackage != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsCreate

Creates a new client.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsCreate(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClientInput: &shared.ClientInput{
            DisplayName: sdk.String("culpa"),
            PartnerClientID: sdk.String("doloribus"),
            Role: shared.ClientRoleEnumClientDealApprover.ToPointer(),
            SellerVisible: sdk.Bool(false),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsList

Lists all the clients for the current buyer.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsList(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Filter: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(656330),
        PageToken: sdk.String("enim"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClientsResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsUsersActivate

Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsUsersActivate(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "possimus": "aut",
            "quasi": "error",
            "temporibus": "laborum",
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        Name: "Jan Bednar",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientUser != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsUsersCreate

Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsUsersCreate(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClientUserInput: &shared.ClientUserInput{
            Email: sdk.String("Blanche48@hotmail.com"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("repudiandae"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientUser != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivate

Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivate(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "modi": "praesentium",
            "rem": "voluptates",
            "quasi": "repudiandae",
            "sint": "veritatis",
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        Name: "Benjamin O'Connell",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientUser != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsUsersDelete

Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsUsersDelete(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        Name: "Denise Pagac",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersClientsUsersList

Lists all client users for a specified client.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersClientsUsersList(ctx, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(572252),
        PageToken: sdk.String("officia"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClientUsersResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative

Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative(ctx, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddCreativeRequest: &shared.AddCreativeRequest{
            Creative: sdk.String("in"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rerum"),
        Deal: "dicta",
        Fields: sdk.String("magnam"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FinalizedDeal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersFinalizedDealsList

Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersFinalizedDealsList(ctx, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Filter: sdk.String("delectus"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("provident"),
        OrderBy: sdk.String("nam"),
        PageSize: sdk.Int64(659669),
        PageToken: sdk.String("blanditiis"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFinalizedDealsResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersFinalizedDealsPause

Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPause(ctx, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PauseFinalizedDealRequest: &shared.PauseFinalizedDealRequest{
            Reason: sdk.String("vel"),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("nihil"),
        Name: "Verna Olson",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
    }, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FinalizedDeal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersFinalizedDealsResume

Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResume(ctx, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "architecto": "magnam",
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Key: sdk.String("quos"),
        Name: "Kenneth O'Hara",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FinalizedDeal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe

Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe(ctx, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quasi": "iure",
            "doloribus": "debitis",
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Deal: "facilis",
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FinalizedDeal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsAccept

Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsAccept(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AcceptProposalRequest: &shared.AcceptProposalRequest{
            ProposalRevision: sdk.String("repellat"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("accusantium"),
        Name: "Irma Morissette DDS",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("ea"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Proposal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsAddNote

Creates a note for this proposal and sends to the seller.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsAddNote(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddNoteRequestInput: &shared.AddNoteRequestInput{
            Note: &shared.NoteInput{
                Note: sdk.String("odit"),
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        Proposal: "voluptate",
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Proposal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiation

Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiation(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptatibus": "perferendis",
            "fugiat": "amet",
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        Proposal: "dolores",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Proposal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate

Batch updates multiple deals in the same proposal.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchUpdateDealsRequestInput: &shared.BatchUpdateDealsRequestInput{
            Requests: []shared.UpdateDealRequestInput{
                shared.UpdateDealRequestInput{
                    Deal: &shared.DealInput{
                        EstimatedGrossSpend: &shared.Money{
                            CurrencyCode: sdk.String("nesciunt"),
                            Nanos: sdk.Int(179490),
                            Units: sdk.String("perferendis"),
                        },
                        FlightEndTime: sdk.String("dolores"),
                        FlightStartTime: sdk.String("minus"),
                        Name: sdk.String("Rosa Swift"),
                        PreferredDealTerms: &shared.PreferredDealTerms{
                            FixedPrice: &shared.Price{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("recusandae"),
                                    Nanos: sdk.Int(608253),
                                    Units: sdk.String("facilis"),
                                },
                                Type: shared.PriceTypeEnumCpm.ToPointer(),
                            },
                        },
                        PrivateAuctionTerms: &shared.PrivateAuctionTermsInput{
                            FloorPrice: &shared.Price{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("voluptatem"),
                                    Nanos: sdk.Int(783645),
                                    Units: sdk.String("consequuntur"),
                                },
                                Type: shared.PriceTypeEnumCpm.ToPointer(),
                            },
                        },
                        ProgrammaticGuaranteedTerms: &shared.ProgrammaticGuaranteedTerms{
                            FixedPrice: &shared.Price{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("error"),
                                    Nanos: sdk.Int(50370),
                                    Units: sdk.String("occaecati"),
                                },
                                Type: shared.PriceTypeEnumCpd.ToPointer(),
                            },
                            GuaranteedLooks: sdk.String("adipisci"),
                            ImpressionCap: sdk.String("asperiores"),
                            MinimumDailyLooks: sdk.String("earum"),
                            PercentShareOfVoice: sdk.String("modi"),
                            ReservationType: shared.ProgrammaticGuaranteedTermsReservationTypeEnumStandard.ToPointer(),
                        },
                        PublisherProfile: sdk.String("dolorum"),
                        SellerTimeZone: &shared.TimeZone{
                            ID: sdk.String("8d9cbf48-6333-423f-9b77-f3a4100674eb"),
                            Version: sdk.String("voluptatibus"),
                        },
                        Targeting: &shared.MarketplaceTargeting{
                            DaypartTargeting: &shared.DayPartTargeting{
                                DayParts: []shared.DayPart{
                                    shared.DayPart{
                                        DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                        EndTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(179603),
                                            Minutes: sdk.Int(542499),
                                            Nanos: sdk.Int(24678),
                                            Seconds: sdk.Int(854614),
                                        },
                                        StartTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(67249),
                                            Minutes: sdk.Int(743835),
                                            Nanos: sdk.Int(679393),
                                            Seconds: sdk.Int(478596),
                                        },
                                    },
                                    shared.DayPart{
                                        DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                        EndTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(677082),
                                            Minutes: sdk.Int(536579),
                                            Nanos: sdk.Int(607045),
                                            Seconds: sdk.Int(896672),
                                        },
                                        StartTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(714697),
                                            Minutes: sdk.Int(990339),
                                            Nanos: sdk.Int(469497),
                                            Seconds: sdk.Int(216897),
                                        },
                                    },
                                },
                                TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumSeller.ToPointer(),
                            },
                            GeoTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "saepe",
                                    "eius",
                                    "aspernatur",
                                },
                                TargetedCriteriaIds: []string{
                                    "amet",
                                },
                            },
                            InventorySizeTargeting: &shared.InventorySizeTargeting{
                                ExcludedInventorySizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("accusamus"),
                                        Type: shared.AdSizeTypeEnumPixel.ToPointer(),
                                        Width: sdk.String("saepe"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("suscipit"),
                                        Type: shared.AdSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("provident"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("minima"),
                                        Type: shared.AdSizeTypeEnumFluid.ToPointer(),
                                        Width: sdk.String("totam"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("similique"),
                                        Type: shared.AdSizeTypeEnumTypeUnspecified.ToPointer(),
                                        Width: sdk.String("at"),
                                    },
                                },
                                TargetedInventorySizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("tempora"),
                                        Type: shared.AdSizeTypeEnumInterstitial.ToPointer(),
                                        Width: sdk.String("quod"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("officiis"),
                                        Type: shared.AdSizeTypeEnumTypeUnspecified.ToPointer(),
                                        Width: sdk.String("dolorum"),
                                    },
                                },
                            },
                            InventoryTypeTargeting: &shared.InventoryTypeTargeting{
                                InventoryTypes: []shared.InventoryTypeTargetingInventoryTypesEnum{
                                    shared.InventoryTypeTargetingInventoryTypesEnumBrowser,
                                    shared.InventoryTypeTargetingInventoryTypesEnumMobileApp,
                                    shared.InventoryTypeTargetingInventoryTypesEnumBrowser,
                                    shared.InventoryTypeTargetingInventoryTypesEnumInventoryTypeUnspecified,
                                },
                            },
                            PlacementTargeting: &shared.PlacementTargeting{
                                MobileApplicationTargeting: &shared.MobileApplicationTargeting{
                                    FirstPartyTargeting: &shared.FirstPartyMobileApplicationTargeting{
                                        ExcludedAppIds: []string{
                                            "tenetur",
                                            "amet",
                                            "tempore",
                                            "accusamus",
                                        },
                                        TargetedAppIds: []string{
                                            "enim",
                                            "dolorem",
                                        },
                                    },
                                },
                                URITargeting: &shared.URITargeting{
                                    ExcludedUris: []string{
                                        "totam",
                                        "nihil",
                                        "sit",
                                        "expedita",
                                    },
                                    TargetedUris: []string{
                                        "sed",
                                    },
                                },
                            },
                            TechnologyTargeting: &shared.TechnologyTargeting{
                                DeviceCapabilityTargeting: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "libero",
                                        "voluptas",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "quam",
                                        "ipsum",
                                        "incidunt",
                                    },
                                },
                                DeviceCategoryTargeting: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "cupiditate",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "pariatur",
                                        "soluta",
                                        "dicta",
                                        "laborum",
                                    },
                                },
                                OperatingSystemTargeting: &shared.OperatingSystemTargeting{
                                    OperatingSystemCriteria: &shared.CriteriaTargeting{
                                        ExcludedCriteriaIds: []string{
                                            "incidunt",
                                            "aspernatur",
                                            "dolores",
                                        },
                                        TargetedCriteriaIds: []string{
                                            "facilis",
                                            "aliquid",
                                            "quam",
                                        },
                                    },
                                    OperatingSystemVersionCriteria: &shared.CriteriaTargeting{
                                        ExcludedCriteriaIds: []string{
                                            "temporibus",
                                            "qui",
                                            "neque",
                                        },
                                        TargetedCriteriaIds: []string{
                                            "magni",
                                        },
                                    },
                                },
                            },
                            UserListTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "sunt",
                                    "ullam",
                                },
                                TargetedCriteriaIds: []string{
                                    "hic",
                                    "voluptatem",
                                    "cumque",
                                },
                            },
                            VideoTargeting: &shared.VideoTargeting{
                                ExcludedPositionTypes: []shared.VideoTargetingExcludedPositionTypesEnum{
                                    shared.VideoTargetingExcludedPositionTypesEnumMidroll,
                                    shared.VideoTargetingExcludedPositionTypesEnumPositionTypeUnspecified,
                                    shared.VideoTargetingExcludedPositionTypesEnumPostroll,
                                },
                                TargetedPositionTypes: []shared.VideoTargetingTargetedPositionTypesEnum{
                                    shared.VideoTargetingTargetedPositionTypesEnumPositionTypeUnspecified,
                                },
                            },
                        },
                    },
                    UpdateMask: sdk.String("nobis"),
                },
                shared.UpdateDealRequestInput{
                    Deal: &shared.DealInput{
                        EstimatedGrossSpend: &shared.Money{
                            CurrencyCode: sdk.String("quos"),
                            Nanos: sdk.Int(731694),
                            Units: sdk.String("cupiditate"),
                        },
                        FlightEndTime: sdk.String("aperiam"),
                        FlightStartTime: sdk.String("delectus"),
                        Name: sdk.String("Joanne Grant"),
                        PreferredDealTerms: &shared.PreferredDealTerms{
                            FixedPrice: &shared.Price{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("architecto"),
                                    Nanos: sdk.Int(63038),
                                    Units: sdk.String("aut"),
                                },
                                Type: shared.PriceTypeEnumCpm.ToPointer(),
                            },
                        },
                        PrivateAuctionTerms: &shared.PrivateAuctionTermsInput{
                            FloorPrice: &shared.Price{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("itaque"),
                                    Nanos: sdk.Int(9240),
                                    Units: sdk.String("est"),
                                },
                                Type: shared.PriceTypeEnumCpd.ToPointer(),
                            },
                        },
                        ProgrammaticGuaranteedTerms: &shared.ProgrammaticGuaranteedTerms{
                            FixedPrice: &shared.Price{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("porro"),
                                    Nanos: sdk.Int(984330),
                                    Units: sdk.String("ut"),
                                },
                                Type: shared.PriceTypeEnumCpd.ToPointer(),
                            },
                            GuaranteedLooks: sdk.String("cupiditate"),
                            ImpressionCap: sdk.String("qui"),
                            MinimumDailyLooks: sdk.String("quae"),
                            PercentShareOfVoice: sdk.String("laudantium"),
                            ReservationType: shared.ProgrammaticGuaranteedTermsReservationTypeEnumStandard.ToPointer(),
                        },
                        PublisherProfile: sdk.String("occaecati"),
                        SellerTimeZone: &shared.TimeZone{
                            ID: sdk.String("fce953f7-3ef7-4fbc-babd-74dd39c0f5d2"),
                            Version: sdk.String("porro"),
                        },
                        Targeting: &shared.MarketplaceTargeting{
                            DaypartTargeting: &shared.DayPartTargeting{
                                DayParts: []shared.DayPart{
                                    shared.DayPart{
                                        DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                        EndTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(478370),
                                            Minutes: sdk.Int(753570),
                                            Nanos: sdk.Int(497391),
                                            Seconds: sdk.Int(4048),
                                        },
                                        StartTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(639473),
                                            Minutes: sdk.Int(269479),
                                            Nanos: sdk.Int(368584),
                                            Seconds: sdk.Int(410492),
                                        },
                                    },
                                    shared.DayPart{
                                        DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                        EndTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(428224),
                                            Minutes: sdk.Int(822118),
                                            Nanos: sdk.Int(297842),
                                            Seconds: sdk.Int(189848),
                                        },
                                        StartTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(401132),
                                            Minutes: sdk.Int(511319),
                                            Nanos: sdk.Int(120657),
                                            Seconds: sdk.Int(224317),
                                        },
                                    },
                                    shared.DayPart{
                                        DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                        EndTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(97844),
                                            Minutes: sdk.Int(406120),
                                            Nanos: sdk.Int(862192),
                                            Seconds: sdk.Int(569211),
                                        },
                                        StartTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(972920),
                                            Minutes: sdk.Int(343605),
                                            Nanos: sdk.Int(960835),
                                            Seconds: sdk.Int(788873),
                                        },
                                    },
                                    shared.DayPart{
                                        DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                        EndTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(411372),
                                            Minutes: sdk.Int(774048),
                                            Nanos: sdk.Int(359271),
                                            Seconds: sdk.Int(333145),
                                        },
                                        StartTime: &shared.TimeOfDay{
                                            Hours: sdk.Int(399499),
                                            Minutes: sdk.Int(81101),
                                            Nanos: sdk.Int(301831),
                                            Seconds: sdk.Int(407241),
                                        },
                                    },
                                },
                                TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                            },
                            GeoTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "recusandae",
                                },
                                TargetedCriteriaIds: []string{
                                    "minima",
                                },
                            },
                            InventorySizeTargeting: &shared.InventorySizeTargeting{
                                ExcludedInventorySizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("a"),
                                        Type: shared.AdSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("aut"),
                                    },
                                },
                                TargetedInventorySizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("deleniti"),
                                        Type: shared.AdSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("aliquam"),
                                    },
                                },
                            },
                            InventoryTypeTargeting: &shared.InventoryTypeTargeting{
                                InventoryTypes: []shared.InventoryTypeTargetingInventoryTypesEnum{
                                    shared.InventoryTypeTargetingInventoryTypesEnumVideoPlayer,
                                },
                            },
                            PlacementTargeting: &shared.PlacementTargeting{
                                MobileApplicationTargeting: &shared.MobileApplicationTargeting{
                                    FirstPartyTargeting: &shared.FirstPartyMobileApplicationTargeting{
                                        ExcludedAppIds: []string{
                                            "non",
                                        },
                                        TargetedAppIds: []string{
                                            "dolorum",
                                        },
                                    },
                                },
                                URITargeting: &shared.URITargeting{
                                    ExcludedUris: []string{
                                        "placeat",
                                        "velit",
                                        "eum",
                                    },
                                    TargetedUris: []string{
                                        "nobis",
                                        "quas",
                                    },
                                },
                            },
                            TechnologyTargeting: &shared.TechnologyTargeting{
                                DeviceCapabilityTargeting: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "nulla",
                                        "voluptas",
                                        "libero",
                                        "quasi",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "numquam",
                                        "explicabo",
                                    },
                                },
                                DeviceCategoryTargeting: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "ipsa",
                                        "molestiae",
                                        "magnam",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "eius",
                                        "esse",
                                    },
                                },
                                OperatingSystemTargeting: &shared.OperatingSystemTargeting{
                                    OperatingSystemCriteria: &shared.CriteriaTargeting{
                                        ExcludedCriteriaIds: []string{
                                            "rem",
                                            "fuga",
                                        },
                                        TargetedCriteriaIds: []string{
                                            "quidem",
                                            "fugiat",
                                        },
                                    },
                                    OperatingSystemVersionCriteria: &shared.CriteriaTargeting{
                                        ExcludedCriteriaIds: []string{
                                            "eum",
                                            "suscipit",
                                        },
                                        TargetedCriteriaIds: []string{
                                            "eos",
                                            "praesentium",
                                            "quisquam",
                                            "veritatis",
                                        },
                                    },
                                },
                            },
                            UserListTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "id",
                                },
                                TargetedCriteriaIds: []string{
                                    "neque",
                                    "quo",
                                    "illum",
                                },
                            },
                            VideoTargeting: &shared.VideoTargeting{
                                ExcludedPositionTypes: []shared.VideoTargetingExcludedPositionTypesEnum{
                                    shared.VideoTargetingExcludedPositionTypesEnumMidroll,
                                    shared.VideoTargetingExcludedPositionTypesEnumPreroll,
                                    shared.VideoTargetingExcludedPositionTypesEnumPositionTypeUnspecified,
                                    shared.VideoTargetingExcludedPositionTypesEnumPreroll,
                                },
                                TargetedPositionTypes: []shared.VideoTargetingTargetedPositionTypesEnum{
                                    shared.VideoTargetingTargetedPositionTypesEnumMidroll,
                                },
                            },
                        },
                    },
                    UpdateMask: sdk.String("consequatur"),
                },
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("quo"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateDealsResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsDealsList

Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsDealsList(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("totam"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("aliquam"),
        PageSize: sdk.Int64(488410),
        PageToken: sdk.String("occaecati"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDealsResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsDealsPatch

Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatch(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DealInput: &shared.DealInput{
            EstimatedGrossSpend: &shared.Money{
                CurrencyCode: sdk.String("accusantium"),
                Nanos: sdk.Int(783648),
                Units: sdk.String("eum"),
            },
            FlightEndTime: sdk.String("quas"),
            FlightStartTime: sdk.String("praesentium"),
            Name: sdk.String("Cassandra Considine"),
            PreferredDealTerms: &shared.PreferredDealTerms{
                FixedPrice: &shared.Price{
                    Amount: &shared.Money{
                        CurrencyCode: sdk.String("incidunt"),
                        Nanos: sdk.Int(539224),
                        Units: sdk.String("explicabo"),
                    },
                    Type: shared.PriceTypeEnumTypeUnspecified.ToPointer(),
                },
            },
            PrivateAuctionTerms: &shared.PrivateAuctionTermsInput{
                FloorPrice: &shared.Price{
                    Amount: &shared.Money{
                        CurrencyCode: sdk.String("nisi"),
                        Nanos: sdk.Int(147014),
                        Units: sdk.String("sapiente"),
                    },
                    Type: shared.PriceTypeEnumTypeUnspecified.ToPointer(),
                },
            },
            ProgrammaticGuaranteedTerms: &shared.ProgrammaticGuaranteedTerms{
                FixedPrice: &shared.Price{
                    Amount: &shared.Money{
                        CurrencyCode: sdk.String("ratione"),
                        Nanos: sdk.Int(129412),
                        Units: sdk.String("saepe"),
                    },
                    Type: shared.PriceTypeEnumCpm.ToPointer(),
                },
                GuaranteedLooks: sdk.String("atque"),
                ImpressionCap: sdk.String("et"),
                MinimumDailyLooks: sdk.String("esse"),
                PercentShareOfVoice: sdk.String("eveniet"),
                ReservationType: shared.ProgrammaticGuaranteedTermsReservationTypeEnumSponsorship.ToPointer(),
            },
            PublisherProfile: sdk.String("veritatis"),
            SellerTimeZone: &shared.TimeZone{
                ID: sdk.String("7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd"),
                Version: sdk.String("quas"),
            },
            Targeting: &shared.MarketplaceTargeting{
                DaypartTargeting: &shared.DayPartTargeting{
                    DayParts: []shared.DayPart{
                        shared.DayPart{
                            DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                            EndTime: &shared.TimeOfDay{
                                Hours: sdk.Int(951875),
                                Minutes: sdk.Int(621679),
                                Nanos: sdk.Int(575751),
                                Seconds: sdk.Int(863023),
                            },
                            StartTime: &shared.TimeOfDay{
                                Hours: sdk.Int(820767),
                                Minutes: sdk.Int(157632),
                                Nanos: sdk.Int(908844),
                                Seconds: sdk.Int(992430),
                            },
                        },
                        shared.DayPart{
                            DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                            EndTime: &shared.TimeOfDay{
                                Hours: sdk.Int(85001),
                                Minutes: sdk.Int(159414),
                                Nanos: sdk.Int(94458),
                                Seconds: sdk.Int(628899),
                            },
                            StartTime: &shared.TimeOfDay{
                                Hours: sdk.Int(633608),
                                Minutes: sdk.Int(398434),
                                Nanos: sdk.Int(949298),
                                Seconds: sdk.Int(62713),
                            },
                        },
                    },
                    TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                },
                GeoTargeting: &shared.CriteriaTargeting{
                    ExcludedCriteriaIds: []string{
                        "in",
                        "eius",
                    },
                    TargetedCriteriaIds: []string{
                        "illum",
                        "soluta",
                        "accusantium",
                    },
                },
                InventorySizeTargeting: &shared.InventorySizeTargeting{
                    ExcludedInventorySizes: []shared.AdSize{
                        shared.AdSize{
                            Height: sdk.String("sapiente"),
                            Type: shared.AdSizeTypeEnumTypeUnspecified.ToPointer(),
                            Width: sdk.String("ullam"),
                        },
                        shared.AdSize{
                            Height: sdk.String("reprehenderit"),
                            Type: shared.AdSizeTypeEnumPixel.ToPointer(),
                            Width: sdk.String("nisi"),
                        },
                    },
                    TargetedInventorySizes: []shared.AdSize{
                        shared.AdSize{
                            Height: sdk.String("voluptatum"),
                            Type: shared.AdSizeTypeEnumTypeUnspecified.ToPointer(),
                            Width: sdk.String("quibusdam"),
                        },
                    },
                },
                InventoryTypeTargeting: &shared.InventoryTypeTargeting{
                    InventoryTypes: []shared.InventoryTypeTargetingInventoryTypesEnum{
                        shared.InventoryTypeTargetingInventoryTypesEnumMobileApp,
                        shared.InventoryTypeTargetingInventoryTypesEnumVideoPlayer,
                    },
                },
                PlacementTargeting: &shared.PlacementTargeting{
                    MobileApplicationTargeting: &shared.MobileApplicationTargeting{
                        FirstPartyTargeting: &shared.FirstPartyMobileApplicationTargeting{
                            ExcludedAppIds: []string{
                                "architecto",
                                "omnis",
                                "tenetur",
                            },
                            TargetedAppIds: []string{
                                "at",
                            },
                        },
                    },
                    URITargeting: &shared.URITargeting{
                        ExcludedUris: []string{
                            "voluptate",
                        },
                        TargetedUris: []string{
                            "minima",
                        },
                    },
                },
                TechnologyTargeting: &shared.TechnologyTargeting{
                    DeviceCapabilityTargeting: &shared.CriteriaTargeting{
                        ExcludedCriteriaIds: []string{
                            "consectetur",
                        },
                        TargetedCriteriaIds: []string{
                            "iste",
                        },
                    },
                    DeviceCategoryTargeting: &shared.CriteriaTargeting{
                        ExcludedCriteriaIds: []string{
                            "accusantium",
                            "rem",
                            "aut",
                            "laudantium",
                        },
                        TargetedCriteriaIds: []string{
                            "mollitia",
                            "ab",
                        },
                    },
                    OperatingSystemTargeting: &shared.OperatingSystemTargeting{
                        OperatingSystemCriteria: &shared.CriteriaTargeting{
                            ExcludedCriteriaIds: []string{
                                "non",
                                "voluptatem",
                                "dolor",
                            },
                            TargetedCriteriaIds: []string{
                                "numquam",
                                "impedit",
                                "explicabo",
                            },
                        },
                        OperatingSystemVersionCriteria: &shared.CriteriaTargeting{
                            ExcludedCriteriaIds: []string{
                                "aut",
                                "dignissimos",
                            },
                            TargetedCriteriaIds: []string{
                                "maiores",
                            },
                        },
                    },
                },
                UserListTargeting: &shared.CriteriaTargeting{
                    ExcludedCriteriaIds: []string{
                        "velit",
                        "voluptatibus",
                        "voluptas",
                    },
                    TargetedCriteriaIds: []string{
                        "aperiam",
                        "ea",
                        "quaerat",
                        "consequuntur",
                    },
                },
                VideoTargeting: &shared.VideoTargeting{
                    ExcludedPositionTypes: []shared.VideoTargetingExcludedPositionTypesEnum{
                        shared.VideoTargetingExcludedPositionTypesEnumMidroll,
                        shared.VideoTargetingExcludedPositionTypesEnumPostroll,
                        shared.VideoTargetingExcludedPositionTypesEnumPreroll,
                        shared.VideoTargetingExcludedPositionTypesEnumMidroll,
                    },
                    TargetedPositionTypes: []shared.VideoTargetingTargetedPositionTypesEnum{
                        shared.VideoTargetingTargetedPositionTypesEnumPreroll,
                        shared.VideoTargetingTargetedPositionTypesEnumPositionTypeUnspecified,
                        shared.VideoTargetingTargetedPositionTypesEnumPreroll,
                        shared.VideoTargetingTargetedPositionTypesEnumPostroll,
                    },
                },
            },
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("fuga"),
        Name: "Ricardo Franecki",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UpdateMask: sdk.String("fugiat"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsList

Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsList(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("facilis"),
        Filter: sdk.String("cum"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(360545),
        PageToken: sdk.String("reiciendis"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProposalsResponse != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersProposalsSendRfp

Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersProposalsSendRfp(ctx, operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendRfpRequest: &shared.SendRfpRequest{
            BuyerContacts: []shared.Contact{
                shared.Contact{
                    DisplayName: sdk.String("consectetur"),
                    Email: sdk.String("Faustino.Wehner98@yahoo.com"),
                },
                shared.Contact{
                    DisplayName: sdk.String("suscipit"),
                    Email: sdk.String("Mavis.Ullrich12@hotmail.com"),
                },
                shared.Contact{
                    DisplayName: sdk.String("asperiores"),
                    Email: sdk.String("Delphia48@gmail.com"),
                },
            },
            Client: sdk.String("a"),
            DisplayName: sdk.String("debitis"),
            EstimatedGrossSpend: &shared.Money{
                CurrencyCode: sdk.String("consectetur"),
                Nanos: sdk.Int(358107),
                Units: sdk.String("harum"),
            },
            FlightEndTime: sdk.String("laboriosam"),
            FlightStartTime: sdk.String("ipsa"),
            GeoTargeting: &shared.CriteriaTargeting{
                ExcludedCriteriaIds: []string{
                    "libero",
                    "vitae",
                    "accusamus",
                    "similique",
                },
                TargetedCriteriaIds: []string{
                    "aspernatur",
                    "voluptas",
                },
            },
            InventorySizeTargeting: &shared.InventorySizeTargeting{
                ExcludedInventorySizes: []shared.AdSize{
                    shared.AdSize{
                        Height: sdk.String("voluptas"),
                        Type: shared.AdSizeTypeEnumPixel.ToPointer(),
                        Width: sdk.String("nobis"),
                    },
                    shared.AdSize{
                        Height: sdk.String("dolorum"),
                        Type: shared.AdSizeTypeEnumPixel.ToPointer(),
                        Width: sdk.String("minus"),
                    },
                },
                TargetedInventorySizes: []shared.AdSize{
                    shared.AdSize{
                        Height: sdk.String("blanditiis"),
                        Type: shared.AdSizeTypeEnumInterstitial.ToPointer(),
                        Width: sdk.String("dolore"),
                    },
                },
            },
            Note: sdk.String("aliquam"),
            PreferredDealTerms: &shared.PreferredDealTerms{
                FixedPrice: &shared.Price{
                    Amount: &shared.Money{
                        CurrencyCode: sdk.String("officiis"),
                        Nanos: sdk.Int(839189),
                        Units: sdk.String("ullam"),
                    },
                    Type: shared.PriceTypeEnumTypeUnspecified.ToPointer(),
                },
            },
            ProgrammaticGuaranteedTerms: &shared.ProgrammaticGuaranteedTerms{
                FixedPrice: &shared.Price{
                    Amount: &shared.Money{
                        CurrencyCode: sdk.String("cum"),
                        Nanos: sdk.Int(502389),
                        Units: sdk.String("quas"),
                    },
                    Type: shared.PriceTypeEnumCpd.ToPointer(),
                },
                GuaranteedLooks: sdk.String("nesciunt"),
                ImpressionCap: sdk.String("culpa"),
                MinimumDailyLooks: sdk.String("corrupti"),
                PercentShareOfVoice: sdk.String("pariatur"),
                ReservationType: shared.ProgrammaticGuaranteedTermsReservationTypeEnumStandard.ToPointer(),
            },
            PublisherProfile: sdk.String("hic"),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Buyer: "sit",
        Callback: sdk.String("rerum"),
        Fields: sdk.String("sed"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Proposal != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersPublisherProfilesGet

Gets the requested publisher profile by name.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGet(ctx, operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("sed"),
        Name: "Tonya Predovic",
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublisherProfile != nil {
        // handle response
    }
}
```

## AuthorizedbuyersmarketplaceBuyersPublisherProfilesList

Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

### Example Usage

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
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersPublisherProfilesList(ctx, operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("corrupti"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("sed"),
        PageSize: sdk.Int64(592231),
        PageToken: sdk.String("eius"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPublisherProfilesResponse != nil {
        // handle response
    }
}
```
