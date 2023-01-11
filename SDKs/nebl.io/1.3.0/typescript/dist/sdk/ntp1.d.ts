import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ntp1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * broadcastTx - Broadcasts a signed raw transaction to the network
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    broadcastTx(req: operations.BroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.BroadcastTxResponse>;
    /**
     * burnToken - Builds a transaction that burns an NTP1 Token
     *
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
    **/
    burnToken(req: operations.BurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.BurnTokenResponse>;
    /**
     * getAddressInfo - Information On a Neblio Address
     *
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
    **/
    getAddressInfo(req: operations.GetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressInfoResponse>;
    /**
     * getTokenHolders - Get Addresses Holding a Token
     *
     * Returns the the the addresses holding a token and how many tokens are held
     *
    **/
    getTokenHolders(req: operations.GetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenHoldersResponse>;
    /**
     * getTokenId - Returns the tokenId representing a token
     *
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
    **/
    getTokenId(req: operations.GetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenIdResponse>;
    /**
     * getTokenMetadata - Get Metadata of Token
     *
     * Returns the metadata associated with a token.
     *
    **/
    getTokenMetadata(req: operations.GetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataResponse>;
    /**
     * getTokenMetadataOfUtxo - Get UTXO Metadata of Token
     *
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
    **/
    getTokenMetadataOfUtxo(req: operations.GetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataOfUtxoResponse>;
    /**
     * getTransactionInfo - Information On an NTP1 Transaction
     *
     * Returns detailed information regarding an NTP1 transaction.
     *
    **/
    getTransactionInfo(req: operations.GetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionInfoResponse>;
    /**
     * issueToken - Builds a transaction that issues a new NTP1 Token
     *
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
    **/
    issueToken(req: operations.IssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.IssueTokenResponse>;
    /**
     * sendToken - Builds a transaction that sends an NTP1 Token
     *
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
    **/
    sendToken(req: operations.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.SendTokenResponse>;
}
