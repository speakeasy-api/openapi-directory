import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Ontrac account information request body
 */
export declare class ConnectOntracRequestBody extends SpeakeasyBase {
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
