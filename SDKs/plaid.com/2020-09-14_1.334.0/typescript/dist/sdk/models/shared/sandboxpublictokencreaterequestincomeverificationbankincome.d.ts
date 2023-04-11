import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for Bank Income. This field is required if `income_verification` is included in the `initial_products` array and `bank` is specified in `income_source_types`.
 */
export declare class SandboxPublicTokenCreateRequestIncomeVerificationBankIncome extends SpeakeasyBase {
    /**
     * The number of days of data to request for the Bank Income product
     */
    daysRequested?: number;
}
