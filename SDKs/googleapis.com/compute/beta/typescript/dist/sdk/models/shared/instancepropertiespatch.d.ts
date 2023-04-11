import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the change that you want to make to the instance properties.
 */
export declare class InstancePropertiesPatch extends SpeakeasyBase {
    /**
     * The label key-value pairs that you want to patch onto the instance.
     */
    labels?: Record<string, string>;
    /**
     * The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata.
     */
    metadata?: Record<string, string>;
}
