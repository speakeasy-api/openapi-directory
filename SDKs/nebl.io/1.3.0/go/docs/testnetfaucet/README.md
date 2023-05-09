# TestnetFaucet

### Available Operations

* [TestnetGetFaucet](#testnetgetfaucet) - Withdraws testnet NEBL to the specified address

## TestnetGetFaucet

Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.


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
    res, err := s.TestnetFaucet.TestnetGetFaucet(ctx, operations.TestnetGetFaucetRequest{
        Address: "585 Renner Walk",
        Amount: sdk.Float64(3119.45),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFaucetResponse != nil {
        // handle response
    }
}
```
