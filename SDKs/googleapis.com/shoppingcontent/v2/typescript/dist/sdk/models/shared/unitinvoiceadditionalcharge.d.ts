import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Promotion } from "./promotion";
export declare class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
    additionalChargeAmount?: Amount;
    /**
     * Deprecated.
     */
    additionalChargePromotions?: Promotion[];
    /**
     * [required] Type of the additional charge. Acceptable values are: - "`shipping`"
     */
    type?: string;
}
