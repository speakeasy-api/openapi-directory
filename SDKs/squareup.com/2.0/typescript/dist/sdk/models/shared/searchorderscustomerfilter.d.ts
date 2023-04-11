import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter based on the order `customer_id` and any tender `customer_id`
 *
 * @remarks
 * associated with the order. It does not filter based on the
 * [FulfillmentRecipient](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillmentRecipient) `customer_id`.
 */
export declare class SearchOrdersCustomerFilter extends SpeakeasyBase {
    /**
     * A list of customer IDs to filter by.
     *
     * @remarks
     *
     * Max: 10 customer IDs.
     */
    customerIds?: string[];
}
