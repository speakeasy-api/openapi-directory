import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch accounttax response.
 */
export declare class AccounttaxCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The tax settings of a merchant account. All methods require the admin role.
     */
    accountTax?: AccountTax;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`"
     */
    kind?: string;
}
