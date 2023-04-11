import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run Selects a key from a ConfigMap.
 */
export declare class ConfigMapKeySelector extends SpeakeasyBase {
    /**
     * The key to select.
     */
    key?: string;
    /**
     * Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
     */
    localObjectReference?: LocalObjectReference;
    /**
     * The ConfigMap to select from.
     */
    name?: string;
    /**
     * (Optional) Specify whether the ConfigMap or its key must be defined
     */
    optional?: boolean;
}
