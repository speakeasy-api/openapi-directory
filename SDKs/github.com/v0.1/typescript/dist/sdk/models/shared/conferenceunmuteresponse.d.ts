import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceUnmuteResponseMessageEnum {
    ConferenceUnmuteExecuted = "Conference Unmute Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceUnmuteFailedConferenceNotFound = "Conference Unmute Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceUnmuteResponse extends SpeakeasyBase {
    /**
     * List of affected members
     */
    members?: string[];
    /**
     * Response message
     */
    message: ConferenceUnmuteResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
