import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Asendia account information request body
**/
export declare class ConnectAsendiaRequestBody extends SpeakeasyBase {
    accountNumber: string;
    ftpPassword: string;
    ftpUsername: string;
    nickname: string;
}
