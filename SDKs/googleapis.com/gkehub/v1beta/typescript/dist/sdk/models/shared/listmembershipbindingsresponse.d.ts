import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipBinding } from "./membershipbinding";
/**
 * List of MembershipBindings.
 */
export declare class ListMembershipBindingsResponse extends SpeakeasyBase {
    /**
     * The list of membership_bindings
     */
    membershipBindings?: MembershipBinding[];
    /**
     * A token to request the next page of resources from the `ListMembershipBindings` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
}
