import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";
/**
 * Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
 */
export declare class ConfigSource extends SpeakeasyBase {
    /**
     * Set of source configuration files that are used to generate a service configuration (`google.api.Service`).
     */
    files?: ConfigFile[];
    /**
     * A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. If empty, the server may choose to generate one instead.
     */
    id?: string;
}
