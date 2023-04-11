import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredDataObject } from "./structureddataobject";
/**
 * Available structured data fields for the item.
 */
export declare class ItemStructuredData extends SpeakeasyBase {
    /**
     * Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string;
    /**
     * A structured data object consisting of named properties.
     */
    object?: StructuredDataObject;
}
