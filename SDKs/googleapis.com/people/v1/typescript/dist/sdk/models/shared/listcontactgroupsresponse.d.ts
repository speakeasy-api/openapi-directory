import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroup } from "./contactgroup";
/**
 * The response to a list contact groups request.
 */
export declare class ListContactGroupsResponse extends SpeakeasyBase {
    /**
     * The list of contact groups. Members of the contact groups are not populated.
     */
    contactGroups?: ContactGroup[];
    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The token that can be used to retrieve changes since the last request.
     */
    nextSyncToken?: string;
    /**
     * The total number of items in the list without pagination.
     */
    totalItems?: number;
}
