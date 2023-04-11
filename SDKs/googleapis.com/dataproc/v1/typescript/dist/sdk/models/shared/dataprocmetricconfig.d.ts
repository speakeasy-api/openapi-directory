import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
/**
 * Dataproc metric config.
 */
export declare class DataprocMetricConfig extends SpeakeasyBase {
    /**
     * Required. Metrics sources to enable.
     */
    metrics?: Metric[];
}
