import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { ConsumptionMeteringConfig } from "./consumptionmeteringconfig";
/**
 * Configuration for exporting cluster resource usages.
 */
export declare class ResourceUsageExportConfig extends SpeakeasyBase {
    /**
     * Parameters for using BigQuery as the destination of resource usage export.
     */
    bigqueryDestination?: BigQueryDestination;
    /**
     * Parameters for controlling consumption metering.
     */
    consumptionMeteringConfig?: ConsumptionMeteringConfig;
    /**
     * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
     */
    enableNetworkEgressMetering?: boolean;
}
