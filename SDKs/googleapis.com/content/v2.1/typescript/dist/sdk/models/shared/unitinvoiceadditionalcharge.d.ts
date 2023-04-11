import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
    additionalChargeAmount?: Amount;
    /**
     * [required] Type of the additional charge. Acceptable values are: - "`shipping`"
     */
    type?: string;
}
