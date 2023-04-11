import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * The response message for MembershipsService.ListMemberships.
 */
export declare class ListMembershipsResponse extends SpeakeasyBase {
    /**
     * The `Membership`s under the specified `parent`.
     */
    memberships?: Membership[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string;
}
