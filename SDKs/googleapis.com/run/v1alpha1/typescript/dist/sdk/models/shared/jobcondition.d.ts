import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JobCondition defines a readiness condition for a Revision.
 */
export declare class JobCondition extends SpeakeasyBase {
    /**
     * Optional. Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string;
    /**
     * Optional. Human readable message indicating details about the current status.
     */
    message?: string;
    /**
     * Optional. One-word CamelCase reason for the condition's last transition.
     */
    reason?: string;
    /**
     * Optional. How to interpret failures of this condition, one of Error, Warning, Info
     */
    severity?: string;
    /**
     * Required. Status of the condition, one of True, False, Unknown.
     */
    status?: string;
    /**
     * Required. Type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Completed": True when the Job has successfully completed. * "Started": True when the Job has successfully started running. * "ResourcesAvailable": True when underlying resources have been provisioned.
     */
    type?: string;
}
