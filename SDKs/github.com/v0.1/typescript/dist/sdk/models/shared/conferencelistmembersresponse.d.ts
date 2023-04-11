import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum ConferenceListMembersResponseMessageEnum {
    ConferenceListMembersExecuted = "Conference ListMembers Executed",
    ConferenceNameParameterMustBePresent = "ConferenceName Parameter must be present",
    ConferenceListMembersFailedToParseResult = "Conference ListMembers Failed to parse result",
    ConferenceListMembersFailedConferenceNotFound = "Conference ListMembers Failed -- Conference not found"
}
/**
 * Response
 */
export declare class ConferenceListMembersResponse extends SpeakeasyBase {
    /**
     * List of established conferences
     */
    list: Record<string, any>;
    /**
     * Response message
     */
    message: ConferenceListMembersResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
