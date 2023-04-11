import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ConferenceListMembersParameters extends SpeakeasyBase {
    /**
     * Restricts listed calls to the provided values (comma separated call UUID list)
     */
    callUUIDFilter?: string;
    /**
     * Name of the conference
     */
    conferenceName: string;
    /**
     * Restricts listed members to deaf ones
     */
    deafFilter?: boolean;
    /**
     * Restricts listed members to the provided values (comma separated member ID list)
     */
    memberFilter?: string;
    /**
     * Restricts listed members to muted ones
     */
    mutedFilter?: boolean;
}
