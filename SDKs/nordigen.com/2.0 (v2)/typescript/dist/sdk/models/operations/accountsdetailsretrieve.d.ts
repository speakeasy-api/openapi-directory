import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountsDetailsRetrieveRequest extends SpeakeasyBase {
    id: string;
}
export declare class AccountsDetailsRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Date range error
     */
    accountsDetailsRetrieve400ApplicationJSONObject?: Record<string, any>;
    /**
     * Failed Authentication
     */
    accountsDetailsRetrieve401ApplicationJSONObject?: Record<string, any>;
    /**
     * Account Access Forbidden
     */
    accountsDetailsRetrieve403ApplicationJSONObject?: Record<string, any>;
    /**
     * Account not found error
     */
    accountsDetailsRetrieve404ApplicationJSONObject?: Record<string, any>;
    /**
     * Account state error
     */
    accountsDetailsRetrieve409ApplicationJSONObject?: Record<string, any>;
    /**
     * Rate Limit Error
     */
    accountsDetailsRetrieve429ApplicationJSONObject?: Record<string, any>;
    /**
     * Unknown Request Error
     */
    accountsDetailsRetrieve500ApplicationJSONObject?: Record<string, any>;
    /**
     * Connection Error
     */
    accountsDetailsRetrieve503ApplicationJSONObject?: Record<string, any>;
}
