import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFulfillmentsJsonRequest extends SpeakeasyBase {
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
export declare class GetFulfillmentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Fulfillments
     */
    fulfillments?: shared.Fulfillment[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
