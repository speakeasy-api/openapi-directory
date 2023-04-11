import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePaymentJsonResponse extends SpeakeasyBase {
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
    createPaymentJSON400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    createPaymentJSON401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    createPaymentJSON403ApplicationJSONObject?: Record<string, any>;
}
