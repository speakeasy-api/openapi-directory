# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressRequest;
import org.openapis.openapi.models.operations.GetAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressRequest req = new GetAddressRequest("corrupti");            

            GetAddressResponse res = sdk.insight.getAddress(req);

            if (res.getAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [insight](docs/insight/README.md)

* [getAddress](docs/insight/README.md#getaddress) - Returns address object
* [getAddressBalance](docs/insight/README.md#getaddressbalance) - Returns address balance in sats
* [getAddressTotalReceived](docs/insight/README.md#getaddresstotalreceived) - Returns total received by address in sats
* [getAddressTotalSent](docs/insight/README.md#getaddresstotalsent) - Returns total sent by address in sats
* [getAddressUnconfirmedBalance](docs/insight/README.md#getaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [getAddressUtxos](docs/insight/README.md#getaddressutxos) - Returns all UTXOs at a given address
* [getBlock](docs/insight/README.md#getblock) - Returns information regarding a Neblio block
* [getBlockIndex](docs/insight/README.md#getblockindex) - Returns block hash of block
* [getRawTx](docs/insight/README.md#getrawtx) - Returns raw transaction hex
* [getStatus](docs/insight/README.md#getstatus) - Utility API for calling several blockchain node functions
* [getSync](docs/insight/README.md#getsync) - Get node sync status
* [getTx](docs/insight/README.md#gettx) - Returns transaction object
* [getTxs](docs/insight/README.md#gettxs) - Get transactions by block or address
* [sendTx](docs/insight/README.md#sendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### [jsonRpc](docs/jsonrpc/README.md)

* [jsonRpc](docs/jsonrpc/README.md#jsonrpc) - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

### [ntp1](docs/ntp1/README.md)

* [broadcastTx](docs/ntp1/README.md#broadcasttx) - Broadcasts a signed raw transaction to the network
* [burnToken](docs/ntp1/README.md#burntoken) - Builds a transaction that burns an NTP1 Token
* [getAddressInfo](docs/ntp1/README.md#getaddressinfo) - Information On a Neblio Address
* [getTokenHolders](docs/ntp1/README.md#gettokenholders) - Get Addresses Holding a Token
* [getTokenId](docs/ntp1/README.md#gettokenid) - Returns the tokenId representing a token
* [getTokenMetadata](docs/ntp1/README.md#gettokenmetadata) - Get Metadata of Token
* [getTokenMetadataOfUtxo](docs/ntp1/README.md#gettokenmetadataofutxo) - Get UTXO Metadata of Token
* [getTransactionInfo](docs/ntp1/README.md#gettransactioninfo) - Information On an NTP1 Transaction
* [issueToken](docs/ntp1/README.md#issuetoken) - Builds a transaction that issues a new NTP1 Token
* [sendToken](docs/ntp1/README.md#sendtoken) - Builds a transaction that sends an NTP1 Token

### [testnetFaucet](docs/testnetfaucet/README.md)

* [testnetGetFaucet](docs/testnetfaucet/README.md#testnetgetfaucet) - Withdraws testnet NEBL to the specified address

### [testnetInsight](docs/testnetinsight/README.md)

* [testnetGetAddress](docs/testnetinsight/README.md#testnetgetaddress) - Returns address object
* [testnetGetAddressBalance](docs/testnetinsight/README.md#testnetgetaddressbalance) - Returns address balance in sats
* [testnetGetAddressTotalReceived](docs/testnetinsight/README.md#testnetgetaddresstotalreceived) - Returns total received by address in sats
* [testnetGetAddressTotalSent](docs/testnetinsight/README.md#testnetgetaddresstotalsent) - Returns total sent by address in sats
* [testnetGetAddressUnconfirmedBalance](docs/testnetinsight/README.md#testnetgetaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [testnetGetAddressUtxos](docs/testnetinsight/README.md#testnetgetaddressutxos) - Returns all UTXOs at a given address
* [testnetGetBlock](docs/testnetinsight/README.md#testnetgetblock) - Returns information regarding a Neblio block
* [testnetGetBlockIndex](docs/testnetinsight/README.md#testnetgetblockindex) - Returns block hash of block
* [testnetGetRawTx](docs/testnetinsight/README.md#testnetgetrawtx) - Returns raw transaction hex
* [testnetGetStatus](docs/testnetinsight/README.md#testnetgetstatus) - Utility API for calling several blockchain node functions
* [testnetGetSync](docs/testnetinsight/README.md#testnetgetsync) - Get node sync status
* [testnetGetTx](docs/testnetinsight/README.md#testnetgettx) - Returns transaction object
* [testnetGetTxs](docs/testnetinsight/README.md#testnetgettxs) - Get transactions by block or address
* [testnetSendTx](docs/testnetinsight/README.md#testnetsendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### [testnetNtp1](docs/testnetntp1/README.md)

* [testnetBroadcastTx](docs/testnetntp1/README.md#testnetbroadcasttx) - Broadcasts a signed raw transaction to the network
* [testnetBurnToken](docs/testnetntp1/README.md#testnetburntoken) - Builds a transaction that burns an NTP1 Token
* [testnetGetAddressInfo](docs/testnetntp1/README.md#testnetgetaddressinfo) - Information On a Neblio Address
* [testnetGetTokenHolders](docs/testnetntp1/README.md#testnetgettokenholders) - Get Addresses Holding a Token
* [testnetGetTokenId](docs/testnetntp1/README.md#testnetgettokenid) - Returns the tokenId representing a token
* [testnetGetTokenMetadata](docs/testnetntp1/README.md#testnetgettokenmetadata) - Get Metadata of Token
* [testnetGetTokenMetadataOfUtxo](docs/testnetntp1/README.md#testnetgettokenmetadataofutxo) - Get UTXO Metadata of Token
* [testnetGetTransactionInfo](docs/testnetntp1/README.md#testnetgettransactioninfo) - Information On an NTP1 Transaction
* [testnetIssueToken](docs/testnetntp1/README.md#testnetissuetoken) - Builds a transaction that issues a new NTP1 Token
* [testnetSendToken](docs/testnetntp1/README.md#testnetsendtoken) - Builds a transaction that sends an NTP1 Token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
