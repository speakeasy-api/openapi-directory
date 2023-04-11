import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Australia Post account information request body
 */
export declare class ConnectAustraliaPostRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * API key
     */
    apiKey: string;
    /**
     * API secret
     */
    apiSecret: string;
    /**
     * Nickname
     */
    nickname: string;
}
