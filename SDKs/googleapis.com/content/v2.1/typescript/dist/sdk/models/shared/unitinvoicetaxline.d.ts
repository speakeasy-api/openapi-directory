import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class UnitInvoiceTaxLine extends SpeakeasyBase {
    taxAmount?: Price;
    /**
     * Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`.
     */
    taxName?: string;
    /**
     * [required] Type of the tax. Acceptable values are: - "`otherFee`" - "`otherFeeTax`" - "`sales`"
     */
    taxType?: string;
}
