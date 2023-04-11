import { SpeakeasyBase } from "../../../internal/utils";
import { FieldTransform } from "./fieldtransform";
/**
 * A transformation of a document.
 */
export declare class DocumentTransform extends SpeakeasyBase {
    /**
     * The name of the document to transform.
     */
    document?: string;
    /**
     * The list of transformations to apply to the fields of the document, in order. This must not be empty.
     */
    fieldTransforms?: FieldTransform[];
}
