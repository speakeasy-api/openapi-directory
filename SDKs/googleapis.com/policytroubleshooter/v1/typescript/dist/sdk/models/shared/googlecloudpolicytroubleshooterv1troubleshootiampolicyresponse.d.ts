import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1ExplainedPolicy } from "./googlecloudpolicytroubleshooterv1explainedpolicy";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Indicates whether the principal has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies.
 */
export declare enum GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
/**
 * Response for TroubleshootIamPolicy.
 */
export declare class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse extends SpeakeasyBase {
    /**
     * Indicates whether the principal has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies.
     */
    access?: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum;
    /**
     * The general errors contained in the troubleshooting response.
     */
    errors?: GoogleRpcStatus[];
    /**
     * List of IAM policies that were evaluated to check the principal's permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
     */
    explainedPolicies?: GoogleCloudPolicytroubleshooterV1ExplainedPolicy[];
}
