import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a field in a document, ex: `stats.operations`.
 */
export declare class FieldReference extends SpeakeasyBase {
    /**
     * The relative path of the document being referenced. Requires: * Conform to document field name limitations.
     */
    fieldPath?: string;
}
