import { SpeakeasyBase } from "../../../internal/utils";
import { SchedulingNodeAffinity } from "./schedulingnodeaffinity";
/**
 * How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance.
 */
export declare enum ComputeSchedulingOnHostMaintenanceEnum {
    OnHostMaintenanceUnspecified = "ON_HOST_MAINTENANCE_UNSPECIFIED",
    Terminate = "TERMINATE",
    Migrate = "MIGRATE"
}
/**
 * Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart.
 */
export declare enum ComputeSchedulingRestartTypeEnum {
    RestartTypeUnspecified = "RESTART_TYPE_UNSPECIFIED",
    AutomaticRestart = "AUTOMATIC_RESTART",
    NoAutomaticRestart = "NO_AUTOMATIC_RESTART"
}
/**
 * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
 */
export declare class ComputeScheduling extends SpeakeasyBase {
    automaticRestart?: boolean;
    /**
     * The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured.
     */
    minNodeCpus?: number;
    /**
     * A set of node affinity and anti-affinity configurations for sole tenant nodes.
     */
    nodeAffinities?: SchedulingNodeAffinity[];
    /**
     * How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance.
     */
    onHostMaintenance?: ComputeSchedulingOnHostMaintenanceEnum;
    /**
     * Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart.
     */
    restartType?: ComputeSchedulingRestartTypeEnum;
}
