import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of logging on a health check. If logging is enabled, logs will be exported to Stackdriver.
 */
export declare class HealthCheckLogConfig extends SpeakeasyBase {
    /**
     * Indicates whether or not to export logs. This is false by default, which means no health check logging will be done.
     */
    enable?: boolean;
}
