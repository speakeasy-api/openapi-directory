import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOrdersIdJsonRequest extends SpeakeasyBase {
    /**
     * Order parameters to change
     */
    orderEdit: shared.OrderEdit;
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
export declare class PutOrdersIdJsonResponse extends SpeakeasyBase {
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
