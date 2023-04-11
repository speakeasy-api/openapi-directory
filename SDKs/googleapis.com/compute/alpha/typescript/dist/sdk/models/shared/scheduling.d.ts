import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
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
 * Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
 */
export declare enum SchedulingMaintenanceIntervalEnum {
    AsNeeded = "AS_NEEDED",
    Periodic = "PERIODIC",
    Recurrent = "RECURRENT"
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
     * Specifies the availability domain (AD), which this instance should be scheduled on. The AD belongs to the spread GroupPlacementPolicy resource policy that has been assigned to the instance. Specify a value between 1-max count of availability domains in your GroupPlacementPolicy. See go/placement-policy-extension for more details.
     */
    availabilityDomain?: number;
    /**
     * Current number of vCPUs available for VM. 0 or unset means default vCPUs of the current machine type.
     */
    currentCpus?: number;
    /**
     * Current amount of memory (in MB) available for VM. 0 or unset means default amount of memory of the current machine type.
     */
    currentMemoryMb?: string;
    /**
     * Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.
     */
    hostErrorTimeoutSeconds?: number;
    /**
     * Specifies the termination action for the instance.
     */
    instanceTerminationAction?: SchedulingInstanceTerminationActionEnum;
    /**
     * Defines whether the instance is tolerant of higher cpu latency. This can only be set during instance creation, or when the instance is not currently running. It must not be set if the preemptible option is also set.
     */
    latencyTolerant?: boolean;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    localSsdRecoveryTimeout?: Duration;
    /**
     * An opaque location hint used to place the instance close to other resources. This field is for use by internal tools that use the public API.
     */
    locationHint?: string;
    /**
     * Specifies the number of hours after VM instance creation where the VM won't be scheduled for maintenance.
     */
    maintenanceFreezeDurationHours?: number;
    /**
     * Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
     */
    maintenanceInterval?: SchedulingMaintenanceIntervalEnum;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    maxRunDuration?: Duration;
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
    /**
     * Specifies the timestamp, when the instance will be terminated, in RFC3339 text format. If specified, the instance termination action will be performed at the termination time.
     */
    terminationTime?: string;
}
