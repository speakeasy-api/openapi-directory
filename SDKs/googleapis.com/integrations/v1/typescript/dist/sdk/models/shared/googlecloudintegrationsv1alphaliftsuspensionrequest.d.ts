import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for lift Suspension
 */
export declare class GoogleCloudIntegrationsV1alphaLiftSuspensionRequest extends SpeakeasyBase {
    /**
     * User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass "Approved", or if you want to reject the suspension and terminate workfloe execution, you can pass "Rejected" and terminate the workflow execution with configuring the edge condition.
     */
    suspensionResult?: string;
}
