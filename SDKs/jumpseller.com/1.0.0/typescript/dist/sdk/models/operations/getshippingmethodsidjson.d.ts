import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShippingMethodsIdJsonRequest extends SpeakeasyBase {
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
export declare class GetShippingMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ShippingMethod Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    shippingMethod?: shared.ShippingMethod;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
