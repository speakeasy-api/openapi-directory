import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Line items being purchased in this transaction.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TransactionDataItem extends SpeakeasyBase {
    /**
     * When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions.
     */
    merchantAccountId?: string;
    /**
     * The full name of the item.
     */
    name?: string;
    /**
     * The quantity of this item that is being purchased.
     */
    quantity?: string;
    /**
     * The value per item that the user is paying, in the transaction currency, after discounts.
     */
    value?: number;
}
