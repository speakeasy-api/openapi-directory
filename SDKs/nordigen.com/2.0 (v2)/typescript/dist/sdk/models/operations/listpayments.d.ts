import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPaymentsRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class ListPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List payments
     */
    paginatedPaymentReadList?: shared.PaginatedPaymentReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unknown Fields
     */
    listPayments400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    listPayments401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    listPayments403ApplicationJSONObject?: Record<string, any>;
}
