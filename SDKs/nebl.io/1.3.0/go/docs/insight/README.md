# Insight

### Available Operations

* [GetAddress](#getaddress) - Returns address object
* [GetAddressBalance](#getaddressbalance) - Returns address balance in sats
* [GetAddressTotalReceived](#getaddresstotalreceived) - Returns total received by address in sats
* [GetAddressTotalSent](#getaddresstotalsent) - Returns total sent by address in sats
* [GetAddressUnconfirmedBalance](#getaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [GetAddressUtxos](#getaddressutxos) - Returns all UTXOs at a given address
* [GetBlock](#getblock) - Returns information regarding a Neblio block
* [GetBlockIndex](#getblockindex) - Returns block hash of block
* [GetRawTx](#getrawtx) - Returns raw transaction hex
* [GetStatus](#getstatus) - Utility API for calling several blockchain node functions
* [GetSync](#getsync) - Get node sync status
* [GetTx](#gettx) - Returns transaction object
* [GetTxs](#gettxs) - Get transactions by block or address
* [SendTx](#sendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

## GetAddress

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
    res, err := s.Insight.GetAddress(ctx, operations.GetAddressRequest{
        Address: "6634 Sim Cape",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressResponse != nil {
        // handle response
    }
}
```

## GetAddressBalance

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
    res, err := s.Insight.GetAddressBalance(ctx, operations.GetAddressBalanceRequest{
        Address: "234 Schulist Meadows",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressBalanceResponse != nil {
        // handle response
    }
}
```

## GetAddressTotalReceived

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
    res, err := s.Insight.GetAddressTotalReceived(ctx, operations.GetAddressTotalReceivedRequest{
        Address: "5398 Ettie Circles",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressTotalReceivedResponse != nil {
        // handle response
    }
}
```

## GetAddressTotalSent

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
    res, err := s.Insight.GetAddressTotalSent(ctx, operations.GetAddressTotalSentRequest{
        Address: "0389 Connelly Trace",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressTotalSentResponse != nil {
        // handle response
    }
}
```

## GetAddressUnconfirmedBalance

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
    res, err := s.Insight.GetAddressUnconfirmedBalance(ctx, operations.GetAddressUnconfirmedBalanceRequest{
        Address: "947 Koepp Manors",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressUnconfirmedBalanceResponse != nil {
        // handle response
    }
}
```

## GetAddressUtxos

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
    res, err := s.Insight.GetAddressUtxos(ctx, operations.GetAddressUtxosRequest{
        Address: "617 McCullough Coves",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressUtxosResponse != nil {
        // handle response
    }
}
```

## GetBlock

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
    res, err := s.Insight.GetBlock(ctx, operations.GetBlockRequest{
        Blockhash: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockResponse != nil {
        // handle response
    }
}
```

## GetBlockIndex

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
    res, err := s.Insight.GetBlockIndex(ctx, operations.GetBlockIndexRequest{
        Blockindex: 9446.69,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockIndexResponse != nil {
        // handle response
    }
}
```

## GetRawTx

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
    res, err := s.Insight.GetRawTx(ctx, operations.GetRawTxRequest{
        Txid: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRawTxResponse != nil {
        // handle response
    }
}
```

## GetStatus

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
    res, err := s.Insight.GetStatus(ctx, operations.GetStatusRequest{
        Q: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatusResponse != nil {
        // handle response
    }
}
```

## GetSync

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
    res, err := s.Insight.GetSync(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSyncResponse != nil {
        // handle response
    }
}
```

## GetTx

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
    res, err := s.Insight.GetTx(ctx, operations.GetTxRequest{
        Txid: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTxResponse != nil {
        // handle response
    }
}
```

## GetTxs

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
    res, err := s.Insight.GetTxs(ctx, operations.GetTxsRequest{
        Address: sdk.String("4217 Klocko Extension"),
        Block: sdk.String("excepturi"),
        PageNum: sdk.Float64(1352.18),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTxsResponse != nil {
        // handle response
    }
}
```

## SendTx

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
    res, err := s.Insight.SendTx(ctx, shared.SendTxRequest{
        Rawtx: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BroadcastTxResponse != nil {
        // handle response
    }
}
```
