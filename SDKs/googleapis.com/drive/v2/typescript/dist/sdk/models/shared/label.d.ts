import { SpeakeasyBase } from "../../../internal/utils";
import { LabelField } from "./labelfield";
/**
 * Representation of a label and its fields.
 */
export declare class Label extends SpeakeasyBase {
    /**
     * A map of the label's fields keyed by the field ID.
     */
    fields?: Record<string, LabelField>;
    /**
     * The ID of the label.
     */
    id?: string;
    /**
     * This is always drive#label
     */
    kind?: string;
    /**
     * The revision ID of the label.
     */
    revisionId?: string;
}
