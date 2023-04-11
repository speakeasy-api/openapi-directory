import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPaymentStatusRequest extends SpeakeasyBase {
    paymentId: string;
    xApiKey?: string;
}
/**
 * 200
 */
export declare class GetPaymentStatus200ApplicationJSON extends SpeakeasyBase {
    actuallyPaid?: number;
    createdAt?: string;
    orderDescription?: string;
    orderId?: string;
    outcomeAmount?: number;
    outcomeCurrency?: string;
    payAddress?: string;
    payAmount?: number;
    payCurrency?: string;
    paymentId?: number;
    paymentStatus?: string;
    priceAmount?: number;
    priceCurrency?: string;
    purchaseId?: string;
    updatedAt?: string;
}
export declare class GetPaymentStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getPaymentStatus200ApplicationJSONObject?: GetPaymentStatus200ApplicationJSON;
}
