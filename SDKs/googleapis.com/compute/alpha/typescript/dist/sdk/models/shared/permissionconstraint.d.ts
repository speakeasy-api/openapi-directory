import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom constraint that specifies a key and a list of allowed values for Istio attributes.
 */
export declare class PermissionConstraint extends SpeakeasyBase {
    /**
     * Key of the constraint.
     */
    key?: string;
    /**
     * A list of allowed values.
     */
    values?: string[];
}
