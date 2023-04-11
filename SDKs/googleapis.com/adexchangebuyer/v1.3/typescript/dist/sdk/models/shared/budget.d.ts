import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration data for Ad Exchange RTB - Budget API.
 */
export declare class Budget extends SpeakeasyBase {
    /**
     * The id of the account. This is required for get and update requests.
     */
    accountId?: string;
    /**
     * The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.
     */
    billingId?: string;
    /**
     * The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.
     */
    budgetAmount?: string;
    /**
     * The currency code for the buyer. This cannot be altered here.
     */
    currencyCode?: string;
    /**
     * The unique id that describes this item.
     */
    id?: string;
    /**
     * The kind of the resource, i.e. "adexchangebuyer#budget".
     */
    kind?: string;
}
