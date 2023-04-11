import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the managed resource.
 */
export declare enum GoogleCloudDataplexV1AssetResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    Error = "ERROR"
}
/**
 * Status of the resource referenced by an asset.
 */
export declare class GoogleCloudDataplexV1AssetResourceStatusInput extends SpeakeasyBase {
    /**
     * Additional information about the current state.
     */
    message?: string;
    /**
     * The current state of the managed resource.
     */
    state?: GoogleCloudDataplexV1AssetResourceStatusStateEnum;
    /**
     * Last update time of the status.
     */
    updateTime?: string;
}
/**
 * Status of the resource referenced by an asset.
 */
export declare class GoogleCloudDataplexV1AssetResourceStatus extends SpeakeasyBase {
    /**
     * Output only. Service account associated with the BigQuery Connection.
     */
    managedAccessIdentity?: string;
    /**
     * Additional information about the current state.
     */
    message?: string;
    /**
     * The current state of the managed resource.
     */
    state?: GoogleCloudDataplexV1AssetResourceStatusStateEnum;
    /**
     * Last update time of the status.
     */
    updateTime?: string;
}
