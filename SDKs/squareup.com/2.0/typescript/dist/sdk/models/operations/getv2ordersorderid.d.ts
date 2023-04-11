import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2OrdersOrderIdSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetV2OrdersOrderIdRequest extends SpeakeasyBase {
    /**
     * The ID of the order to retrieve.
     */
    orderId: string;
}
export declare class GetV2OrdersOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveOrderResponse?: shared.RetrieveOrderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
