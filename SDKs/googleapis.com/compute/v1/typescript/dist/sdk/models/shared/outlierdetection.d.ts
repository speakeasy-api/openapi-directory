import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * Settings controlling the eviction of unhealthy hosts from the load balancing pool for the backend service.
 */
export declare class OutlierDetection extends SpeakeasyBase {
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    baseEjectionTime?: Duration;
    /**
     * Number of errors before a host is ejected from the connection pool. When the backend host is accessed over HTTP, a 5xx return code qualifies as an error. Defaults to 5. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
     */
    consecutiveErrors?: number;
    /**
     * The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. Defaults to 3. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
     */
    consecutiveGatewayFailure?: number;
    /**
     * The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. This setting can be used to disable ejection or to ramp it up slowly. Defaults to 0. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
     */
    enforcingConsecutiveErrors?: number;
    /**
     * The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. This setting can be used to disable ejection or to ramp it up slowly. Defaults to 100. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
     */
    enforcingConsecutiveGatewayFailure?: number;
    /**
     * The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. This setting can be used to disable ejection or to ramp it up slowly. Defaults to 100.
     */
    enforcingSuccessRate?: number;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    interval?: Duration;
    /**
     * Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 50%.
     */
    maxEjectionPercent?: number;
    /**
     * The number of hosts in a cluster that must have enough request volume to detect success rate outliers. If the number of hosts is less than this setting, outlier detection via success rate statistics is not performed for any host in the cluster. Defaults to 5.
     */
    successRateMinimumHosts?: number;
    /**
     * The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. If the volume is lower than this setting, outlier detection via success rate statistics is not performed for that host. Defaults to 100.
     */
    successRateRequestVolume?: number;
    /**
     * This factor is used to determine the ejection threshold for success rate outlier ejection. The ejection threshold is the difference between the mean success rate, and the product of this factor and the standard deviation of the mean success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided by a thousand to get a double. That is, if the desired factor is 1.9, the runtime value should be 1900. Defaults to 1900.
     */
    successRateStdevFactor?: number;
}
