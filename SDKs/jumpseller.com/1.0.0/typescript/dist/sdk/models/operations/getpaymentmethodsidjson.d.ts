import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentMethodsIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Payment Method
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetPaymentMethodsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * PaymentMethod Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    paymentMethod?: shared.PaymentMethod;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
