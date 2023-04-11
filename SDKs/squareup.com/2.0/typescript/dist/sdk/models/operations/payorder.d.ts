import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PayOrderSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class PayOrderRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    payOrderRequest: shared.PayOrderRequest;
    /**
     * The ID of the order being paid.
     */
    orderId: string;
}
export declare class PayOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payOrderResponse?: shared.PayOrderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
