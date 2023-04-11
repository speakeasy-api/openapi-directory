import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrievePaymentRequest extends SpeakeasyBase {
    id: string;
}
export declare class RetrievePaymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieve payment information
     */
    paymentRead?: shared.PaymentRead;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid ID
     */
    retrievePayment400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    retrievePayment401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrievePayment403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    retrievePayment404ApplicationJSONObject?: Record<string, any>;
}
