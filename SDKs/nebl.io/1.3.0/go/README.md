# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nebl.io/1.3.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAddressRequest{
        Address: "5786 Little Streets",
    }

    ctx := context.Background()
    res, err := s.Insight.GetAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Insight

* `GetAddress` - Returns address object
* `GetAddressBalance` - Returns address balance in sats
* `GetAddressTotalReceived` - Returns total received by address in sats
* `GetAddressTotalSent` - Returns total sent by address in sats
* `GetAddressUnconfirmedBalance` - Returns address unconfirmed balance in sats
* `GetAddressUtxos` - Returns all UTXOs at a given address
* `GetBlock` - Returns information regarding a Neblio block
* `GetBlockIndex` - Returns block hash of block
* `GetRawTx` - Returns raw transaction hex
* `GetStatus` - Utility API for calling several blockchain node functions
* `GetSync` - Get node sync status
* `GetTx` - Returns transaction object
* `GetTxs` - Get transactions by block or address
* `SendTx` - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### JSONRPC

* `JSONRPC` - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

### Ntp1

* `BroadcastTx` - Broadcasts a signed raw transaction to the network
* `BurnToken` - Builds a transaction that burns an NTP1 Token
* `GetAddressInfo` - Information On a Neblio Address
* `GetTokenHolders` - Get Addresses Holding a Token
* `GetTokenID` - Returns the tokenId representing a token
* `GetTokenMetadata` - Get Metadata of Token
* `GetTokenMetadataOfUtxo` - Get UTXO Metadata of Token
* `GetTransactionInfo` - Information On an NTP1 Transaction
* `IssueToken` - Builds a transaction that issues a new NTP1 Token
* `SendToken` - Builds a transaction that sends an NTP1 Token

### TestnetFaucet

* `TestnetGetFaucet` - Withdraws testnet NEBL to the specified address

### TestnetInsight

* `TestnetGetAddress` - Returns address object
* `TestnetGetAddressBalance` - Returns address balance in sats
* `TestnetGetAddressTotalReceived` - Returns total received by address in sats
* `TestnetGetAddressTotalSent` - Returns total sent by address in sats
* `TestnetGetAddressUnconfirmedBalance` - Returns address unconfirmed balance in sats
* `TestnetGetAddressUtxos` - Returns all UTXOs at a given address
* `TestnetGetBlock` - Returns information regarding a Neblio block
* `TestnetGetBlockIndex` - Returns block hash of block
* `TestnetGetRawTx` - Returns raw transaction hex
* `TestnetGetStatus` - Utility API for calling several blockchain node functions
* `TestnetGetSync` - Get node sync status
* `TestnetGetTx` - Returns transaction object
* `TestnetGetTxs` - Get transactions by block or address
* `TestnetSendTx` - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### TestnetNtp1

* `TestnetBroadcastTx` - Broadcasts a signed raw transaction to the network
* `TestnetBurnToken` - Builds a transaction that burns an NTP1 Token
* `TestnetGetAddressInfo` - Information On a Neblio Address
* `TestnetGetTokenHolders` - Get Addresses Holding a Token
* `TestnetGetTokenID` - Returns the tokenId representing a token
* `TestnetGetTokenMetadata` - Get Metadata of Token
* `TestnetGetTokenMetadataOfUtxo` - Get UTXO Metadata of Token
* `TestnetGetTransactionInfo` - Information On an NTP1 Transaction
* `TestnetIssueToken` - Builds a transaction that issues a new NTP1 Token
* `TestnetSendToken` - Builds a transaction that sends an NTP1 Token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
