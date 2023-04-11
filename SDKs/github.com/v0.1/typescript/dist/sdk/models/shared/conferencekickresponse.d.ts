import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceKickResponseMessageEnum {
    ConferenceKickExecuted = "Conference Kick Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceKickFailedConferenceNotFound = "Conference Kick Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceKickResponse extends SpeakeasyBase {
    /**
     * List of affected members
     */
    members?: string[];
    /**
     * Response message
     */
    message: ConferenceKickResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
