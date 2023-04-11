import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceHangupResponseMessageEnum {
    ConferenceHangupExecuted = "Conference Hangup Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceHangupFailedConferenceNotFound = "Conference Hangup Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceHangupResponse extends SpeakeasyBase {
    /**
     * List of affected members
     */
    members?: string[];
    /**
     * Response message
     */
    message: ConferenceHangupResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
