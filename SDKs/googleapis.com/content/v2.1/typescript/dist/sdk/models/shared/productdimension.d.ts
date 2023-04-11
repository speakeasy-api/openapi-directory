import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductDimension extends SpeakeasyBase {
    /**
     * Required. The length units. Acceptable values are: - "`in`" - "`cm`"
     */
    unit?: string;
    /**
     * Required. The length value represented as a number. The value can have a maximum precision of four decimal places.
     */
    value?: number;
}
