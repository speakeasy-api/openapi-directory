import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersJsonRequest extends SpeakeasyBase {
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
export declare class GetCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Orders
     */
    customers?: shared.Customer[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
