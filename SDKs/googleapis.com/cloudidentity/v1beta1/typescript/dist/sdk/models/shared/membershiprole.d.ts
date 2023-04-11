import { SpeakeasyBase } from "../../../internal/utils";
import { ExpiryDetail } from "./expirydetail";
import { RestrictionEvaluations } from "./restrictionevaluations";
/**
 * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
 */
export declare class MembershipRole extends SpeakeasyBase {
    /**
     * The `MembershipRole` expiry details.
     */
    expiryDetail?: ExpiryDetail;
    /**
     * The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.
     */
    name?: string;
    /**
     * Evaluations of restrictions applied to parent group on this membership.
     */
    restrictionEvaluations?: RestrictionEvaluations;
}
/**
 * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
 */
export declare class MembershipRoleInput extends SpeakeasyBase {
    /**
     * The `MembershipRole` expiry details.
     */
    expiryDetail?: ExpiryDetail;
    /**
     * The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.
     */
    name?: string;
}
