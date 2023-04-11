import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRecurringPaymentRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    subId: string;
}
/**
 * 404
 */
export declare class DeleteRecurringPayment404ApplicationJSON extends SpeakeasyBase {
    code?: string;
    message?: string;
    status?: boolean;
    statusCode?: number;
}
/**
 * 200
 */
export declare class DeleteRecurringPayment200ApplicationJSON extends SpeakeasyBase {
    result?: string;
}
export declare class DeleteRecurringPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    deleteRecurringPayment200ApplicationJSONObject?: DeleteRecurringPayment200ApplicationJSON;
    /**
     * 404
     */
    deleteRecurringPayment404ApplicationJSONObject?: DeleteRecurringPayment404ApplicationJSON;
}
