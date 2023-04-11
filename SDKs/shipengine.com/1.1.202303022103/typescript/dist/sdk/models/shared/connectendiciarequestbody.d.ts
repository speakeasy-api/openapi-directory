import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Endicia account information request body
 */
export declare class ConnectEndiciaRequestBody extends SpeakeasyBase {
    /**
     * Account
     */
    account: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Passphrase
     */
    passphrase: string;
}
