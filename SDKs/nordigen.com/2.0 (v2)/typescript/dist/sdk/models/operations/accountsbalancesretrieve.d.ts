import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountsBalancesRetrieveRequest extends SpeakeasyBase {
    id: string;
}
export declare class AccountsBalancesRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Date range error
     */
    accountsBalancesRetrieve400ApplicationJSONObject?: Record<string, any>;
    /**
     * Failed Authentication
     */
    accountsBalancesRetrieve401ApplicationJSONObject?: Record<string, any>;
    /**
     * Account Access Forbidden
     */
    accountsBalancesRetrieve403ApplicationJSONObject?: Record<string, any>;
    /**
     * Account not found error
     */
    accountsBalancesRetrieve404ApplicationJSONObject?: Record<string, any>;
    /**
     * Account state error
     */
    accountsBalancesRetrieve409ApplicationJSONObject?: Record<string, any>;
    /**
     * Rate Limit Error
     */
    accountsBalancesRetrieve429ApplicationJSONObject?: Record<string, any>;
    /**
     * Unknown Request Error
     */
    accountsBalancesRetrieve500ApplicationJSONObject?: Record<string, any>;
    /**
     * Connection Error
     */
    accountsBalancesRetrieve503ApplicationJSONObject?: Record<string, any>;
}
