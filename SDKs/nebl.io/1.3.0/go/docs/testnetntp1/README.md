# TestnetNtp1

### Available Operations

* [TestnetBroadcastTx](#testnetbroadcasttx) - Broadcasts a signed raw transaction to the network
* [TestnetBurnToken](#testnetburntoken) - Builds a transaction that burns an NTP1 Token
* [TestnetGetAddressInfo](#testnetgetaddressinfo) - Information On a Neblio Address
* [TestnetGetTokenHolders](#testnetgettokenholders) - Get Addresses Holding a Token
* [TestnetGetTokenID](#testnetgettokenid) - Returns the tokenId representing a token
* [TestnetGetTokenMetadata](#testnetgettokenmetadata) - Get Metadata of Token
* [TestnetGetTokenMetadataOfUtxo](#testnetgettokenmetadataofutxo) - Get UTXO Metadata of Token
* [TestnetGetTransactionInfo](#testnetgettransactioninfo) - Information On an NTP1 Transaction
* [TestnetIssueToken](#testnetissuetoken) - Builds a transaction that issues a new NTP1 Token
* [TestnetSendToken](#testnetsendtoken) - Builds a transaction that sends an NTP1 Token

## TestnetBroadcastTx

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
    res, err := s.TestnetNtp1.TestnetBroadcastTx(ctx, shared.BroadcastTxRequest{
        TxHex: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BroadcastTxResponse != nil {
        // handle response
    }
}
```

## TestnetBurnToken

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
    res, err := s.TestnetNtp1.TestnetBurnToken(ctx, shared.BurnTokenRequest{
        Burn: []shared.BurnTokenRequestBurn{
            shared.BurnTokenRequestBurn{
                Amount: sdk.Float64(3118.6),
                TokenID: sdk.String("tempora"),
            },
            shared.BurnTokenRequestBurn{
                Amount: sdk.Float64(4254.51),
                TokenID: sdk.String("quod"),
            },
            shared.BurnTokenRequestBurn{
                Amount: sdk.Float64(8853.38),
                TokenID: sdk.String("qui"),
            },
            shared.BurnTokenRequestBurn{
                Amount: sdk.Float64(6798.8),
                TokenID: sdk.String("a"),
            },
        },
        Fee: 4561.3,
        From: []string{
            "iusto",
            "ipsum",
            "quisquam",
        },
        Transfer: []shared.BurnTokenRequestTransfer{
            shared.BurnTokenRequestTransfer{
                Address: sdk.String("78232 Leannon Lane"),
                Amount: sdk.Float64(256.62),
                TokenID: sdk.String("expedita"),
            },
            shared.BurnTokenRequestTransfer{
                Address: sdk.String("14736 Cristobal Forge"),
                Amount: sdk.Float64(1864.58),
                TokenID: sdk.String("cupiditate"),
            },
            shared.BurnTokenRequestTransfer{
                Address: sdk.String("871 Larson Forest"),
                Amount: sdk.Float64(1320.68),
                TokenID: sdk.String("dolores"),
            },
            shared.BurnTokenRequestTransfer{
                Address: sdk.String("734 Spencer Dam"),
                Amount: sdk.Float64(2048.65),
                TokenID: sdk.String("fugit"),
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

## TestnetGetAddressInfo

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
    res, err := s.TestnetNtp1.TestnetGetAddressInfo(ctx, operations.TestnetGetAddressInfoRequest{
        Address: "41379 Nova Roads",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressInfoResponse != nil {
        // handle response
    }
}
```

## TestnetGetTokenHolders

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
    res, err := s.TestnetNtp1.TestnetGetTokenHolders(ctx, operations.TestnetGetTokenHoldersRequest{
        Tokenid: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenHoldersResponse != nil {
        // handle response
    }
}
```

## TestnetGetTokenID

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
    res, err := s.TestnetNtp1.TestnetGetTokenID(ctx, operations.TestnetGetTokenIDRequest{
        Tokensymbol: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenIDResponse != nil {
        // handle response
    }
}
```

## TestnetGetTokenMetadata

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
    res, err := s.TestnetNtp1.TestnetGetTokenMetadata(ctx, operations.TestnetGetTokenMetadataRequest{
        Tokenid: "saepe",
        Verbosity: sdk.Float64(2174.5),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenMetadataResponse != nil {
        // handle response
    }
}
```

## TestnetGetTokenMetadataOfUtxo

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
    res, err := s.TestnetNtp1.TestnetGetTokenMetadataOfUtxo(ctx, operations.TestnetGetTokenMetadataOfUtxoRequest{
        Tokenid: "veritatis",
        Utxo: "nobis",
        Verbosity: sdk.Float64(5521.93),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenMetadataResponse != nil {
        // handle response
    }
}
```

## TestnetGetTransactionInfo

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
    res, err := s.TestnetNtp1.TestnetGetTransactionInfo(ctx, operations.TestnetGetTransactionInfoRequest{
        Txid: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactionInfoResponse != nil {
        // handle response
    }
}
```

## TestnetIssueToken

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
    res, err := s.TestnetNtp1.TestnetIssueToken(ctx, shared.IssueTokenRequest{
        Amount: 5844.76,
        Divisibility: 456.14,
        Fee: 9619.37,
        Flags: &shared.IssueTokenRequestFlags{
            SplitChange: sdk.Bool(false),
        },
        IssueAddress: "dolorem",
        Metadata: &shared.IssueTokenRequestMetadata{
            Description: sdk.String("dolore"),
            Encryptions: []shared.IssueTokenRequestMetadataEncryptions{
                shared.IssueTokenRequestMetadataEncryptions{
                    Format: sdk.String("adipisci"),
                    Key: sdk.String("dolorum"),
                    Pubkey: sdk.String("architecto"),
                    Type: sdk.String("quae"),
                },
                shared.IssueTokenRequestMetadataEncryptions{
                    Format: sdk.String("aut"),
                    Key: sdk.String("quas"),
                    Pubkey: sdk.String("itaque"),
                    Type: sdk.String("consequatur"),
                },
            },
            Issuer: sdk.String("est"),
            Rules: &shared.IssueTokenRequestMetadataRules{
                Expiration: &shared.IssueTokenRequestMetadataRulesExpiration{
                    Locked: sdk.Bool(false),
                    ValidUntil: sdk.Float64(8330.38),
                },
                Fees: &shared.IssueTokenRequestMetadataRulesFees{
                    Items: []shared.IssueTokenRequestMetadataRulesFeesItems{
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("275 Anissa Mall"),
                            TokenID: sdk.String("odio"),
                            Value: sdk.String("occaecati"),
                        },
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("786 Cyrus Vista"),
                            TokenID: sdk.String("voluptate"),
                            Value: sdk.String("consectetur"),
                        },
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("949 Schmidt Loaf"),
                            TokenID: sdk.String("similique"),
                            Value: sdk.String("facilis"),
                        },
                        shared.IssueTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("428 Dickinson Pass"),
                            TokenID: sdk.String("impedit"),
                            Value: sdk.String("aut"),
                        },
                    },
                    Locked: sdk.Bool(false),
                },
                Holders: []shared.IssueTokenRequestMetadataRulesHolders{
                    shared.IssueTokenRequestMetadataRulesHolders{
                        Address: sdk.String("8179 Kris Route"),
                        Locked: sdk.Bool(false),
                    },
                    shared.IssueTokenRequestMetadataRulesHolders{
                        Address: sdk.String("0623 Brielle Key"),
                        Locked: sdk.Bool(false),
                    },
                    shared.IssueTokenRequestMetadataRulesHolders{
                        Address: sdk.String("214 Cartwright Extensions"),
                        Locked: sdk.Bool(false),
                    },
                    shared.IssueTokenRequestMetadataRulesHolders{
                        Address: sdk.String("048 Wiza Grove"),
                        Locked: sdk.Bool(false),
                    },
                },
            },
            TokenName: sdk.String("sapiente"),
            Urls: []shared.IssueTokenRequestMetadataUrls{
                shared.IssueTokenRequestMetadataUrls{
                    DataHash: sdk.String("saepe"),
                    MimeType: sdk.String("ea"),
                    Name: sdk.String("Lewis Hartmann II"),
                    URL: sdk.String("ea"),
                },
                shared.IssueTokenRequestMetadataUrls{
                    DataHash: sdk.String("quo"),
                    MimeType: sdk.String("consectetur"),
                    Name: sdk.String("Dr. Bruce Hane"),
                    URL: sdk.String("aut"),
                },
                shared.IssueTokenRequestMetadataUrls{
                    DataHash: sdk.String("aut"),
                    MimeType: sdk.String("deleniti"),
                    Name: sdk.String("Jim Corkery I"),
                    URL: sdk.String("et"),
                },
                shared.IssueTokenRequestMetadataUrls{
                    DataHash: sdk.String("dolorum"),
                    MimeType: sdk.String("laborum"),
                    Name: sdk.String("Lee Kemmer"),
                    URL: sdk.String("quas"),
                },
            },
            UserData: &shared.IssueTokenRequestMetadataUserData{
                Meta: []shared.IssueTokenRequestMetadataUserDataMeta{
                    shared.IssueTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("nulla"),
                        Value: sdk.String("voluptas"),
                    },
                    shared.IssueTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("libero"),
                        Value: sdk.String("quasi"),
                    },
                    shared.IssueTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("tempora"),
                        Value: sdk.String("numquam"),
                    },
                    shared.IssueTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("explicabo"),
                        Value: sdk.String("provident"),
                    },
                },
            },
        },
        Reissuable: false,
        Transfer: []shared.IssueTokenRequestTransfer{
            shared.IssueTokenRequestTransfer{
                Address: sdk.String("3424 Judson Ports"),
                Amount: sdk.Float64(4420.15),
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

## TestnetSendToken

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
    res, err := s.TestnetNtp1.TestnetSendToken(ctx, shared.SendTokenRequest{
        Fee: 6956.26,
        Flags: &shared.SendTokenRequestFlags{
            SplitChange: sdk.Bool(false),
        },
        From: []string{
            "ut",
            "eum",
            "suscipit",
            "assumenda",
        },
        Metadata: &shared.SendTokenRequestMetadata{
            Description: sdk.String("eos"),
            Encryptions: []shared.SendTokenRequestMetadataEncryptions{
                shared.SendTokenRequestMetadataEncryptions{
                    Format: sdk.String("quisquam"),
                    Key: sdk.String("veritatis"),
                    Pubkey: sdk.String("ipsa"),
                    Type: sdk.String("id"),
                },
                shared.SendTokenRequestMetadataEncryptions{
                    Format: sdk.String("quidem"),
                    Key: sdk.String("neque"),
                    Pubkey: sdk.String("quo"),
                    Type: sdk.String("illum"),
                },
                shared.SendTokenRequestMetadataEncryptions{
                    Format: sdk.String("quo"),
                    Key: sdk.String("fuga"),
                    Pubkey: sdk.String("eius"),
                    Type: sdk.String("eos"),
                },
            },
            Issuer: sdk.String("voluptas"),
            Rules: &shared.SendTokenRequestMetadataRules{
                Expiration: &shared.SendTokenRequestMetadataRulesExpiration{
                    Locked: sdk.Bool(false),
                    ValidUntil: sdk.Float64(698.59),
                },
                Fees: &shared.SendTokenRequestMetadataRulesFees{
                    Items: []shared.SendTokenRequestMetadataRulesFeesItems{
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("28311 Koelpin Via"),
                            TokenID: sdk.String("aperiam"),
                            Value: sdk.String("distinctio"),
                        },
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("404 Tillman Freeway"),
                            TokenID: sdk.String("odio"),
                            Value: sdk.String("occaecati"),
                        },
                        shared.SendTokenRequestMetadataRulesFeesItems{
                            Address: sdk.String("9164 Ottilie Key"),
                            TokenID: sdk.String("quas"),
                            Value: sdk.String("praesentium"),
                        },
                    },
                    Locked: sdk.Bool(false),
                },
                Holders: []shared.SendTokenRequestMetadataRulesHolders{
                    shared.SendTokenRequestMetadataRulesHolders{
                        Address: sdk.String("1662 Champlin Glen"),
                        Locked: sdk.Bool(false),
                    },
                },
            },
            TokenName: sdk.String("nisi"),
            Urls: []shared.SendTokenRequestMetadataUrls{
                shared.SendTokenRequestMetadataUrls{
                    DataHash: sdk.String("sapiente"),
                    MimeType: sdk.String("consequuntur"),
                    Name: sdk.String("Rose Turner"),
                    URL: sdk.String("et"),
                },
            },
            UserData: &shared.SendTokenRequestMetadataUserData{
                Meta: []shared.SendTokenRequestMetadataUserDataMeta{
                    shared.SendTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("eveniet"),
                        Value: sdk.String("accusamus"),
                    },
                    shared.SendTokenRequestMetadataUserDataMeta{
                        Key: sdk.String("veritatis"),
                        Value: sdk.String("esse"),
                    },
                },
            },
        },
        Sendutxo: []string{
            "nam",
            "vero",
            "aliquid",
            "quasi",
        },
        To: []shared.SendTokenRequestTo{
            shared.SendTokenRequestTo{
                Address: sdk.String("6465 Michelle Row"),
                Amount: sdk.Float64(270.69),
                TokenID: sdk.String("culpa"),
            },
            shared.SendTokenRequestTo{
                Address: sdk.String("271 Peyton Garden"),
                Amount: sdk.Float64(9591.67),
                TokenID: sdk.String("consectetur"),
            },
            shared.SendTokenRequestTo{
                Address: sdk.String("5598 Koch Club"),
                Amount: sdk.Float64(9518.75),
                TokenID: sdk.String("error"),
            },
            shared.SendTokenRequestTo{
                Address: sdk.String("8819 Schultz Circles"),
                Amount: sdk.Float64(1594.14),
                TokenID: sdk.String("quasi"),
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
