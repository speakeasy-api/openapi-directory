import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Autoscaling Policy config associated with the cluster.
 */
export declare class AutoscalingConfig extends SpeakeasyBase {
    /**
     * Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region.
     */
    policyUri?: string;
}
