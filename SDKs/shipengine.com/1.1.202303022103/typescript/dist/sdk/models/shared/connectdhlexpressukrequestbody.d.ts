import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A DHL Express UK account information request body
 */
export declare class ConnectDhlExpressUkRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Password
     */
    password: string;
    /**
     * A string that uniquely identifies the site
     */
    siteId: string;
}
