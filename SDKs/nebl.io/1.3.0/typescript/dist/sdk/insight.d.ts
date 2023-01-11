import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Insight {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAddress - Returns address object
     *
     * Returns NEBL address object containing information on a specific address
    **/
    getAddress(req: operations.GetAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressResponse>;
    /**
     * getAddressBalance - Returns address balance in sats
     *
     * Returns NEBL address balance in satoshis
    **/
    getAddressBalance(req: operations.GetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressBalanceResponse>;
    /**
     * getAddressTotalReceived - Returns total received by address in sats
     *
     * Returns total NEBL received by address in satoshis
    **/
    getAddressTotalReceived(req: operations.GetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalReceivedResponse>;
    /**
     * getAddressTotalSent - Returns total sent by address in sats
     *
     * Returns total NEBL sent by address in satoshis
    **/
    getAddressTotalSent(req: operations.GetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalSentResponse>;
    /**
     * getAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
     *
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    getAddressUnconfirmedBalance(req: operations.GetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUnconfirmedBalanceResponse>;
    /**
     * getAddressUtxos - Returns all UTXOs at a given address
     *
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    getAddressUtxos(req: operations.GetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUtxosResponse>;
    /**
     * getBlock - Returns information regarding a Neblio block
     *
     * Returns blockchain data for a given block based upon the block hash
    **/
    getBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * getBlockIndex - Returns block hash of block
     *
     * Returns the block hash of a block at a given block index
    **/
    getBlockIndex(req: operations.GetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIndexResponse>;
    /**
     * getRawTx - Returns raw transaction hex
     *
     * Returns raw transaction hex representing a NEBL transaction
    **/
    getRawTx(req: operations.GetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.GetRawTxResponse>;
    /**
     * getStatus - Utility API for calling several blockchain node functions
     *
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    getStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * getSync - Get node sync status
     *
     * Returns information on the node's sync progress
    **/
    getSync(config?: AxiosRequestConfig): Promise<operations.GetSyncResponse>;
    /**
     * getTx - Returns transaction object
     *
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    getTx(req: operations.GetTxRequest, config?: AxiosRequestConfig): Promise<operations.GetTxResponse>;
    /**
     * getTxs - Get transactions by block or address
     *
     * Returns all transactions by block or address
    **/
    getTxs(req: operations.GetTxsRequest, config?: AxiosRequestConfig): Promise<operations.GetTxsResponse>;
    /**
     * sendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    sendTx(req: operations.SendTxRequest, config?: AxiosRequestConfig): Promise<operations.SendTxResponse>;
}
