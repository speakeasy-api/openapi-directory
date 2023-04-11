import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Order } from "./order";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `BatchRetrieveOrders` endpoint.
 */
export declare class BatchRetrieveOrdersResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The requested orders. This will omit any requested orders that do not exist.
     */
    orders?: Order[];
}
