import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the fields that are included in requests to the
 *
 * @remarks
 * `BatchRetrieveOrders` endpoint.
 */
export declare class BatchRetrieveOrdersRequest extends SpeakeasyBase {
    /**
     * The ID of the location for these orders. This field is optional: omit it to retrieve
     *
     * @remarks
     * orders within the scope of the current authorization's merchant ID.
     */
    locationId?: string;
    /**
     * The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request.
     */
    orderIds: string[];
}
