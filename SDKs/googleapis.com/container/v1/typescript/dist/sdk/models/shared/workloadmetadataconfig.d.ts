import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mode is the configuration for how to expose metadata to workloads running on the node pool.
 */
export declare enum WorkloadMetadataConfigModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    GceMetadata = "GCE_METADATA",
    GkeMetadata = "GKE_METADATA"
}
/**
 * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
 */
export declare class WorkloadMetadataConfig extends SpeakeasyBase {
    /**
     * Mode is the configuration for how to expose metadata to workloads running on the node pool.
     */
    mode?: WorkloadMetadataConfigModeEnum;
}
