import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).
 */
export declare class StackdriverLoggingConfig extends SpeakeasyBase {
    /**
     * Specifies the fraction of operations to write to [Stackdriver Logging](https://cloud.google.com/logging/docs/). This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged.
     */
    samplingRatio?: number;
}
