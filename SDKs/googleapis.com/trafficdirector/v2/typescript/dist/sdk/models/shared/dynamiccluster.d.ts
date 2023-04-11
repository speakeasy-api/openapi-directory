import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a dynamically loaded cluster via the CDS API.
 */
export declare class DynamicCluster extends SpeakeasyBase {
    /**
     * The cluster config.
     */
    cluster?: Record<string, any>;
    /**
     * The timestamp when the Cluster was last updated.
     */
    lastUpdated?: string;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API.
     */
    versionInfo?: string;
}
