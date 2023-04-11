import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An APC account information request body
 */
export declare class ConnectApcRequestBody extends SpeakeasyBase {
    /**
     * The nickname for the APC account
     */
    nickname: string;
    /**
     * The password for the APC account
     */
    password: string;
    /**
     * The username for the APC account
     */
    username: string;
}
