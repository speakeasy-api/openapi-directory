import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.
 */
export declare class AccessPolicy extends SpeakeasyBase {
    /**
     * Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}`
     */
    name?: string;
    /**
     * Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}`
     */
    parent?: string;
    /**
     * Required. Human readable title. Does not affect behavior.
     */
    title?: string;
}
