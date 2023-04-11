import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export declare class LocalObjectReference extends SpeakeasyBase {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;
}
