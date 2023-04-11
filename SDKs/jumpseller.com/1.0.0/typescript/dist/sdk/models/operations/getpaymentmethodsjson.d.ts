import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentMethodsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetPaymentMethodsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Payment Methods
     */
    paymentMethods?: shared.PaymentMethod[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
