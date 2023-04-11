import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TestnetNtp1 {
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
    testnetBroadcastTx(req: shared.BroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBroadcastTxResponse>;
    /**
     * Builds a transaction that burns an NTP1 Token
     *
     * @remarks
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
     */
    testnetBurnToken(req: shared.BurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBurnTokenResponse>;
    /**
     * Information On a Neblio Address
     *
     * @remarks
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
     */
    testnetGetAddressInfo(req: operations.TestnetGetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressInfoResponse>;
    /**
     * Get Addresses Holding a Token
     *
     * @remarks
     * Returns the the the addresses holding a token and how many tokens are held
     *
     */
    testnetGetTokenHolders(req: operations.TestnetGetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenHoldersResponse>;
    /**
     * Returns the tokenId representing a token
     *
     * @remarks
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
     */
    testnetGetTokenId(req: operations.TestnetGetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenIdResponse>;
    /**
     * Get Metadata of Token
     *
     * @remarks
     * Returns the metadata associated with a token.
     *
     */
    testnetGetTokenMetadata(req: operations.TestnetGetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataResponse>;
    /**
     * Get UTXO Metadata of Token
     *
     * @remarks
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
     */
    testnetGetTokenMetadataOfUtxo(req: operations.TestnetGetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataOfUtxoResponse>;
    /**
     * Information On an NTP1 Transaction
     *
     * @remarks
     * Returns detailed information regarding an NTP1 transaction.
     *
     */
    testnetGetTransactionInfo(req: operations.TestnetGetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTransactionInfoResponse>;
    /**
     * Builds a transaction that issues a new NTP1 Token
     *
     * @remarks
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
     */
    testnetIssueToken(req: shared.IssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetIssueTokenResponse>;
    /**
     * Builds a transaction that sends an NTP1 Token
     *
     * @remarks
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
     */
    testnetSendToken(req: shared.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTokenResponse>;
}
