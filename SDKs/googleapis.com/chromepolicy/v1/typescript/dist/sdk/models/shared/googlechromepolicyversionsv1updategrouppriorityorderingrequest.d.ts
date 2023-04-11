import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request message for updating the group priority ordering of an app.
 */
export declare class GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest extends SpeakeasyBase {
    /**
     * Required. The group IDs, in desired priority ordering.
     */
    groupIds?: string[];
    /**
     * Required. The namespace of the policy type for the request.
     */
    policyNamespace?: string;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
