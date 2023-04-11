import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for direct-path (via ALTS) with workload identity.
 */
export declare class WorkloadALTSConfig extends SpeakeasyBase {
    /**
     * enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty).
     */
    enableAlts?: boolean;
}
