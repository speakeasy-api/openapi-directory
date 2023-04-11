import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ntp1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Broadcasts a signed raw transaction to the network
     *
     * @remarks
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
     */
    broadcastTx(req: shared.BroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.BroadcastTxResponse>;
    /**
     * Builds a transaction that burns an NTP1 Token
     *
     * @remarks
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
     */
    burnToken(req: shared.BurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.BurnTokenResponse>;
    /**
     * Information On a Neblio Address
     *
     * @remarks
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
     */
    getAddressInfo(req: operations.GetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressInfoResponse>;
    /**
     * Get Addresses Holding a Token
     *
     * @remarks
     * Returns the the the addresses holding a token and how many tokens are held
     *
     */
    getTokenHolders(req: operations.GetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenHoldersResponse>;
    /**
     * Returns the tokenId representing a token
     *
     * @remarks
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
     */
    getTokenId(req: operations.GetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenIdResponse>;
    /**
     * Get Metadata of Token
     *
     * @remarks
     * Returns the metadata associated with a token.
     *
     */
    getTokenMetadata(req: operations.GetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataResponse>;
    /**
     * Get UTXO Metadata of Token
     *
     * @remarks
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
     */
    getTokenMetadataOfUtxo(req: operations.GetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataOfUtxoResponse>;
    /**
     * Information On an NTP1 Transaction
     *
     * @remarks
     * Returns detailed information regarding an NTP1 transaction.
     *
     */
    getTransactionInfo(req: operations.GetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionInfoResponse>;
    /**
     * Builds a transaction that issues a new NTP1 Token
     *
     * @remarks
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
     */
    issueToken(req: shared.IssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.IssueTokenResponse>;
    /**
     * Builds a transaction that sends an NTP1 Token
     *
     * @remarks
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
     */
    sendToken(req: shared.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.SendTokenResponse>;
}
