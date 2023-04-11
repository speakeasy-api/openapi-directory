import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePaymentMultipartResponse extends SpeakeasyBase {
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
    createPaymentMultipart400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    createPaymentMultipart401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    createPaymentMultipart403ApplicationJSONObject?: Record<string, any>;
}
