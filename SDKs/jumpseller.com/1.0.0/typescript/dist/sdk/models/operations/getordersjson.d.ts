import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrdersJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * List restriction
     */
    limit?: number;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * List page
     */
    page?: number;
}
export declare class GetOrdersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Orders
     */
    orders?: shared.Order[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
