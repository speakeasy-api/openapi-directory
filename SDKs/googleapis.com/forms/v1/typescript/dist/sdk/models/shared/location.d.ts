import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A specific location in a form.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * The index of an item in the form. This must be in the range [0..*N*), where *N* is the number of items in the form.
     */
    index?: number;
}
