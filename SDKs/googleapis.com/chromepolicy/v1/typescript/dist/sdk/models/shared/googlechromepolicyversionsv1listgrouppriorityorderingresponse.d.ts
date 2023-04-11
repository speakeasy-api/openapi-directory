import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Response message for listing the group priority ordering of an app.
 */
export declare class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse extends SpeakeasyBase {
    /**
     * Output only. The group IDs, in priority ordering.
     */
    groupIds?: string[];
    /**
     * Output only. The namespace of the policy type of the group IDs.
     */
    policyNamespace?: string;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
