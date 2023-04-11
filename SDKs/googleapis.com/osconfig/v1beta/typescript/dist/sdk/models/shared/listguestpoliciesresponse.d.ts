import { SpeakeasyBase } from "../../../internal/utils";
import { GuestPolicy } from "./guestpolicy";
/**
 * A response message for listing guest policies.
 */
export declare class ListGuestPoliciesResponse extends SpeakeasyBase {
    /**
     * The list of GuestPolicies.
     */
    guestPolicies?: GuestPolicy[];
    /**
     * A pagination token that can be used to get the next page of guest policies.
     */
    nextPageToken?: string;
}
