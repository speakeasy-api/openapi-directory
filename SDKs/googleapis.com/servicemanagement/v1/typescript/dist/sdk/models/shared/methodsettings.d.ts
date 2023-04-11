import { SpeakeasyBase } from "../../../internal/utils";
import { LongRunning } from "./longrunning";
/**
 * Describes the generator configuration for a method.
 */
export declare class MethodSettings extends SpeakeasyBase {
    /**
     * Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
     */
    longRunning?: LongRunning;
    /**
     * The fully qualified name of the method, for which the options below apply. This is used to find the method to apply the options.
     */
    selector?: string;
}
