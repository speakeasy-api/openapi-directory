import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TestnetInsight {
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
    testnetGetAddress(req: operations.TestnetGetAddressRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressResponse>;
    /**
     * Returns address balance in sats
     *
     * @remarks
     * Returns NEBL address balance in satoshis
     */
    testnetGetAddressBalance(req: operations.TestnetGetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressBalanceResponse>;
    /**
     * Returns total received by address in sats
     *
     * @remarks
     * Returns total NEBL received by address in satoshis
     */
    testnetGetAddressTotalReceived(req: operations.TestnetGetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalReceivedResponse>;
    /**
     * Returns total sent by address in sats
     *
     * @remarks
     * Returns total NEBL sent by address in satoshis
     */
    testnetGetAddressTotalSent(req: operations.TestnetGetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalSentResponse>;
    /**
     * Returns address unconfirmed balance in sats
     *
     * @remarks
     * Returns NEBL address unconfirmed balance in satoshis
     */
    testnetGetAddressUnconfirmedBalance(req: operations.TestnetGetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUnconfirmedBalanceResponse>;
    /**
     * Returns all UTXOs at a given address
     *
     * @remarks
     * Returns information on each Unspent Transaction Output contained at an address
     */
    testnetGetAddressUtxos(req: operations.TestnetGetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUtxosResponse>;
    /**
     * Returns information regarding a Neblio block
     *
     * @remarks
     * Returns blockchain data for a given block based upon the block hash
     */
    testnetGetBlock(req: operations.TestnetGetBlockRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockResponse>;
    /**
     * Returns block hash of block
     *
     * @remarks
     * Returns the block hash of a block at a given block index
     */
    testnetGetBlockIndex(req: operations.TestnetGetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockIndexResponse>;
    /**
     * Returns raw transaction hex
     *
     * @remarks
     * Returns raw transaction hex representing a NEBL transaction
     */
    testnetGetRawTx(req: operations.TestnetGetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetRawTxResponse>;
    /**
     * Utility API for calling several blockchain node functions
     *
     * @remarks
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
     */
    testnetGetStatus(req: operations.TestnetGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetStatusResponse>;
    /**
     * Get node sync status
     *
     * @remarks
     * Returns information on the node's sync progress
     */
    testnetGetSync(config?: AxiosRequestConfig): Promise<operations.TestnetGetSyncResponse>;
    /**
     * Returns transaction object
     *
     * @remarks
     * Returns NEBL transaction object representing a NEBL transaction
     */
    testnetGetTx(req: operations.TestnetGetTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxResponse>;
    /**
     * Get transactions by block or address
     *
     * @remarks
     * Returns all transactions by block or address
     */
    testnetGetTxs(req: operations.TestnetGetTxsRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxsResponse>;
    /**
     * Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * @remarks
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
     */
    testnetSendTx(req: shared.SendTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTxResponse>;
}
