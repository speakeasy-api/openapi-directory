import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filter based on [order fulfillment](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillment) information.
 */
export declare class SearchOrdersFulfillmentFilter extends SpeakeasyBase {
    /**
     * A list of [fulfillment states](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillmentState) to filter
     *
     * @remarks
     * for. The list returns orders if any of its fulfillments match any of the
     * fulfillment states listed in this field.
     */
    fulfillmentStates?: string[];
    /**
     * A list of [fulfillment types](https://developer.squareup.com/reference/square_2021-08-18/enums/OrderFulfillmentType) to filter
     *
     * @remarks
     * for. The list returns orders if any of its fulfillments match any of the fulfillment types
     * listed in this field.
     */
    fulfillmentTypes?: string[];
}
