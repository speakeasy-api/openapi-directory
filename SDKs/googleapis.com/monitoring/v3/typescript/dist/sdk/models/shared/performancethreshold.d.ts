import { SpeakeasyBase } from "../../../internal/utils";
import { BasicSli } from "./basicsli";
import { RequestBasedSli } from "./requestbasedsli";
/**
 * A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
 */
export declare class PerformanceThreshold extends SpeakeasyBase {
    /**
     * An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
     */
    basicSliPerformance?: BasicSli;
    /**
     * Service Level Indicators for which atomic units of service are counted directly.
     */
    performance?: RequestBasedSli;
    /**
     * If window performance >= threshold, the window is counted as good.
     */
    threshold?: number;
}
