import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceMuteResponseMessageEnum {
    ConferenceMuteExecuted = "Conference Mute Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    MemberIDParameterMustBePresent = "MemberID Parameter must be present",
    ConferenceMuteFailedConferenceNotFound = "Conference Mute Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceMuteResponse extends SpeakeasyBase {
    /**
     * List of affected members
     */
    members?: string[];
    /**
     * Response message
     */
    message: ConferenceMuteResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
