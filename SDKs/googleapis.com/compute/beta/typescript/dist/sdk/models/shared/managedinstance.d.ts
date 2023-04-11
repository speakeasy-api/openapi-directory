import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedInstanceAllInstancesConfig } from "./managedinstanceallinstancesconfig";
import { ManagedInstanceInstanceHealth } from "./managedinstanceinstancehealth";
import { ManagedInstanceLastAttempt } from "./managedinstancelastattempt";
import { ManagedInstanceVersion } from "./managedinstanceversion";
import { PreservedState } from "./preservedstate";
/**
 * [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values: - NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance. - CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful. - CREATING_WITHOUT_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group's targetSize value is decreased instead. - RECREATING The managed instance group is recreating this instance. - DELETING The managed instance group is permanently deleting this instance. - ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group. - RESTARTING The managed instance group is restarting the instance. - REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance. - VERIFYING The managed instance group has created the instance and it is in the process of being verified.
 */
export declare enum ManagedInstanceCurrentActionEnum {
    Abandoning = "ABANDONING",
    Creating = "CREATING",
    CreatingWithoutRetries = "CREATING_WITHOUT_RETRIES",
    Deleting = "DELETING",
    None = "NONE",
    Recreating = "RECREATING",
    Refreshing = "REFRESHING",
    Restarting = "RESTARTING",
    Resuming = "RESUMING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Suspending = "SUSPENDING",
    Verifying = "VERIFYING"
}
/**
 * [Output Only] The status of the instance. This field is empty when the instance does not exist.
 */
export declare enum ManagedInstanceInstanceStatusEnum {
    Deprovisioning = "DEPROVISIONING",
    Provisioning = "PROVISIONING",
    Repairing = "REPAIRING",
    Running = "RUNNING",
    Staging = "STAGING",
    Stopped = "STOPPED",
    Stopping = "STOPPING",
    Suspended = "SUSPENDED",
    Suspending = "SUSPENDING",
    Terminated = "TERMINATED"
}
/**
 * A Managed Instance resource.
 */
export declare class ManagedInstance extends SpeakeasyBase {
    allInstancesConfig?: ManagedInstanceAllInstancesConfig;
    /**
     * [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values: - NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance. - CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful. - CREATING_WITHOUT_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group's targetSize value is decreased instead. - RECREATING The managed instance group is recreating this instance. - DELETING The managed instance group is permanently deleting this instance. - ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group. - RESTARTING The managed instance group is restarting the instance. - REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance. - VERIFYING The managed instance group has created the instance and it is in the process of being verified.
     */
    currentAction?: ManagedInstanceCurrentActionEnum;
    /**
     * [Output only] The unique identifier for this resource. This field is empty when instance does not exist.
     */
    id?: string;
    /**
     * [Output Only] The URL of the instance. The URL can exist even if the instance has not yet been created.
     */
    instance?: string;
    /**
     * [Output Only] Health state of the instance per health-check.
     */
    instanceHealth?: ManagedInstanceInstanceHealth[];
    /**
     * [Output Only] The status of the instance. This field is empty when the instance does not exist.
     */
    instanceStatus?: ManagedInstanceInstanceStatusEnum;
    lastAttempt?: ManagedInstanceLastAttempt;
    /**
     * Preserved state for a given instance.
     */
    preservedStateFromConfig?: PreservedState;
    /**
     * Preserved state for a given instance.
     */
    preservedStateFromPolicy?: PreservedState;
    version?: ManagedInstanceVersion;
}
