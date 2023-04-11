import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutShippingMethodsIdJsonRequest extends SpeakeasyBase {
    /**
     * Shipping Method parameters.
     */
    shippingMethodEdit: shared.ShippingMethodEdit;
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
export declare class PutShippingMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Shipping Method Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    shippingMethod?: shared.ShippingMethod;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
