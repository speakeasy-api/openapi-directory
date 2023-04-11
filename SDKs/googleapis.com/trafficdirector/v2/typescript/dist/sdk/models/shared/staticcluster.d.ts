import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a statically loaded cluster.
 */
export declare class StaticCluster extends SpeakeasyBase {
    /**
     * The cluster config.
     */
    cluster?: Record<string, any>;
    /**
     * The timestamp when the Cluster was last updated.
     */
    lastUpdated?: string;
}
