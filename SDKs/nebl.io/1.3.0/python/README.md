# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nebl.io/1.3.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAddressRequest(
    address="5786 Little Streets",
)
    
res = s.insight.get_address(req)

if res.get_address_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### insight

* `get_address` - Returns address object
* `get_address_balance` - Returns address balance in sats
* `get_address_total_received` - Returns total received by address in sats
* `get_address_total_sent` - Returns total sent by address in sats
* `get_address_unconfirmed_balance` - Returns address unconfirmed balance in sats
* `get_address_utxos` - Returns all UTXOs at a given address
* `get_block` - Returns information regarding a Neblio block
* `get_block_index` - Returns block hash of block
* `get_raw_tx` - Returns raw transaction hex
* `get_status` - Utility API for calling several blockchain node functions
* `get_sync` - Get node sync status
* `get_tx` - Returns transaction object
* `get_txs` - Get transactions by block or address
* `send_tx` - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### json_rpc

* `json_rpc` - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

### ntp1

* `broadcast_tx` - Broadcasts a signed raw transaction to the network
* `burn_token` - Builds a transaction that burns an NTP1 Token
* `get_address_info` - Information On a Neblio Address
* `get_token_holders` - Get Addresses Holding a Token
* `get_token_id` - Returns the tokenId representing a token
* `get_token_metadata` - Get Metadata of Token
* `get_token_metadata_of_utxo` - Get UTXO Metadata of Token
* `get_transaction_info` - Information On an NTP1 Transaction
* `issue_token` - Builds a transaction that issues a new NTP1 Token
* `send_token` - Builds a transaction that sends an NTP1 Token

### testnet_faucet

* `testnet_get_faucet` - Withdraws testnet NEBL to the specified address

### testnet_insight

* `testnet_get_address` - Returns address object
* `testnet_get_address_balance` - Returns address balance in sats
* `testnet_get_address_total_received` - Returns total received by address in sats
* `testnet_get_address_total_sent` - Returns total sent by address in sats
* `testnet_get_address_unconfirmed_balance` - Returns address unconfirmed balance in sats
* `testnet_get_address_utxos` - Returns all UTXOs at a given address
* `testnet_get_block` - Returns information regarding a Neblio block
* `testnet_get_block_index` - Returns block hash of block
* `testnet_get_raw_tx` - Returns raw transaction hex
* `testnet_get_status` - Utility API for calling several blockchain node functions
* `testnet_get_sync` - Get node sync status
* `testnet_get_tx` - Returns transaction object
* `testnet_get_txs` - Get transactions by block or address
* `testnet_send_tx` - Broadcasts a signed raw transaction to the network (not NTP1 specific)

### testnet_ntp1

* `testnet_broadcast_tx` - Broadcasts a signed raw transaction to the network
* `testnet_burn_token` - Builds a transaction that burns an NTP1 Token
* `testnet_get_address_info` - Information On a Neblio Address
* `testnet_get_token_holders` - Get Addresses Holding a Token
* `testnet_get_token_id` - Returns the tokenId representing a token
* `testnet_get_token_metadata` - Get Metadata of Token
* `testnet_get_token_metadata_of_utxo` - Get UTXO Metadata of Token
* `testnet_get_transaction_info` - Information On an NTP1 Transaction
* `testnet_issue_token` - Builds a transaction that issues a new NTP1 Token
* `testnet_send_token` - Builds a transaction that sends an NTP1 Token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
