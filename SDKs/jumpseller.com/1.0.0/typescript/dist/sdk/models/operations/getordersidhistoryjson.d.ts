import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrdersIdHistoryJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Order
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetOrdersIdHistoryJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array with Order History
     */
    orderHistories?: shared.OrderHistory[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
