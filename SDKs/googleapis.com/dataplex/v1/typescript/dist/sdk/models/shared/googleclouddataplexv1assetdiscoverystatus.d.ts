import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoveryStatusStats } from "./googleclouddataplexv1assetdiscoverystatusstats";
/**
 * The current status of the discovery feature.
 */
export declare enum GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Scheduled = "SCHEDULED",
    InProgress = "IN_PROGRESS",
    Paused = "PAUSED",
    Disabled = "DISABLED"
}
/**
 * Status of discovery for an asset.
 */
export declare class GoogleCloudDataplexV1AssetDiscoveryStatus extends SpeakeasyBase {
    /**
     * The duration of the last discovery run.
     */
    lastRunDuration?: string;
    /**
     * The start time of the last discovery run.
     */
    lastRunTime?: string;
    /**
     * Additional information about the current state.
     */
    message?: string;
    /**
     * The current status of the discovery feature.
     */
    state?: GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
    /**
     * The aggregated data statistics for the asset reported by discovery.
     */
    stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats;
    /**
     * Last update time of the status.
     */
    updateTime?: string;
}
