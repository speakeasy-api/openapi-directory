import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class InvoiceSummaryAdditionalChargeSummary extends SpeakeasyBase {
    totalAmount?: Amount;
    /**
     * [required] Type of the additional charge. Acceptable values are: - "`shipping`"
     */
    type?: string;
}
