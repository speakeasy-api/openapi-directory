import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicCluster } from "./dynamiccluster";
import { StaticCluster } from "./staticcluster";
/**
 * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
 */
export declare class ClustersConfigDump extends SpeakeasyBase {
    /**
     * The dynamically loaded active clusters. These are clusters that are available to service data plane traffic.
     */
    dynamicActiveClusters?: DynamicCluster[];
    /**
     * The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded.
     */
    dynamicWarmingClusters?: DynamicCluster[];
    /**
     * The statically loaded cluster configs.
     */
    staticClusters?: StaticCluster[];
    /**
     * This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "".
     */
    versionInfo?: string;
}
