# JSONRPC

### Available Operations

* [JSONRPC](#jsonrpc) - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

## JSONRPC

Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.JSONRPC.JSONRPC(ctx, shared.RPCRequest{
        ID: "neblio-apis",
        Jsonrpc: "1.0",
        Method: "getstakinginfo",
        Params: []string{
            "natus",
            "sed",
        },
    }, operations.JSONRPCSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RPCResponse != nil {
        // handle response
    }
}
```
