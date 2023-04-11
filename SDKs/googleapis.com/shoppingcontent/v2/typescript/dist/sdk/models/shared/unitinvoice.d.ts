import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { Promotion } from "./promotion";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";
export declare class UnitInvoice extends SpeakeasyBase {
    /**
     * Additional charges for a unit, e.g. shipping costs.
     */
    additionalCharges?: UnitInvoiceAdditionalCharge[];
    /**
     * Deprecated.
     */
    promotions?: Promotion[];
    unitPricePretax?: Price;
    /**
     * Tax amounts to apply to the unit price.
     */
    unitPriceTaxes?: UnitInvoiceTaxLine[];
}
