import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run. ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export declare class ConfigMapEnvSource extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
     */
    localObjectReference?: LocalObjectReference;
    /**
     * The ConfigMap to select from.
     */
    name?: string;
    /**
     * Specify whether the ConfigMap must be defined.
     */
    optional?: boolean;
}
