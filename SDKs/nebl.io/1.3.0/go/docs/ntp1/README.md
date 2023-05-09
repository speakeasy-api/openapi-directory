# Ntp1

### Available Operations

* [BroadcastTx](#broadcasttx) - Broadcasts a signed raw transaction to the network
* [BurnToken](#burntoken) - Builds a transaction that burns an NTP1 Token
* [GetAddressInfo](#getaddressinfo) - Information On a Neblio Address
* [GetTokenHolders](#gettokenholders) - Get Addresses Holding a Token
* [GetTokenID](#gettokenid) - Returns the tokenId representing a token
* [GetTokenMetadata](#gettokenmetadata) - Get Metadata of Token
* [GetTokenMetadataOfUtxo](#gettokenmetadataofutxo) - Get UTXO Metadata of Token
* [GetTransactionInfo](#gettransactioninfo) - Information On an NTP1 Transaction
* [IssueToken](#issuetoken) - Builds a transaction that issues a new NTP1 Token
* [SendToken](#sendtoken) - Builds a transaction that sends an NTP1 Token

## BroadcastTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.BroadcastTx(ctx, shared.BroadcastTxRequest{
        TxHex: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BroadcastTxResponse != nil {
        // handle response
    }
}
```

## BurnToken

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.BurnToken(ctx, shared.BurnTokenRequest{
        Burn: []shared.BurnTokenRequestBurn{
            shared.BurnTokenRequestBurn{
                Amount: sdk.Float64(6169.34),
                TokenID: sdk.String("laboriosam"),
            },
        },
        Fee: 9437.49,
        From: []string{
            "fuga",
            "in",
            "corporis",
            "iste",
        },
        Transfer: []shared.BurnTokenRequestTransfer{
            shared.BurnTokenRequestTransfer{
                Address: sdk.String("600 Orn Plain"),
                Amount: sdk.Float64(6706.38),
                TokenID: sdk.String("dolores"),
            },
            shared.BurnTokenRequestTransfer{
                Address: sdk.String("31736 Era Mountains"),
                Amount: sdk.Float64(384.25),
                TokenID: sdk.String("iure"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BurnTokenResponse != nil {
        // handle response
    }
}
```

## GetAddressInfo

Returns both NEBL and NTP1 token UTXOs held at the given address.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.GetAddressInfo(ctx, operations.GetAddressInfoRequest{
        Address: "9916 Lorine Crossing",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressInfoResponse != nil {
        // handle response
    }
}
```

## GetTokenHolders

Returns the the the addresses holding a token and how many tokens are held


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.GetTokenHolders(ctx, operations.GetTokenHoldersRequest{
        Tokenid: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenHoldersResponse != nil {
        // handle response
    }
}
```

## GetTokenID

Translates a token symbol to a tokenId if a token exists with that symbol on the network


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.GetTokenID(ctx, operations.GetTokenIDRequest{
        Tokensymbol: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenIDResponse != nil {
        // handle response
    }
}
```

## GetTokenMetadata

Returns the metadata associated with a token.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.GetTokenMetadata(ctx, operations.GetTokenMetadataRequest{
        Tokenid: "occaecati",
        Verbosity: sdk.Float64(2532.91),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenMetadataResponse != nil {
        // handle response
    }
}
```

## GetTokenMetadataOfUtxo

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.GetTokenMetadataOfUtxo(ctx, operations.GetTokenMetadataOfUtxoRequest{
        Tokenid: "commodi",
        Utxo: "quam",
        Verbosity: sdk.Float64(4746.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenMetadataResponse != nil {
        // handle response
    }
}
```

## GetTransactionInfo

Returns detailed information regarding an NTP1 transaction.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.GetTransactionInfo(ctx, operations.GetTransactionInfoRequest{
        Txid: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactionInfoResponse != nil {
        // handle response
    }
}
```

## IssueToken

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.IssueToken(ctx, shared.IssueTokenRequest{
        Amount: 6235.1,
        Divisibility: 1589.69,
        Fee: 3380.07,
        Flags: &shared.IssueTokenRequestFlags{
            SplitChange: sdk.Bool(false),
        },
        IssueAddress: "vitae",
        Metadata: &shared.IssueTokenRequestMetadata{
            Description: sdk.String("laborum"),
            Encryptions: []shared.IssueTokenRequestMetadataEncryptions{
                shared.IssueTokenRequestMetadataEncryptions{
                    Format: sdk.String("enim"),
                    Key: sdk.String("odit"),
                    Pubkey: sdk.String("quo"),
                    Type: sdk.String("sequi"),
                },
                shared.IssueTokenRequestMetadataEncryptions{
                    Format: sdk.String("tenetur"),
                    Key: sdk.String("ipsam"),
                    Pubkey: sdk.String("id"),
                    Type: sdk.String("possimus"),
                },
                shared.IssueTokenRequestMetadataEncryptions{
                    Format: sdk.String("aut"),
                    Key: sdk.String("quasi"),
                    Pubkey: sdk.String("error"),
                    Type: sdk.String("temporibus"),
                },
            },
            Issuer: sdk.String("laborum"),
            Rules: &shared.IssueTokenRequestMetadataRules{
                Expiration: &shared.IssueTokenRequestMetadataRulesExpiration{
                    Locked: sdk.Bool(false),
                    ValidUntil: sdk.Float64(960.98),
                },
                Fees: &shared.IssueTokenRequestMetadataRulesFees{
                    Items: []shared.IssueTokenRequestMetadataRulesFeesItems{
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("845 Bednar Parks"),
                            TokenID: sdk.String("voluptate"),
                            Value: sdk.String("cum"),
                        },
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("04291 Elena Lights"),
                            TokenID: sdk.String("dicta"),
                            Value: sdk.String("harum"),
                        },
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("84902 Mann Mountain"),
                            TokenID: sdk.String("pariatur"),
                            Value: sdk.String("modi"),
                        },
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("5909 Boehm Viaduct"),
                            TokenID: sdk.String("incidunt"),
                            Value: sdk.String("enim"),
                        },
                    },
                    Locked: sdk.Bool(false),
                },
                Holders: []shared.IssueTokenRequestMetadataRulesHolders{
                    shared.IssueTokenRequestMetadataRulesHolders{
                        Address: sdk.String("816 Spencer Fork"),
                        Locked: sdk.Bool(false),
                    },
                },
            },
            TokenName: sdk.String("modi"),
            Urls: []shared.IssueTokenRequestMetadataUrls{
                shared.IssueTokenRequestMetadataUrls{
                    DataHash: sdk.String("aliquid"),
                    MimeType: sdk.String("cupiditate"),
                    Name: sdk.String("Christopher Cummerata"),
                    URL: sdk.String("alias"),
                },
            },
            UserData: &shared.IssueTokenRequestMetadataUserData{
                Meta: []shared.IssueTokenRequestMetadataUserDataMeta{
                    shared.IssueTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("dolorum"),
                        Value: sdk.String("excepturi"),
                    },
                },
            },
        },
        Reissuable: false,
        Transfer: []shared.IssueTokenRequestTransfer{
            shared.IssueTokenRequestTransfer{
                Address: sdk.String("729 Delores Row"),
                Amount: sdk.Float64(5761.57),
            },
            shared.IssueTokenRequestTransfer{
                Address: sdk.String("5856 Sim Villages"),
                Amount: sdk.Float64(6800.56),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueTokenResponse != nil {
        // handle response
    }
}
```

## SendToken

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ntp1.SendToken(ctx, shared.SendTokenRequest{
        Fee: 4471.25,
        Flags: &shared.SendTokenRequestFlags{
            SplitChange: sdk.Bool(false),
        },
        From: []string{
            "illum",
            "maiores",
        },
        Metadata: &shared.SendTokenRequestMetadata{
            Description: sdk.String("rerum"),
            Encryptions: []shared.SendTokenRequestMetadataEncryptions{
                shared.SendTokenRequestMetadataEncryptions{
                    Format: sdk.String("magnam"),
                    Key: sdk.String("cumque"),
                    Pubkey: sdk.String("facere"),
                    Type: sdk.String("ea"),
                },
            },
            Issuer: sdk.String("aliquid"),
            Rules: &shared.SendTokenRequestMetadataRules{
                Expiration: &shared.SendTokenRequestMetadataRulesExpiration{
                    Locked: sdk.Bool(false),
                    ValidUntil: sdk.Float64(6754.39),
                },
                Fees: &shared.SendTokenRequestMetadataRulesFees{
                    Items: []shared.SendTokenRequestMetadataRulesFeesItems{
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("53896 Reinger Plains"),
                            TokenID: sdk.String("blanditiis"),
                            Value: sdk.String("deleniti"),
                        },
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("263 Libby Parkway"),
                            TokenID: sdk.String("molestiae"),
                            Value: sdk.String("perferendis"),
                        },
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("3762 Geraldine Pass"),
                            TokenID: sdk.String("nobis"),
                            Value: sdk.String("eum"),
                        },
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("112 Kevon Harbor"),
                            TokenID: sdk.String("provident"),
                            Value: sdk.String("quos"),
                        },
                    },
                    Locked: sdk.Bool(false),
                },
                Holders: []shared.SendTokenRequestMetadataRulesHolders{
                    shared.SendTokenRequestMetadataRulesHolders{
                        Address: sdk.String("69634 Sophie Coves"),
                        Locked: sdk.Bool(false),
                    },
                    shared.SendTokenRequestMetadataRulesHolders{
                        Address: sdk.String("0498 Rachel Mews"),
                        Locked: sdk.Bool(false),
                    },
                    shared.SendTokenRequestMetadataRulesHolders{
                        Address: sdk.String("410 Herman Rapids"),
                        Locked: sdk.Bool(false),
                    },
                },
            },
            TokenName: sdk.String("nihil"),
            Urls: []shared.SendTokenRequestMetadataUrls{
                shared.SendTokenRequestMetadataUrls{
                    DataHash: sdk.String("quibusdam"),
                    MimeType: sdk.String("sed"),
                    Name: sdk.String("Al Bashirian"),
                    URL: sdk.String("natus"),
                },
                shared.SendTokenRequestMetadataUrls{
                    DataHash: sdk.String("magni"),
                    MimeType: sdk.String("sunt"),
                    Name: sdk.String("Gilberto Streich"),
                    URL: sdk.String("excepturi"),
                },
                shared.SendTokenRequestMetadataUrls{
                    DataHash: sdk.String("odit"),
                    MimeType: sdk.String("ea"),
                    Name: sdk.String("Virginia Wunsch"),
                    URL: sdk.String("voluptate"),
                },
                shared.SendTokenRequestMetadataUrls{
                    DataHash: sdk.String("autem"),
                    MimeType: sdk.String("nam"),
                    Name: sdk.String("Meredith Hickle PhD"),
                    URL: sdk.String("amet"),
                },
            },
            UserData: &shared.SendTokenRequestMetadataUserData{
                Meta: []shared.SendTokenRequestMetadataUserDataMeta{
                    shared.SendTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("cumque"),
                        Value: sdk.String("corporis"),
                    },
                },
            },
        },
        Sendutxo: []string{
            "libero",
            "nobis",
            "dolores",
            "quis",
        },
        To: []shared.SendTokenRequestTo{
            shared.SendTokenRequestTo{
                Address: sdk.String("0311 Cecilia Skyway"),
                Amount: sdk.Float64(4634.51),
                TokenID: sdk.String("dolor"),
            },
            shared.SendTokenRequestTo{
                Address: sdk.String("399 Purdy Park"),
                Amount: sdk.Float64(318.38),
                TokenID: sdk.String("porro"),
            },
            shared.SendTokenRequestTo{
                Address: sdk.String("56056 Zachery View"),
                Amount: sdk.Float64(2672.62),
                TokenID: sdk.String("iste"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendTokenResponse != nil {
        // handle response
    }
}
```
