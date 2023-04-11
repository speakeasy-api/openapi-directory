import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A DHL express account information request body
 */
export declare class ConnectDhlExpressRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    countryCode?: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Required if site id is provided
     */
    password?: string;
    /**
     * Required if password is provided
     */
    siteId?: string;
}
