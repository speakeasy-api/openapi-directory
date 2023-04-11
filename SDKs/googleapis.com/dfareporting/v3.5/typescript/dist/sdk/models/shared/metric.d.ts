import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a metric.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * The kind of resource this is, in this case dfareporting#metric.
     */
    kind?: string;
    /**
     * The metric name, e.g. dfa:impressions
     */
    name?: string;
}
