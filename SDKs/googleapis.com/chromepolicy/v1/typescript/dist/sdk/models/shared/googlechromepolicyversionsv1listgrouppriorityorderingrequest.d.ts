import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request message for listing the group priority ordering of an app.
 */
export declare class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest extends SpeakeasyBase {
    /**
     * Required. The namespace of the policy type for the request.
     */
    policyNamespace?: string;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
