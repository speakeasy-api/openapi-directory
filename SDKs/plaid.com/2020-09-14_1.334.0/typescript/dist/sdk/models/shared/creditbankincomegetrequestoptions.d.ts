import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object for `/credit/bank_income/get` request options.
 */
export declare class CreditBankIncomeGetRequestOptions extends SpeakeasyBase {
    /**
     * How many Bank Income Reports should be fetched. Multiple reports may be available if the report has been re-created or refreshed. If more than one report is available, the most recent reports will be returned first.
     */
    count?: number;
}
