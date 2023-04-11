import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTaxTaxRule } from "./accounttaxtaxrule";
/**
 * The tax settings of a merchant account. All methods require the admin role.
 */
export declare class AccountTax extends SpeakeasyBase {
    /**
     * Required. The ID of the account to which these account tax settings belong.
     */
    accountId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountTax`".
     */
    kind?: string;
    /**
     * Tax rules. Updating the tax rules will enable "US" taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
     */
    rules?: AccountTaxTaxRule[];
}
