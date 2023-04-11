import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transaction represents the entire purchase transaction.
 */
export declare class GoogleCloudRecommendationengineV1beta1PurchaseTransaction extends SpeakeasyBase {
    /**
     * Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction.
     */
    costs?: Record<string, number>;
    /**
     * Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`.
     */
    currencyCode?: string;
    /**
     * Optional. The transaction ID with a length limit of 128 bytes.
     */
    id?: string;
    /**
     * Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`.
     */
    revenue?: number;
    /**
     * Optional. All the taxes associated with the transaction.
     */
    taxes?: Record<string, number>;
}
