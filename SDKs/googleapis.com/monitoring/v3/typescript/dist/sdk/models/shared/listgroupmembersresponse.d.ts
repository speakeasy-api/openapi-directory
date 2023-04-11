import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResource } from "./monitoredresource";
/**
 * The ListGroupMembers response.
 */
export declare class ListGroupMembersResponse extends SpeakeasyBase {
    /**
     * A set of monitored resources in the group.
     */
    members?: MonitoredResource[];
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The total number of elements matching this request.
     */
    totalSize?: number;
}
