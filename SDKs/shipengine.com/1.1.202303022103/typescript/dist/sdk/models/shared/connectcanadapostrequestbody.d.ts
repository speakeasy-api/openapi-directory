import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Canada Post account information request body
 */
export declare class ConnectCanadaPostRequestBody extends SpeakeasyBase {
    /**
     * Canada Post Account Number
     */
    accountNumber: string;
    /**
     * Canada Post Account API Key
     */
    apiKey: string;
    /**
     * Canada Post Account API Secret
     */
    apiSecret: string;
    /**
     * Canada Post Account Contract ID
     */
    contractId: string;
    /**
     * Nickname
     */
    nickname: string;
}
