import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePaymentMethodSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdatePaymentMethodRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the Payment Method is disabled.
     */
    active?: boolean;
    /**
     * The e-mail address of the PayPal account for which you are making the API calls.
     */
    paypalSubject?: string;
}
export declare class UpdatePaymentMethodRequest extends SpeakeasyBase {
    requestBody?: UpdatePaymentMethodRequestBody;
    /**
     * Payment method number
     */
    paymentMethodNumber: string;
}
export declare class UpdatePaymentMethodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
