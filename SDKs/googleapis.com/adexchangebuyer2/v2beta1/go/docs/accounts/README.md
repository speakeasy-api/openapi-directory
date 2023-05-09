# Accounts

### Available Operations

* [Adexchangebuyer2AccountsClientsCreate](#adexchangebuyer2accountsclientscreate) - Creates a new client buyer.
* [Adexchangebuyer2AccountsClientsGet](#adexchangebuyer2accountsclientsget) - Gets a client buyer with a given client account ID.
* [Adexchangebuyer2AccountsClientsInvitationsCreate](#adexchangebuyer2accountsclientsinvitationscreate) - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
* [Adexchangebuyer2AccountsClientsInvitationsGet](#adexchangebuyer2accountsclientsinvitationsget) - Retrieves an existing client user invitation.
* [Adexchangebuyer2AccountsClientsInvitationsList](#adexchangebuyer2accountsclientsinvitationslist) - Lists all the client users invitations for a client with a given account ID.
* [Adexchangebuyer2AccountsClientsList](#adexchangebuyer2accountsclientslist) - Lists all the clients for the current sponsor buyer.
* [Adexchangebuyer2AccountsClientsUpdate](#adexchangebuyer2accountsclientsupdate) - Updates an existing client buyer.
* [Adexchangebuyer2AccountsClientsUsersGet](#adexchangebuyer2accountsclientsusersget) - Retrieves an existing client user.
* [Adexchangebuyer2AccountsClientsUsersList](#adexchangebuyer2accountsclientsuserslist) - Lists all the known client users for a specified sponsor buyer account ID.
* [Adexchangebuyer2AccountsClientsUsersUpdate](#adexchangebuyer2accountsclientsusersupdate) - Updates an existing client user. Only the user status can be changed on update.
* [Adexchangebuyer2AccountsCreativesCreate](#adexchangebuyer2accountscreativescreate) - Creates a creative.
* [Adexchangebuyer2AccountsCreativesDealAssociationsAdd](#adexchangebuyer2accountscreativesdealassociationsadd) - Associate an existing deal with a creative.
* [Adexchangebuyer2AccountsCreativesDealAssociationsList](#adexchangebuyer2accountscreativesdealassociationslist) - List all creative-deal associations.
* [Adexchangebuyer2AccountsCreativesDealAssociationsRemove](#adexchangebuyer2accountscreativesdealassociationsremove) - Remove the association between a deal and a creative.
* [Adexchangebuyer2AccountsCreativesGet](#adexchangebuyer2accountscreativesget) - Gets a creative.
* [Adexchangebuyer2AccountsCreativesList](#adexchangebuyer2accountscreativeslist) - Lists creatives.
* [Adexchangebuyer2AccountsCreativesStopWatching](#adexchangebuyer2accountscreativesstopwatching) - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
* [Adexchangebuyer2AccountsCreativesUpdate](#adexchangebuyer2accountscreativesupdate) - Updates a creative.
* [Adexchangebuyer2AccountsCreativesWatch](#adexchangebuyer2accountscreativeswatch) - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
* [Adexchangebuyer2AccountsFinalizedProposalsList](#adexchangebuyer2accountsfinalizedproposalslist) - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
* [Adexchangebuyer2AccountsFinalizedProposalsPause](#adexchangebuyer2accountsfinalizedproposalspause) - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* [Adexchangebuyer2AccountsFinalizedProposalsResume](#adexchangebuyer2accountsfinalizedproposalsresume) - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* [Adexchangebuyer2AccountsProductsGet](#adexchangebuyer2accountsproductsget) - Gets the requested product by ID.
* [Adexchangebuyer2AccountsProductsList](#adexchangebuyer2accountsproductslist) - List all products visible to the buyer (optionally filtered by the specified PQL query).
* [Adexchangebuyer2AccountsProposalsAccept](#adexchangebuyer2accountsproposalsaccept) - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
* [Adexchangebuyer2AccountsProposalsAddNote](#adexchangebuyer2accountsproposalsaddnote) - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
* [Adexchangebuyer2AccountsProposalsCancelNegotiation](#adexchangebuyer2accountsproposalscancelnegotiation) - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
* [Adexchangebuyer2AccountsProposalsCompleteSetup](#adexchangebuyer2accountsproposalscompletesetup) - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
* [Adexchangebuyer2AccountsProposalsCreate](#adexchangebuyer2accountsproposalscreate) - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
* [Adexchangebuyer2AccountsProposalsGet](#adexchangebuyer2accountsproposalsget) - Gets a proposal given its ID. The proposal is returned at its head revision.
* [Adexchangebuyer2AccountsProposalsList](#adexchangebuyer2accountsproposalslist) - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
* [Adexchangebuyer2AccountsProposalsPause](#adexchangebuyer2accountsproposalspause) - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
* [Adexchangebuyer2AccountsProposalsResume](#adexchangebuyer2accountsproposalsresume) - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
* [Adexchangebuyer2AccountsProposalsUpdate](#adexchangebuyer2accountsproposalsupdate) - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
* [Adexchangebuyer2AccountsPublisherProfilesGet](#adexchangebuyer2accountspublisherprofilesget) - Gets the requested publisher profile by id.
* [Adexchangebuyer2AccountsPublisherProfilesList](#adexchangebuyer2accountspublisherprofileslist) - List all publisher profiles visible to the buyer

## Adexchangebuyer2AccountsClientsCreate

Creates a new client buyer.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsCreate(ctx, operations.Adexchangebuyer2AccountsClientsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Client: &shared.Client{
            ClientAccountID: sdk.String("minus"),
            ClientName: sdk.String("placeat"),
            EntityID: sdk.String("voluptatum"),
            EntityName: sdk.String("iusto"),
            EntityType: shared.ClientEntityTypeEnumBrand.ToPointer(),
            PartnerClientID: sdk.String("nisi"),
            Role: shared.ClientRoleEnumClientDealApprover.ToPointer(),
            Status: shared.ClientStatusEnumActive.ToPointer(),
            VisibleToSeller: sdk.Bool(false),
        },
        AccessToken: sdk.String("ab"),
        AccountID: "quis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.Adexchangebuyer2AccountsClientsCreateSecurity{
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

## Adexchangebuyer2AccountsClientsGet

Gets a client buyer with a given client account ID.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsGet(ctx, operations.Adexchangebuyer2AccountsClientsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        AccountID: "maiores",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        ClientAccountID: "quod",
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
    }, operations.Adexchangebuyer2AccountsClientsGetSecurity{
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

## Adexchangebuyer2AccountsClientsInvitationsCreate

Creates and sends out an email invitation to access an Ad Exchange client buyer account.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsInvitationsCreate(ctx, operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClientUserInvitation: &shared.ClientUserInvitation{
            ClientAccountID: sdk.String("occaecati"),
            Email: sdk.String("Kale_Welch10@gmail.com"),
            InvitationID: sdk.String("commodi"),
        },
        AccessToken: sdk.String("molestiae"),
        AccountID: "modi",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        ClientAccountID: "cum",
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.Adexchangebuyer2AccountsClientsInvitationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientUserInvitation != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsClientsInvitationsGet

Retrieves an existing client user invitation.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsInvitationsGet(ctx, operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        AccountID: "iste",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        ClientAccountID: "laboriosam",
        Fields: sdk.String("hic"),
        InvitationID: "saepe",
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("iure"),
    }, operations.Adexchangebuyer2AccountsClientsInvitationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientUserInvitation != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsClientsInvitationsList

Lists all the client users invitations for a client with a given account ID.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsInvitationsList(ctx, operations.Adexchangebuyer2AccountsClientsInvitationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        AccountID: "architecto",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ClientAccountID: "est",
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dolores"),
        PageSize: sdk.Int64(210382),
        PageToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.Adexchangebuyer2AccountsClientsInvitationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClientUserInvitationsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsClientsList

Lists all the clients for the current sponsor buyer.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsList(ctx, operations.Adexchangebuyer2AccountsClientsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        AccountID: "minima",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PageSize: sdk.Int64(958950),
        PageToken: sdk.String("architecto"),
        PartnerClientID: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.Adexchangebuyer2AccountsClientsListSecurity{
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

## Adexchangebuyer2AccountsClientsUpdate

Updates an existing client buyer.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsUpdate(ctx, operations.Adexchangebuyer2AccountsClientsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Client: &shared.Client{
            ClientAccountID: sdk.String("mollitia"),
            ClientName: sdk.String("occaecati"),
            EntityID: sdk.String("numquam"),
            EntityName: sdk.String("commodi"),
            EntityType: shared.ClientEntityTypeEnumBrand.ToPointer(),
            PartnerClientID: sdk.String("molestiae"),
            Role: shared.ClientRoleEnumClientRoleUnspecified.ToPointer(),
            Status: shared.ClientStatusEnumDisabled.ToPointer(),
            VisibleToSeller: sdk.Bool(false),
        },
        AccessToken: sdk.String("quia"),
        AccountID: "quis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        ClientAccountID: "animi",
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.Adexchangebuyer2AccountsClientsUpdateSecurity{
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

## Adexchangebuyer2AccountsClientsUsersGet

Retrieves an existing client user.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsUsersGet(ctx, operations.Adexchangebuyer2AccountsClientsUsersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        AccountID: "aut",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        ClientAccountID: "temporibus",
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
        UserID: "praesentium",
    }, operations.Adexchangebuyer2AccountsClientsUsersGetSecurity{
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

## Adexchangebuyer2AccountsClientsUsersList

Lists all the known client users for a specified sponsor buyer account ID.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsUsersList(ctx, operations.Adexchangebuyer2AccountsClientsUsersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        AccountID: "omnis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        ClientAccountID: "perferendis",
        Fields: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("ut"),
        PageSize: sdk.Int64(979587),
        PageToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.Adexchangebuyer2AccountsClientsUsersListSecurity{
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

## Adexchangebuyer2AccountsClientsUsersUpdate

Updates an existing client user. Only the user status can be changed on update.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsUsersUpdate(ctx, operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClientUser: &shared.ClientUser{
            ClientAccountID: sdk.String("harum"),
            Email: sdk.String("Shania.Jerde21@gmail.com"),
            Status: shared.ClientUserStatusEnumActive.ToPointer(),
            UserID: sdk.String("molestias"),
        },
        AccessToken: sdk.String("excepturi"),
        AccountID: "pariatur",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        ClientAccountID: "rem",
        Fields: sdk.String("voluptates"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("itaque"),
        UserID: "incidunt",
    }, operations.Adexchangebuyer2AccountsClientsUsersUpdateSecurity{
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

## Adexchangebuyer2AccountsCreativesCreate

Creates a creative.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesCreate(ctx, operations.Adexchangebuyer2AccountsCreativesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Creative: &shared.Creative{
            AccountID: sdk.String("consequatur"),
            AdChoicesDestinationURL: sdk.String("est"),
            AdTechnologyProviders: &shared.AdTechnologyProviders{
                DetectedProviderIds: []string{
                    "explicabo",
                    "deserunt",
                    "distinctio",
                    "quibusdam",
                },
                HasUnidentifiedProvider: sdk.Bool(false),
            },
            AdvertiserName: sdk.String("labore"),
            AgencyID: sdk.String("modi"),
            APIUpdateTime: sdk.String("qui"),
            Attributes: []shared.CreativeAttributesEnum{
                shared.CreativeAttributesEnumRichMediaCapabilityTypeMraid,
                shared.CreativeAttributesEnumInstreamVastVideoTypeVpaidFlash,
            },
            ClickThroughUrls: []string{
                "magni",
            },
            Corrections: []shared.Correction{
                shared.Correction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    288476,
                                    962189,
                                    433288,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    699479,
                                    116202,
                                    297437,
                                    767024,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Details: []string{
                        "accusamus",
                        "delectus",
                    },
                    Type: shared.CorrectionTypeEnumInBannerVideoAttributeAdded.ToPointer(),
                },
                shared.Correction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    606393,
                                    474867,
                                    19193,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    92373,
                                    569965,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    891924,
                                    260341,
                                    806194,
                                    537023,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Details: []string{
                        "sed",
                        "saepe",
                        "pariatur",
                        "accusantium",
                    },
                    Type: shared.CorrectionTypeEnumVendorIdsAdded.ToPointer(),
                },
                shared.Correction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    407183,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    359978,
                                    944124,
                                    729991,
                                    749999,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    463451,
                                    223924,
                                    874573,
                                    345352,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Details: []string{
                        "blanditiis",
                    },
                    Type: shared.CorrectionTypeEnumSslAttributeAdded.ToPointer(),
                },
                shared.Correction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    589910,
                                    750844,
                                    730122,
                                    964490,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                    },
                    Details: []string{
                        "qui",
                    },
                    Type: shared.CorrectionTypeEnumSslAttributeRemoved.ToPointer(),
                },
            },
            CreativeID: sdk.String("hic"),
            DealsStatus: shared.CreativeDealsStatusEnumApproved.ToPointer(),
            DeclaredClickThroughUrls: []string{
                "voluptate",
                "dignissimos",
                "reiciendis",
            },
            DetectedAdvertiserIds: []string{
                "dolorum",
            },
            DetectedDomains: []string{
                "veritatis",
                "ipsa",
            },
            DetectedLanguages: []string{
                "iure",
            },
            DetectedProductCategories: []int{
                311796,
                881005,
            },
            DetectedSensitiveCategories: []int{
                976405,
                377752,
                617658,
            },
            HTML: &shared.HTMLContent{
                Height: sdk.Int(179603),
                Snippet: sdk.String("atque"),
                Width: sdk.Int(24678),
            },
            ImpressionTrackingUrls: []string{
                "ab",
                "soluta",
                "dolorum",
                "iusto",
            },
            Native: &shared.NativeContent{
                AdvertiserName: sdk.String("voluptate"),
                AppIcon: &shared.Image{
                    Height: sdk.Int(677082),
                    URL: sdk.String("deleniti"),
                    Width: sdk.Int(607045),
                },
                Body: sdk.String("necessitatibus"),
                CallToAction: sdk.String("distinctio"),
                ClickLinkURL: sdk.String("asperiores"),
                ClickTrackingURL: sdk.String("nihil"),
                Headline: sdk.String("ipsum"),
                Image: &shared.Image{
                    Height: sdk.Int(456015),
                    URL: sdk.String("id"),
                    Width: sdk.Int(906418),
                },
                Logo: &shared.Image{
                    Height: sdk.Int(263322),
                    URL: sdk.String("aspernatur"),
                    Width: sdk.Int(20651),
                },
                PriceDisplayText: sdk.String("amet"),
                StarRating: sdk.Float64(7583.79),
                StoreURL: sdk.String("accusamus"),
                VideoURL: sdk.String("ad"),
            },
            OpenAuctionStatus: shared.CreativeOpenAuctionStatusEnumStatusTypeUnspecified.ToPointer(),
            RestrictedCategories: []shared.CreativeRestrictedCategoriesEnum{
                shared.CreativeRestrictedCategoriesEnumAlcohol,
                shared.CreativeRestrictedCategoriesEnumAlcohol,
            },
            ServingRestrictions: []shared.ServingRestriction{
                shared.ServingRestriction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    885338,
                                    185636,
                                    679880,
                                    952792,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    471752,
                                    25662,
                                    711584,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    863856,
                                    747080,
                                    117531,
                                    674848,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    124833,
                                    355613,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Disapproval: &shared.Disapproval{
                        Details: []string{
                            "veritatis",
                        },
                        Reason: shared.DisapprovalReasonEnumEnablingDishonestBehavior.ToPointer(),
                    },
                    DisapprovalReasons: []shared.Disapproval{
                        shared.Disapproval{
                            Details: []string{
                                "cupiditate",
                                "aperiam",
                                "delectus",
                            },
                            Reason: shared.DisapprovalReasonEnumVideoUnsupportedFormat.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "labore",
                                "adipisci",
                            },
                            Reason: shared.DisapprovalReasonEnumMisuseOfPersonalInformation.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "quae",
                            },
                            Reason: shared.DisapprovalReasonEnumBrokenURL.ToPointer(),
                        },
                    },
                    Status: shared.ServingRestrictionStatusEnumDisapproval.ToPointer(),
                },
                shared.ServingRestriction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    181631,
                                    63955,
                                    512393,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    486160,
                                    630448,
                                    708548,
                                    874288,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    639473,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    97844,
                                    406120,
                                    862192,
                                    569211,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                    },
                    Disapproval: &shared.Disapproval{
                        Details: []string{
                            "aliquid",
                            "inventore",
                        },
                        Reason: shared.DisapprovalReasonEnumRawIPAddressInSnippet.ToPointer(),
                    },
                    DisapprovalReasons: []shared.Disapproval{
                        shared.Disapproval{
                            Details: []string{
                                "consectetur",
                                "recusandae",
                                "aspernatur",
                                "minima",
                            },
                            Reason: shared.DisapprovalReasonEnumLandingPageError.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "libero",
                                "aut",
                                "aut",
                                "deleniti",
                            },
                            Reason: shared.DisapprovalReasonEnumRestrictedPoliticalContent.ToPointer(),
                        },
                    },
                    Status: shared.ServingRestrictionStatusEnumStatusUnspecified.ToPointer(),
                },
            },
            VendorIds: []int{
                882860,
            },
            Version: sdk.Int(79522),
            Video: &shared.VideoContent{
                VideoURL: sdk.String("non"),
                VideoVastXML: sdk.String("et"),
            },
        },
        AccessToken: sdk.String("dolorum"),
        AccountID: "laborum",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        DuplicateIDMode: operations.Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnumNoDuplicates.ToPointer(),
        Fields: sdk.String("autem"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.Adexchangebuyer2AccountsCreativesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsCreativesDealAssociationsAdd

Associate an existing deal with a creative.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesDealAssociationsAdd(ctx, operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddDealAssociationRequest: &shared.AddDealAssociationRequest{
            Association: &shared.CreativeDealAssociation{
                AccountID: sdk.String("quasi"),
                CreativeID: sdk.String("tempora"),
                DealsID: sdk.String("numquam"),
            },
        },
        AccessToken: sdk.String("explicabo"),
        AccountID: "provident",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestiae"),
        CreativeID: "magnam",
        Fields: sdk.String("odio"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity{
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

## Adexchangebuyer2AccountsCreativesDealAssociationsList

List all creative-deal associations.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesDealAssociationsList(ctx, operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        AccountID: "fugiat",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        CreativeID: "suscipit",
        Fields: sdk.String("assumenda"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("praesentium"),
        PageSize: sdk.Int64(788546),
        PageToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("ipsa"),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("neque"),
    }, operations.Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDealAssociationsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsCreativesDealAssociationsRemove

Remove the association between a deal and a creative.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesDealAssociationsRemove(ctx, operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveDealAssociationRequest: &shared.RemoveDealAssociationRequest{
            Association: &shared.CreativeDealAssociation{
                AccountID: sdk.String("illum"),
                CreativeID: sdk.String("quo"),
                DealsID: sdk.String("fuga"),
            },
        },
        AccessToken: sdk.String("eius"),
        AccountID: "eos",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ab"),
        CreativeID: "cupiditate",
        Fields: sdk.String("consequatur"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity{
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

## Adexchangebuyer2AccountsCreativesGet

Gets a creative.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesGet(ctx, operations.Adexchangebuyer2AccountsCreativesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        AccountID: "recusandae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        CreativeID: "quod",
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.Adexchangebuyer2AccountsCreativesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsCreativesList

Lists creatives.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesList(ctx, operations.Adexchangebuyer2AccountsCreativesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        AccountID: "commodi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("accusantium"),
        PageSize: sdk.Int64(783648),
        PageToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quas"),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.Adexchangebuyer2AccountsCreativesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreativesResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsCreativesStopWatching

Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesStopWatching(ctx, operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "mollitia": "incidunt",
            "atque": "explicabo",
            "minima": "nisi",
        },
        AccessToken: sdk.String("fugit"),
        AccountID: "sapiente",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        CreativeID: "explicabo",
        Fields: sdk.String("saepe"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.Adexchangebuyer2AccountsCreativesStopWatchingSecurity{
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

## Adexchangebuyer2AccountsCreativesUpdate

Updates a creative.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesUpdate(ctx, operations.Adexchangebuyer2AccountsCreativesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Creative: &shared.Creative{
            AccountID: sdk.String("veritatis"),
            AdChoicesDestinationURL: sdk.String("esse"),
            AdTechnologyProviders: &shared.AdTechnologyProviders{
                DetectedProviderIds: []string{
                    "nam",
                    "vero",
                    "aliquid",
                    "quasi",
                },
                HasUnidentifiedProvider: sdk.Bool(false),
            },
            AdvertiserName: sdk.String("saepe"),
            AgencyID: sdk.String("vel"),
            APIUpdateTime: sdk.String("harum"),
            Attributes: []shared.CreativeAttributesEnum{
                shared.CreativeAttributesEnumRichMediaCapabilityTypeSsl,
                shared.CreativeAttributesEnumRichMediaCapabilityTypeMraid,
            },
            ClickThroughUrls: []string{
                "distinctio",
                "eligendi",
            },
            Corrections: []shared.Correction{
                shared.Correction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    959167,
                                    232865,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    815524,
                                    85001,
                                    159414,
                                    94458,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    958983,
                                    119771,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Details: []string{
                        "quibusdam",
                    },
                    Type: shared.CorrectionTypeEnumFlashFreeAttributeAdded.ToPointer(),
                },
            },
            CreativeID: sdk.String("deleniti"),
            DealsStatus: shared.CreativeDealsStatusEnumStatusTypeUnspecified.ToPointer(),
            DeclaredClickThroughUrls: []string{
                "architecto",
                "omnis",
                "tenetur",
            },
            DetectedAdvertiserIds: []string{
                "at",
            },
            DetectedDomains: []string{
                "voluptate",
            },
            DetectedLanguages: []string{
                "minima",
            },
            DetectedProductCategories: []int{
                232744,
            },
            DetectedSensitiveCategories: []int{
                614465,
            },
            HTML: &shared.HTMLContent{
                Height: sdk.Int(839513),
                Snippet: sdk.String("accusantium"),
                Width: sdk.Int(522371),
            },
            ImpressionTrackingUrls: []string{
                "laudantium",
            },
            Native: &shared.NativeContent{
                AdvertiserName: sdk.String("eum"),
                AppIcon: &shared.Image{
                    Height: sdk.Int(649832),
                    URL: sdk.String("ab"),
                    Width: sdk.Int(544591),
                },
                Body: sdk.String("non"),
                CallToAction: sdk.String("voluptatem"),
                ClickLinkURL: sdk.String("dolor"),
                ClickTrackingURL: sdk.String("occaecati"),
                Headline: sdk.String("numquam"),
                Image: &shared.Image{
                    Height: sdk.Int(771089),
                    URL: sdk.String("explicabo"),
                    Width: sdk.Int(376226),
                },
                Logo: &shared.Image{
                    Height: sdk.Int(12036),
                    URL: sdk.String("dignissimos"),
                    Width: sdk.Int(115484),
                },
                PriceDisplayText: sdk.String("maiores"),
                StarRating: sdk.Float64(6184.8),
                StoreURL: sdk.String("velit"),
                VideoURL: sdk.String("voluptatibus"),
            },
            OpenAuctionStatus: shared.CreativeOpenAuctionStatusEnumConditionallyApproved.ToPointer(),
            RestrictedCategories: []shared.CreativeRestrictedCategoriesEnum{
                shared.CreativeRestrictedCategoriesEnumNoRestrictedCategories,
                shared.CreativeRestrictedCategoriesEnumNoRestrictedCategories,
                shared.CreativeRestrictedCategoriesEnumNoRestrictedCategories,
                shared.CreativeRestrictedCategoriesEnumNoRestrictedCategories,
            },
            ServingRestrictions: []shared.ServingRestriction{
                shared.ServingRestriction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    801836,
                                    288398,
                                    70447,
                                    241418,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    414857,
                                    447144,
                                    360545,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    985492,
                                    381760,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Disapproval: &shared.Disapproval{
                        Details: []string{
                            "non",
                        },
                        Reason: shared.DisapprovalReasonEnumLandingPageDisabled.ToPointer(),
                    },
                    DisapprovalReasons: []shared.Disapproval{
                        shared.Disapproval{
                            Details: []string{
                                "a",
                                "debitis",
                            },
                            Reason: shared.DisapprovalReasonEnumLandingPageDisabled.ToPointer(),
                        },
                    },
                    Status: shared.ServingRestrictionStatusEnumDisapproval.ToPointer(),
                },
                shared.ServingRestriction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    132815,
                                    379057,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    839189,
                                    351870,
                                    237742,
                                    738391,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    994401,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                    },
                    Disapproval: &shared.Disapproval{
                        Details: []string{
                            "commodi",
                            "quidem",
                        },
                        Reason: shared.DisapprovalReasonEnumIncorrectAdTechnologyDeclaration.ToPointer(),
                    },
                    DisapprovalReasons: []shared.Disapproval{
                        shared.Disapproval{
                            Details: []string{
                                "architecto",
                                "suscipit",
                                "sapiente",
                            },
                            Reason: shared.DisapprovalReasonEnumMaximumNumberOfCookiesExceeded.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "reiciendis",
                            },
                            Reason: shared.DisapprovalReasonEnumBrokenURL.ToPointer(),
                        },
                    },
                    Status: shared.ServingRestrictionStatusEnumDisapproval.ToPointer(),
                },
                shared.ServingRestriction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    579912,
                                    552078,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    750595,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumNative,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    386827,
                                    680515,
                                    530089,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    282699,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumDesktop,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                    shared.PlatformContextPlatformsEnumDesktop,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumInsecure,
                                },
                            },
                        },
                    },
                    Disapproval: &shared.Disapproval{
                        Details: []string{
                            "sit",
                            "voluptatum",
                        },
                        Reason: shared.DisapprovalReasonEnumSexuallyExplicitContent.ToPointer(),
                    },
                    DisapprovalReasons: []shared.Disapproval{
                        shared.Disapproval{
                            Details: []string{
                                "et",
                                "blanditiis",
                            },
                            Reason: shared.DisapprovalReasonEnumPoorImageOrVideoQuality.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "sit",
                            },
                            Reason: shared.DisapprovalReasonEnumIncorrectImageLayout.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "saepe",
                                "error",
                            },
                            Reason: shared.DisapprovalReasonEnumLengthOfImageAnimation.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "reiciendis",
                                "dolorem",
                            },
                            Reason: shared.DisapprovalReasonEnumOmissionOfRelevantInformation.ToPointer(),
                        },
                    },
                    Status: shared.ServingRestrictionStatusEnumStatusUnspecified.ToPointer(),
                },
                shared.ServingRestriction{
                    Contexts: []shared.ServingContext{
                        shared.ServingContext{
                            All: shared.ServingContextAllEnumSimpleContext.ToPointer(),
                            AppType: &shared.AppContext{
                                AppTypes: []shared.AppContextAppTypesEnum{
                                    shared.AppContextAppTypesEnumNative,
                                    shared.AppContextAppTypesEnumWeb,
                                    shared.AppContextAppTypesEnumWeb,
                                },
                            },
                            AuctionType: &shared.AuctionContext{
                                AuctionTypes: []shared.AuctionContextAuctionTypesEnum{
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumDirectDeals,
                                    shared.AuctionContextAuctionTypesEnumOpenAuction,
                                },
                            },
                            Location: &shared.LocationContext{
                                GeoCriteriaIds: []int{
                                    227084,
                                },
                            },
                            Platform: &shared.PlatformContext{
                                Platforms: []shared.PlatformContextPlatformsEnum{
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumAndroid,
                                    shared.PlatformContextPlatformsEnumIos,
                                },
                            },
                            SecurityType: &shared.SecurityContext{
                                Securities: []shared.SecurityContextSecuritiesEnum{
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                    shared.SecurityContextSecuritiesEnumSsl,
                                },
                            },
                        },
                    },
                    Disapproval: &shared.Disapproval{
                        Details: []string{
                            "est",
                        },
                        Reason: shared.DisapprovalReasonEnumUnavailablePromotions.ToPointer(),
                    },
                    DisapprovalReasons: []shared.Disapproval{
                        shared.Disapproval{
                            Details: []string{
                                "fuga",
                                "praesentium",
                                "mollitia",
                                "veniam",
                            },
                            Reason: shared.DisapprovalReasonEnumMediaNotFunctional.ToPointer(),
                        },
                        shared.Disapproval{
                            Details: []string{
                                "repudiandae",
                                "quasi",
                                "atque",
                                "reprehenderit",
                            },
                            Reason: shared.DisapprovalReasonEnumExperimentalMedicalTreatment.ToPointer(),
                        },
                    },
                    Status: shared.ServingRestrictionStatusEnumDisapproval.ToPointer(),
                },
            },
            VendorIds: []int{
                693957,
                806670,
            },
            Version: sdk.Int(90885),
            Video: &shared.VideoContent{
                VideoURL: sdk.String("esse"),
                VideoVastXML: sdk.String("amet"),
            },
        },
        AccessToken: sdk.String("assumenda"),
        AccountID: "ea",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        CreativeID: "officiis",
        Fields: sdk.String("officiis"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ex"),
    }, operations.Adexchangebuyer2AccountsCreativesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsCreativesWatch

Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsCreativesWatch(ctx, operations.Adexchangebuyer2AccountsCreativesWatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WatchCreativeRequest: &shared.WatchCreativeRequest{
            Topic: sdk.String("corrupti"),
        },
        AccessToken: sdk.String("at"),
        AccountID: "error",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        CreativeID: "repudiandae",
        Fields: sdk.String("atque"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.Adexchangebuyer2AccountsCreativesWatchSecurity{
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

## Adexchangebuyer2AccountsFinalizedProposalsList

List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsFinalizedProposalsList(ctx, operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        AccountID: "doloremque",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("accusantium"),
        Filter: sdk.String("beatae"),
        FilterSyntax: operations.Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnumFilterSyntaxUnspecified.ToPointer(),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("laboriosam"),
        PageSize: sdk.Int64(246535),
        PageToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.Adexchangebuyer2AccountsFinalizedProposalsListSecurity{
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

## Adexchangebuyer2AccountsFinalizedProposalsPause

Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsFinalizedProposalsPause(ctx, operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PauseProposalDealsRequest: &shared.PauseProposalDealsRequest{
            ExternalDealIds: []string{
                "officiis",
                "perspiciatis",
                "in",
            },
            Reason: sdk.String("adipisci"),
        },
        AccessToken: sdk.String("eveniet"),
        AccountID: "occaecati",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("id"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "error",
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.Adexchangebuyer2AccountsFinalizedProposalsPauseSecurity{
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

## Adexchangebuyer2AccountsFinalizedProposalsResume

Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsFinalizedProposalsResume(ctx, operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResumeProposalDealsRequest: &shared.ResumeProposalDealsRequest{
            ExternalDealIds: []string{
                "vero",
            },
        },
        AccessToken: sdk.String("doloremque"),
        AccountID: "iure",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("quae"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "qui",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.Adexchangebuyer2AccountsFinalizedProposalsResumeSecurity{
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

## Adexchangebuyer2AccountsProductsGet

Gets the requested product by ID.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProductsGet(ctx, operations.Adexchangebuyer2AccountsProductsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        AccountID: "distinctio",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "alias",
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.Adexchangebuyer2AccountsProductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsProductsList

List all products visible to the buyer (optionally filtered by the specified PQL query).

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProductsList(ctx, operations.Adexchangebuyer2AccountsProductsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        AccountID: "alias",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("id"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("dolore"),
        PageSize: sdk.Int64(680349),
        PageToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.Adexchangebuyer2AccountsProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProductsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsProposalsAccept

Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsAccept(ctx, operations.Adexchangebuyer2AccountsProposalsAcceptRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AcceptProposalRequest: &shared.AcceptProposalRequest{
            ProposalRevision: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("ex"),
        AccountID: "ut",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "nemo",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("provident"),
    }, operations.Adexchangebuyer2AccountsProposalsAcceptSecurity{
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

## Adexchangebuyer2AccountsProposalsAddNote

Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsAddNote(ctx, operations.Adexchangebuyer2AccountsProposalsAddNoteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddNoteRequestInput: &shared.AddNoteRequestInput{
            Note: &shared.NoteInput{
                Note: sdk.String("eum"),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        AccountID: "provident",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "mollitia",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("animi"),
    }, operations.Adexchangebuyer2AccountsProposalsAddNoteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Note != nil {
        // handle response
    }
}
```

## Adexchangebuyer2AccountsProposalsCancelNegotiation

Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsCancelNegotiation(ctx, operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "accusantium": "repellat",
            "doloribus": "ullam",
        },
        AccessToken: sdk.String("in"),
        AccountID: "nam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "voluptatibus",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.Adexchangebuyer2AccountsProposalsCancelNegotiationSecurity{
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

## Adexchangebuyer2AccountsProposalsCompleteSetup

You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsCompleteSetup(ctx, operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "rerum": "tempora",
        },
        AccessToken: sdk.String("quis"),
        AccountID: "inventore",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("quae"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "aspernatur",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("rem"),
    }, operations.Adexchangebuyer2AccountsProposalsCompleteSetupSecurity{
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

## Adexchangebuyer2AccountsProposalsCreate

Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsCreate(ctx, operations.Adexchangebuyer2AccountsProposalsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ProposalInput: &shared.ProposalInput{
            BilledBuyer: &shared.Buyer{
                AccountID: sdk.String("impedit"),
            },
            Buyer: &shared.Buyer{
                AccountID: sdk.String("eos"),
            },
            BuyerContacts: []shared.ContactInformation{
                shared.ContactInformation{
                    Email: sdk.String("Bianka58@yahoo.com"),
                    Name: sdk.String("Darin Rodriguez"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Tremaine_Metz39@gmail.com"),
                    Name: sdk.String("Ricardo Effertz"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Claire_OKon0@hotmail.com"),
                    Name: sdk.String("Catherine Kuphal"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Dayton98@yahoo.com"),
                    Name: sdk.String("Terence Beer"),
                },
            },
            BuyerPrivateData: &shared.PrivateData{
                ReferenceID: sdk.String("molestiae"),
            },
            Deals: []shared.DealInput{
                shared.DealInput{
                    AvailableEndTime: sdk.String("iusto"),
                    AvailableStartTime: sdk.String("esse"),
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("praesentium"),
                    },
                    CreateProductID: sdk.String("maiores"),
                    CreateProductRevision: sdk.String("reiciendis"),
                    CreativeRestrictions: &shared.CreativeRestrictions{
                        CreativeFormat: shared.CreativeRestrictionsCreativeFormatEnumDisplay.ToPointer(),
                        CreativeSpecifications: []shared.CreativeSpecification{
                            shared.CreativeSpecification{
                                CreativeCompanionSizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("doloremque"),
                                        SizeType: shared.AdSizeSizeTypeEnumSizeTypeUnspecified.ToPointer(),
                                        Width: sdk.String("odio"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("tempora"),
                                        SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                        Width: sdk.String("ex"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("consectetur"),
                                        SizeType: shared.AdSizeSizeTypeEnumPixel.ToPointer(),
                                        Width: sdk.String("ipsa"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("laborum"),
                                        SizeType: shared.AdSizeSizeTypeEnumSizeTypeUnspecified.ToPointer(),
                                        Width: sdk.String("nostrum"),
                                    },
                                },
                                CreativeSize: &shared.AdSize{
                                    Height: sdk.String("fugiat"),
                                    SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                    Width: sdk.String("aliquid"),
                                },
                            },
                        },
                        SkippableAdType: shared.CreativeRestrictionsSkippableAdTypeEnumInstreamSelect.ToPointer(),
                    },
                    DealServingMetadata: &shared.DealServingMetadata{
                        DealPauseStatus: &shared.DealPauseStatus{
                            BuyerPauseReason: sdk.String("suscipit"),
                            FirstPausedBy: shared.DealPauseStatusFirstPausedByEnumBuyer.ToPointer(),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("perferendis"),
                        },
                    },
                    DealTerms: &shared.DealTerms{
                        BrandingType: shared.DealTermsBrandingTypeEnumBranded.ToPointer(),
                        Description: sdk.String("voluptas"),
                        EstimatedGrossSpend: &shared.Price{
                            Amount: &shared.Money{
                                CurrencyCode: sdk.String("iste"),
                                Nanos: sdk.Int(661607),
                                Units: sdk.String("ab"),
                            },
                            PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                        },
                        EstimatedImpressionsPerDay: sdk.String("possimus"),
                        GuaranteedFixedPriceTerms: &shared.GuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "laborum",
                                        "libero",
                                        "ad",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("deleniti"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("enim"),
                                            Nanos: sdk.Int(110477),
                                            Units: sdk.String("repellendus"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "ex",
                                        "ut",
                                        "ad",
                                        "expedita",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("voluptatem"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("molestias"),
                                            Nanos: sdk.Int(737254),
                                            Units: sdk.String("aliquid"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumPricingTypeUnspecified.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "omnis",
                                        "veritatis",
                                        "rerum",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("est"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("culpa"),
                                            Nanos: sdk.Int(29634),
                                            Units: sdk.String("sapiente"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "fuga",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("pariatur"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("debitis"),
                                            Nanos: sdk.Int(29190),
                                            Units: sdk.String("alias"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("earum"),
                            GuaranteedLooks: sdk.String("ex"),
                            ImpressionCap: sdk.String("sapiente"),
                            MinimumDailyLooks: sdk.String("rem"),
                            PercentShareOfVoice: sdk.String("minus"),
                            ReservationType: shared.GuaranteedFixedPriceTermsReservationTypeEnumStandard.ToPointer(),
                        },
                        NonGuaranteedAuctionTerms: &shared.NonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricesPerBuyer: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "ullam",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("perferendis"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("illum"),
                                            Nanos: sdk.Int(518150),
                                            Units: sdk.String("impedit"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "ipsam",
                                        "culpa",
                                        "dolor",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("aliquam"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("inventore"),
                                            Nanos: sdk.Int(537279),
                                            Units: sdk.String("veritatis"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumPricingTypeUnspecified.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "consequatur",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("architecto"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("sit"),
                                            Nanos: sdk.Int(265039),
                                            Units: sdk.String("fugit"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumPricingTypeUnspecified.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "quae",
                                        "dolor",
                                        "fugiat",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("ipsam"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("consequuntur"),
                                            Nanos: sdk.Int(55107),
                                            Units: sdk.String("quas"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.NonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "esse",
                                        "necessitatibus",
                                        "sed",
                                        "veniam",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("nesciunt"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("expedita"),
                                            Nanos: sdk.Int(432984),
                                            Units: sdk.String("vel"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "exercitationem",
                                        "ab",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("porro"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("autem"),
                                            Nanos: sdk.Int(751022),
                                            Units: sdk.String("laboriosam"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "voluptatem",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("exercitationem"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("necessitatibus"),
                                            Nanos: sdk.Int(95619),
                                            Units: sdk.String("nisi"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "est",
                                        "harum",
                                        "sequi",
                                        "doloribus",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("repudiandae"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("optio"),
                                            Nanos: sdk.Int(579681),
                                            Units: sdk.String("nemo"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                            },
                        },
                        SellerTimeZone: sdk.String("blanditiis"),
                    },
                    Description: sdk.String("officia"),
                    DisplayName: sdk.String("voluptas"),
                    SyndicationProduct: shared.DealSyndicationProductEnumContent.ToPointer(),
                    Targeting: &shared.MarketplaceTargeting{
                        GeoTargeting: &shared.CriteriaTargeting{
                            ExcludedCriteriaIds: []string{
                                "quos",
                                "eius",
                            },
                            TargetedCriteriaIds: []string{
                                "ducimus",
                            },
                        },
                        InventorySizeTargeting: &shared.InventorySizeTargeting{
                            ExcludedInventorySizes: []shared.AdSize{
                                shared.AdSize{
                                    Height: sdk.String("fuga"),
                                    SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                    Width: sdk.String("incidunt"),
                                },
                            },
                            TargetedInventorySizes: []shared.AdSize{
                                shared.AdSize{
                                    Height: sdk.String("rem"),
                                    SizeType: shared.AdSizeSizeTypeEnumFluid.ToPointer(),
                                    Width: sdk.String("dicta"),
                                },
                            },
                        },
                        PlacementTargeting: &shared.PlacementTargeting{
                            MobileApplicationTargeting: &shared.MobileApplicationTargeting{
                                FirstPartyTargeting: &shared.FirstPartyMobileApplicationTargeting{
                                    ExcludedAppIds: []string{
                                        "consequuntur",
                                        "consectetur",
                                    },
                                    TargetedAppIds: []string{
                                        "cupiditate",
                                    },
                                },
                            },
                            URLTargeting: &shared.URLTargeting{
                                ExcludedUrls: []string{
                                    "soluta",
                                    "alias",
                                    "omnis",
                                    "eos",
                                },
                                TargetedUrls: []string{
                                    "iste",
                                    "magni",
                                    "inventore",
                                },
                            },
                        },
                        TechnologyTargeting: &shared.TechnologyTargeting{
                            DeviceCapabilityTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "accusamus",
                                    "voluptatibus",
                                    "distinctio",
                                },
                                TargetedCriteriaIds: []string{
                                    "delectus",
                                    "minima",
                                    "praesentium",
                                },
                            },
                            DeviceCategoryTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "magnam",
                                    "temporibus",
                                    "quos",
                                    "commodi",
                                },
                                TargetedCriteriaIds: []string{
                                    "commodi",
                                    "totam",
                                    "earum",
                                    "modi",
                                },
                            },
                            OperatingSystemTargeting: &shared.OperatingSystemTargeting{
                                OperatingSystemCriteria: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "vero",
                                        "voluptatem",
                                        "ipsam",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "alias",
                                        "quasi",
                                    },
                                },
                                OperatingSystemVersionCriteria: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "maiores",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "sint",
                                        "nulla",
                                    },
                                },
                            },
                        },
                        VideoTargeting: &shared.VideoTargeting{
                            ExcludedPositionTypes: []shared.VideoTargetingExcludedPositionTypesEnum{
                                shared.VideoTargetingExcludedPositionTypesEnumPreroll,
                                shared.VideoTargetingExcludedPositionTypesEnumPreroll,
                                shared.VideoTargetingExcludedPositionTypesEnumPreroll,
                            },
                            TargetedPositionTypes: []shared.VideoTargetingTargetedPositionTypesEnum{
                                shared.VideoTargetingTargetedPositionTypesEnumPreroll,
                                shared.VideoTargetingTargetedPositionTypesEnumMidroll,
                                shared.VideoTargetingTargetedPositionTypesEnumPostroll,
                            },
                        },
                    },
                    TargetingCriterion: []shared.TargetingCriteria{
                        shared.TargetingCriteria{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(65082),
                                                Width: sdk.Int(791880),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(685478),
                                                Width: sdk.Int(675689),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(231070),
                                                Width: sdk.Int(244889),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(538869),
                                                Width: sdk.Int(216457),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumUnknownNativeTemplate.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(746585),
                                            Width: sdk.Int(922757),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumInstreamSelect.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(453094),
                                                    Minutes: sdk.Int(194023),
                                                    Nanos: sdk.Int(493958),
                                                    Seconds: sdk.Int(205566),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(778172),
                                                    Minutes: sdk.Int(535468),
                                                    Nanos: sdk.Int(844235),
                                                    Seconds: sdk.Int(437814),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(974990),
                                                    Minutes: sdk.Int(426904),
                                                    Nanos: sdk.Int(300824),
                                                    Seconds: sdk.Int(842855),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(78969),
                                                    Minutes: sdk.Int(818034),
                                                    Nanos: sdk.Int(726878),
                                                    Seconds: sdk.Int(102413),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("quia"),
                                    StringValue: sdk.String("porro"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(424663),
                                                Width: sdk.Int(406922),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumCreativeSizeTypeUnspecified.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(568218),
                                            Width: sdk.Int(431994),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(935302),
                                                    Minutes: sdk.Int(117525),
                                                    Nanos: sdk.Int(772266),
                                                    Seconds: sdk.Int(975884),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(610987),
                                                    Minutes: sdk.Int(932562),
                                                    Nanos: sdk.Int(2677),
                                                    Seconds: sdk.Int(391797),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(242178),
                                                    Minutes: sdk.Int(673838),
                                                    Nanos: sdk.Int(250398),
                                                    Seconds: sdk.Int(224467),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(483394),
                                                    Minutes: sdk.Int(24753),
                                                    Nanos: sdk.Int(39992),
                                                    Seconds: sdk.Int(7468),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumPublisher.ToPointer(),
                                    },
                                    LongValue: sdk.String("recusandae"),
                                    StringValue: sdk.String("ea"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(709036),
                                                Width: sdk.Int(537236),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(954334),
                                                Width: sdk.Int(455579),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(351936),
                                                Width: sdk.Int(600193),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(769967),
                                            Width: sdk.Int(373040),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumGeneric.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(456885),
                                                    Minutes: sdk.Int(288570),
                                                    Nanos: sdk.Int(85066),
                                                    Seconds: sdk.Int(874400),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(233173),
                                                    Minutes: sdk.Int(112427),
                                                    Nanos: sdk.Int(81371),
                                                    Seconds: sdk.Int(212434),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(183033),
                                                    Minutes: sdk.Int(611328),
                                                    Nanos: sdk.Int(403026),
                                                    Seconds: sdk.Int(367626),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(745233),
                                                    Minutes: sdk.Int(726227),
                                                    Nanos: sdk.Int(526907),
                                                    Seconds: sdk.Int(678060),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(144691),
                                                    Minutes: sdk.Int(545),
                                                    Nanos: sdk.Int(168042),
                                                    Seconds: sdk.Int(425402),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(64435),
                                                    Minutes: sdk.Int(63553),
                                                    Nanos: sdk.Int(264333),
                                                    Seconds: sdk.Int(208253),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumPublisher.ToPointer(),
                                    },
                                    LongValue: sdk.String("itaque"),
                                    StringValue: sdk.String("et"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(714376),
                                                Width: sdk.Int(802894),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(157222),
                                                Width: sdk.Int(159146),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(342137),
                                                Width: sdk.Int(605712),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(727250),
                                                Width: sdk.Int(115661),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(854460),
                                            Width: sdk.Int(637462),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumInstreamSelect.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(479385),
                                                    Minutes: sdk.Int(57320),
                                                    Nanos: sdk.Int(914864),
                                                    Seconds: sdk.Int(80061),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(49348),
                                                    Minutes: sdk.Int(517137),
                                                    Nanos: sdk.Int(292888),
                                                    Seconds: sdk.Int(755106),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(32273),
                                                    Minutes: sdk.Int(418109),
                                                    Nanos: sdk.Int(456688),
                                                    Seconds: sdk.Int(172951),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(824798),
                                                    Minutes: sdk.Int(107210),
                                                    Nanos: sdk.Int(668606),
                                                    Seconds: sdk.Int(817339),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(473143),
                                                    Minutes: sdk.Int(588812),
                                                    Nanos: sdk.Int(882284),
                                                    Seconds: sdk.Int(896480),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(733289),
                                                    Minutes: sdk.Int(575078),
                                                    Nanos: sdk.Int(409726),
                                                    Seconds: sdk.Int(421819),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(702952),
                                                    Minutes: sdk.Int(515638),
                                                    Nanos: sdk.Int(357207),
                                                    Seconds: sdk.Int(889060),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(972912),
                                                    Minutes: sdk.Int(737279),
                                                    Nanos: sdk.Int(872303),
                                                    Seconds: sdk.Int(5152),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("quidem"),
                                    StringValue: sdk.String("fuga"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(177005),
                                                Width: sdk.Int(844854),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(483518),
                                                Width: sdk.Int(510128),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(140316),
                                                Width: sdk.Int(127688),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(358995),
                                                Width: sdk.Int(621473),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(923306),
                                            Width: sdk.Int(630871),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumGeneric.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(106255),
                                                    Minutes: sdk.Int(600213),
                                                    Nanos: sdk.Int(476946),
                                                    Seconds: sdk.Int(963198),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(585593),
                                                    Minutes: sdk.Int(147801),
                                                    Nanos: sdk.Int(253625),
                                                    Seconds: sdk.Int(256916),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(873557),
                                                    Minutes: sdk.Int(637856),
                                                    Nanos: sdk.Int(491892),
                                                    Seconds: sdk.Int(760744),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(898961),
                                                    Minutes: sdk.Int(359111),
                                                    Nanos: sdk.Int(185518),
                                                    Seconds: sdk.Int(708898),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(587375),
                                                    Minutes: sdk.Int(326269),
                                                    Nanos: sdk.Int(809594),
                                                    Seconds: sdk.Int(316542),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(204072),
                                                    Minutes: sdk.Int(446877),
                                                    Nanos: sdk.Int(796397),
                                                    Seconds: sdk.Int(433077),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("corporis"),
                                    StringValue: sdk.String("magnam"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(289913),
                                                Width: sdk.Int(520875),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumInterstitial.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(779180),
                                            Width: sdk.Int(242099),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(669237),
                                                    Minutes: sdk.Int(770873),
                                                    Nanos: sdk.Int(963741),
                                                    Seconds: sdk.Int(735894),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(878601),
                                                    Minutes: sdk.Int(141506),
                                                    Nanos: sdk.Int(997437),
                                                    Seconds: sdk.Int(865946),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(441321),
                                                    Minutes: sdk.Int(45234),
                                                    Nanos: sdk.Int(486410),
                                                    Seconds: sdk.Int(325297),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(448369),
                                                    Minutes: sdk.Int(496915),
                                                    Nanos: sdk.Int(567846),
                                                    Seconds: sdk.Int(172195),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(85076),
                                                    Minutes: sdk.Int(498180),
                                                    Nanos: sdk.Int(452729),
                                                    Seconds: sdk.Int(866789),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(932666),
                                                    Minutes: sdk.Int(627735),
                                                    Nanos: sdk.Int(763165),
                                                    Seconds: sdk.Int(401428),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("commodi"),
                                    StringValue: sdk.String("officiis"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(59383),
                                                Width: sdk.Int(575534),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(876027),
                                                Width: sdk.Int(194901),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(120120),
                                            Width: sdk.Int(936928),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumGeneric.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(724994),
                                                    Minutes: sdk.Int(115898),
                                                    Nanos: sdk.Int(164488),
                                                    Seconds: sdk.Int(899867),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(748224),
                                                    Minutes: sdk.Int(56877),
                                                    Nanos: sdk.Int(497357),
                                                    Seconds: sdk.Int(980486),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(96450),
                                                    Minutes: sdk.Int(386447),
                                                    Nanos: sdk.Int(863471),
                                                    Seconds: sdk.Int(729448),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(566506),
                                                    Minutes: sdk.Int(578210),
                                                    Nanos: sdk.Int(367917),
                                                    Seconds: sdk.Int(306382),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(988749),
                                                    Minutes: sdk.Int(757364),
                                                    Nanos: sdk.Int(574032),
                                                    Seconds: sdk.Int(314573),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(944950),
                                                    Minutes: sdk.Int(657319),
                                                    Nanos: sdk.Int(559774),
                                                    Seconds: sdk.Int(517326),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumPublisher.ToPointer(),
                                    },
                                    LongValue: sdk.String("odio"),
                                    StringValue: sdk.String("eaque"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(725574),
                                                Width: sdk.Int(244032),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(38557),
                                                Width: sdk.Int(963976),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(773110),
                                                Width: sdk.Int(741238),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumRegular.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(903150),
                                            Width: sdk.Int(644420),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(727481),
                                                    Minutes: sdk.Int(99733),
                                                    Nanos: sdk.Int(584593),
                                                    Seconds: sdk.Int(475589),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(756654),
                                                    Minutes: sdk.Int(820023),
                                                    Nanos: sdk.Int(251464),
                                                    Seconds: sdk.Int(298187),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(150935),
                                                    Minutes: sdk.Int(993002),
                                                    Nanos: sdk.Int(330267),
                                                    Seconds: sdk.Int(164532),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(813880),
                                                    Minutes: sdk.Int(512905),
                                                    Nanos: sdk.Int(140384),
                                                    Seconds: sdk.Int(863477),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("exercitationem"),
                                    StringValue: sdk.String("ab"),
                                },
                            },
                            Key: sdk.String("velit"),
                        },
                        shared.TargetingCriteria{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(718627),
                                                Width: sdk.Int(392430),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(335977),
                                                Width: sdk.Int(391933),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(727771),
                                                Width: sdk.Int(794507),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(217663),
                                            Width: sdk.Int(318917),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(891581),
                                                    Minutes: sdk.Int(290841),
                                                    Nanos: sdk.Int(700928),
                                                    Seconds: sdk.Int(179795),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(440777),
                                                    Minutes: sdk.Int(345506),
                                                    Nanos: sdk.Int(207296),
                                                    Seconds: sdk.Int(480061),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(522176),
                                                    Minutes: sdk.Int(753890),
                                                    Nanos: sdk.Int(853606),
                                                    Seconds: sdk.Int(604078),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(889448),
                                                    Minutes: sdk.Int(495617),
                                                    Nanos: sdk.Int(220104),
                                                    Seconds: sdk.Int(118041),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(784731),
                                                    Minutes: sdk.Int(111496),
                                                    Nanos: sdk.Int(491591),
                                                    Seconds: sdk.Int(458970),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(854115),
                                                    Minutes: sdk.Int(322333),
                                                    Nanos: sdk.Int(134818),
                                                    Seconds: sdk.Int(316501),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(482584),
                                                    Minutes: sdk.Int(491201),
                                                    Nanos: sdk.Int(729828),
                                                    Seconds: sdk.Int(72350),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(69182),
                                                    Minutes: sdk.Int(280114),
                                                    Nanos: sdk.Int(879174),
                                                    Seconds: sdk.Int(902581),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("veniam"),
                                    StringValue: sdk.String("eos"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(789770),
                                                Width: sdk.Int(197259),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(467119),
                                                Width: sdk.Int(534908),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(75566),
                                                Width: sdk.Int(290248),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(828841),
                                                Width: sdk.Int(304173),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(514993),
                                            Width: sdk.Int(921719),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(723942),
                                                    Minutes: sdk.Int(711991),
                                                    Nanos: sdk.Int(559174),
                                                    Seconds: sdk.Int(590858),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(922299),
                                                    Minutes: sdk.Int(700045),
                                                    Nanos: sdk.Int(492361),
                                                    Seconds: sdk.Int(360934),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(629377),
                                                    Minutes: sdk.Int(833982),
                                                    Nanos: sdk.Int(434827),
                                                    Seconds: sdk.Int(213835),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(413801),
                                                    Minutes: sdk.Int(771226),
                                                    Nanos: sdk.Int(415033),
                                                    Seconds: sdk.Int(12171),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(322829),
                                                    Minutes: sdk.Int(60995),
                                                    Nanos: sdk.Int(229567),
                                                    Seconds: sdk.Int(849320),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(506863),
                                                    Minutes: sdk.Int(695526),
                                                    Nanos: sdk.Int(736853),
                                                    Seconds: sdk.Int(230411),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(118126),
                                                    Minutes: sdk.Int(514922),
                                                    Nanos: sdk.Int(40710),
                                                    Seconds: sdk.Int(938412),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(479707),
                                                    Minutes: sdk.Int(228646),
                                                    Nanos: sdk.Int(587967),
                                                    Seconds: sdk.Int(677141),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("provident"),
                                    StringValue: sdk.String("repudiandae"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(930840),
                                                Width: sdk.Int(708771),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(545779),
                                                Width: sdk.Int(43975),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumInterstitial.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(178635),
                                            Width: sdk.Int(520081),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(224413),
                                                    Minutes: sdk.Int(124289),
                                                    Nanos: sdk.Int(953676),
                                                    Seconds: sdk.Int(223291),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(582320),
                                                    Minutes: sdk.Int(539813),
                                                    Nanos: sdk.Int(107472),
                                                    Seconds: sdk.Int(868255),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("minus"),
                                    StringValue: sdk.String("esse"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(46791),
                                                Width: sdk.Int(489459),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(998026),
                                                Width: sdk.Int(243678),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(231382),
                                            Width: sdk.Int(753240),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumGeneric.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(620500),
                                                    Minutes: sdk.Int(839807),
                                                    Nanos: sdk.Int(639622),
                                                    Seconds: sdk.Int(228857),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(948541),
                                                    Minutes: sdk.Int(133949),
                                                    Nanos: sdk.Int(778276),
                                                    Seconds: sdk.Int(931077),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("laborum"),
                                    StringValue: sdk.String("dignissimos"),
                                },
                            },
                            Key: sdk.String("vero"),
                        },
                        shared.TargetingCriteria{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(129355),
                                                Width: sdk.Int(350325),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumInterstitial.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(68093),
                                            Width: sdk.Int(72754),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(251212),
                                                    Minutes: sdk.Int(719389),
                                                    Nanos: sdk.Int(450224),
                                                    Seconds: sdk.Int(349993),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(288300),
                                                    Minutes: sdk.Int(254382),
                                                    Nanos: sdk.Int(921193),
                                                    Seconds: sdk.Int(265303),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(127294),
                                                    Minutes: sdk.Int(879857),
                                                    Nanos: sdk.Int(525809),
                                                    Seconds: sdk.Int(44016),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(141817),
                                                    Minutes: sdk.Int(535802),
                                                    Nanos: sdk.Int(316730),
                                                    Seconds: sdk.Int(452730),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(326118),
                                                    Minutes: sdk.Int(727544),
                                                    Nanos: sdk.Int(300189),
                                                    Seconds: sdk.Int(24272),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(266788),
                                                    Minutes: sdk.Int(430116),
                                                    Nanos: sdk.Int(199529),
                                                    Seconds: sdk.Int(652125),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumPublisher.ToPointer(),
                                    },
                                    LongValue: sdk.String("fugiat"),
                                    StringValue: sdk.String("nostrum"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(13865),
                                                Width: sdk.Int(13508),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(911657),
                                                Width: sdk.Int(483753),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumInterstitial.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(677045),
                                            Width: sdk.Int(823718),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumGeneric.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(310629),
                                                    Minutes: sdk.Int(929476),
                                                    Nanos: sdk.Int(791228),
                                                    Seconds: sdk.Int(122662),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(715143),
                                                    Minutes: sdk.Int(481375),
                                                    Nanos: sdk.Int(558051),
                                                    Seconds: sdk.Int(91728),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("amet"),
                                    StringValue: sdk.String("autem"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(511222),
                                                Width: sdk.Int(832239),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(83291),
                                                Width: sdk.Int(60778),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(51075),
                                                Width: sdk.Int(904827),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(859003),
                                            Width: sdk.Int(640907),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(910073),
                                                    Minutes: sdk.Int(941668),
                                                    Nanos: sdk.Int(27982),
                                                    Seconds: sdk.Int(278325),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(185448),
                                                    Minutes: sdk.Int(185897),
                                                    Nanos: sdk.Int(895912),
                                                    Seconds: sdk.Int(691508),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("beatae"),
                                    StringValue: sdk.String("aliquid"),
                                },
                            },
                            Key: sdk.String("modi"),
                        },
                        shared.TargetingCriteria{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(397919),
                                                Width: sdk.Int(412052),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(140957),
                                            Width: sdk.Int(243623),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(671116),
                                                    Minutes: sdk.Int(617657),
                                                    Nanos: sdk.Int(883780),
                                                    Seconds: sdk.Int(42906),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(392967),
                                                    Minutes: sdk.Int(700856),
                                                    Nanos: sdk.Int(924840),
                                                    Seconds: sdk.Int(913285),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(524577),
                                                    Minutes: sdk.Int(157884),
                                                    Nanos: sdk.Int(354225),
                                                    Seconds: sdk.Int(786860),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(120277),
                                                    Minutes: sdk.Int(973017),
                                                    Nanos: sdk.Int(754901),
                                                    Seconds: sdk.Int(62035),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(100002),
                                                    Minutes: sdk.Int(100251),
                                                    Nanos: sdk.Int(317898),
                                                    Seconds: sdk.Int(758985),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(525951),
                                                    Minutes: sdk.Int(17060),
                                                    Nanos: sdk.Int(704271),
                                                    Seconds: sdk.Int(967055),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(615058),
                                                    Minutes: sdk.Int(117819),
                                                    Nanos: sdk.Int(552439),
                                                    Seconds: sdk.Int(356315),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(295950),
                                                    Minutes: sdk.Int(266284),
                                                    Nanos: sdk.Int(929292),
                                                    Seconds: sdk.Int(807419),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("consequuntur"),
                                    StringValue: sdk.String("assumenda"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(969168),
                                                Width: sdk.Int(66074),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(573444),
                                                Width: sdk.Int(472414),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(458412),
                                                Width: sdk.Int(438256),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumInterstitial.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(895513),
                                            Width: sdk.Int(423588),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(163684),
                                                    Minutes: sdk.Int(641133),
                                                    Nanos: sdk.Int(441374),
                                                    Seconds: sdk.Int(716033),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(262800),
                                                    Minutes: sdk.Int(56372),
                                                    Nanos: sdk.Int(522062),
                                                    Seconds: sdk.Int(978154),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(331452),
                                                    Minutes: sdk.Int(906232),
                                                    Nanos: sdk.Int(206063),
                                                    Seconds: sdk.Int(816365),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(307173),
                                                    Minutes: sdk.Int(552581),
                                                    Nanos: sdk.Int(984773),
                                                    Seconds: sdk.Int(851809),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("delectus"),
                                    StringValue: sdk.String("velit"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(74895),
                                                Width: sdk.Int(997995),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(363214),
                                                Width: sdk.Int(987890),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(823753),
                                                Width: sdk.Int(603323),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumRegular.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumUnknownNativeTemplate.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(368491),
                                            Width: sdk.Int(583193),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(198911),
                                                    Minutes: sdk.Int(412433),
                                                    Nanos: sdk.Int(956124),
                                                    Seconds: sdk.Int(164319),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(330440),
                                                    Minutes: sdk.Int(893773),
                                                    Nanos: sdk.Int(638390),
                                                    Seconds: sdk.Int(575062),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("numquam"),
                                    StringValue: sdk.String("tenetur"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(329651),
                                                Width: sdk.Int(403147),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(791762),
                                                Width: sdk.Int(68880),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumCreativeSizeTypeUnspecified.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(392319),
                                            Width: sdk.Int(786954),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(326903),
                                                    Minutes: sdk.Int(102446),
                                                    Nanos: sdk.Int(181476),
                                                    Seconds: sdk.Int(397026),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(166289),
                                                    Minutes: sdk.Int(276650),
                                                    Nanos: sdk.Int(240490),
                                                    Seconds: sdk.Int(506343),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(349898),
                                                    Minutes: sdk.Int(709701),
                                                    Nanos: sdk.Int(706411),
                                                    Seconds: sdk.Int(769634),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(24577),
                                                    Minutes: sdk.Int(363482),
                                                    Nanos: sdk.Int(633987),
                                                    Seconds: sdk.Int(159393),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("deserunt"),
                                    StringValue: sdk.String("modi"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(826806),
                                                Width: sdk.Int(887363),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(103990),
                                                Width: sdk.Int(5315),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(633982),
                                                Width: sdk.Int(60335),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(751033),
                                                Width: sdk.Int(898193),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumCreativeSizeTypeUnspecified.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumUnknownNativeTemplate.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(426002),
                                            Width: sdk.Int(595584),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(33771),
                                                    Minutes: sdk.Int(18096),
                                                    Nanos: sdk.Int(82876),
                                                    Seconds: sdk.Int(590585),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(765833),
                                                    Minutes: sdk.Int(435531),
                                                    Nanos: sdk.Int(842402),
                                                    Seconds: sdk.Int(798690),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(923456),
                                                    Minutes: sdk.Int(246772),
                                                    Nanos: sdk.Int(299153),
                                                    Seconds: sdk.Int(493591),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(388404),
                                                    Minutes: sdk.Int(152283),
                                                    Nanos: sdk.Int(486272),
                                                    Seconds: sdk.Int(616941),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumPublisher.ToPointer(),
                                    },
                                    LongValue: sdk.String("cum"),
                                    StringValue: sdk.String("doloribus"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(263767),
                                                Width: sdk.Int(595198),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(944626),
                                                Width: sdk.Int(736985),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(135548),
                                                Width: sdk.Int(725784),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(925395),
                                            Width: sdk.Int(797254),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumInstreamSelect.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(779409),
                                                    Minutes: sdk.Int(198991),
                                                    Nanos: sdk.Int(849383),
                                                    Seconds: sdk.Int(367475),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(848722),
                                                    Minutes: sdk.Int(706872),
                                                    Nanos: sdk.Int(247618),
                                                    Seconds: sdk.Int(649534),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(927977),
                                                    Minutes: sdk.Int(718981),
                                                    Nanos: sdk.Int(866861),
                                                    Seconds: sdk.Int(323365),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(816151),
                                                    Minutes: sdk.Int(674683),
                                                    Nanos: sdk.Int(911451),
                                                    Seconds: sdk.Int(673191),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(802356),
                                                    Minutes: sdk.Int(369523),
                                                    Nanos: sdk.Int(60),
                                                    Seconds: sdk.Int(379894),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(647210),
                                                    Minutes: sdk.Int(560451),
                                                    Nanos: sdk.Int(672889),
                                                    Seconds: sdk.Int(668218),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumThursday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(286716),
                                                    Minutes: sdk.Int(777378),
                                                    Nanos: sdk.Int(19462),
                                                    Seconds: sdk.Int(143528),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(399222),
                                                    Minutes: sdk.Int(301309),
                                                    Nanos: sdk.Int(308528),
                                                    Seconds: sdk.Int(755868),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("nostrum"),
                                    StringValue: sdk.String("officiis"),
                                },
                            },
                            Key: sdk.String("unde"),
                        },
                    },
                    WebPropertyCode: sdk.String("nulla"),
                },
            },
            DisplayName: sdk.String("error"),
            Seller: &shared.SellerInput{
                AccountID: sdk.String("mollitia"),
            },
        },
        AccessToken: sdk.String("magnam"),
        AccountID: "nostrum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("quod"),
    }, operations.Adexchangebuyer2AccountsProposalsCreateSecurity{
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

## Adexchangebuyer2AccountsProposalsGet

Gets a proposal given its ID. The proposal is returned at its head revision.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsGet(ctx, operations.Adexchangebuyer2AccountsProposalsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        AccountID: "voluptatem",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "architecto",
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.Adexchangebuyer2AccountsProposalsGetSecurity{
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

## Adexchangebuyer2AccountsProposalsList

List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsList(ctx, operations.Adexchangebuyer2AccountsProposalsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        AccountID: "officiis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("impedit"),
        Filter: sdk.String("ipsa"),
        FilterSyntax: operations.Adexchangebuyer2AccountsProposalsListFilterSyntaxEnumPql.ToPointer(),
        Key: sdk.String("a"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(514462),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("rem"),
    }, operations.Adexchangebuyer2AccountsProposalsListSecurity{
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

## Adexchangebuyer2AccountsProposalsPause

Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsPause(ctx, operations.Adexchangebuyer2AccountsProposalsPauseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PauseProposalRequest: &shared.PauseProposalRequest{
            Reason: sdk.String("suscipit"),
        },
        AccessToken: sdk.String("earum"),
        AccountID: "doloribus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("esse"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "quasi",
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.Adexchangebuyer2AccountsProposalsPauseSecurity{
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

## Adexchangebuyer2AccountsProposalsResume

Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsResume(ctx, operations.Adexchangebuyer2AccountsProposalsResumeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "impedit": "beatae",
        },
        AccessToken: sdk.String("incidunt"),
        AccountID: "dicta",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "vel",
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.Adexchangebuyer2AccountsProposalsResumeSecurity{
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

## Adexchangebuyer2AccountsProposalsUpdate

Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsProposalsUpdate(ctx, operations.Adexchangebuyer2AccountsProposalsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProposalInput: &shared.ProposalInput{
            BilledBuyer: &shared.Buyer{
                AccountID: sdk.String("quas"),
            },
            Buyer: &shared.Buyer{
                AccountID: sdk.String("veritatis"),
            },
            BuyerContacts: []shared.ContactInformation{
                shared.ContactInformation{
                    Email: sdk.String("Lonny.Gottlieb@gmail.com"),
                    Name: sdk.String("Toby Monahan"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Eugene56@hotmail.com"),
                    Name: sdk.String("Dwight Frami"),
                },
            },
            BuyerPrivateData: &shared.PrivateData{
                ReferenceID: sdk.String("nemo"),
            },
            Deals: []shared.DealInput{
                shared.DealInput{
                    AvailableEndTime: sdk.String("quisquam"),
                    AvailableStartTime: sdk.String("tenetur"),
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("quas"),
                    },
                    CreateProductID: sdk.String("molestiae"),
                    CreateProductRevision: sdk.String("aliquid"),
                    CreativeRestrictions: &shared.CreativeRestrictions{
                        CreativeFormat: shared.CreativeRestrictionsCreativeFormatEnumVideo.ToPointer(),
                        CreativeSpecifications: []shared.CreativeSpecification{
                            shared.CreativeSpecification{
                                CreativeCompanionSizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("perspiciatis"),
                                        SizeType: shared.AdSizeSizeTypeEnumSizeTypeUnspecified.ToPointer(),
                                        Width: sdk.String("dicta"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("minus"),
                                        SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                        Width: sdk.String("eveniet"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("porro"),
                                        SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("quidem"),
                                    },
                                },
                                CreativeSize: &shared.AdSize{
                                    Height: sdk.String("modi"),
                                    SizeType: shared.AdSizeSizeTypeEnumFluid.ToPointer(),
                                    Width: sdk.String("fugit"),
                                },
                            },
                            shared.CreativeSpecification{
                                CreativeCompanionSizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("sequi"),
                                        SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("asperiores"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("esse"),
                                        SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                        Width: sdk.String("sint"),
                                    },
                                },
                                CreativeSize: &shared.AdSize{
                                    Height: sdk.String("repellat"),
                                    SizeType: shared.AdSizeSizeTypeEnumFluid.ToPointer(),
                                    Width: sdk.String("animi"),
                                },
                            },
                            shared.CreativeSpecification{
                                CreativeCompanionSizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("itaque"),
                                        SizeType: shared.AdSizeSizeTypeEnumFluid.ToPointer(),
                                        Width: sdk.String("deserunt"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("corporis"),
                                        SizeType: shared.AdSizeSizeTypeEnumPixel.ToPointer(),
                                        Width: sdk.String("officiis"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("enim"),
                                        SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("saepe"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("eum"),
                                        SizeType: shared.AdSizeSizeTypeEnumFluid.ToPointer(),
                                        Width: sdk.String("accusantium"),
                                    },
                                },
                                CreativeSize: &shared.AdSize{
                                    Height: sdk.String("officia"),
                                    SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                    Width: sdk.String("quasi"),
                                },
                            },
                            shared.CreativeSpecification{
                                CreativeCompanionSizes: []shared.AdSize{
                                    shared.AdSize{
                                        Height: sdk.String("eius"),
                                        SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("eos"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("nobis"),
                                        SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                        Width: sdk.String("minus"),
                                    },
                                    shared.AdSize{
                                        Height: sdk.String("quia"),
                                        SizeType: shared.AdSizeSizeTypeEnumPixel.ToPointer(),
                                        Width: sdk.String("reprehenderit"),
                                    },
                                },
                                CreativeSize: &shared.AdSize{
                                    Height: sdk.String("quod"),
                                    SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                    Width: sdk.String("corrupti"),
                                },
                            },
                        },
                        SkippableAdType: shared.CreativeRestrictionsSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                    },
                    DealServingMetadata: &shared.DealServingMetadata{
                        DealPauseStatus: &shared.DealPauseStatus{
                            BuyerPauseReason: sdk.String("molestiae"),
                            FirstPausedBy: shared.DealPauseStatusFirstPausedByEnumBuyerSellerRoleUnspecified.ToPointer(),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("laborum"),
                        },
                    },
                    DealTerms: &shared.DealTerms{
                        BrandingType: shared.DealTermsBrandingTypeEnumBrandingTypeUnspecified.ToPointer(),
                        Description: sdk.String("perferendis"),
                        EstimatedGrossSpend: &shared.Price{
                            Amount: &shared.Money{
                                CurrencyCode: sdk.String("necessitatibus"),
                                Nanos: sdk.Int(102316),
                                Units: sdk.String("molestias"),
                            },
                            PricingType: shared.PricePricingTypeEnumPricingTypeUnspecified.ToPointer(),
                        },
                        EstimatedImpressionsPerDay: sdk.String("sunt"),
                        GuaranteedFixedPriceTerms: &shared.GuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "odit",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("earum"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("veniam"),
                                            Nanos: sdk.Int(373106),
                                            Units: sdk.String("eaque"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "nihil",
                                        "ad",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("nisi"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("tenetur"),
                                            Nanos: sdk.Int(338281),
                                            Units: sdk.String("quibusdam"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "pariatur",
                                        "sit",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quidem"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("repellendus"),
                                            Nanos: sdk.Int(17768),
                                            Units: sdk.String("id"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "possimus",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("repellat"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("repudiandae"),
                                            Nanos: sdk.Int(100233),
                                            Units: sdk.String("adipisci"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("harum"),
                            GuaranteedLooks: sdk.String("dolore"),
                            ImpressionCap: sdk.String("voluptatibus"),
                            MinimumDailyLooks: sdk.String("iure"),
                            PercentShareOfVoice: sdk.String("explicabo"),
                            ReservationType: shared.GuaranteedFixedPriceTermsReservationTypeEnumSponsorship.ToPointer(),
                        },
                        NonGuaranteedAuctionTerms: &shared.NonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricesPerBuyer: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "velit",
                                        "earum",
                                        "praesentium",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("error"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("non"),
                                            Nanos: sdk.Int(97810),
                                            Units: sdk.String("mollitia"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "cumque",
                                        "doloremque",
                                        "expedita",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("corrupti"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("eaque"),
                                            Nanos: sdk.Int(643199),
                                            Units: sdk.String("aliquid"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "tempora",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("possimus"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("dolor"),
                                            Nanos: sdk.Int(700529),
                                            Units: sdk.String("sed"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.NonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "minus",
                                        "quo",
                                        "quos",
                                        "asperiores",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("voluptatum"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("iste"),
                                            Nanos: sdk.Int(361106),
                                            Units: sdk.String("accusantium"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumPricingTypeUnspecified.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "doloribus",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("nostrum"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("at"),
                                            Nanos: sdk.Int(823472),
                                            Units: sdk.String("neque"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "sapiente",
                                        "mollitia",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quae"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("quos"),
                                            Nanos: sdk.Int(44571),
                                            Units: sdk.String("non"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerDay.ToPointer(),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AdvertiserIds: []string{
                                        "aliquam",
                                        "quisquam",
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quas"),
                                    },
                                    Price: &shared.Price{
                                        Amount: &shared.Money{
                                            CurrencyCode: sdk.String("consequuntur"),
                                            Nanos: sdk.Int(982445),
                                            Units: sdk.String("inventore"),
                                        },
                                        PricingType: shared.PricePricingTypeEnumCostPerMille.ToPointer(),
                                    },
                                },
                            },
                        },
                        SellerTimeZone: sdk.String("laudantium"),
                    },
                    Description: sdk.String("est"),
                    DisplayName: sdk.String("dolor"),
                    SyndicationProduct: shared.DealSyndicationProductEnumMobile.ToPointer(),
                    Targeting: &shared.MarketplaceTargeting{
                        GeoTargeting: &shared.CriteriaTargeting{
                            ExcludedCriteriaIds: []string{
                                "cumque",
                            },
                            TargetedCriteriaIds: []string{
                                "voluptatum",
                                "ducimus",
                                "adipisci",
                            },
                        },
                        InventorySizeTargeting: &shared.InventorySizeTargeting{
                            ExcludedInventorySizes: []shared.AdSize{
                                shared.AdSize{
                                    Height: sdk.String("tempora"),
                                    SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                    Width: sdk.String("numquam"),
                                },
                                shared.AdSize{
                                    Height: sdk.String("sequi"),
                                    SizeType: shared.AdSizeSizeTypeEnumInterstitial.ToPointer(),
                                    Width: sdk.String("sit"),
                                },
                                shared.AdSize{
                                    Height: sdk.String("rerum"),
                                    SizeType: shared.AdSizeSizeTypeEnumSizeTypeUnspecified.ToPointer(),
                                    Width: sdk.String("tenetur"),
                                },
                                shared.AdSize{
                                    Height: sdk.String("autem"),
                                    SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                    Width: sdk.String("totam"),
                                },
                            },
                            TargetedInventorySizes: []shared.AdSize{
                                shared.AdSize{
                                    Height: sdk.String("deserunt"),
                                    SizeType: shared.AdSizeSizeTypeEnumSizeTypeUnspecified.ToPointer(),
                                    Width: sdk.String("nihil"),
                                },
                                shared.AdSize{
                                    Height: sdk.String("voluptas"),
                                    SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                    Width: sdk.String("commodi"),
                                },
                                shared.AdSize{
                                    Height: sdk.String("alias"),
                                    SizeType: shared.AdSizeSizeTypeEnumNative.ToPointer(),
                                    Width: sdk.String("aut"),
                                },
                                shared.AdSize{
                                    Height: sdk.String("dolore"),
                                    SizeType: shared.AdSizeSizeTypeEnumFluid.ToPointer(),
                                    Width: sdk.String("aliquam"),
                                },
                            },
                        },
                        PlacementTargeting: &shared.PlacementTargeting{
                            MobileApplicationTargeting: &shared.MobileApplicationTargeting{
                                FirstPartyTargeting: &shared.FirstPartyMobileApplicationTargeting{
                                    ExcludedAppIds: []string{
                                        "ullam",
                                        "eligendi",
                                        "placeat",
                                    },
                                    TargetedAppIds: []string{
                                        "occaecati",
                                        "unde",
                                    },
                                },
                            },
                            URLTargeting: &shared.URLTargeting{
                                ExcludedUrls: []string{
                                    "nihil",
                                },
                                TargetedUrls: []string{
                                    "libero",
                                },
                            },
                        },
                        TechnologyTargeting: &shared.TechnologyTargeting{
                            DeviceCapabilityTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "quasi",
                                    "cumque",
                                },
                                TargetedCriteriaIds: []string{
                                    "harum",
                                },
                            },
                            DeviceCategoryTargeting: &shared.CriteriaTargeting{
                                ExcludedCriteriaIds: []string{
                                    "facilis",
                                    "beatae",
                                    "cumque",
                                    "delectus",
                                },
                                TargetedCriteriaIds: []string{
                                    "expedita",
                                    "corrupti",
                                },
                            },
                            OperatingSystemTargeting: &shared.OperatingSystemTargeting{
                                OperatingSystemCriteria: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "atque",
                                        "officiis",
                                        "cum",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "sapiente",
                                        "quo",
                                        "incidunt",
                                        "quod",
                                    },
                                },
                                OperatingSystemVersionCriteria: &shared.CriteriaTargeting{
                                    ExcludedCriteriaIds: []string{
                                        "porro",
                                        "id",
                                        "excepturi",
                                        "occaecati",
                                    },
                                    TargetedCriteriaIds: []string{
                                        "quo",
                                        "esse",
                                        "hic",
                                    },
                                },
                            },
                        },
                        VideoTargeting: &shared.VideoTargeting{
                            ExcludedPositionTypes: []shared.VideoTargetingExcludedPositionTypesEnum{
                                shared.VideoTargetingExcludedPositionTypesEnumPositionTypeUnspecified,
                                shared.VideoTargetingExcludedPositionTypesEnumMidroll,
                                shared.VideoTargetingExcludedPositionTypesEnumPositionTypeUnspecified,
                                shared.VideoTargetingExcludedPositionTypesEnumPostroll,
                            },
                            TargetedPositionTypes: []shared.VideoTargetingTargetedPositionTypesEnum{
                                shared.VideoTargetingTargetedPositionTypesEnumPostroll,
                                shared.VideoTargetingTargetedPositionTypesEnumPositionTypeUnspecified,
                                shared.VideoTargetingTargetedPositionTypesEnumPositionTypeUnspecified,
                                shared.VideoTargetingTargetedPositionTypesEnumMidroll,
                            },
                        },
                    },
                    TargetingCriterion: []shared.TargetingCriteria{
                        shared.TargetingCriteria{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(430146),
                                                Width: sdk.Int(873320),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumInterstitial.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(531195),
                                            Width: sdk.Int(502393),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumGeneric.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(645544),
                                                    Minutes: sdk.Int(541822),
                                                    Nanos: sdk.Int(344856),
                                                    Seconds: sdk.Int(542340),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(101107),
                                                    Minutes: sdk.Int(667213),
                                                    Nanos: sdk.Int(318379),
                                                    Seconds: sdk.Int(522390),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(62130),
                                                    Minutes: sdk.Int(556133),
                                                    Nanos: sdk.Int(811259),
                                                    Seconds: sdk.Int(318028),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(286453),
                                                    Minutes: sdk.Int(958068),
                                                    Nanos: sdk.Int(901651),
                                                    Seconds: sdk.Int(965735),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(620126),
                                                    Minutes: sdk.Int(763869),
                                                    Nanos: sdk.Int(617497),
                                                    Seconds: sdk.Int(312511),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(985379),
                                                    Minutes: sdk.Int(156098),
                                                    Nanos: sdk.Int(887284),
                                                    Seconds: sdk.Int(651467),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("quis"),
                                    StringValue: sdk.String("enim"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(487148),
                                                Width: sdk.Int(794306),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(912151),
                                            Width: sdk.Int(506250),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(396234),
                                                    Minutes: sdk.Int(898638),
                                                    Nanos: sdk.Int(148975),
                                                    Seconds: sdk.Int(537170),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(122744),
                                                    Minutes: sdk.Int(200190),
                                                    Nanos: sdk.Int(963913),
                                                    Seconds: sdk.Int(673653),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("deserunt"),
                                    StringValue: sdk.String("modi"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(528320),
                                                Width: sdk.Int(60078),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(872991),
                                                Width: sdk.Int(209860),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumNative.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumUnknownNativeTemplate.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(80284),
                                            Width: sdk.Int(193236),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSunday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(49499),
                                                    Minutes: sdk.Int(211301),
                                                    Nanos: sdk.Int(101854),
                                                    Seconds: sdk.Int(44929),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(134173),
                                                    Minutes: sdk.Int(860362),
                                                    Nanos: sdk.Int(316541),
                                                    Seconds: sdk.Int(73574),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumTuesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(961842),
                                                    Minutes: sdk.Int(255064),
                                                    Nanos: sdk.Int(760279),
                                                    Seconds: sdk.Int(750537),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(404422),
                                                    Minutes: sdk.Int(998023),
                                                    Nanos: sdk.Int(65118),
                                                    Seconds: sdk.Int(533978),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(944203),
                                                    Minutes: sdk.Int(569834),
                                                    Nanos: sdk.Int(396610),
                                                    Seconds: sdk.Int(151385),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(106682),
                                                    Minutes: sdk.Int(627341),
                                                    Nanos: sdk.Int(408774),
                                                    Seconds: sdk.Int(657301),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified.ToPointer(),
                                    },
                                    LongValue: sdk.String("tenetur"),
                                    StringValue: sdk.String("dignissimos"),
                                },
                            },
                            Key: sdk.String("esse"),
                        },
                        shared.TargetingCriteria{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(884765),
                                                Width: sdk.Int(263346),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumVideo.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(489685),
                                            Width: sdk.Int(373449),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(339843),
                                                    Minutes: sdk.Int(704402),
                                                    Nanos: sdk.Int(218128),
                                                    Seconds: sdk.Int(284885),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(308819),
                                                    Minutes: sdk.Int(103988),
                                                    Nanos: sdk.Int(506966),
                                                    Seconds: sdk.Int(907899),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumMonday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(709051),
                                                    Minutes: sdk.Int(730003),
                                                    Nanos: sdk.Int(615277),
                                                    Seconds: sdk.Int(74921),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(792499),
                                                    Minutes: sdk.Int(553315),
                                                    Nanos: sdk.Int(835646),
                                                    Seconds: sdk.Int(576657),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(315671),
                                                    Minutes: sdk.Int(881189),
                                                    Nanos: sdk.Int(44467),
                                                    Seconds: sdk.Int(916419),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(512310),
                                                    Minutes: sdk.Int(271551),
                                                    Nanos: sdk.Int(63825),
                                                    Seconds: sdk.Int(607545),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(526584),
                                                    Minutes: sdk.Int(949370),
                                                    Nanos: sdk.Int(537946),
                                                    Seconds: sdk.Int(264958),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(937664),
                                                    Minutes: sdk.Int(101374),
                                                    Nanos: sdk.Int(305189),
                                                    Seconds: sdk.Int(286726),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("sequi"),
                                    StringValue: sdk.String("saepe"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(817454),
                                                Width: sdk.Int(789016),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(769047),
                                                Width: sdk.Int(302878),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(677895),
                                                Width: sdk.Int(644827),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(319834),
                                                Width: sdk.Int(970411),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumCreativeSizeTypeUnspecified.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeVideoContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(671528),
                                            Width: sdk.Int(748973),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(369941),
                                                    Minutes: sdk.Int(642804),
                                                    Nanos: sdk.Int(584640),
                                                    Seconds: sdk.Int(442873),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(157281),
                                                    Minutes: sdk.Int(898088),
                                                    Nanos: sdk.Int(37764),
                                                    Seconds: sdk.Int(321473),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumWednesday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(474185),
                                                    Minutes: sdk.Int(154130),
                                                    Nanos: sdk.Int(514767),
                                                    Seconds: sdk.Int(152742),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(140439),
                                                    Minutes: sdk.Int(479830),
                                                    Nanos: sdk.Int(712893),
                                                    Seconds: sdk.Int(176935),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(199879),
                                                    Minutes: sdk.Int(57909),
                                                    Nanos: sdk.Int(575139),
                                                    Seconds: sdk.Int(291389),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(457063),
                                                    Minutes: sdk.Int(38044),
                                                    Nanos: sdk.Int(718119),
                                                    Seconds: sdk.Int(956545),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumPublisher.ToPointer(),
                                    },
                                    LongValue: sdk.String("est"),
                                    StringValue: sdk.String("aliquam"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumUnknown,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(374414),
                                                Width: sdk.Int(247767),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(353819),
                                                Width: sdk.Int(675058),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(378268),
                                                Width: sdk.Int(987371),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(657862),
                                                Width: sdk.Int(925994),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumRegular.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeContentAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(900368),
                                            Width: sdk.Int(719469),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumNotSkippable.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(759490),
                                                    Minutes: sdk.Int(193623),
                                                    Nanos: sdk.Int(125707),
                                                    Seconds: sdk.Int(112250),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(973096),
                                                    Minutes: sdk.Int(42364),
                                                    Nanos: sdk.Int(149498),
                                                    Seconds: sdk.Int(227741),
                                                },
                                            },
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumFriday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(446793),
                                                    Minutes: sdk.Int(345514),
                                                    Nanos: sdk.Int(836991),
                                                    Seconds: sdk.Int(186937),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(221824),
                                                    Minutes: sdk.Int(390854),
                                                    Nanos: sdk.Int(493945),
                                                    Seconds: sdk.Int(971360),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("vitae"),
                                    StringValue: sdk.String("est"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.CreativeSize{
                                        AllowedFormats: []shared.CreativeSizeAllowedFormatsEnum{
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                            shared.CreativeSizeAllowedFormatsEnumAudio,
                                        },
                                        CompanionSizes: []shared.Size{
                                            shared.Size{
                                                Height: sdk.Int(588662),
                                                Width: sdk.Int(960933),
                                            },
                                            shared.Size{
                                                Height: sdk.Int(45510),
                                                Width: sdk.Int(627717),
                                            },
                                        },
                                        CreativeSizeType: shared.CreativeSizeCreativeSizeTypeEnumCreativeSizeTypeUnspecified.ToPointer(),
                                        NativeTemplate: shared.CreativeSizeNativeTemplateEnumNativeAppInstallAd.ToPointer(),
                                        Size: &shared.Size{
                                            Height: sdk.Int(404774),
                                            Width: sdk.Int(832944),
                                        },
                                        SkippableAdType: shared.CreativeSizeSkippableAdTypeEnumInstreamSelect.ToPointer(),
                                    },
                                    DayPartTargetingValue: &shared.DayPartTargeting{
                                        DayParts: []shared.DayPart{
                                            shared.DayPart{
                                                DayOfWeek: shared.DayPartDayOfWeekEnumSaturday.ToPointer(),
                                                EndTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(196700),
                                                    Minutes: sdk.Int(413086),
                                                    Nanos: sdk.Int(287141),
                                                    Seconds: sdk.Int(710059),
                                                },
                                                StartTime: &shared.TimeOfDay{
                                                    Hours: sdk.Int(446737),
                                                    Minutes: sdk.Int(789870),
                                                    Nanos: sdk.Int(123795),
                                                    Seconds: sdk.Int(317260),
                                                },
                                            },
                                        },
                                        TimeZoneType: shared.DayPartTargetingTimeZoneTypeEnumUser.ToPointer(),
                                    },
                                    LongValue: sdk.String("maiores"),
                                    StringValue: sdk.String("distinctio"),
                                },
                            },
                            Key: sdk.String("mollitia"),
                        },
                    },
                    WebPropertyCode: sdk.String("impedit"),
                },
            },
            DisplayName: sdk.String("accusamus"),
            Seller: &shared.SellerInput{
                AccountID: sdk.String("et"),
            },
        },
        AccessToken: sdk.String("quas"),
        AccountID: "blanditiis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "repudiandae",
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("quas"),
    }, operations.Adexchangebuyer2AccountsProposalsUpdateSecurity{
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

## Adexchangebuyer2AccountsPublisherProfilesGet

Gets the requested publisher profile by id.

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
    res, err := s.Accounts.Adexchangebuyer2AccountsPublisherProfilesGet(ctx, operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vel"),
        AccountID: "eligendi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        PublisherProfileID: "itaque",
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("illo"),
    }, operations.Adexchangebuyer2AccountsPublisherProfilesGetSecurity{
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

## Adexchangebuyer2AccountsPublisherProfilesList

List all publisher profiles visible to the buyer

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
    res, err := s.Accounts.Adexchangebuyer2AccountsPublisherProfilesList(ctx, operations.Adexchangebuyer2AccountsPublisherProfilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        AccountID: "minus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("cum"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(934782),
        PageToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.Adexchangebuyer2AccountsPublisherProfilesListSecurity{
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
