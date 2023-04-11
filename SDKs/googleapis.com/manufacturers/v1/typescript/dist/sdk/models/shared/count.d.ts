import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
 */
export declare class Count extends SpeakeasyBase {
    /**
     * The unit in which these products are counted.
     */
    unit?: string;
    /**
     * The numeric value of the number of products in a package.
     */
    value?: string;
}
