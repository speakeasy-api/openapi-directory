import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
/**
 * The projection of document's fields to return.
 */
export declare class Projection extends SpeakeasyBase {
    /**
     * The fields to return. If empty, all fields are returned. To only return the name of the document, use `['__name__']`.
     */
    fields?: FieldReference[];
}
