import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class GetCallTokenResponse extends SpeakeasyBase {
    agoraAppId?: string;
    agoraUid?: number;
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    token: string;
}
