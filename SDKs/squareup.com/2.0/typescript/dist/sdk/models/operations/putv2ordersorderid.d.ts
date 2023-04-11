import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutV2OrdersOrderIdSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class PutV2OrdersOrderIdRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateOrderRequest: shared.UpdateOrderRequest;
    /**
     * The ID of the order to update.
     */
    orderId: string;
}
export declare class PutV2OrdersOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateOrderResponse?: shared.UpdateOrderResponse;
}
