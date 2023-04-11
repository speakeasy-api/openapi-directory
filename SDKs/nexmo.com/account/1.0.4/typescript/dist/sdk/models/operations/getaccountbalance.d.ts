import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetAccountBalanceServerList: readonly ["https://rest.nexmo.com"];
export declare class GetAccountBalanceRequest extends SpeakeasyBase {
    /**
     * Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
}
export declare class GetAccountBalanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Not Authorised. You must supply your `api_key` and `api_secret` as query parameters to this request
     */
    errorAuthenticationFailedAccountBalance?: shared.ErrorAuthenticationFailedAccountBalance;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The current balance of your account
     */
    accountBalance?: shared.AccountBalance;
}
