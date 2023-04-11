import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveOrderSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveOrderRequest extends SpeakeasyBase {
    /**
     * The ID of the order's associated location.
     */
    locationId: string;
    /**
     * The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
     */
    orderId: string;
}
export declare class RetrieveOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Order?: shared.V1Order;
}
