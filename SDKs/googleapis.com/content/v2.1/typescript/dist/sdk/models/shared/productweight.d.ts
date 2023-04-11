import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductWeight extends SpeakeasyBase {
    /**
     * Required. The weight unit. Acceptable values are: - "`g`" - "`kg`" - "`oz`" - "`lb`"
     */
    unit?: string;
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     */
    value?: number;
}
