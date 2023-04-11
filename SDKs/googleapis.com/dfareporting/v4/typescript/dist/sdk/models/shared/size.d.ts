import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the dimensions of ads, placements, creatives, or creative assets.
 */
export declare class Size extends SpeakeasyBase {
    /**
     * Height of this size. Acceptable values are 0 to 32767, inclusive.
     */
    height?: number;
    /**
     * IAB standard size. This is a read-only, auto-generated field.
     */
    iab?: boolean;
    /**
     * ID of this size. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
     */
    kind?: string;
    /**
     * Width of this size. Acceptable values are 0 to 32767, inclusive.
     */
    width?: number;
}
