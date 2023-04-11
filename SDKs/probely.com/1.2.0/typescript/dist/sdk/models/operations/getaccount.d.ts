import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Access token is missing or invalid
 */
export declare class GetAccount401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    /**
     * Account data
     */
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getAccount401ApplicationJSONObject?: GetAccount401ApplicationJSON;
}
