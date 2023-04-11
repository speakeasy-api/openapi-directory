import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates data about a constraint associated with an organization policy.
 */
export declare class OrgPolicyConstraint extends SpeakeasyBase {
    /**
     * The resource name of the constraint. Example: "organizations/{organization_id}/constraints/{constraint_name}"
     */
    name?: string;
}
