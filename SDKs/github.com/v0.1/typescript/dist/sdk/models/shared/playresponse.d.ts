import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum PlayResponseMessageEnum {
    PlayExecuted = "Play Executed",
    CallUUIDParameterMissing = "CallUUID Parameter Missing",
    SoundsParameterMissing = "Sounds Parameter Missing",
    LegsParameterIsInvalid = "Legs Parameter is Invalid",
    LengthParameterMustBeAPositiveInteger = "Length Parameter must be a positive integer",
    SoundsParameterIsInvalid = "Sounds Parameter is Invalid",
    PlayFailedCallNotFound = "Play Failed -- Call not found",
    PlayFailed = "Play Failed"
}
/**
 * Response
 */
export declare class PlayResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: PlayResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
