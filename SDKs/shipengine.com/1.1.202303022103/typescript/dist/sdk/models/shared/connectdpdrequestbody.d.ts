import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A DPD account information request body
 */
export declare class ConnectDpdRequestBody extends SpeakeasyBase {
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
}
