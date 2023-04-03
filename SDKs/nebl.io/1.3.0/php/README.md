# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### insight

* `getAddress` - Returns address object
* `getAddressBalance` - Returns address balance in sats
* `getAddressTotalReceived` - Returns total received by address in sats
* `getAddressTotalSent` - Returns total sent by address in sats
* `getAddressUnconfirmedBalance` - Returns address unconfirmed balance in sats
* `getAddressUtxos` - Returns all UTXOs at a given address
* `getBlock` - Returns information regarding a Neblio block
* `getBlockIndex` - Returns block hash of block
* `getRawTx` - Returns raw transaction hex
* `getStatus` - Utility API for calling several blockchain node functions
* `getSync` - Get node sync status
* `getTx` - Returns transaction object
* `getTxs` - Get transactions by block or address
* `sendTx` - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### jsonRpc

* `jsonRpc` - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

### ntp1

* `broadcastTx` - Broadcasts a signed raw transaction to the network
* `burnToken` - Builds a transaction that burns an NTP1 Token
* `getAddressInfo` - Information On a Neblio Address
* `getTokenHolders` - Get Addresses Holding a Token
* `getTokenId` - Returns the tokenId representing a token
* `getTokenMetadata` - Get Metadata of Token
* `getTokenMetadataOfUtxo` - Get UTXO Metadata of Token
* `getTransactionInfo` - Information On an NTP1 Transaction
* `issueToken` - Builds a transaction that issues a new NTP1 Token
* `sendToken` - Builds a transaction that sends an NTP1 Token

### testnetFaucet

* `testnetGetFaucet` - Withdraws testnet NEBL to the specified address

### testnetInsight

* `testnetGetAddress` - Returns address object
* `testnetGetAddressBalance` - Returns address balance in sats
* `testnetGetAddressTotalReceived` - Returns total received by address in sats
* `testnetGetAddressTotalSent` - Returns total sent by address in sats
* `testnetGetAddressUnconfirmedBalance` - Returns address unconfirmed balance in sats
* `testnetGetAddressUtxos` - Returns all UTXOs at a given address
* `testnetGetBlock` - Returns information regarding a Neblio block
* `testnetGetBlockIndex` - Returns block hash of block
* `testnetGetRawTx` - Returns raw transaction hex
* `testnetGetStatus` - Utility API for calling several blockchain node functions
* `testnetGetSync` - Get node sync status
* `testnetGetTx` - Returns transaction object
* `testnetGetTxs` - Get transactions by block or address
* `testnetSendTx` - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### testnetNtp1

* `testnetBroadcastTx` - Broadcasts a signed raw transaction to the network
* `testnetBurnToken` - Builds a transaction that burns an NTP1 Token
* `testnetGetAddressInfo` - Information On a Neblio Address
* `testnetGetTokenHolders` - Get Addresses Holding a Token
* `testnetGetTokenId` - Returns the tokenId representing a token
* `testnetGetTokenMetadata` - Get Metadata of Token
* `testnetGetTokenMetadataOfUtxo` - Get UTXO Metadata of Token
* `testnetGetTransactionInfo` - Information On an NTP1 Transaction
* `testnetIssueToken` - Builds a transaction that issues a new NTP1 Token
* `testnetSendToken` - Builds a transaction that sends an NTP1 Token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
