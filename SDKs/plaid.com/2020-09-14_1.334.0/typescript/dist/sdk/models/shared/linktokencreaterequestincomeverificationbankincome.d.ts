import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for use with Bank Income. This field is required if `income_verification` is included in the `products` array and `bank` is specified in `income_source_types`.
 */
export declare class LinkTokenCreateRequestIncomeVerificationBankIncome extends SpeakeasyBase {
    /**
     * The number of days of data to request for the Bank Income product
     */
    daysRequested: number;
    /**
     * Whether to enable multiple Items to be added in the Link session
     */
    enableMultipleItems?: boolean;
}
