import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TestnetNtp1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * testnetBroadcastTx - Broadcasts a signed raw transaction to the network
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    testnetBroadcastTx(req: operations.TestnetBroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBroadcastTxResponse>;
    /**
     * testnetBurnToken - Builds a transaction that burns an NTP1 Token
     *
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
    **/
    testnetBurnToken(req: operations.TestnetBurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBurnTokenResponse>;
    /**
     * testnetGetAddressInfo - Information On a Neblio Address
     *
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
    **/
    testnetGetAddressInfo(req: operations.TestnetGetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressInfoResponse>;
    /**
     * testnetGetTokenHolders - Get Addresses Holding a Token
     *
     * Returns the the the addresses holding a token and how many tokens are held
     *
    **/
    testnetGetTokenHolders(req: operations.TestnetGetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenHoldersResponse>;
    /**
     * testnetGetTokenId - Returns the tokenId representing a token
     *
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
    **/
    testnetGetTokenId(req: operations.TestnetGetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenIdResponse>;
    /**
     * testnetGetTokenMetadata - Get Metadata of Token
     *
     * Returns the metadata associated with a token.
     *
    **/
    testnetGetTokenMetadata(req: operations.TestnetGetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataResponse>;
    /**
     * testnetGetTokenMetadataOfUtxo - Get UTXO Metadata of Token
     *
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
    **/
    testnetGetTokenMetadataOfUtxo(req: operations.TestnetGetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataOfUtxoResponse>;
    /**
     * testnetGetTransactionInfo - Information On an NTP1 Transaction
     *
     * Returns detailed information regarding an NTP1 transaction.
     *
    **/
    testnetGetTransactionInfo(req: operations.TestnetGetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTransactionInfoResponse>;
    /**
     * testnetIssueToken - Builds a transaction that issues a new NTP1 Token
     *
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
    **/
    testnetIssueToken(req: operations.TestnetIssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetIssueTokenResponse>;
    /**
     * testnetSendToken - Builds a transaction that sends an NTP1 Token
     *
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
    **/
    testnetSendToken(req: operations.TestnetSendTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTokenResponse>;
}
