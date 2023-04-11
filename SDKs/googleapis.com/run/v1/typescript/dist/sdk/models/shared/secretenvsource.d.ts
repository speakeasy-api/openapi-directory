import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export declare class SecretEnvSource extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
     */
    localObjectReference?: LocalObjectReference;
    /**
     * The Secret to select from.
     */
    name?: string;
    /**
     * Specify whether the Secret must be defined
     */
    optional?: boolean;
}
