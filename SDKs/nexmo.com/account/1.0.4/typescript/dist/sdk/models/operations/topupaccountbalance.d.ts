import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const TopUpAccountBalanceServerList: readonly ["https://rest.nexmo.com"];
export declare class TopUpAccountBalanceRequest extends SpeakeasyBase {
    /**
     * Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
    topupRequest: shared.TopupRequest;
}
export declare class TopUpAccountBalanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    success?: shared.Success;
    /**
     * Not Authorised
     */
    topUpAccountBalance401ApplicationJSONOneOf?: any;
}
