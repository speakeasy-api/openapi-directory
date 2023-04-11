import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePeriodicPaymentRequest extends SpeakeasyBase {
    id: string;
}
export declare class DeletePeriodicPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Payment deleted
     */
    deletePeriodicPayment200ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid ID
     */
    deletePeriodicPayment400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    deletePeriodicPayment401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    deletePeriodicPayment403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    deletePeriodicPayment404ApplicationJSONObject?: Record<string, any>;
    /**
     * Payment delete error
     */
    deletePeriodicPayment409ApplicationJSONObject?: Record<string, any>;
}
