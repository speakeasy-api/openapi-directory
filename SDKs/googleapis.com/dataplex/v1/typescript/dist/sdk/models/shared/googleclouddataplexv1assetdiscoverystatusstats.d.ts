import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The aggregated data statistics for the asset reported by discovery.
 */
export declare class GoogleCloudDataplexV1AssetDiscoveryStatusStats extends SpeakeasyBase {
    /**
     * The count of data items within the referenced resource.
     */
    dataItems?: string;
    /**
     * The number of stored data bytes within the referenced resource.
     */
    dataSize?: string;
    /**
     * The count of fileset entities within the referenced resource.
     */
    filesets?: string;
    /**
     * The count of table entities within the referenced resource.
     */
    tables?: string;
}
