import { SpeakeasyBase } from "../../../internal/utils";
import { FailedData } from "./faileddata";
/**
 * State of the QueuedResource request.
 */
export declare enum QueuedResourceStateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Accepted = "ACCEPTED",
    Provisioning = "PROVISIONING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Active = "ACTIVE",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED"
}
/**
 * QueuedResourceState defines the details of the QueuedResource request.
 */
export declare class QueuedResourceState extends SpeakeasyBase {
    /**
     * Further data for the accepted state.
     */
    acceptedData?: Record<string, any>;
    /**
     * Further data for the active state.
     */
    activeData?: Record<string, any>;
    /**
     * Further data for the creating state.
     */
    creatingData?: Record<string, any>;
    /**
     * Further data for the deleting state.
     */
    deletingData?: Record<string, any>;
    /**
     * Further data for the failed state.
     */
    failedData?: FailedData;
    /**
     * Further data for the provisioning state.
     */
    provisioningData?: Record<string, any>;
    /**
     * State of the QueuedResource request.
     */
    state?: QueuedResourceStateStateEnum;
    /**
     * Further data for the suspended state.
     */
    suspendedData?: Record<string, any>;
    /**
     * Further data for the suspending state.
     */
    suspendingData?: Record<string, any>;
}
