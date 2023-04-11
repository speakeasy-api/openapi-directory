import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountsRequest extends SpeakeasyBase {
    /**
     * Account Number
     */
    account: string;
}
/**
 * An array of accounts
 */
export declare class GetAccounts200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique account id
     */
    accounts?: string[];
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of accounts
     */
    getAccounts200ApplicationJSONObject?: GetAccounts200ApplicationJSON;
}
