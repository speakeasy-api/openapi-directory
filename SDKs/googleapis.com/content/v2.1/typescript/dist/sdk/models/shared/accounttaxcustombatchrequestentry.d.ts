import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
/**
 * A batch entry encoding a single non-batch accounttax request.
 */
export declare class AccounttaxCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string;
    /**
     * The tax settings of a merchant account. All methods require the admin role.
     */
    accountTax?: AccountTax;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`" - "`update`"
     */
    method?: string;
}
