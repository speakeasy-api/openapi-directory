import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteShippingMethodsIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Shipping Method
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class DeleteShippingMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Shipping Method Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteShippingMethodsIdJSON200ApplicationJSONString?: string;
}
