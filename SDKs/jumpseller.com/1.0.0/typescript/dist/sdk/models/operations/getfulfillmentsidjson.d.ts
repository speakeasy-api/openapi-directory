import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFulfillmentsIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Fulfillment
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetFulfillmentsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fulfillment?: shared.Fulfillment;
    /**
     * Fulfillment Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
