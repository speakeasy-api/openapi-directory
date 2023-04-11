import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountsTransactionsRetrieveRequest extends SpeakeasyBase {
    dateFrom?: Date;
    dateTo?: Date;
    id: string;
}
export declare class AccountsTransactionsRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Date range error
     */
    accountsTransactionsRetrieve400ApplicationJSONObject?: Record<string, any>;
    /**
     * Failed Authentication
     */
    accountsTransactionsRetrieve401ApplicationJSONObject?: Record<string, any>;
    /**
     * Account Access Forbidden
     */
    accountsTransactionsRetrieve403ApplicationJSONObject?: Record<string, any>;
    /**
     * Account not found error
     */
    accountsTransactionsRetrieve404ApplicationJSONObject?: Record<string, any>;
    /**
     * Account state error
     */
    accountsTransactionsRetrieve409ApplicationJSONObject?: Record<string, any>;
    /**
     * Rate Limit Error
     */
    accountsTransactionsRetrieve429ApplicationJSONObject?: Record<string, any>;
    /**
     * Unknown Request Error
     */
    accountsTransactionsRetrieve500ApplicationJSONObject?: Record<string, any>;
    /**
     * Connection Error
     */
    accountsTransactionsRetrieve503ApplicationJSONObject?: Record<string, any>;
}
