import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigInput } from "./config";
/**
 * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * Available configurations to provision an Instance.
     */
    config?: ConfigInput;
    /**
     * Format: `projects/* /locations/* /instance`. Currently only `locations/global` is supported.
     */
    name?: string;
}
