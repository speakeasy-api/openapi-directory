import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run.
 */
export declare class ConfigMapKeySelector extends SpeakeasyBase {
    /**
     * Required. Not supported by Cloud Run.
     */
    key?: string;
    /**
     * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
     */
    localObjectReference?: LocalObjectReference;
    /**
     * Required. Not supported by Cloud Run.
     */
    name?: string;
    /**
     * Not supported by Cloud Run.
     */
    optional?: boolean;
}
