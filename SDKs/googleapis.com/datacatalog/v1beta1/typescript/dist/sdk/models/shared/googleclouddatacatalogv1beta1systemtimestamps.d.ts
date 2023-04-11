import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Timestamps about this resource according to a particular system.
 */
export declare class GoogleCloudDatacatalogV1beta1SystemTimestamps extends SpeakeasyBase {
    /**
     * The creation time of the resource within the given system.
     */
    createTime?: string;
    /**
     * Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources.
     */
    expireTime?: string;
    /**
     * The last-modified time of the resource within the given system.
     */
    updateTime?: string;
}
/**
 * Timestamps about this resource according to a particular system.
 */
export declare class GoogleCloudDatacatalogV1beta1SystemTimestampsInput extends SpeakeasyBase {
    /**
     * The creation time of the resource within the given system.
     */
    createTime?: string;
    /**
     * The last-modified time of the resource within the given system.
     */
    updateTime?: string;
}
