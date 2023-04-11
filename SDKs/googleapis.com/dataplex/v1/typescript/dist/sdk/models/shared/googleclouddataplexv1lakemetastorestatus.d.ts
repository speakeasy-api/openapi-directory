import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current state of association.
 */
export declare enum GoogleCloudDataplexV1LakeMetastoreStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    None = "NONE",
    Ready = "READY",
    Updating = "UPDATING",
    Error = "ERROR"
}
/**
 * Status of Lake and Dataproc Metastore service instance association.
 */
export declare class GoogleCloudDataplexV1LakeMetastoreStatus extends SpeakeasyBase {
    /**
     * The URI of the endpoint used to access the Metastore service.
     */
    endpoint?: string;
    /**
     * Additional information about the current status.
     */
    message?: string;
    /**
     * Current state of association.
     */
    state?: GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;
    /**
     * Last update time of the metastore status of the lake.
     */
    updateTime?: string;
}
