import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * Response message for the `GkeHub.ListAdminClusterMemberships` method.
 */
export declare class ListAdminClusterMembershipsResponse extends SpeakeasyBase {
    /**
     * The list of matching Memberships of admin clusters.
     */
    adminClusterMemberships?: Membership[];
    /**
     * A token to request the next page of resources from the `ListAdminClusterMemberships` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
    /**
     * List of locations that could not be reached while fetching this list.
     */
    unreachable?: string[];
}
