import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State to which the execution snapshot status will be set if the task succeeds.
 */
export declare enum GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum {
    FinalStateUnspecified = "FINAL_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Suspended = "SUSPENDED"
}
/**
 * Policy that dictates the behavior for the task after it completes successfully.
 */
export declare class GoogleCloudIntegrationsV1alphaSuccessPolicy extends SpeakeasyBase {
    /**
     * State to which the execution snapshot status will be set if the task succeeds.
     */
    finalState?: GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum;
}
