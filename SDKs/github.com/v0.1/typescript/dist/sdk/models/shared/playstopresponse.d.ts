import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum PlayStopResponseMessageEnum {
    PlayStopExecuted = "PlayStop Executed",
    CallUUIDParameterMissing = "CallUUID Parameter Missing",
    PlayStopFailedCallNotFound = "PlayStop Failed -- Call not found",
    PlayStopFailed = "PlayStop Failed"
}
/**
 * Response
 */
export declare class PlayStopResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: PlayStopResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
