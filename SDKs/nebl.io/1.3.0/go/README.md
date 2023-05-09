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
        Address: "5786 Little Streets",
    })
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


### [Insight](docs/insight/README.md)

* [GetAddress](docs/insight/README.md#getaddress) - Returns address object
* [GetAddressBalance](docs/insight/README.md#getaddressbalance) - Returns address balance in sats
* [GetAddressTotalReceived](docs/insight/README.md#getaddresstotalreceived) - Returns total received by address in sats
* [GetAddressTotalSent](docs/insight/README.md#getaddresstotalsent) - Returns total sent by address in sats
* [GetAddressUnconfirmedBalance](docs/insight/README.md#getaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [GetAddressUtxos](docs/insight/README.md#getaddressutxos) - Returns all UTXOs at a given address
* [GetBlock](docs/insight/README.md#getblock) - Returns information regarding a Neblio block
* [GetBlockIndex](docs/insight/README.md#getblockindex) - Returns block hash of block
* [GetRawTx](docs/insight/README.md#getrawtx) - Returns raw transaction hex
* [GetStatus](docs/insight/README.md#getstatus) - Utility API for calling several blockchain node functions
* [GetSync](docs/insight/README.md#getsync) - Get node sync status
* [GetTx](docs/insight/README.md#gettx) - Returns transaction object
* [GetTxs](docs/insight/README.md#gettxs) - Get transactions by block or address
* [SendTx](docs/insight/README.md#sendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### [JSONRPC](docs/jsonrpc/README.md)

* [JSONRPC](docs/jsonrpc/README.md#jsonrpc) - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

### [Ntp1](docs/ntp1/README.md)

* [BroadcastTx](docs/ntp1/README.md#broadcasttx) - Broadcasts a signed raw transaction to the network
* [BurnToken](docs/ntp1/README.md#burntoken) - Builds a transaction that burns an NTP1 Token
* [GetAddressInfo](docs/ntp1/README.md#getaddressinfo) - Information On a Neblio Address
* [GetTokenHolders](docs/ntp1/README.md#gettokenholders) - Get Addresses Holding a Token
* [GetTokenID](docs/ntp1/README.md#gettokenid) - Returns the tokenId representing a token
* [GetTokenMetadata](docs/ntp1/README.md#gettokenmetadata) - Get Metadata of Token
* [GetTokenMetadataOfUtxo](docs/ntp1/README.md#gettokenmetadataofutxo) - Get UTXO Metadata of Token
* [GetTransactionInfo](docs/ntp1/README.md#gettransactioninfo) - Information On an NTP1 Transaction
* [IssueToken](docs/ntp1/README.md#issuetoken) - Builds a transaction that issues a new NTP1 Token
* [SendToken](docs/ntp1/README.md#sendtoken) - Builds a transaction that sends an NTP1 Token

### [TestnetFaucet](docs/testnetfaucet/README.md)

* [TestnetGetFaucet](docs/testnetfaucet/README.md#testnetgetfaucet) - Withdraws testnet NEBL to the specified address

### [TestnetInsight](docs/testnetinsight/README.md)

* [TestnetGetAddress](docs/testnetinsight/README.md#testnetgetaddress) - Returns address object
* [TestnetGetAddressBalance](docs/testnetinsight/README.md#testnetgetaddressbalance) - Returns address balance in sats
* [TestnetGetAddressTotalReceived](docs/testnetinsight/README.md#testnetgetaddresstotalreceived) - Returns total received by address in sats
* [TestnetGetAddressTotalSent](docs/testnetinsight/README.md#testnetgetaddresstotalsent) - Returns total sent by address in sats
* [TestnetGetAddressUnconfirmedBalance](docs/testnetinsight/README.md#testnetgetaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [TestnetGetAddressUtxos](docs/testnetinsight/README.md#testnetgetaddressutxos) - Returns all UTXOs at a given address
* [TestnetGetBlock](docs/testnetinsight/README.md#testnetgetblock) - Returns information regarding a Neblio block
* [TestnetGetBlockIndex](docs/testnetinsight/README.md#testnetgetblockindex) - Returns block hash of block
* [TestnetGetRawTx](docs/testnetinsight/README.md#testnetgetrawtx) - Returns raw transaction hex
* [TestnetGetStatus](docs/testnetinsight/README.md#testnetgetstatus) - Utility API for calling several blockchain node functions
* [TestnetGetSync](docs/testnetinsight/README.md#testnetgetsync) - Get node sync status
* [TestnetGetTx](docs/testnetinsight/README.md#testnetgettx) - Returns transaction object
* [TestnetGetTxs](docs/testnetinsight/README.md#testnetgettxs) - Get transactions by block or address
* [TestnetSendTx](docs/testnetinsight/README.md#testnetsendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### [TestnetNtp1](docs/testnetntp1/README.md)

* [TestnetBroadcastTx](docs/testnetntp1/README.md#testnetbroadcasttx) - Broadcasts a signed raw transaction to the network
* [TestnetBurnToken](docs/testnetntp1/README.md#testnetburntoken) - Builds a transaction that burns an NTP1 Token
* [TestnetGetAddressInfo](docs/testnetntp1/README.md#testnetgetaddressinfo) - Information On a Neblio Address
* [TestnetGetTokenHolders](docs/testnetntp1/README.md#testnetgettokenholders) - Get Addresses Holding a Token
* [TestnetGetTokenID](docs/testnetntp1/README.md#testnetgettokenid) - Returns the tokenId representing a token
* [TestnetGetTokenMetadata](docs/testnetntp1/README.md#testnetgettokenmetadata) - Get Metadata of Token
* [TestnetGetTokenMetadataOfUtxo](docs/testnetntp1/README.md#testnetgettokenmetadataofutxo) - Get UTXO Metadata of Token
* [TestnetGetTransactionInfo](docs/testnetntp1/README.md#testnetgettransactioninfo) - Information On an NTP1 Transaction
* [TestnetIssueToken](docs/testnetntp1/README.md#testnetissuetoken) - Builds a transaction that issues a new NTP1 Token
* [TestnetSendToken](docs/testnetntp1/README.md#testnetsendtoken) - Builds a transaction that sends an NTP1 Token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
