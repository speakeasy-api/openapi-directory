import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
 */
export declare class GoogleCloudRunV1Condition extends SpeakeasyBase {
    /**
     * Optional. Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string;
    /**
     * Optional. Human readable message indicating details about the current status.
     */
    message?: string;
    /**
     * Optional. One-word CamelCase reason for the condition's last transition. These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server.
     */
    reason?: string;
    /**
     * Optional. How to interpret this condition. One of Error, Warning, or Info. Conditions of severity Info do not contribute to resource readiness.
     */
    severity?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string;
    /**
     * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready" or "Completed": True when the Resource is ready.
     */
    type?: string;
}
