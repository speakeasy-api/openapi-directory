import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOrderRequest extends SpeakeasyBase {
    authorizationToken: string;
    createOrderRequestInput?: shared.CreateOrderRequestInput;
}
export declare class CreateOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Order was successfully created.
     */
    order?: shared.Order;
}
