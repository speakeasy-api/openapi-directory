import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { UnitInvoiceAdditionalCharge } from "./unitinvoiceadditionalcharge";
import { UnitInvoiceTaxLine } from "./unitinvoicetaxline";
export declare class UnitInvoice extends SpeakeasyBase {
    /**
     * Additional charges for a unit, for example, shipping costs.
     */
    additionalCharges?: UnitInvoiceAdditionalCharge[];
    unitPrice?: Price;
    /**
     * Tax amounts to apply to the unit price.
     */
    unitPriceTaxes?: UnitInvoiceTaxLine[];
}
