import { SpeakeasyBase } from "../../../internal/utils";
import { EffectiveIamPolicy } from "./effectiveiampolicy";
/**
 * A response message for AssetService.BatchGetEffectiveIamPolicies.
 */
export declare class BatchGetEffectiveIamPoliciesResponse extends SpeakeasyBase {
    /**
     * The effective policies for a batch of resources. Note that the results order is the same as the order of BatchGetEffectiveIamPoliciesRequest.names. When a resource does not have any effective IAM policies, its corresponding policy_result will contain empty EffectiveIamPolicy.policies.
     */
    policyResults?: EffectiveIamPolicy[];
}
