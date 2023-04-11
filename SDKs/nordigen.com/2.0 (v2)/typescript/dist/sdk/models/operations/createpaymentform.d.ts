import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePaymentFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Create payment
     */
    paymentWrite?: shared.PaymentWrite;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unknown Fields
     */
    createPaymentForm400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    createPaymentForm401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    createPaymentForm403ApplicationJSONObject?: Record<string, any>;
}
