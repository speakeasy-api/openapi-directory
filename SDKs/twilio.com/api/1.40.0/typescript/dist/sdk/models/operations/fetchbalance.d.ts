import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBalanceServerList: readonly ["https://api.twilio.com"];
export declare class FetchBalanceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBalanceRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid: string;
}
export declare class FetchBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountBalance?: shared.ApiV2010AccountBalance;
}
