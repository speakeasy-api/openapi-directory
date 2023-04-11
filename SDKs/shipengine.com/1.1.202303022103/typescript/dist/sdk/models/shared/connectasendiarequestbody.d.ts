import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Asendia account information request body
 */
export declare class ConnectAsendiaRequestBody extends SpeakeasyBase {
    /**
     * Asendia account number
     */
    accountNumber: string;
    /**
     * FTP password
     */
    ftpPassword: string;
    /**
     * FTP username
     */
    ftpUsername: string;
    /**
     * The nickname of the Asendia account
     */
    nickname: string;
}
