import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceDeafResponseMessageEnum {
    ConferenceDeafExecuted = "Conference Deaf Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceDeafFailedConferenceNotFound = "Conference Deaf Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceDeafResponse extends SpeakeasyBase {
    /**
     * List of affected members
     */
    members?: string[];
    /**
     * Response message
     */
    message: ConferenceDeafResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
