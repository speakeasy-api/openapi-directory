import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response message for MembershipsService.CheckTransitiveMembership.
 */
export declare class CheckTransitiveMembershipResponse extends SpeakeasyBase {
    /**
     * Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths.
     */
    hasMembership?: boolean;
}
