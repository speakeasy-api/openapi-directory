import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOrdersIdHistoryJsonRequest extends SpeakeasyBase {
    /**
     * Order History parameters.
     */
    orderHistoryEdit: shared.OrderHistoryEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the OrderHistory
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostOrdersIdHistoryJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderHistory?: shared.OrderHistory;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
