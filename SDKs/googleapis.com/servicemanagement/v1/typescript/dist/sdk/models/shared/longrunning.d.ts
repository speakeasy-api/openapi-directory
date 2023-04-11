import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 */
export declare class LongRunning extends SpeakeasyBase {
    /**
     * Initial delay after which the first poll request will be made. Default value: 5 seconds.
     */
    initialPollDelay?: string;
    /**
     * Maximum time between two subsequent poll requests. Default value: 45 seconds.
     */
    maxPollDelay?: string;
    /**
     * Multiplier to gradually increase delay between subsequent polls until it reaches max_poll_delay. Default value: 1.5.
     */
    pollDelayMultiplier?: number;
    /**
     * Total polling timeout. Default value: 5 minutes.
     */
    totalPollTimeout?: string;
}
