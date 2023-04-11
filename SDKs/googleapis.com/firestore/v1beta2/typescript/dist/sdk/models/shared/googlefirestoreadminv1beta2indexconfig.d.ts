import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";
/**
 * The index configuration for this field.
 */
export declare class GoogleFirestoreAdminV1beta2IndexConfig extends SpeakeasyBase {
    /**
     * Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false).
     */
    ancestorField?: string;
    /**
     * The indexes supported for this field.
     */
    indexes?: GoogleFirestoreAdminV1beta2Index[];
    /**
     * Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`.
     */
    reverting?: boolean;
    /**
     * Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly.
     */
    usesAncestorConfig?: boolean;
}
