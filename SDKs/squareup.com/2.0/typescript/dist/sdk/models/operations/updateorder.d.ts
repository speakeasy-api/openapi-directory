import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOrderSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateOrderRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    v1UpdateOrderRequest: shared.V1UpdateOrderRequest;
    /**
     * The ID of the order's associated location.
     */
    locationId: string;
    /**
     * The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
     */
    orderId: string;
}
export declare class UpdateOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Order?: shared.V1Order;
}
