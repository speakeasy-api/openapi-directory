import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetListOfPaymentsRequest extends SpeakeasyBase {
    dateFrom?: string;
    dateTo?: string;
    limit?: string;
    orderBy?: string;
    page?: string;
    sortBy?: string;
    xApiKey?: string;
}
export declare class GetListOfPayments200ApplicationJSONData extends SpeakeasyBase {
    actuallyPaid?: number;
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
}
/**
 * 200
 */
export declare class GetListOfPayments200ApplicationJSON extends SpeakeasyBase {
    data?: GetListOfPayments200ApplicationJSONData[];
    limit?: number;
    page?: number;
    pagesCount?: number;
    total?: number;
}
export declare class GetListOfPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getListOfPayments200ApplicationJSONObject?: GetListOfPayments200ApplicationJSON;
}
