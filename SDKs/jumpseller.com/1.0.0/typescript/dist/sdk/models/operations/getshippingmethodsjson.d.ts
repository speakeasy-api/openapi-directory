import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShippingMethodsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetShippingMethodsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Shipping Methods
     */
    shippingMethods?: shared.ShippingMethod[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
