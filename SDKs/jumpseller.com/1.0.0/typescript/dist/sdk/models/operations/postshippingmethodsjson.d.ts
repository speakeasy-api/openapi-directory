import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostShippingMethodsJsonRequest extends SpeakeasyBase {
    /**
     * Shipping Method parameters.
     */
    shippingMethodEdit: shared.ShippingMethodEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostShippingMethodsJsonResponse extends SpeakeasyBase {
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
