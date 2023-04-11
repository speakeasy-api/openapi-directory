import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RetrieveAccountTransactionsV2Request extends SpeakeasyBase {
    /**
     * ISO 3166 two-character country code
     */
    country?: string;
    dateFrom?: Date;
    dateTo?: Date;
    id: string;
}
export declare class RetrieveAccountTransactionsV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    retrieveAccountTransactionsV2400ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2401ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2403ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2404ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2409ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2429ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2500ApplicationJSONObject?: Record<string, any>;
    retrieveAccountTransactionsV2503ApplicationJSONObject?: Record<string, any>;
}
