import { SpeakeasyBase } from "../../../internal/utils";
import { SchedulingNodeAffinity } from "./schedulingnodeaffinity";
/**
 * Specifies the termination action for the instance.
 */
export declare enum SchedulingInstanceTerminationActionEnum {
    Delete = "DELETE",
    InstanceTerminationActionUnspecified = "INSTANCE_TERMINATION_ACTION_UNSPECIFIED",
    Stop = "STOP"
}
/**
 * Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Set VM host maintenance policy.
 */
export declare enum SchedulingOnHostMaintenanceEnum {
    Migrate = "MIGRATE",
    Terminate = "TERMINATE"
}
/**
 * Specifies the provisioning model of the instance.
 */
export declare enum SchedulingProvisioningModelEnum {
    Spot = "SPOT",
    Standard = "STANDARD"
}
/**
 * Sets the scheduling options for an Instance.
 */
export declare class Scheduling extends SpeakeasyBase {
    /**
     * Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the automatic restart option for standard instances. Preemptible instances cannot be automatically restarted. By default, this is set to true so an instance is automatically restarted if it is terminated by Compute Engine.
     */
    automaticRestart?: boolean;
    /**
     * Specifies the termination action for the instance.
     */
    instanceTerminationAction?: SchedulingInstanceTerminationActionEnum;
    /**
     * An opaque location hint used to place the instance close to other resources. This field is for use by internal tools that use the public API.
     */
    locationHint?: string;
    /**
     * The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node.
     */
    minNodeCpus?: number;
    /**
     * A set of node affinity and anti-affinity configurations. Refer to Configuring node affinity for more information. Overrides reservationAffinity.
     */
    nodeAffinities?: SchedulingNodeAffinity[];
    /**
     * Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Set VM host maintenance policy.
     */
    onHostMaintenance?: SchedulingOnHostMaintenanceEnum;
    /**
     * Defines whether the instance is preemptible. This can only be set during instance creation or while the instance is stopped and therefore, in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states.
     */
    preemptible?: boolean;
    /**
     * Specifies the provisioning model of the instance.
     */
    provisioningModel?: SchedulingProvisioningModelEnum;
}
