import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";
/**
 * The dimensions and metrics currently accepted in reporting methods.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * The dimension descriptions.
     */
    dimensions?: DimensionMetadata[];
    /**
     * The metric descriptions.
     */
    metrics?: MetricMetadata[];
    /**
     * Resource name of this metadata.
     */
    name?: string;
}
