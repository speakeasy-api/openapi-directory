import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1betaExplainedPolicy } from "./googlecloudpolicytroubleshooterv1betaexplainedpolicy";
/**
 * Indicates whether the member has the specified permission for the specified resource, based on evaluating all of the applicable policies.
 */
export declare enum GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
/**
 * Response for TroubleshootIamPolicy.
 */
export declare class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse extends SpeakeasyBase {
    /**
     * Indicates whether the member has the specified permission for the specified resource, based on evaluating all of the applicable policies.
     */
    access?: GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum;
    /**
     * List of IAM policies that were evaluated to check the member's permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
     */
    explainedPolicies?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[];
}
