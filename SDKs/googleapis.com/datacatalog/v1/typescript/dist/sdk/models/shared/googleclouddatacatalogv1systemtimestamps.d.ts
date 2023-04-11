import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Timestamps associated with this resource in a particular system.
 */
export declare class GoogleCloudDatacatalogV1SystemTimestamps extends SpeakeasyBase {
    /**
     * Creation timestamp of the resource within the given system.
     */
    createTime?: string;
    /**
     * Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources.
     */
    expireTime?: string;
    /**
     * Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes.
     */
    updateTime?: string;
}
/**
 * Timestamps associated with this resource in a particular system.
 */
export declare class GoogleCloudDatacatalogV1SystemTimestampsInput extends SpeakeasyBase {
    /**
     * Creation timestamp of the resource within the given system.
     */
    createTime?: string;
    /**
     * Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes.
     */
    updateTime?: string;
}
