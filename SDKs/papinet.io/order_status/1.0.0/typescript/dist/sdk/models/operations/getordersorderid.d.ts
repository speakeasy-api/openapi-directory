import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrdersOrderIdRequest extends SpeakeasyBase {
    /**
     * UUID of the `order` to get
     */
    orderId: string;
}
export declare class GetOrdersOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getOrder?: shared.GetOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
