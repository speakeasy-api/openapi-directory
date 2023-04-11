import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceUndeafResponseMessageEnum {
    ConferenceUndeafExecuted = "Conference Undeaf Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceUndeafFailedConferenceNotFound = "Conference Undeaf Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceUndeafResponse extends SpeakeasyBase {
    /**
     * List of affected members
     */
    members?: string[];
    /**
     * Response message
     */
    message: ConferenceUndeafResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
