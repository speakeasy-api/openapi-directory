import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * Successful response
 */
export declare class ListMembershipsResponse extends SpeakeasyBase {
    /**
     * List of memberships in the requested (or first) page.
     */
    memberships?: Membership[];
    /**
     * A token that can be sent as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string;
}
