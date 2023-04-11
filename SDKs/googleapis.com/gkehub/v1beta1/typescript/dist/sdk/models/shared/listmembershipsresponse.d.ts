import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * Response message for the `GkeHubMembershipService.ListMemberships` method.
 */
export declare class ListMembershipsResponse extends SpeakeasyBase {
    /**
     * A token to request the next page of resources from the `ListMemberships` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
    /**
     * The list of matching Memberships.
     */
    resources?: Membership[];
    /**
     * List of locations that could not be reached while fetching this list.
     */
    unreachable?: string[];
}
