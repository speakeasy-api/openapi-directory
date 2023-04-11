import { SpeakeasyBase } from "../../../internal/utils";
import { MetricMetadata } from "./metricmetadata";
/**
 * The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
 */
export declare enum MetricCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * The compatibility for a single metric.
 */
export declare class MetricCompatibility extends SpeakeasyBase {
    /**
     * The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
     */
    compatibility?: MetricCompatibilityCompatibilityEnum;
    /**
     * Explains a metric.
     */
    metricMetadata?: MetricMetadata;
}
