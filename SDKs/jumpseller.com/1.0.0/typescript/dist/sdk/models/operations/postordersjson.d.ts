import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOrdersJsonRequest extends SpeakeasyBase {
    /**
     * Order parameters.
     */
    orderCreate: shared.OrderCreate;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostOrdersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    order?: shared.Order;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
