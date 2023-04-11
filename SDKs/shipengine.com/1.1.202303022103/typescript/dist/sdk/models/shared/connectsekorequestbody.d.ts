import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SEKO account information request body
 */
export declare class ConnectSekoRequestBody extends SpeakeasyBase {
    /**
     * Seko Account Access Key
     */
    accessKey: string;
    /**
     * Nickname
     */
    nickname: string;
}
