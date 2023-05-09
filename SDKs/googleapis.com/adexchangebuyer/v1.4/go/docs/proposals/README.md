# Proposals

### Available Operations

* [AdexchangebuyerProposalsGet](#adexchangebuyerproposalsget) - Get a proposal given its id
* [AdexchangebuyerProposalsInsert](#adexchangebuyerproposalsinsert) - Create the given list of proposals
* [AdexchangebuyerProposalsPatch](#adexchangebuyerproposalspatch) - Update the given proposal. This method supports patch semantics.
* [AdexchangebuyerProposalsSearch](#adexchangebuyerproposalssearch) - Search for proposals using pql query
* [AdexchangebuyerProposalsSetupcomplete](#adexchangebuyerproposalssetupcomplete) - Update the given proposal to indicate that setup has been completed.
* [AdexchangebuyerProposalsUpdate](#adexchangebuyerproposalsupdate) - Update the given proposal

## AdexchangebuyerProposalsGet

Get a proposal given its id

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
    res, err := s.Proposals.AdexchangebuyerProposalsGet(ctx, operations.AdexchangebuyerProposalsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quas"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "voluptates",
        QuotaUser: sdk.String("minus"),
        UserIP: sdk.String("autem"),
    }, operations.AdexchangebuyerProposalsGetSecurity{
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

## AdexchangebuyerProposalsInsert

Create the given list of proposals

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
    res, err := s.Proposals.AdexchangebuyerProposalsInsert(ctx, operations.AdexchangebuyerProposalsInsertRequest{
        CreateOrdersRequest: &shared.CreateOrdersRequest{
            Proposals: []shared.Proposal{
                shared.Proposal{
                    BilledBuyer: &shared.Buyer{
                        AccountID: sdk.String("beatae"),
                    },
                    Buyer: &shared.Buyer{
                        AccountID: sdk.String("quos"),
                    },
                    BuyerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Tyrese.Treutel@hotmail.com"),
                            Name: sdk.String("Lindsey Trantow"),
                        },
                    },
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("doloremque"),
                        ReferencePayload: sdk.String("accusamus"),
                    },
                    DbmAdvertiserIds: []string{
                        "sunt",
                        "voluptas",
                        "earum",
                        "est",
                    },
                    HasBuyerSignedOff: sdk.Bool(false),
                    HasSellerSignedOff: sdk.Bool(false),
                    InventorySource: sdk.String("earum"),
                    IsRenegotiating: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("nihil"),
                    Labels: []shared.MarketplaceLabel{
                        shared.MarketplaceLabel{
                            AccountID: sdk.String("rerum"),
                            CreateTimeMs: sdk.String("perferendis"),
                            DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                                Buyer: &shared.Buyer{
                                    AccountID: sdk.String("nam"),
                                },
                                Seller: &shared.Seller{
                                    AccountID: sdk.String("ullam"),
                                    SubAccountID: sdk.String("ratione"),
                                },
                            },
                            Label: sdk.String("eos"),
                        },
                        shared.MarketplaceLabel{
                            AccountID: sdk.String("id"),
                            CreateTimeMs: sdk.String("modi"),
                            DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                                Buyer: &shared.Buyer{
                                    AccountID: sdk.String("illum"),
                                },
                                Seller: &shared.Seller{
                                    AccountID: sdk.String("error"),
                                    SubAccountID: sdk.String("consectetur"),
                                },
                            },
                            Label: sdk.String("reprehenderit"),
                        },
                    },
                    LastUpdaterOrCommentorRole: sdk.String("eligendi"),
                    Name: sdk.String("Shannon Nienow"),
                    NegotiationID: sdk.String("eius"),
                    OriginatorRole: sdk.String("ad"),
                    PrivateAuctionID: sdk.String("quia"),
                    ProposalID: sdk.String("quod"),
                    ProposalState: sdk.String("quaerat"),
                    RevisionNumber: sdk.String("voluptatum"),
                    RevisionTimeMs: sdk.String("numquam"),
                    Seller: &shared.Seller{
                        AccountID: sdk.String("explicabo"),
                        SubAccountID: sdk.String("eligendi"),
                    },
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Brisa.Ortiz12@hotmail.com"),
                            Name: sdk.String("Ernesto Will"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Lysanne_Lehner@gmail.com"),
                            Name: sdk.String("Amber Grant"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Clark_White85@yahoo.com"),
                            Name: sdk.String("Georgia Feeney"),
                        },
                    },
                },
                shared.Proposal{
                    BilledBuyer: &shared.Buyer{
                        AccountID: sdk.String("earum"),
                    },
                    Buyer: &shared.Buyer{
                        AccountID: sdk.String("eum"),
                    },
                    BuyerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Kaya61@hotmail.com"),
                            Name: sdk.String("Tanya Mitchell"),
                        },
                    },
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("ex"),
                        ReferencePayload: sdk.String("occaecati"),
                    },
                    DbmAdvertiserIds: []string{
                        "at",
                        "ad",
                        "asperiores",
                        "nam",
                    },
                    HasBuyerSignedOff: sdk.Bool(false),
                    HasSellerSignedOff: sdk.Bool(false),
                    InventorySource: sdk.String("cumque"),
                    IsRenegotiating: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("sapiente"),
                    Labels: []shared.MarketplaceLabel{
                        shared.MarketplaceLabel{
                            AccountID: sdk.String("occaecati"),
                            CreateTimeMs: sdk.String("repellendus"),
                            DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                                Buyer: &shared.Buyer{
                                    AccountID: sdk.String("culpa"),
                                },
                                Seller: &shared.Seller{
                                    AccountID: sdk.String("dicta"),
                                    SubAccountID: sdk.String("rem"),
                                },
                            },
                            Label: sdk.String("fuga"),
                        },
                        shared.MarketplaceLabel{
                            AccountID: sdk.String("odio"),
                            CreateTimeMs: sdk.String("totam"),
                            DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                                Buyer: &shared.Buyer{
                                    AccountID: sdk.String("magni"),
                                },
                                Seller: &shared.Seller{
                                    AccountID: sdk.String("eos"),
                                    SubAccountID: sdk.String("harum"),
                                },
                            },
                            Label: sdk.String("voluptatibus"),
                        },
                    },
                    LastUpdaterOrCommentorRole: sdk.String("omnis"),
                    Name: sdk.String("Olga Morissette"),
                    NegotiationID: sdk.String("nisi"),
                    OriginatorRole: sdk.String("praesentium"),
                    PrivateAuctionID: sdk.String("eum"),
                    ProposalID: sdk.String("vitae"),
                    ProposalState: sdk.String("animi"),
                    RevisionNumber: sdk.String("possimus"),
                    RevisionTimeMs: sdk.String("libero"),
                    Seller: &shared.Seller{
                        AccountID: sdk.String("ullam"),
                        SubAccountID: sdk.String("quaerat"),
                    },
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Shawn.Hilpert35@yahoo.com"),
                            Name: sdk.String("Sheri Mayert"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Velda.Kovacek@yahoo.com"),
                            Name: sdk.String("Susie Wolf"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Elda50@gmail.com"),
                            Name: sdk.String("Ms. Pamela Wilkinson"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Devin.Heaney@gmail.com"),
                            Name: sdk.String("Felicia Wolf"),
                        },
                    },
                },
            },
            WebPropertyCode: sdk.String("quidem"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("odit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UserIP: sdk.String("inventore"),
    }, operations.AdexchangebuyerProposalsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrdersResponse != nil {
        // handle response
    }
}
```

## AdexchangebuyerProposalsPatch

Update the given proposal. This method supports patch semantics.

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
    res, err := s.Proposals.AdexchangebuyerProposalsPatch(ctx, operations.AdexchangebuyerProposalsPatchRequest{
        Proposal: &shared.Proposal{
            BilledBuyer: &shared.Buyer{
                AccountID: sdk.String("doloribus"),
            },
            Buyer: &shared.Buyer{
                AccountID: sdk.String("praesentium"),
            },
            BuyerContacts: []shared.ContactInformation{
                shared.ContactInformation{
                    Email: sdk.String("Gina_Hilll@gmail.com"),
                    Name: sdk.String("Gina Windler"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Kyleigh_Weissnat@hotmail.com"),
                    Name: sdk.String("Jody Turner"),
                },
            },
            BuyerPrivateData: &shared.PrivateData{
                ReferenceID: sdk.String("nostrum"),
                ReferencePayload: sdk.String("minus"),
            },
            DbmAdvertiserIds: []string{
                "quam",
                "ea",
            },
            HasBuyerSignedOff: sdk.Bool(false),
            HasSellerSignedOff: sdk.Bool(false),
            InventorySource: sdk.String("numquam"),
            IsRenegotiating: sdk.Bool(false),
            IsSetupComplete: sdk.Bool(false),
            Kind: sdk.String("architecto"),
            Labels: []shared.MarketplaceLabel{
                shared.MarketplaceLabel{
                    AccountID: sdk.String("totam"),
                    CreateTimeMs: sdk.String("velit"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("quasi"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("sed"),
                            SubAccountID: sdk.String("officiis"),
                        },
                    },
                    Label: sdk.String("veniam"),
                },
                shared.MarketplaceLabel{
                    AccountID: sdk.String("quae"),
                    CreateTimeMs: sdk.String("dolore"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("in"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("libero"),
                            SubAccountID: sdk.String("ut"),
                        },
                    },
                    Label: sdk.String("cumque"),
                },
                shared.MarketplaceLabel{
                    AccountID: sdk.String("quia"),
                    CreateTimeMs: sdk.String("beatae"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("porro"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("cumque"),
                            SubAccountID: sdk.String("distinctio"),
                        },
                    },
                    Label: sdk.String("numquam"),
                },
            },
            LastUpdaterOrCommentorRole: sdk.String("fugit"),
            Name: sdk.String("Molly Purdy"),
            NegotiationID: sdk.String("impedit"),
            OriginatorRole: sdk.String("omnis"),
            PrivateAuctionID: sdk.String("et"),
            ProposalID: sdk.String("earum"),
            ProposalState: sdk.String("fuga"),
            RevisionNumber: sdk.String("est"),
            RevisionTimeMs: sdk.String("distinctio"),
            Seller: &shared.Seller{
                AccountID: sdk.String("fugiat"),
                SubAccountID: sdk.String("nulla"),
            },
            SellerContacts: []shared.ContactInformation{
                shared.ContactInformation{
                    Email: sdk.String("Sheila96@yahoo.com"),
                    Name: sdk.String("Sadie Green"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Callie.Sporer@gmail.com"),
                    Name: sdk.String("Frances Vandervort"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Aileen1@hotmail.com"),
                    Name: sdk.String("Margarita Thompson"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("facere"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "repellendus",
        QuotaUser: sdk.String("voluptates"),
        RevisionNumber: "illo",
        UpdateAction: operations.AdexchangebuyerProposalsPatchUpdateActionEnumUnknownAction,
        UserIP: sdk.String("fugiat"),
    }, operations.AdexchangebuyerProposalsPatchSecurity{
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

## AdexchangebuyerProposalsSearch

Search for proposals using pql query

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
    res, err := s.Proposals.AdexchangebuyerProposalsSearch(ctx, operations.AdexchangebuyerProposalsSearchRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("provident"),
        PqlQuery: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UserIP: sdk.String("ullam"),
    }, operations.AdexchangebuyerProposalsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrdersResponse != nil {
        // handle response
    }
}
```

## AdexchangebuyerProposalsSetupcomplete

Update the given proposal to indicate that setup has been completed.

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
    res, err := s.Proposals.AdexchangebuyerProposalsSetupcomplete(ctx, operations.AdexchangebuyerProposalsSetupcompleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("illum"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "quos",
        QuotaUser: sdk.String("quo"),
        UserIP: sdk.String("ullam"),
    }, operations.AdexchangebuyerProposalsSetupcompleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdexchangebuyerProposalsUpdate

Update the given proposal

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
    res, err := s.Proposals.AdexchangebuyerProposalsUpdate(ctx, operations.AdexchangebuyerProposalsUpdateRequest{
        Proposal: &shared.Proposal{
            BilledBuyer: &shared.Buyer{
                AccountID: sdk.String("in"),
            },
            Buyer: &shared.Buyer{
                AccountID: sdk.String("doloribus"),
            },
            BuyerContacts: []shared.ContactInformation{
                shared.ContactInformation{
                    Email: sdk.String("Norval_Kuhic@yahoo.com"),
                    Name: sdk.String("Diane Jast V"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Mariam_Wilkinson64@hotmail.com"),
                    Name: sdk.String("Mrs. Kathleen McDermott"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Beulah73@yahoo.com"),
                    Name: sdk.String("Charlotte Wolff"),
                },
            },
            BuyerPrivateData: &shared.PrivateData{
                ReferenceID: sdk.String("id"),
                ReferencePayload: sdk.String("officiis"),
            },
            DbmAdvertiserIds: []string{
                "voluptate",
            },
            HasBuyerSignedOff: sdk.Bool(false),
            HasSellerSignedOff: sdk.Bool(false),
            InventorySource: sdk.String("consequatur"),
            IsRenegotiating: sdk.Bool(false),
            IsSetupComplete: sdk.Bool(false),
            Kind: sdk.String("itaque"),
            Labels: []shared.MarketplaceLabel{
                shared.MarketplaceLabel{
                    AccountID: sdk.String("voluptatem"),
                    CreateTimeMs: sdk.String("dolor"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("distinctio"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("quaerat"),
                            SubAccountID: sdk.String("a"),
                        },
                    },
                    Label: sdk.String("neque"),
                },
                shared.MarketplaceLabel{
                    AccountID: sdk.String("nihil"),
                    CreateTimeMs: sdk.String("recusandae"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("numquam"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("mollitia"),
                            SubAccountID: sdk.String("mollitia"),
                        },
                    },
                    Label: sdk.String("blanditiis"),
                },
                shared.MarketplaceLabel{
                    AccountID: sdk.String("suscipit"),
                    CreateTimeMs: sdk.String("quas"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("quis"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("enim"),
                            SubAccountID: sdk.String("corporis"),
                        },
                    },
                    Label: sdk.String("iste"),
                },
                shared.MarketplaceLabel{
                    AccountID: sdk.String("ea"),
                    CreateTimeMs: sdk.String("autem"),
                    DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                        Buyer: &shared.Buyer{
                            AccountID: sdk.String("voluptate"),
                        },
                        Seller: &shared.Seller{
                            AccountID: sdk.String("nesciunt"),
                            SubAccountID: sdk.String("magni"),
                        },
                    },
                    Label: sdk.String("animi"),
                },
            },
            LastUpdaterOrCommentorRole: sdk.String("dolorum"),
            Name: sdk.String("Mona Schaden"),
            NegotiationID: sdk.String("autem"),
            OriginatorRole: sdk.String("praesentium"),
            PrivateAuctionID: sdk.String("magni"),
            ProposalID: sdk.String("quisquam"),
            ProposalState: sdk.String("expedita"),
            RevisionNumber: sdk.String("in"),
            RevisionTimeMs: sdk.String("eaque"),
            Seller: &shared.Seller{
                AccountID: sdk.String("delectus"),
                SubAccountID: sdk.String("blanditiis"),
            },
            SellerContacts: []shared.ContactInformation{
                shared.ContactInformation{
                    Email: sdk.String("Reymundo_Herman38@hotmail.com"),
                    Name: sdk.String("Tracy Buckridge"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Kelvin.Wilderman@hotmail.com"),
                    Name: sdk.String("Marcus Jacobi"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Cornell57@hotmail.com"),
                    Name: sdk.String("Ed Armstrong"),
                },
                shared.ContactInformation{
                    Email: sdk.String("Roosevelt.Mayer32@yahoo.com"),
                    Name: sdk.String("Ms. Blake Abshire"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quis"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "sed",
        QuotaUser: sdk.String("quo"),
        RevisionNumber: "et",
        UpdateAction: operations.AdexchangebuyerProposalsUpdateUpdateActionEnumAccept,
        UserIP: sdk.String("est"),
    }, operations.AdexchangebuyerProposalsUpdateSecurity{
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
