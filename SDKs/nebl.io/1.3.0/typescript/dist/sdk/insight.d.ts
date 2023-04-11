import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Insight {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns address object
     *
     * @remarks
     * Returns NEBL address object containing information on a specific address
     */
    getAddress(req: operations.GetAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressResponse>;
    /**
     * Returns address balance in sats
     *
     * @remarks
     * Returns NEBL address balance in satoshis
     */
    getAddressBalance(req: operations.GetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressBalanceResponse>;
    /**
     * Returns total received by address in sats
     *
     * @remarks
     * Returns total NEBL received by address in satoshis
     */
    getAddressTotalReceived(req: operations.GetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalReceivedResponse>;
    /**
     * Returns total sent by address in sats
     *
     * @remarks
     * Returns total NEBL sent by address in satoshis
     */
    getAddressTotalSent(req: operations.GetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalSentResponse>;
    /**
     * Returns address unconfirmed balance in sats
     *
     * @remarks
     * Returns NEBL address unconfirmed balance in satoshis
     */
    getAddressUnconfirmedBalance(req: operations.GetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUnconfirmedBalanceResponse>;
    /**
     * Returns all UTXOs at a given address
     *
     * @remarks
     * Returns information on each Unspent Transaction Output contained at an address
     */
    getAddressUtxos(req: operations.GetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUtxosResponse>;
    /**
     * Returns information regarding a Neblio block
     *
     * @remarks
     * Returns blockchain data for a given block based upon the block hash
     */
    getBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * Returns block hash of block
     *
     * @remarks
     * Returns the block hash of a block at a given block index
     */
    getBlockIndex(req: operations.GetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIndexResponse>;
    /**
     * Returns raw transaction hex
     *
     * @remarks
     * Returns raw transaction hex representing a NEBL transaction
     */
    getRawTx(req: operations.GetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.GetRawTxResponse>;
    /**
     * Utility API for calling several blockchain node functions
     *
     * @remarks
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
     */
    getStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * Get node sync status
     *
     * @remarks
     * Returns information on the node's sync progress
     */
    getSync(config?: AxiosRequestConfig): Promise<operations.GetSyncResponse>;
    /**
     * Returns transaction object
     *
     * @remarks
     * Returns NEBL transaction object representing a NEBL transaction
     */
    getTx(req: operations.GetTxRequest, config?: AxiosRequestConfig): Promise<operations.GetTxResponse>;
    /**
     * Get transactions by block or address
     *
     * @remarks
     * Returns all transactions by block or address
     */
    getTxs(req: operations.GetTxsRequest, config?: AxiosRequestConfig): Promise<operations.GetTxsResponse>;
    /**
     * Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * @remarks
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
     */
    sendTx(req: shared.SendTxRequest, config?: AxiosRequestConfig): Promise<operations.SendTxResponse>;
}
