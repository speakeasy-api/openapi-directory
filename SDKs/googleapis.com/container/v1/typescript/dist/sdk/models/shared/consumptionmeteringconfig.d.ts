import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for controlling consumption metering.
 */
export declare class ConsumptionMeteringConfig extends SpeakeasyBase {
    /**
     * Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records.
     */
    enabled?: boolean;
}
