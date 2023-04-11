import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigSource } from "./configsource";
/**
 * Request message for SubmitConfigSource method.
 */
export declare class SubmitConfigSourceRequest extends SpeakeasyBase {
    /**
     * Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
     */
    configSource?: ConfigSource;
    /**
     * Optional. If set, this will result in the generation of a `google.api.Service` configuration based on the `ConfigSource` provided, but the generated config and the sources will NOT be persisted.
     */
    validateOnly?: boolean;
}
