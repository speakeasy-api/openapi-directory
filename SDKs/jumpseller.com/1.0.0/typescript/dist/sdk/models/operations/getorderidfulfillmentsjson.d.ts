import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderIdFulfillmentsJsonRequest extends SpeakeasyBase {
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
export declare class GetOrderIdFulfillmentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fulfillments?: shared.Fulfillment[];
    /**
     * Fulfillment Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
