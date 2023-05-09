# TestnetInsight

### Available Operations

* [TestnetGetAddress](#testnetgetaddress) - Returns address object
* [TestnetGetAddressBalance](#testnetgetaddressbalance) - Returns address balance in sats
* [TestnetGetAddressTotalReceived](#testnetgetaddresstotalreceived) - Returns total received by address in sats
* [TestnetGetAddressTotalSent](#testnetgetaddresstotalsent) - Returns total sent by address in sats
* [TestnetGetAddressUnconfirmedBalance](#testnetgetaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [TestnetGetAddressUtxos](#testnetgetaddressutxos) - Returns all UTXOs at a given address
* [TestnetGetBlock](#testnetgetblock) - Returns information regarding a Neblio block
* [TestnetGetBlockIndex](#testnetgetblockindex) - Returns block hash of block
* [TestnetGetRawTx](#testnetgetrawtx) - Returns raw transaction hex
* [TestnetGetStatus](#testnetgetstatus) - Utility API for calling several blockchain node functions
* [TestnetGetSync](#testnetgetsync) - Get node sync status
* [TestnetGetTx](#testnetgettx) - Returns transaction object
* [TestnetGetTxs](#testnetgettxs) - Get transactions by block or address
* [TestnetSendTx](#testnetsendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

## TestnetGetAddress

Returns NEBL address object containing information on a specific address

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
    res, err := s.TestnetInsight.TestnetGetAddress(ctx, operations.TestnetGetAddressRequest{
        Address: "3222 Dagmar Village",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressResponse != nil {
        // handle response
    }
}
```

## TestnetGetAddressBalance

Returns NEBL address balance in satoshis

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
    res, err := s.TestnetInsight.TestnetGetAddressBalance(ctx, operations.TestnetGetAddressBalanceRequest{
        Address: "7449 Marina Flat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressBalanceResponse != nil {
        // handle response
    }
}
```

## TestnetGetAddressTotalReceived

Returns total NEBL received by address in satoshis

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
    res, err := s.TestnetInsight.TestnetGetAddressTotalReceived(ctx, operations.TestnetGetAddressTotalReceivedRequest{
        Address: "00443 Predovic Wall",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressTotalReceivedResponse != nil {
        // handle response
    }
}
```

## TestnetGetAddressTotalSent

Returns total NEBL sent by address in satoshis

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
    res, err := s.TestnetInsight.TestnetGetAddressTotalSent(ctx, operations.TestnetGetAddressTotalSentRequest{
        Address: "6150 Bergstrom Roads",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressTotalSentResponse != nil {
        // handle response
    }
}
```

## TestnetGetAddressUnconfirmedBalance

Returns NEBL address unconfirmed balance in satoshis

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
    res, err := s.TestnetInsight.TestnetGetAddressUnconfirmedBalance(ctx, operations.TestnetGetAddressUnconfirmedBalanceRequest{
        Address: "446 Mohr Turnpike",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressUnconfirmedBalanceResponse != nil {
        // handle response
    }
}
```

## TestnetGetAddressUtxos

Returns information on each Unspent Transaction Output contained at an address

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
    res, err := s.TestnetInsight.TestnetGetAddressUtxos(ctx, operations.TestnetGetAddressUtxosRequest{
        Address: "942 Makenzie Union",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressUtxosResponse != nil {
        // handle response
    }
}
```

## TestnetGetBlock

Returns blockchain data for a given block based upon the block hash

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
    res, err := s.TestnetInsight.TestnetGetBlock(ctx, operations.TestnetGetBlockRequest{
        Blockhash: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockResponse != nil {
        // handle response
    }
}
```

## TestnetGetBlockIndex

Returns the block hash of a block at a given block index

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
    res, err := s.TestnetInsight.TestnetGetBlockIndex(ctx, operations.TestnetGetBlockIndexRequest{
        Blockindex: 1372.2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockIndexResponse != nil {
        // handle response
    }
}
```

## TestnetGetRawTx

Returns raw transaction hex representing a NEBL transaction

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
    res, err := s.TestnetInsight.TestnetGetRawTx(ctx, operations.TestnetGetRawTxRequest{
        Txid: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRawTxResponse != nil {
        // handle response
    }
}
```

## TestnetGetStatus

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

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
    res, err := s.TestnetInsight.TestnetGetStatus(ctx, operations.TestnetGetStatusRequest{
        Q: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatusResponse != nil {
        // handle response
    }
}
```

## TestnetGetSync

Returns information on the node's sync progress

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TestnetInsight.TestnetGetSync(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSyncResponse != nil {
        // handle response
    }
}
```

## TestnetGetTx

Returns NEBL transaction object representing a NEBL transaction

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
    res, err := s.TestnetInsight.TestnetGetTx(ctx, operations.TestnetGetTxRequest{
        Txid: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTxResponse != nil {
        // handle response
    }
}
```

## TestnetGetTxs

Returns all transactions by block or address

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
    res, err := s.TestnetInsight.TestnetGetTxs(ctx, operations.TestnetGetTxsRequest{
        Address: sdk.String("393 McKenzie Glen"),
        Block: sdk.String("repellendus"),
        PageNum: sdk.Float64(5197.11),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTxsResponse != nil {
        // handle response
    }
}
```

## TestnetSendTx

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
    res, err := s.TestnetInsight.TestnetSendTx(ctx, shared.SendTxRequest{
        Rawtx: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BroadcastTxResponse != nil {
        // handle response
    }
}
```
