import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response message for MembershipsService.LookupMembershipName.
 */
export declare class LookupMembershipNameResponse extends SpeakeasyBase {
    /**
     * The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
     */
    name?: string;
}
