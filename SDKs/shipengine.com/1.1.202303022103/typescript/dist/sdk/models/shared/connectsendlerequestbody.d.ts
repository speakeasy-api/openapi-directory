import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Sendle account information request body
 */
export declare class ConnectSendleRequestBody extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * A string that uniquely identifies the sendle
     */
    sendleId: string;
}
