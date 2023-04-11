import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A policy for scheduling replications.
 */
export declare class SchedulePolicy extends SpeakeasyBase {
    /**
     * The idle duration between replication stages.
     */
    idleDuration?: string;
    /**
     * A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine.
     */
    skipOsAdaptation?: boolean;
}
