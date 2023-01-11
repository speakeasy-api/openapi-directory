import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TestnetInsight {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * testnetGetAddress - Returns address object
     *
     * Returns NEBL address object containing information on a specific address
    **/
    testnetGetAddress(req: operations.TestnetGetAddressRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressResponse>;
    /**
     * testnetGetAddressBalance - Returns address balance in sats
     *
     * Returns NEBL address balance in satoshis
    **/
    testnetGetAddressBalance(req: operations.TestnetGetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressBalanceResponse>;
    /**
     * testnetGetAddressTotalReceived - Returns total received by address in sats
     *
     * Returns total NEBL received by address in satoshis
    **/
    testnetGetAddressTotalReceived(req: operations.TestnetGetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalReceivedResponse>;
    /**
     * testnetGetAddressTotalSent - Returns total sent by address in sats
     *
     * Returns total NEBL sent by address in satoshis
    **/
    testnetGetAddressTotalSent(req: operations.TestnetGetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalSentResponse>;
    /**
     * testnetGetAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
     *
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    testnetGetAddressUnconfirmedBalance(req: operations.TestnetGetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUnconfirmedBalanceResponse>;
    /**
     * testnetGetAddressUtxos - Returns all UTXOs at a given address
     *
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    testnetGetAddressUtxos(req: operations.TestnetGetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUtxosResponse>;
    /**
     * testnetGetBlock - Returns information regarding a Neblio block
     *
     * Returns blockchain data for a given block based upon the block hash
    **/
    testnetGetBlock(req: operations.TestnetGetBlockRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockResponse>;
    /**
     * testnetGetBlockIndex - Returns block hash of block
     *
     * Returns the block hash of a block at a given block index
    **/
    testnetGetBlockIndex(req: operations.TestnetGetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockIndexResponse>;
    /**
     * testnetGetRawTx - Returns raw transaction hex
     *
     * Returns raw transaction hex representing a NEBL transaction
    **/
    testnetGetRawTx(req: operations.TestnetGetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetRawTxResponse>;
    /**
     * testnetGetStatus - Utility API for calling several blockchain node functions
     *
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    testnetGetStatus(req: operations.TestnetGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetStatusResponse>;
    /**
     * testnetGetSync - Get node sync status
     *
     * Returns information on the node's sync progress
    **/
    testnetGetSync(config?: AxiosRequestConfig): Promise<operations.TestnetGetSyncResponse>;
    /**
     * testnetGetTx - Returns transaction object
     *
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    testnetGetTx(req: operations.TestnetGetTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxResponse>;
    /**
     * testnetGetTxs - Get transactions by block or address
     *
     * Returns all transactions by block or address
    **/
    testnetGetTxs(req: operations.TestnetGetTxsRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxsResponse>;
    /**
     * testnetSendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    testnetSendTx(req: operations.TestnetSendTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTxResponse>;
}
