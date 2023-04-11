import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrdersIdJsonRequest extends SpeakeasyBase {
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
export declare class GetOrdersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Order Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    order?: shared.Order;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
